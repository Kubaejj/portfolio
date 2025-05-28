document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".header__hamburger");
    const nav = document.querySelector(".header__nav");
    const navLinks = document.querySelectorAll(".nav__item");

    hamburger.addEventListener("click", (e) => {
        e.preventDefault();
        hamburger.classList.toggle("active");
        nav.classList.toggle("active");
    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            nav.classList.remove("active");
        });
    });
});
