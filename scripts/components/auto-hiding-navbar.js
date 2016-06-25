// Auto Hiding Navbar on Scroll
var AutoHidingNavbar = function() {
    "use strict";

    // Handle Auto Hiding Navbar on Scroll
    var handleAutoHidingNavbar = function() {
        $('.auto-hiding-navbar').autoHidingNavbar({
            showOnBottom: false,
            hideOffset: 1
        });
    }

    return {
        init: function() {
            handleAutoHidingNavbar(); // initial setup for auto hiding navbar on scroll
        }
    }
}();

$(document).ready(function() {
    AutoHidingNavbar.init();
});
