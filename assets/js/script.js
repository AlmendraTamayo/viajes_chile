/* $(function () {
$(window).scroll(function() {
    if ($("#menu").offset().top > 150) {
        $("#menu").addClass("bg-secondary");
    } else {
        $("#menu").removeClass("bg-secondary");
    }
  });
}) */



    $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 300){
        $('.fixed-top').css('background', 'transparent');
    } else{
        $('.fixed-top').css('background', 'rgba(23, 163, 184, 0.9)');
    }
});
