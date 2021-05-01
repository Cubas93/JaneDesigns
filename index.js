const menuIcon = document.querySelector(".hamburger-menu");
const nav= document.querySelector(".nav-ul");


menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('change');
    nav.classList.toggle('show');
});
