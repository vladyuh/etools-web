export function mobileInit() {

    var toggle = document.querySelector('.header-burger .burger');
    var close = document.querySelector('.mobileMenu-header__toggle .burger')
    var menu = document.querySelector('.mobileMenu');
    var body = document.querySelector('body');

    toggle.addEventListener('click', function(e) {
        e.preventDefault();
        this.classList.add('opened');
        menu.classList.add('opened');
        body.classList.add('mobile');
    });

    close.addEventListener('click', function(e) {
        e.preventDefault();
        toggle.classList.remove('opened');
        menu.classList.remove('opened');
        body.classList.remove('mobile');
    });
}