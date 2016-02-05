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