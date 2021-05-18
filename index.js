const clc = document.querySelector('.clc-btn');
const hum = document.querySelector('.hum-btn');
const navbar = document.querySelector('.navbar');
const main = document.querySelector('.main');
const a = document.querySelectorAll('a');
const section = document.querySelector('.sections')

hum.addEventListener("click", () => {
    navbar.classList.add('active_navbar');
    main.classList.add('active_main');
    section.classList.add('active_section')
});

clc.addEventListener("click", () => {
    navbar.classList.remove('active_navbar');
    main.classList.remove('active_main');
    section.classList.remove('active_section')
});

a.forEach(function(e) {
    e.addEventListener("click", () => {
        navbar.classList.remove('active_navbar');
        main.classList.remove('active_main');
        section.classList.remove('active_section')
    })
});