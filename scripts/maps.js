
var latitude = 20;
var longitude = 0;

var map;

function initialize() {
  var mapOptions = {
    zoom: 2,
    center: new google.maps.LatLng(20, 0)
  };
  
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);


//create marker
var marker = new google.maps.Marker({
        position: new google.maps.LatLng(latitude, longitude),
        map: map,
        title: 'ISS'
});
      }