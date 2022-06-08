$(function() {
    $('.p-nav--project').hover(function() {
      $(this).find('.p-nav--project--sub').stop().slideDown();
    }, function() {
      $(this).find('.p-nav--project--sub').stop().slideUp();
    });
   
  });