const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    //change the theme of the website
    document.body.classList.toggle('dark');
});

// hamburger
const menu = document.querySelector('.toggleMenu');
const navMenu = document.querySelector('.nav-list');

menu.addEventListener('click', (e) => {
    menu.classList.toggle('active');
    navMenu.classList.toggle('active')
});


