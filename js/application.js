!function ($) {

  $(function(){
    $('body').scrollspy({ target: '.main-nav-container', offset: 200 });
    
    $("body").on('activate.bs.scrollspy', function (e) {
        // Also set the mobile menu
        /*
        var href = $(e.target).find("a").attr("href");
        var mobile_item_selector = '.mobile-nav .navbar-nav a[href="' + href + '"]';
        //console.log($(mobile_item_selector));
        //console.log($(mobile_item_selector).parent());
        $(mobile_item_selector).parents('.active').removeClass('active');
        

        $(mobile_item_selector).parent().addClass("active");
        console.log($(mobile_item_selector).parents('.active'));
        */
    });

    
});

}(window.jQuery);