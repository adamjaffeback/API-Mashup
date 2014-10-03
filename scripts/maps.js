var map;

function initialize() {
 var mapOptions = {
   zoom: 5,
   center: new google.maps.LatLng(22, -120)
 };

 map = new google.maps.Map(document.getElementById('map-canvas'),
  mapOptions);
}

var updateMarker = function(lat, long) {
  marker.setPosition(new google.maps.LatLng(lat,long));
};
