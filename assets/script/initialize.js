function initialize() {
    initAutocomplete();
    initMap();
}

var map, marker, geocoder;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 35.9096484, lng: -78.8948735 },
        zoom: 8
    });
    geocoder = new google.maps.Geocoder();
}

var placeSearch, autocomplete;



function initAutocomplete() {
    console.log("init")
    autocomplete = new google.maps.places.Autocomplete(
        /** @type {!HTMLInputElement} */
        (document.getElementById('autocomplete')), {
        types: ['geocode']
    });
    // autocomplete.addListener('place_changed', fillInAddress);
}


// function fillInAddress(autocomplete) {
//     var place = autocomplete.getPlace();
//     if (place.geometry.viewport) {
//         map.fitBounds(place.geometry.viewport);
//     }
//     else {
//         map.setCenter(place.geometry.location);
//         map.setZoom(17);
//     }
//     if (!marker) {
//         marker = new google.maps.Marker({
//             map: map,
//             anchorPoint: new google.maps.Point(0, -29)
//         });
//     }
//     else
//         marker.setMap(null);
//     marker.setOptions({
//         position: place.geometry.location,
//         map: map
//     });

// }
function geolocate() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var geolocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            var circle = new google.maps.Circle({
                center: geolocation,
                radius: position.coords.accuracy
            });
            autocomplete.setBounds(circle.getBounds());
        });
    }
}
function codeAddress(address) {
    // console.log(address);
    geocoder.geocode({'address': address}, function(results, status) {
      if (status === 'OK') {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
}