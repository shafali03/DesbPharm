

/* =========================================
                Navigation
============================================ */

let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');
let navIconToggle = document.querySelector("#nav-icon");

navBarToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    mainNav.classList.add('smNav')

});

navIconToggle.addEventListener("click", () => {
    navIconToggle.classList.toggle("active"); mainNav.classList.remove('smNav')

});