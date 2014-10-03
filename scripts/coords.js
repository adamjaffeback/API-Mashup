$(document).ready(function(){
  setInterval(function(){
    $.ajax('http://api.open-notify.org/iss-now.json',{
      type: 'GET',
      dataType: 'jsonp',
      success: function(data){
        //$('p').remove();
        //$('.long').append('<p>long: '+data.iss_position.longitude+'</p>').css('font-family', 'Helvetica').css('font-size', '80px').css('text-align', 'center');
        //$('.lat').append('<p>lat: '+data.iss_position.latitude+'</p>').css('font-family', 'Helvetica').css('font-size', '80px').css('text-align', 'center');
        var lat = data.iss_position.latitude;
        var long = data.iss_position.longitude;
        // updateMarker(lat, long);
        var image = "../images/dot.png";
        new google.maps.Marker({
          position: new google.maps.LatLng(lat, long),
          map: map,
          title: 'ISS',
          icon: image
        });

        var myLatLng = new google.maps.LatLng(lat, long);

        map.panTo(myLatLng);

        console.log(data.iss_position.longitude);
        console.log(data.iss_position.latitude);
      }
    });
  }, 1000);
});
