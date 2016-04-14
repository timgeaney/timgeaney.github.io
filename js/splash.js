// Splash
var Splash = function() {
    "use strict";

    // Handle Owl Carousel Team v1
    var handleSplashBannerSlider = function() {
        $(document).ready(function() {
            var owl = $(".splash-banner-slider");
            owl.owlCarousel({
                items: 1,
                loop: true,
                dots: false,
                nav: false,
                margin: 150,
                stagePadding: 250,
                autoplay: true,
                smartSpeed: 450,
                autoplaySpeed: 1000,
                responsive: {
                    // breakpoint from 0 up
                    0: {
                        items: 1,
                        stagePadding: 15
                    },
                    // breakpoint from 480 up
                    480: {
                        items: 1,
                        stagePadding: 15
                    },
                    // breakpoint from 550 up
                    550: {
                        items: 1,
                        stagePadding: 70
                    },
                    // breakpoint from 768 up
                    768: {
                        items: 1,
                        stagePadding: 150
                    },
                    // breakpoint from 992 up
                    992: {
                        items: 1,
                        stagePadding: 200
                    },
                    // breakpoint from 1199 up
                    1199: {
                        items: 1,
                        stagePadding: 250
                    }
                }
            });
        });
    }

    // Handle Equal Height
    var handleEqualHeight = function() {
        $(function($) {
            $('.splash-demo-equal-height').responsiveEqualHeightGrid();
        });
    }

    return {
        init: function() {
            handleSplashBannerSlider(); // initial setup for splash banner slider
            handleEqualHeight(); // initial setup for equal height
        }
    }
}();

$(document).ready(function() {
    Splash.init();
});
