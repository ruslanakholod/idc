console.log("test gulp");

$( document ).ready(function() {

  //mask phone
  jQuery(function($) {
    $("#phone").mask("+375 (99) 999-99-99");
  });

  //timer
  function updater(d, h, m, s) {
    var baseTime = new Date(2018, 5, 28);
    var period = 8*24*60*60*1000;
    function update() {
      var cur = new Date();
      var diff = period - (cur - baseTime) % period;
      var millis = diff % 1000;
      diff = Math.floor(diff/1000);
      var sec = diff % 60;
      if(sec < 10) sec = "0"+sec;
      diff = Math.floor(diff/60);
      var min = diff % 60;
      if(min < 10) min = "0"+min;
      diff = Math.floor(diff/60);
      var hours = diff % 24;
      if(hours < 10) hours = "0"+hours;
      var days = Math.floor(diff / 24);
      d.innerHTML = days;
      h.innerHTML = hours;
      m.innerHTML = min;
      s.innerHTML = sec;
      setTimeout(update, millis);
    }
    setTimeout(update, 0);
  }

  updater(document.getElementById("days"),
   document.getElementById("hours"), document.getElementById("minutes"),
   document.getElementById("seconds"));

});
