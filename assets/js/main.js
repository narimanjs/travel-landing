(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 500) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
    }
} ());

// Burger

(function () {
    const burgerItem = document.querySelector('.burger');
    // const menu = document.querySelector('.header__nav-close');
    // const menuCloseItem = document.querySelector('header__nav_active')
    // burgerItem.addEventListener('click', () => {
    //     menu.classList.add('header__nav_active');
    // })
    // menuCloseItem.addEventListener('click', () => {
    //     menu.classList.remove('header__nav_active');
    // })

}());