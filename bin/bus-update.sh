#!/usr/bin/env bash

# Please Use Google Shell Style: https://google.github.io/styleguide/shell.xml

# ---- Start unofficial bash strict mode boilerplate
# http://redsymbol.net/articles/unofficial-bash-strict-mode/
set -o errexit  # always exit on error
set -o errtrace # trap errors in functions as well
set -o pipefail # don't ignore exit codes when piping output
set -u          # error on reference to unknown variable
[ "${DEBUG:-0}" = "1" ] && set -x

IFS=$'\n\t'
# ---- End unofficial bash strict mode boilerplate

cd "$(dirname "${BASH_SOURCE[0]}")/.."

declare -a routes=(
  FF1
  FF2
)

tmp_dir=$(mktemp -d)
trap 'rm -rf "${tmp_dir}"' EXIT

# Fetch schedule data for each route
for route in "${routes[@]}"; do
  echo "Fetching ${route}…" >&2
  curl -s "https://app.rtd-denver.com/route/${route}/schedule" \
    | pup 'script#__NEXT_DATA__ text{}' \
    > "${tmp_dir}/${route}.json"
done

# Transform all route data into routes.json format
# Output: combined timetables keyed by direction+day, trips sorted by departure time
jq -s '
# Service type mapping: 1=Saturday, 2=Sunday, 3=Weekday
def day_name:
  if . == 1 then "saturday"
  elif . == 2 then "sunday"
  elif . == 3 then "weekday"
  else "unknown"
  end;

# Convert RTD compact time to minutes since midnight for sorting
# "517A" -> 317, "1225P" -> 745, "1200P" -> 720, "1200A" -> 0, "1230A" -> 30
def to_minutes:
  (if test("[aA]$") then "AM" else "PM" end) as $ampm |
  gsub("[aApP]$"; "") |
  (if (. | length) == 3 then "0" + . else . end) |
  (.[0:2] | tonumber) as $h |
  (.[2:4] | tonumber) as $m |
  # Convert to 24h
  (if $ampm == "AM" and $h == 12 then 0
   elif $ampm == "PM" and $h == 12 then 12
   elif $ampm == "PM" then $h + 12
   else $h end) as $h24 |
  ($h24 * 60 + $m);

# Convert RTD time format "517A" -> "5:17 AM", "1225P" -> "12:25 PM"
def format_time:
  if . == null or . == "-" then null
  else
    (if test("[aA]$") then "AM" else "PM" end) as $ampm |
    gsub("[aApP]$"; "") |
    (if (. | length) == 3 then "0" + . else . end) |
    (.[0:2] | tonumber | tostring) as $hour |
    .[2:4] as $min |
    "\($hour):\($min) \($ampm)"
  end;

# Find index of a stop matching a pattern
def find_stop_index(pattern):
  to_entries | map(select(.value | test(pattern))) | .[0].key;

# Flatten all route schedules into individual trip objects
[.[] | .props.pageProps as $pp |
  $pp.serviceSchedules | to_entries[] |
  .key as $key | .value as $sched |

  # Parse the key: e.g. "30_FF__FF1_Eastbound_1_3747"
  ($key | capture("__(?<route>[^_]+)_(?<dir>[^_]+)_(?<svc>[0-9]+)_")) as $parsed |
  $parsed.route as $route |
  ($parsed.dir | ascii_downcase) as $direction |
  ($parsed.svc | tonumber) as $svc_type |
  ($svc_type | day_name) as $day |
  (if $direction == "eastbound" then "east" else "west" end) as $dir_short |

  # Find stop indices for McCaslin and Union Station
  ($sched.stops | find_stop_index("McCaslin")) as $mccaslin_idx |
  ($sched.stops | find_stop_index("^Union Station$")) as $union_idx |

  # Eastbound: depart McCaslin, arrive Union Station
  # Westbound: depart Union Station, arrive McCaslin
  (if $direction == "eastbound" then $mccaslin_idx else $union_idx end) as $depart_idx |
  (if $direction == "eastbound" then $union_idx else $mccaslin_idx end) as $arrive_idx |

  # Emit one object per trip
  $sched.trips[] |
  (.[$depart_idx]) as $raw_depart |
  (.[$arrive_idx]) as $raw_arrive |
  select($raw_depart != null and $raw_depart != "-" and $raw_arrive != null and $raw_arrive != "-") |
  {
    dir: $dir_short,
    day: $day,
    route: $route,
    depart: ($raw_depart | format_time),
    arrive: ($raw_arrive | format_time),
    sort_key: ($raw_depart | to_minutes)
  }
] |

# Group by direction+day, sort trips by departure time
group_by(.dir + .day) |
map(
  sort_by(.sort_key) |
  (.[0].dir) as $dir |
  (.[0].day) as $day |
  {
    key: ($dir + ($day[:1] | ascii_upcase) + $day[1:]),
    value: {
      direction: $dir,
      day: $day,
      trips: [.[] | {route, depart, arrive}]
    }
  }
) | sort_by(.key) | from_entries
' "${tmp_dir}"/FF1.json "${tmp_dir}"/FF2.json > content/bus/routes.json

echo "Updated content/bus/routes.json" >&2
