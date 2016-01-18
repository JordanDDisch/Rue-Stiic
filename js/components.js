jQuery(function($){
    var sf, body;
    var breakpoint = 1180;

    $(document).ready(function($) {

        body = $('body');
        sf = $('.hamburger-menu__list-outer');

        if(body.width() >= breakpoint)   {
            // enable superfish when the page first loads if we're on desktop
            sf.superfish({
                delay: 500, // 0.1 second delay on mouseout
                animation: {
                    opacity: 'show',
                    height: 'show'
                }, // fade-in and slide-down animation
                dropShadows: true // disable drop shadows
            });
        }
        $(window).resize(function() {
            if(body.width() >= breakpoint && !sf.hasClass('sf-js-enabled')) {
                // you only want SuperFish to be re-enabled once (sf.hasClass)
                sf.superfish('init');
                sf.removeClass('hamburger-nav--active');

            }

            if(body.width() < breakpoint) {
                // smaller screen, disable SuperFish
                sf.superfish('destroy');
            }
        });

        $('.hamburger-menu__icon').click(function() {
            $('.layout-sidebar__side').toggle('hamburger-menu--visible');
        });
    })
});
