$(function(){
  /* --------- Header --------- */
  /* --------- Skills : Chart animation --------- */
  var chart = $('.chart');
  var skill = $ ('.about-skills');
  var skillOff = skill.offset().top - 700;
  var excuted = false;
  var windowHeight = $(window).innerHeight();

  $(window).scroll(function(){
    var windowSCR = $(this).scrollTop();
    if(windowSCR > skillOff){ // Chart Animation
      if(excuted == false){
        animateChart();
        excuted = true;
      };
      console(excuted);
    }else if(windowSCR > windowHeight){ // Header Active
      $('header').addClass('active');
    }else { // Clear
      $('header').removeClass('active');
      excuted = false;
    };
  });



  function animateChart(){
    chart.each(function(){
      var item = $(this);
      var title = item.find('h3');
      var targetNum = title.attr('data-num');
      var circle = item.find('circle');
  
      $({rate:0}).animate({rate:targetNum},
        {
          duration: 1500,
          progress: function(){
            var now = this.rate;
            var amount = 565 - (565 * now / 100);
            title.text(Math.floor(now)+"%");
            circle.css({strokeDashoffset:amount});
          }
      });
    }); //chart.each
  }
});