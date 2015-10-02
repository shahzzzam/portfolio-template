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
        var minLocationOpacity = 0.5;
        $('#hero-location').css({
            '-webkit-transform': 'translate(0px, '+ triple +'%)',
            '-moz-transform': 'translate(0px, '+ triple +'%)',
            '-ms-transform': 'translate(0px, '+ triple +'%)',
            '-o-transform': 'translate(0px, '+ triple +'%)',
            'transform': 'translate(0px, '+ triple +'%)',
            'opacity': minLocationOpacity + (wScroll/300)  // is such computation good for realtime scroll? todo
        });

        var followScrollRate = wScroll / 2.5;
        $('#follow').css({
            '-webkit-transform': 'translate(0px, -'+ followScrollRate +'%)',
            '-moz-transform': 'translate(0px, -'+ followScrollRate +'%)',
            '-ms-transform': 'translate(0px, -'+ followScrollRate +'%)',
            '-o-transform': 'translate(0px, -'+ followScrollRate +'%)',
            'transform': 'translate(0px, -'+ followScrollRate +'%)',
        });

        // var backgroundOpacity = 4 - (wScroll / 40);  // TODO too much load on browser?
        // $('#hero_image').css({
        //     '-webkit-filter': 'blur('+ backgroundOpacity +'px)',
        //     '-moz-filter': 'blur(0px, '+ backgroundOpacity +'px)',
        //     '-ms-filter': 'blur(0px, '+ backgroundOpacity +'px)',
        //     '-o-filter': 'blur(0px, '+ backgroundOpacity +'px)',
        //     'filter': 'blur(0px, '+ backgroundOpacity +'px)'
        // });

        var backgroundOpacity = 0.5;
        $('#hero-image').css({
            'opacity': backgroundOpacity + (wScroll/360)
        });
    });

})(window.jQuery, window);
