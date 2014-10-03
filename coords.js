$(document).ready(function(){
  setInterval(function(){
    $.ajax('http://api.open-notify.org/iss-now.json',{
      type: 'GET',
      dataType: 'jsonp',
      success: function(data){
        $('p').remove();
        $('.long').append('<p>long: '+data.iss_position.longitude+'</p>').css('font-family', 'Helvetica').css('font-size', '80px').css('text-align', 'center');
        $('.lat').append('<p>lat: '+data.iss_position.latitude+'</p>').css('font-family', 'Helvetica').css('font-size', '80px').css('text-align', 'center');
        console.log(data);
      }
    });
  }, 1000);
});