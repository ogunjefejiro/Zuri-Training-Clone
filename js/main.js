const menu = document.querySelector("#menu");
const exit = document.querySelector("#exit");
const nav = document.querySelector("nav");

menu.addEventListener("click", (e) => {  
    nav.classList.toggle("navbar");
})
exit.addEventListener("click", (e) => {
    nav.classList.toggle("navbar");
})

const largescreen = window.matchMedia("(min-width: 768px)");
largescreen.addEventListener("change", (e) => {
  if (e.matches) {
    nav.classList.remove("navbar");
  }
});