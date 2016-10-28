// Equal Height
var EqualHeight = function() {
    "use strict";

    // Handle Equal Height
    var handleEqualHeight = function() {
        $(function($) {
            $('.services-v2-equal-height').responsiveEqualHeightGrid();
            $('.services-v3-equal-height').responsiveEqualHeightGrid();
            $('.services-v4-equal-height').responsiveEqualHeightGrid();
            $('.services-v6-equal-height').responsiveEqualHeightGrid();
            $('.services-v8-equal-height').responsiveEqualHeightGrid();
            $('.services-v9-equal-height').responsiveEqualHeightGrid();
            $('.services-v10-equal-height').responsiveEqualHeightGrid();
            $('.icon-box-v5-equal-height').responsiveEqualHeightGrid();
            $('.icon-box-v6-equal-height').responsiveEqualHeightGrid();
            $('.contact-us-equal-height').responsiveEqualHeightGrid();
            $('.team-section-equal-height').responsiveEqualHeightGrid();
            $('.l-services-v1-equal-height').responsiveEqualHeightGrid();
            $('.l-services-v2-equal-height').responsiveEqualHeightGrid();
            $('.l-services-mp-equal-height').responsiveEqualHeightGrid();
            $('.grid-item-eq-height').responsiveEqualHeightGrid();   
            $('.team-equal-height').responsiveEqualHeightGrid();
            $('.prices-equal-height').responsiveEqualHeightGrid();



        });
    };

    return {
        init: function() {
            handleEqualHeight(); // initial setup for equal height
        }
    };
}();

$(document).ready(function() {
    EqualHeight.init();
});