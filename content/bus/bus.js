const filters = {
  direction: "east",
  day: "weekday",
};
const remove = (selector, klass) => {
  document.querySelectorAll(selector).forEach((n) => n.classList.remove(klass));
};
const add = (selector, klass) => {
  document.querySelectorAll(selector).forEach((n) => n.classList.add(klass));
};

const filterDirection = (klass) => {
  filters.direction = klass;
  display();
};
const filterDay = (klass) => {
  filters.day = klass;
  display();
};

const display = () => {
  remove(`.filter`, "active");
  add(`.filter.${filters.day}`, "active");
  add(`.filter.${filters.direction}`, "active");

  add(".route", "hide");
  document.querySelectorAll(".route").forEach((n) => {
    if (
      n.classList.contains(filters.direction) &&
      n.classList.contains(filters.day)
    ) {
      n.classList.remove("hide");
    }
  });
};
