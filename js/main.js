// main.js

// 2단계 메뉴
$(function () {
  $('#gnb > .depth1 > li').hover(
      function () {
          $('.depth2')
              .stop().slideDown(400);
      },
      function () {
          $('.depth2')
              .stop().slideUp(400);
      }
  )
})

// banner slider
$(function () {
  var left = 0;
  var img_num = 0;
  var slider;   // slider 실행 객체 변수

  $('.pager > a').removeClass('active')
  $('.pager > a').eq(img_num).addClass('active')

  function sliderStart() {
      slider = setInterval(function () {
          if (img_num >= 2) {
              img_num = 0
          } else {
              img_num = img_num + 1;
          }

          if (left <= -3840) {
              left = 0;
          } else {
              left = left - 1920;
          }

          $('.sliders')
              // .css('maginLeft', left);
              .animate({ 'marginLeft': left })
          console.log(left)
          $('.pager > a').removeClass('active')
          $('.pager > a').eq(img_num).addClass('active')
      }, 3000);
  }

  function sliderStop() {
      clearInterval(slider);
  }
  sliderStart()
  $('.slider_box').hover(
      function () {
          sliderStop(); // 정지
      },
      function () {
          sliderStart();  // 재생
      }
  )

  $('.controls > .left').click(function () {
      if(img_num > 0) {
          img_num = img_num - 1
      } else { img_num = 2; }
      $('.pager > a').removeClass('active')
      $('.pager > a').eq(img_num).addClass('active')


      if(left < 0) {
          left = left + 1920
      } else { left = left - 3840 }

      $('.sliders').animate({'marginLeft':left})
  })

  $('.controls > .right').click(function () {
      if(img_num < 2) {
          img_num = img_num + 1
      } else { img_num = 0; }
      $('.pager > a').removeClass('active')
      $('.pager > a').eq(img_num).addClass('active')


      if(left > -3840 ) {
          left = left - 1920
      } else { left = 0 }
      $('.sliders').animate({'marginLeft':left})
  })
  
})  // end$

var DD = {
    // 메인
    main: function () {
        // 해당 위치 스크롤시 스토어 애니메이션 작동
        (function () {
            var mainStore = $('.main_store_inner > div');

            $window.on('scroll', function () {
                mainStore[($window.scrollTop() >= 1800 ? 'add' : 'remove') + 'Class']('on');
            });
        });
    }
}