const qsa = document.querySelectorAll.bind(document);
const remove = (selector, klass) => {
  document.querySelectorAll(selector).forEach((n) => n.classList.remove(klass));
};
const add = (selector, klass) => {
  document.querySelectorAll(selector).forEach((n) => n.classList.add(klass));
};
const toggle = (category, toShow) => {
  remove(`.filter${category}`, "active");
  add(`.filter${toShow}`, "active");

  add(".route", "hide");
  remove(`.route${toShow}`, "hide");
};
