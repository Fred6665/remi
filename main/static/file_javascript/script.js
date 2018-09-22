$(window).on('load', function () {
    $(".preloader").animate({"opacity":"0"},1600,"linear",function(){
      setTimeout(function(){$(".preloader").css("display","none")},1000);
    });   
  });

$(document).ready(function() {


  var width = $('.slides_block').width();
  
  //dimensions
  $('.slides>li>img').width(width);
  $('.slides').width(width*$('.slides>li>img').length);

  $('.slides').css('left', -width);
  $('.slides:last-child').prependTo('.slides');

  var timer = setInterval(function(){
    jQuery('.next').trigger('click')
  }, 8000);

  function nextSlide() {
    $('.slides').animate({
      'margin-left':-width
    },500, function() {
      $('.slides>li:first-child').appendTo('.slides');
      $('.slides').css('margin-left', 0);
    });
    clearInterval(timer);
    timer = setInterval(function(){
      jQuery('.next').trigger('click')
    },8000);
  }
  //move slides backwards
  function prevSlide() {
    $('.slides').animate({
      'margin-left':width
    },500, function() {
      $('.slides>li:last-child').prependTo('.slides');
      $('.slides').css('margin-left', 0);
    });
    clearInterval(timer);
    timer = setInterval(function(){
      jQuery('.next').trigger('click')
    },8000);
  }

  // function killOne(){
  //   clearInterval(this.timer);
  //   timer = setInterval(function(){
  //     jQuery('.next').trigger('click')
  //     }, 10000);
  //   }

  $('.next').click(nextSlide);
  $('.prev').click(prevSlide);


  //controls

  
  
});