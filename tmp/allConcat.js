var Alarm = require("./../js/alarm.js").alarmModule;

$(document).ready(function(){

});

var Alarm = require("./../js/alarm.js").alarmModule;

$(document).ready(function() {
  $('.time').text(moment().format('HH:mm A'));
  function update(){
    $(".time").text(moment().format('HH:mm A'));
  }
  setInterval(function(){ update(); }, 1000);
  $('.setTime').submit(function(event){
    event.preventDefault();
    var inputTime = $('#setAlarm').val();
    $('.alarm').append(inputTime);



  });
});
