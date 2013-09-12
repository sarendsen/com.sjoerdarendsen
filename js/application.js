

!function ($) {

  $(function(){

    resize_spacing();

    $('[rel=tooltip]').tooltip();

  	// Autoclose menu, cause we stay on the same page
  	$('.navbar-collapse a').click(function() {
      if($('.navbar-collapse').hasClass('in')) {
    	 $('.navbar-collapse').collapse('hide');
      }
	  });

  	// Add scrollspy to the game
    $('body').scrollspy({ target: '.navbar', offset: 300 });
    /*
    $("body").on('activate.bs.scrollspy', function (e) {
        // Also set the desktop menu
        var href = $(e.target).find("a").attr("href");
        var mobile_item_selector = '.main-nav a[href="' + href + '"]';
        $(".main-nav li.active").removeClass('active');
        $(mobile_item_selector).parent().addClass("active");
    });
    */
   $(".nav li a[href^='#']").on('click', function(e) {
    e.preventDefault();
      $('html, body').animate({ scrollTop: $(this.hash).offset().top }, 300);
    });

});



}(window.jQuery);

$(window).resize(function() {
  resize_spacing();
});

function resize_spacing() {
  var viewportWidth = $(window).width();
  var viewportHeight = $(window).height();
  //console.log(viewportHeight);
  var margin = viewportHeight - 250;
  $('.section').css('margin-bottom', margin + 'px');
}