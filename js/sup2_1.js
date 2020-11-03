// sub 2_1.js

// 2단계 메뉴
$(function(){
  $('#gnb > .depth1 > li').hover(
      function(){
          $('.depth2')
              .stop().slideDown(400);
      },
      function(){
          $('.depth2')
              .stop().slideUp(400);
      }
  )
})

// hamburger
$(function(){
  $('.hamburger_icon').click(function(){
      $('.hamburger_list').slideToggle();
  })   
});
