function Alarm(time) {
  this.time = time;
}


Alarm.prototype.setAlarm = function(){
var inputTime = parseInt($('.time').text(moment().format('HH:mm A')));
var currentTime = parseInt($("#setTime").text(moment().format('HH:mm A')));

if(inputTime === currentTime){
  console.log("hello");
}
};

// Alarm.prototype.setAlarm = function(){
//     var time = moment().format('HH:mm A');
//     timeSplit = time.split(":");
//     timeArray = time.split(" ");
//     var A = timeArray[1];
//     var formatTime;
//     if(A === "PM" || A === "pm"){
//       formatTime = moment().hour(parseInt(timeSplit[0]+12).minute(parseInt))
//     }
// };

exports.alarmModule = Alarm;
