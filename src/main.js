const btn = document.getElementById("btn");
const menu = document.getElementById("nav-liks");
btn.addEventListener("click", function() {
  menu.classList.toggle("showNav");
  btn.classList.toggle("flip");
});
