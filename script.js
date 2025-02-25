
$(document).ready(function(){
$(".owl-carousel").owlCarousel({
  items: 3, 
  loop: true,
  margin: 16,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  dots: true,
  slideBy: 1,
  responsive: {
      0: {
          items: 1 
      },
      1200:{
          items:3
      }
  }
});


});



$(".service_slide").owlCarousel({
  items: 4, 
  loop: true,
  margin: 16,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  dots: true,
  slideBy: 1,
  responsive: {
      0: { items: 1 },
      1200: { items: 4 }
  }
});


$(document).ready(function () {
if ($(window).width() > 767) {
  AOS.init({
      duration: 1000, 
      // once: true,
  });
}
});


$(document).ready(function(){
$('#menu_menu').click(function(){
$('header nav').addClass('show_menu')
})
$('#menu_close').click(function(){
$('header nav').removeClass('show_menu')
})
})






$(document).ready(function () {

  if ($(window).width() > 767) {
$(".has_menu").mouseenter(function () {
  $(this).find(".sub_menu").addClass("show_menu");
});

$(".has_menu").mouseleave(function () {
  $(this).find(".sub_menu").removeClass("show_menu");
});
  }

  if ($(window).width() < 767) {
    $(".has_menu").click(function () {
      $(this).find(".sub_menu").toggleClass("show_menu");

    });
    

      }

   
      $(window).scroll(function(event){
         var scroll_top = $(this).scrollTop();
         if (scroll_top > 100){
           $('header').addClass('fixed_header'); 
         } else {
          $('header').removeClass('fixed_header');            
         }

      });

      



});
