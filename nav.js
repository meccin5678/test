document.addEventListener("DOMContentLoaded", () => {
    const hum = document.querySelector(".hum");
    const navMenu = document.querySelector(".nav-menu");

    hum.addEventListener("click", () => {
        hum.classList.toggle("active");
        navMenu.classList.toggle("open");
    });
});