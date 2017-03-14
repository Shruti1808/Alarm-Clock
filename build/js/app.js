(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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

},{"./../js/alarm.js":1}]},{},[2]);
