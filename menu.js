$(document).ready(function(){
  $('.menu-trigger').click(function(){
    $('nav ul').slideToggle(500);
  }); //end slide toggle command; number is in miliseconds

$(window).resize(function(){
    if ($(window).width() > 700){
      $('nav ul').removeAttr('style');
    }
});

});
