$( document ).ready(function() {
  if ($('.partners').length > 0) {
    $('.partners').slick({
      slidesToShow: 7,
      autoplay: true,
      autoplaySpeed: 2000,
      swipeToSlide: true,
      arrows: false,
      responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 2000,
        swipeToSlide: true,
        arrows: false
      }
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 2000,
        swipeToSlide: true,
        arrows: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        swipeToSlide: true,
        arrows: false
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        swipeToSlide: true,
        arrows: false
      }
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        swipeToSlide: true,
        arrows: false
      }
    }
    ]
   });
  }
  //mask phone
  if ($('#phone').length > 0) {
    jQuery(function($) {
      $("#phone").mask("+375 (99) 999-99-99");
    });
  }
  //timer
  if ($('.form--timer .timer').length > 0) {
    function updater(day, hour, minute, second) {
      const baseTime = new Date(2018, 5, 28);
      let period = 8 * 24 * 60 * 60 * 1000;
      function update() {
        let current = new Date();
        let difference = period - (current - baseTime) % period;
        let millis = difference % 1000;
        difference = Math.floor(difference / 1000);
        let sec = difference % 60;
        if (sec < 10)
        sec = "0" + sec;
        difference = Math.floor(difference / 60);
        let min = difference % 60;
        if (min < 10)
        min = "0" + min;
        difference = Math.floor(difference / 60);
        let hours = difference % 24;
        if (hours < 10)
        hours = "0" + hours;
        let days = Math.floor(difference / 24);
        day.innerHTML = days;
        hour.innerHTML = hours;
        minute.innerHTML = min;
        setTimeout(update, millis);
      }
      setTimeout(update, 0);
    }
    updater(document.getElementById("days"),
     document.getElementById("hours"), document.getElementById("minutes"));
  }
});
