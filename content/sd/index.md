+++
title = "Sunday Dinner"
[extra]
image = "https://photos.peterlyons.com/2026/2026-03-18-01KM11WCXRS80NJKKD6A162DX3.2048.png"
+++

# Sunday Dinner at Pete & Stella's

## What

A gathering of friends and family.

![](https://photos.peterlyons.com/2026/2026-03-18-01KM11WCXRS80NJKKD6A162DX3.2048.png)

## When

Sundays at 2:00 PM. Sundays nearest a Solstice are extra celebrations of the seasons.

## Who

If we've sent you a link to this page, then you are invited.

## Where

1064 Adams Ave in Louisville, CO.

## Bring

Just yourselves. You are welcome to bring food or drinks to share if you would enjoy doing so, but it's very much optional.

## Formality

informal

## Key Level

low


## Is it really on this week?

| Date | Status |
| --- | --- |
| 2026-02-22 | On: FIRST! |
| 2026-03-01 | On: nobody showed up! |
| 2026-03-08 | On: Logan is in town! |
| 2026-03-15 | On: Amy! |
| 2026-03-22 | On: Spring Equinox. Spike and Sandee! |
| 2026-03-29 | On:  Amy and Ted! |
| 2026-04-05 | Off: Easter Sunday |
| 2026-04-12 | On: |
| 2026-04-19 | On: |
| 2026-04-26 | On: Hot Ones Cauliflower! |
| 2026-05-03 | On: Beltane |
| 2026-05-10 | Off: Mother's Day |
| 2026-05-17 | Off: |
| 2026-05-24 | Off: malaise |
| 2026-05-31 | Off: ennui |
| 2026-06-07 | On: Bill & Kay! |
| 2026-06-14 | TBD |
| 2026-06-21 | On: Summer Solstice |
| 2026-06-28 | TBD |
| 2026-08-02 | On: Lammas (Stella's Birthday Party) |
| 2026-09-20 | On: Fall Equinox (Pete's Birthday Party) |
| 2026-11-01 | On: Day of the Dead |
| 2026-12-20 | On: Yule (Brinner)  |

<style>
th {
  font-weight: bold;
}

td {
  padding-right: 3rem;
}

tr.past td {
  color: #999;
  opacity: 0.6;
}

tr.next td {
  font-weight: bold;
  color: #c2410c;
  background-color: #fef3c7;
}

tr.future td {
  /* default styling */
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function () {
  var today = new Date();
  today.setHours(0, 0, 0, 0);
  var rows = document.querySelectorAll('table tr');
  var foundNext = false;
  rows.forEach(function (row) {
    var cell = row.querySelector('td');
    if (!cell) return;
    var match = cell.textContent.trim().match(/^(\d{4})-(\d{2})-(\d{2})/);
    if (!match) return;
    var rowDate = new Date(
      parseInt(match[1], 10),
      parseInt(match[2], 10) - 1,
      parseInt(match[3], 10)
    );
    if (rowDate < today) {
      row.classList.add('past');
    } else if (!foundNext) {
      row.classList.add('next');
      foundNext = true;
    } else {
      row.classList.add('future');
    }
  });
});
</script>
