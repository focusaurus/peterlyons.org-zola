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

No! Sunday dinners ran for most of 2026 and are currently on hiatus.


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
