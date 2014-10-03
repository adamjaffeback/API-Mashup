var map;
      function initialize() {
        var mapOptions = {
          zoom: 2,
          center: new google.maps.LatLng(20, 0)
        };
        map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
      }
google.maps.event.addDomListener(window, 'load', initialize);