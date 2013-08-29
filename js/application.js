!function ($) {

  $(function(){
    $('body').scrollspy({ target: '.navbar', offset: 100 });
    $("body").on('activate.bs.scrollspy', function (e) {
        // Also set the desktop menu
        var href = $(e.target).find("a").attr("href");
        var mobile_item_selector = '.main-nav a[href="' + href + '"]';
        $(".main-nav li.active").removeClass('active');
        $(mobile_item_selector).parent().addClass("active");
    });

});

}(window.jQuery);