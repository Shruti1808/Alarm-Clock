var Alarm= require("./../js/alarm");

$(document).ready(function() {
  $('.time').text(moment().format('HH:mm A'));

  $('.setTime').submit(function(event){
    event.preventDefault();
    var inputTime = $('#time').val();
    $('.alarm').append(inputTime);
  });
});
