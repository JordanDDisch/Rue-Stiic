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
