let headerList = $('.header li'),
    secList = $('main section');

headerList.click(function(e){
  e.preventDefault();

  let idx = $(this).index(),
      offset = secList.eq(idx+0).offset().top ;
  $('body,html').animate({
    scrollTop:offset
  });
});




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



    const skillSwiper = new Swiper('.swiper', {
      slidesPerView: 3,
      autoplay: {
        delay: 7000,
      },
      direction: 'horizontal',
      loop: true,
    
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });  
    
    $('.swiper-button-prev').click(function(){
      skillSwiper.slidePrev();
    });
    $('.swiper-button-next').click(function(){
      skillSwiper.slideNext();
    }); 
  




// let images = document.querySelectorAll('.design img');
  
// for (var i = 0; i < images.length; i++) {
//   images[i].addEventListener('click', function() {
//     for (var j = 0; j < images.length; j++) {
//       if (i != j) {
//         images[j].style.transform = 'scale(1)';
//         images[j].style.zindex = '1';
//       }else{
//         images[j].style.transform = 'scale(1)';
//       }
//     }
//     this.style.transform = 'scale(1.3)';
//     this.style.margin = '40px'
//   });
// }
