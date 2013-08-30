

!function ($) {

  $(function(){

  	// Autoclose menu, cause we stay on the same page
  	$('.navbar-collapse a').click(function() {
    	$('.navbar-collapse').collapse('hide');
	});

  	// Add scrollspy to the game
    $('body').scrollspy({ target: '.navbar', offset: 180 });
    $("body").on('activate.bs.scrollspy', function (e) {
        // Also set the desktop menu
        var href = $(e.target).find("a").attr("href");
        var mobile_item_selector = '.main-nav a[href="' + href + '"]';
        $(".main-nav li.active").removeClass('active');
        $(mobile_item_selector).parent().addClass("active");
    });

});

}(window.jQuery);