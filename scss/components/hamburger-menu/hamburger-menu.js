jQuery(function ($) {

    $(document).ready(function ($) {

        $('.hamburger-menu__icon').click(function() {
            $(".content-wrapper").toggleClass("content-wrapper--active");
            $(".hamburger-menu__icon-container").toggleClass("content-wrapper--active");
            $(".hamburger-menu").toggleClass("hamburger-menu--active");
            $(".footer-wrapper").toggleClass("content-wrapper--active");
        });

        $('.hamburger-menu__list-outer li').click(function(event) {
            if($(this).find('ul').hasClass('hamburger-menu__list--active') == false) {
                if($(this).children().length > 1) {
                    event.preventDefault();
                    $(this).find('ul').addClass('hamburger-menu__list--active');
                }
            }
        });
    })
});