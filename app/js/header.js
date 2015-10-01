'use strict';

(function($, window){
    // the $ is now locally scoped
    // $(function() {
    //     // the DOM is ready
    // });

    $(window).on('scroll', function() {
        // Listen for scroll
        var wScroll = $(this).scrollTop();  // how far Im scrolled down (in px)
        console.log('wScroll val: ', wScroll);

        var fourth = wScroll / 4;  // at 1/4th speed of the scroll speed
        $('.intro-text').css({
            '-webkit-transform': 'translate(0px, '+ fourth +'%)',  // slow
            '-moz-transform': 'translate(0px, '+ fourth +'%)',
            '-ms-transform': 'translate(0px, '+ fourth +'%)',
            '-o-transform': 'translate(0px, '+ fourth +'%)',
            'transform': 'translate(0px, '+ fourth +'%)',
        });

        var triple = wScroll * 3;
        var location_op = 0.2;
        $('#hero_location').css({
            '-webkit-transform': 'translate(0px, '+ triple +'%)',
            '-moz-transform': 'translate(0px, '+ triple +'%)',
            '-ms-transform': 'translate(0px, '+ triple +'%)',
            '-o-transform': 'translate(0px, '+ triple +'%)',
            'transform': 'translate(0px, '+ triple +'%)',
            'opacity': location_op + wScroll/150  // is such computation good for realtime scroll? todo
        });

        var follow_op = 0.5;
        $('#follow').css({
            '-webkit-transform': 'translate(0px, -'+ wScroll +'%)',
            '-moz-transform': 'translate(0px, -'+ wScroll +'%)',
            '-ms-transform': 'translate(0px, -'+ wScroll +'%)',
            '-o-transform': 'translate(0px, -'+ wScroll +'%)',
            'transform': 'translate(0px, -'+ wScroll +'%)',
            'opacity': follow_op + (wScroll/400)
        });

        var backgroundOpacity = 4 - (wScroll / 40);
        $('#hero_image').css({
            '-webkit-filter': 'blur('+ backgroundOpacity +'px)',
            '-moz-filter': 'blur(0px, '+ backgroundOpacity +'px)',
            '-ms-filter': 'blur(0px, '+ backgroundOpacity +'px)',
            '-o-filter': 'blur(0px, '+ backgroundOpacity +'px)',
            'filter': 'blur(0px, '+ backgroundOpacity +'px)'
        });
    });

})(window.jQuery, window);
