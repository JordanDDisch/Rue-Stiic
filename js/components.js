jQuery(function ($) {
    var sf, body;
    var breakpoint = 1180;

    $(document).ready(function ($) {

        var wrapper = $('.content-wrapper');

        $('.hamburger-menu__icon').click(function () {
            if (wrapper.hasClass('hamburger-menu--in')) {
                wrapper.toggleClass('hamburger-menu--out');
            }
            wrapper.not('.hamburger-menu--in').toggleClass('hamburger-menu--in');

        });

        $('.layout-sidebar__side ul li').click(function (event) {
            if ($(this).find('ul').hasClass('hamburger-menu__list--active') == false) {
                event.preventDefault();
                $(this).find('ul').addClass('hamburger-menu__list--active');
            }
        });
    })
});