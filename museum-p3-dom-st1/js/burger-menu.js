const siteNav = document.querySelector(".header-menu");
const welcomeCont = document.querySelector(".welcome-content");
const main = document.querySelector("main");

const burgerButton = document.querySelector(".menu-burger");
const menuLinks = document.querySelectorAll(".header-menu a");

burgerButton.addEventListener("click", () => {
    siteNav.classList.toggle('nav-active');
    burgerButton.classList.toggle('burger-close');
    welcomeCont.classList.toggle('welcome-hidden');
});

menuLinks.forEach(item => {
    item.addEventListener("click", () => {
        siteNav.classList.remove('nav-active');
        burgerButton.classList.remove('burger-close');
        welcomeCont.classList.remove('welcome-hidden');

    });
});

main.addEventListener("click", () => {
    siteNav.classList.remove('nav-active');
    burgerButton.classList.remove('burger-close');
    welcomeCont.classList.remove('welcome-hidden');
});