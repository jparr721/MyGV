$(function(){
  $('li').click(function() {
    $(this).removeClass('.selected')
    $(this).addClass('.selected');
  });
});
