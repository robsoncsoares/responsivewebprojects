var toggle = document.querySelector(".toggle");
var menu = document.querySelector(".menu");
var items = document.querySelectorAll(".item");

/* Toggle mobile menu */
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
    } else {
        menu.classList.add("active");
        toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
    }
}
toggle.addEventListener("click", toggleMenu, false);