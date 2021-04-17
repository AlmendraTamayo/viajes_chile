$(function(){
    // Añadir scroll smooth al clickear un #
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1200, function(){
          window.location.hash = hash;
        });
      } 
    });

    // Se agrega para que al bajar la página, el navbar tome un color de fondo y no se pierda.
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if(scroll < 300){
          $('.fixed-top').css('background', 'transparent');
      } else{
          $('.fixed-top').css('background', 'rgba(23, 163, 184, 0.9)');
      }
  });

  });