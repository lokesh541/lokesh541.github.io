$(document).ready(function(){
  $("h1").addClass("animated slideInDown");
  $(".title").addClass("animated slideInUp ");
  $(window).scroll(function() {
var val = $( window ).height()/2;
var val2 = $(window).scrollTop();
 val2 > val ? $("nav").addClass("nav-black"):$("nav").removeClass("nav-black");
   val2 > val ? $(".gototop").fadeIn():$(".gototop").fadeOut("slow");
  });
});
