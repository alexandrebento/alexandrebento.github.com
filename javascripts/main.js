$(document).ready(function(){
  confirm('3');
  $('.logo').click(function(){
    $(this).effect('bounce',{times:3},300);
    $(this).css('background-color','yellow');
  });
});
