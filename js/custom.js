$(function(){
  /* --------- Header --------- */
  /* --------- Skills : Chart animation --------- */
  var chart = $('.chart');
  var skill = $ ('.about-skills');
  var skillOff = skill.offset().top - 700;
  var excuted = false;
  var windowHeight = $(window).innerHeight() - 50;

  $(window).scroll(function(){
    var windowSCR = $(this).scrollTop();
    if(windowSCR > skillOff){ // Chart Animation
      if(excuted == false){
        animateChart();
        excuted = true;
      };
    }else if(windowSCR > windowHeight){ // Header Active
      $('header').addClass('active');
    }else if(windowSCR > 200) {
      $('.welcome').css('opacity','0');
    }else { // Clear
      $('header').removeClass('active');
      $('.welcome').css('opacity','1');
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

  /* Trigger Event */
  var $trigger = $('#trigger');
  var $nav = $('nav');
  $trigger.click(function(){
    $trigger.toggleClass('active');
    $nav.toggleClass('active');
  });

  /* Smooth Scrolling */
  $('.logo a, .nav-inner a').click(function(e){
    e.preventDefault();
    $.scrollTo(this.hash || 0, 900);
    $trigger.removeClass('active');
    $nav.removeClass('active');
  });
  $('section').click(function(e){
    $trigger.removeClass('active');
    $nav.removeClass('active');
  });
});