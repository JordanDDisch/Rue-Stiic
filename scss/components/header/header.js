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
