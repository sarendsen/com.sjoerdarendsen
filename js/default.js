/*
* Fuck jQuery, oldskool baby!
*/

$(function() {
    $(document).scroll(function() {
        var cutoff = $(window).scrollTop();
        center = $(window).scrollTop() + $(window).height() / 2;

        center_top = center - 200;
        center_bottom = center + 100;
        //console.log("center-top: " + center_top + "center-bottom: " + center_bottom);

        $('.section').each(function(){
            //console.log("offset " + $(this).attr( "class" ) + ": " + $(this).offset().top);
            if($(this).offset().top > center_top && $(this).offset().top < center_bottom){
                //console.log("check");
                $('.section').removeClass("active");
                $(this).addClass("active");
                
                return false; // stops the iteration after the first one on screen
            }
        });
    });
 });