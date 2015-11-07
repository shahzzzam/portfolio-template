'use strict';

// TODO how to use debouncing? It stops the parallax effect...

(function init($, window) {
    var goParallax = function() {
        var $context = $(this);
        var wScroll  = $context.scrollTop();  // how far Im scrolled down (in px)


        if (wScroll < 900){
            // cache $ elements for performance...
            var $intro_text     = $('.intro-text');
            var $hero_location  = $('#hero-location');
            var $follow         = $('#follow');
            var $hero_image     = $('#hero-image');

            var backgroundOpacity = 0.5;
            $hero_image.css({
                'opacity': backgroundOpacity + (wScroll / 360)
            });

            var fourth          = wScroll / 4;  // at 1/4th speed of the scroll speed
            $intro_text.css({
                '-webkit-transform' : 'translate(0px, ' + fourth + '%)', // slow
                '-moz-transform'    : 'translate(0px, ' + fourth + '%)',
                '-ms-transform'     : 'translate(0px, ' + fourth + '%)',
                '-o-transform'      : 'translate(0px, ' + fourth + '%)',
                'transform'         : 'translate(0px, ' + fourth + '%)',
            });

            var triple             = wScroll * 3;
            var minLocationOpacity = 0.5;
            $hero_location.css({
                '-webkit-transform' : 'translate(0px, ' + triple + '%)',
                '-moz-transform'    : 'translate(0px, ' + triple + '%)',
                '-ms-transform'     : 'translate(0px, ' + triple + '%)',
                '-o-transform'      : 'translate(0px, ' + triple + '%)',
                'transform'         : 'translate(0px, ' + triple + '%)',
                'opacity'           : minLocationOpacity + (wScroll / 300) // is such computation good for realtime scroll? todo
            });

            var followScrollRate    = wScroll / 2.5;
            $follow.css({
                '-webkit-transform' : 'translate(0px, -' + followScrollRate + '%)',
                '-moz-transform'    : 'translate(0px, -' + followScrollRate + '%)',
                '-ms-transform'     : 'translate(0px, -' + followScrollRate + '%)',
                '-o-transform'      : 'translate(0px, -' + followScrollRate + '%)',
                'transform'         : 'translate(0px, -' + followScrollRate + '%)',
            });
        }
    };

    $(window).on('scroll', goParallax);

})(window.jQuery, window);
