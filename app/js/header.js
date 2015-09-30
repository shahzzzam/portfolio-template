'use strict';

(function($, window, document){
    // the $ is now locally scoped
    $(function() {
        // the DOM is ready
        console.log('now it is ready');
    });

    $(window).on('scroll', function() {
        // Listen for scroll
        var wScroll = $(this).scrollTop();  // how far Im scrolled down (in pixels)

        var fourth = wScroll / 4;  // at 1/4th speed of the scroll speed
        $('.intro-text').css({
            '-webkit-transform': 'translate(0px, '+ fourth +'%)'  // slow
        });

        var half = wScroll * 3;
        $('#hero_location').css({  // at half speed of the scroll speed
            '-webkit-transform': 'translate(0px, '+ half +'%)'
        });
    });

})(window.jQuery, window, document);
