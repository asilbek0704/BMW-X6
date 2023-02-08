const burgerMenu = document.querySelector('.humburger-menu'),
    menuElem = document.querySelector('.menu');

const toggleMenu = () => {
    menuElem.classList.toggle('menu-active');
    burgerMenu.classList.toggle('humburger-menu-active');
}


burgerMenu.addEventListener('click', toggleMenu);

menuElem.addEventListener('click', (e) => {
    let target = e.target;

    if (target.classList.contains('menu-list__link')) {
        toggleMenu();
    }

})