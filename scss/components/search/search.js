jQuery(function($){
    $(document).ready(function($) {
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