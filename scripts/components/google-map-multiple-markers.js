// Google Map --- https://developers.google.com/maps/documentation/javascript/
var GoogleMap = function() {
    "use strict";

    var handleGoogleMaps = function() {
        function initialize() {
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 4,
                center: {
                    lat: -25.363882,
                    lng: 131.044922
                }
            });

            var bounds = {
                north: -25.363882,
                south: -31.203405,
                east: 131.044922,
                west: 125.244141
            };

            // Display the area between the location southWest and northEast.
            map.fitBounds(bounds);

            // Add 5 markers to map at random locations.
            // For each of these markers, give them a title with their index, and when
            // they are clicked they should open an infowindow with text from a secret
            // message.
            var secretMessages = ['This', 'is', 'the', 'secret', 'message'];
            var lngSpan = bounds.east - bounds.west;
            var latSpan = bounds.north - bounds.south;
            for (var i = 0; i < secretMessages.length; ++i) {
                var marker = new google.maps.Marker({
                    position: {
                        lat: bounds.south + latSpan * Math.random(),
                        lng: bounds.west + lngSpan * Math.random()
                    },
                    map: map
                });
                attachSecretMessage(marker, secretMessages[i]);
            }
        }
        // Attaches an info window to a marker with the provided message. When the
        // marker is clicked, the info window will open with the secret message.
        function attachSecretMessage(marker, secretMessage) {
            var infowindow = new google.maps.InfoWindow({
                content: secretMessage
            });

            marker.addListener('click', function() {
                infowindow.open(marker.get('map'), marker);
            });
        }
        google.maps.event.addDomListener(window, 'load', initialize);
    }

    return {
        init: function() {
            handleGoogleMaps(); // initial setup for google map
        }
    }
}();

$(document).ready(function() {
    GoogleMap.init();
});