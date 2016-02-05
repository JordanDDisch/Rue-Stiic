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
jQuery(function($) {

    function hideComponents(selected, button) {
        if($(button).text() == "Isolate") {
            document.location.hash = selected[0].id;
        }
    }

    $(document).ready(function() {
        $(".kss-section").each(function(){
            $(this).find(".kss-modifier__heading").append("<button class='hide'>Isolate</button>");
        });

        $(".hide").click(function(el) {
            var selected = $(el.currentTarget).parent().parent().parent();

            hideComponents(selected, $(this));

            $(".kss-section").each(function(){
                $(this).not(selected).toggleClass("kss-isolate--hide");
            });
            ($(this).text() == "Isolate") ? $(this).text("List") : $(this).text("Isolate");
            selected.toggleClass("kss-isolate__max-width");
            $("#kss-node").toggleClass("kss-isolate__background kss-isolate__padding");
            $(".kss-main").toggleClass("kss-isolate__width kss-isolate__padding kss-isolate__margin");
            $(".kss-modifier__wrapper").toggleClass("kss-isolate__padding");
            $(".kss-sidebar").toggleClass("kss-isolate--hide");
        })
    });
});
