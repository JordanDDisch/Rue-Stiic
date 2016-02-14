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
jQuery(function ($) {

    $(document).ready(function ($) {
        $(".header-nav__item").hover(function() {
            if($(this).children().length > 1) {
                $(this).find(".header-nav__list-1").toggleClass("header-nav__list--active");
            }
        });

        $(".header-nav__list-1 li").hover(function() {
            if($(this).children().length > 1) {
                $(this).find(".header-nav__list-2").toggleClass("header-nav__list--active");
            }
        })
    })

});

jQuery(function($){
    $(document).ready(function($) {
        console.log("asdf");
        $(".search__button").click(function() {
            $(".search__button").toggleClass("search--hidden");
            $(".search").toggleClass("search--hidden");
        });
        $(".search__close").click(function() {
            $(".search__button").toggleClass("search--hidden");
            $(".search").toggleClass("search--hidden");
        });
    })
});