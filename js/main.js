let skill = $('.skill_list li'),
    skills = $('.skill_lists li'),
    barMovie = $('.program .bar_wrap'),
    barA = $('.bar1'),
    barB = $('.bar2'),
    barCount1 = $('.ca'),
    barCount2 = $('.cb');


    skill.click(function(){
      let rate = $(this).attr('data-rate');
      $({rate:0}).animate({rate:rate},{
        duration: 800,
        progress:function(){
          let now = Math.ceil(this.rate);
          barCount1.text(now+'%');
          barA.css({width:`${now}%`});
        }
      });
      skill.removeClass('active');
      $(this).addClass('active');
    });

    skills.click(function(){
      let rate = $(this).attr('data-rate');
      $({rate:0}).animate({rate:rate},{
        duration: 800,
        progress:function(){
          let now = Math.ceil(this.rate);
          barCount2.text(now+'%');
          barB.css({width:`${now}%`});
        }
      });
      skills.removeClass('active');
      $(this).addClass('active');
    });

