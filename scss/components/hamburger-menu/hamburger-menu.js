jQuery(function($){
    var sf, body;
    var breakpoint = 1180;

    $(document).ready(function($) {

        $(window).resize(function() {
            if(body.width() < breakpoint) {
            }
        });

        $('.hamburger-menu__icon').click(function() {
            $('.layout-sidebar__wrapper').toggleClass('hamburger-menu--active');
            $('.layout-sidebar__main').toggleClass('layout-sidebar__open layout-sidebar__close');
        });

        $('.layout-sidebar__side ul li').click(function(event) {
            event.preventDefault();
            $(this).find('ul').toggleClass('hamburger-menu__list--active');
        });
    })
});
