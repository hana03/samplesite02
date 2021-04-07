$(function(){
});  

// navメニュー
$('.header-nav-sp').hide();
// $('.pc-menu').hide();

$('.fa-bars').click(function(){
  $('.header-nav-sp').fadeIn();
}); 

$('.header-nav-sp').click(function(){
  $('.header-nav-sp').fadeOut();
}); 

// $('.fa-bars').click(function(){
//   $('.sp-menu').fadeOut();
// }); 