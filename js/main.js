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







//   $(function () {
//     var img_num = 0; // 이미지 번호
//     var duration = 3000; // 인터벌 시간
//     var slider;   // slider 실행 객체 변수

//     // 초기화
//     $('.slider > img').fadeOut();
//     $('.slider > img').eq(img_num).fadeIn();

//     // 
//     function changeSlider() {
//       // 전체 이미지 fadeOut
//       $('.slider > img').fadeOut();
//       // 현재 이미지 fadeIn
//       $('.slider > img').eq(img_num).fadeIn();
//       // pager UI 업데이트
//       $('.pager > a').removeClass('active');
//       $('.pager > a').eq(img_num).addClass('active');
//     }

//     // 슬라이더 재생
//     function sliderStart() {
//       slider = setInterval(function () {
//         // 마지막 이미지 번호이면 처음으로 
//         if (img_num >= 2) { img_num = 0 } else {
//           // 다음 이미지 번호로
//           img_num = img_num + 1;
//         }
//         changeSlider(img_num);
//       }, duration);
//     }

//     // 슬라이더 정지
//     function sliderStop() {
//       clearInterval(slider);
//       console.log('stop');
//     }

//     // 슬라이더 재생
//     sliderStart();

//     // 마우스가 올라가면 슬라이더 정지
//     $('.slider, .left, .right').hover(
//       function () {
//         sliderStop(); // 정지
//       },
//       function () {
//         sliderStart();  // 재생
//         console.log('start'); 
//       }
//     )

//     // 이전 이미지 버튼
//     $('.controls > .left').click(function () {
//       if(img_num > 0) {
//         img_num = img_num - 1
//       } else { img_num = 2; }
//       console.log(img_num);
//       changeSlider();
//     })

//     // 다음 이미지 버튼
//     $('.controls > .right').click(function () {
//       if(img_num < 2) {
//         img_num = img_num + 1;
//       } else { img_num = 0; }
//       console.log(img_num);
//       changeSlider();
//     })

//   }) // $end