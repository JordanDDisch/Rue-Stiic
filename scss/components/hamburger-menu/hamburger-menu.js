jQuery(function ($) {
    var sf, body;
    var breakpoint = 1180;

    $(document).ready(function ($) {

        var wrapper = $('.hamburger-menu__wrapper');

        $(window).resize(function() {
            // if(body.width() < breakpoint) {
            // }
        });

        $('.hamburger-menu__icon').click(function() {
            console.log('clicked')
            if(wrapper.hasClass('hamburger-menu--in')) {
                wrapper.toggleClass('hamburger-menu--out');
            }
            wrapper.not('.hamburger-menu--in').toggleClass('hamburger-menu--in');

        });

        $('.hamburger-menu__side ul li').click(function(event) {
            if($(this).find('ul').hasClass('hamburger-menu__list--active') == false) {
                event.preventDefault();
                $(this).find('ul').addClass('hamburger-menu__list--active');
            }
        });
    })
});