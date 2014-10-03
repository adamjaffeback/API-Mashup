var map;

function initialize() {
  	var mapOptions = {
    	zoom: 6,
    	center: new google.maps.LatLng(20, 0)
  	};
  
  	map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

 map = new google.maps.Map(document.getElementById('map-canvas'),
  mapOptions);
}

var updateMarker = function(lat, long) {
  marker.setPosition(new google.maps.LatLng(lat,long));
};
