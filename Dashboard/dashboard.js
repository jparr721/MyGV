$(document).ready(function() {
  $(window).on("load", function(){
    $('.loader').fadeOut(2000);

    $('.slideanim').fadeIn("slow").removeClass('.slideanim');
  });

  // $(window).scroll(function(){
  //   $('.slideanim').each(function() {
  //     var position = $(this).offet().top;
  //
  //     var windowTop = $(window).scrollTop();
  //     if (position < windowTop + 200) {
  //       $(this).addClass("slide");
  //     }
  //   });
  // });
});
