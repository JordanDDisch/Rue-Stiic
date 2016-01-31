jQuery(function ($) {
    var sf, body;
    var breakpoint = 1180;

    $(document).ready(function ($) {

        $('.hamburger-menu__icon').click(function() {
            $(".content-wrapper").toggleClass("content-wrapper--active");
            $(".hamburger-menu__icon-container").toggleClass("content-wrapper--active");
            $(".hamburger-menu").toggleClass("hamburger-menu--active");
        });

        $('.hamburger-menu ul li').click(function(event) {
            if($(this).find('ul').hasClass('hamburger-menu__list--active') == false) {
                event.preventDefault();
                $(this).find('ul').addClass('hamburger-menu__list--active');
            }
        });
    })
});