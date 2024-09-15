/* global document */
const nav = document.querySelector("nav.menu");
const buttonOpenNav = document.querySelector("button.open-nav");
buttonOpenNav.addEventListener("click", () => {
  nav.classList.toggle("open");
  buttonOpenNav.classList.toggle("open");
});
document.querySelector("nav.menu").addEventListener("click", () => {
  nav.classList.remove("open");
  buttonOpenNav.classList.toggle("open");
});

export default function start() {
  let path = document.location.pathname;
  const persblog = "/persblog/";
  if (path.startsWith(persblog)) {
    path = path.substring(0, persblog.length);
  }
  const selector = `nav a[href='${path}']`;
  const navEls = document.querySelectorAll(selector);
  Array.prototype.forEach.call(navEls, (el) => {
    el.classList.add("current");
  });
}

start();
