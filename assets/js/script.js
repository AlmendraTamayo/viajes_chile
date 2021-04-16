/* $(function () {
$(window).scroll(function() {
    if ($("#menu").offset().top > 150) {
        $("#menu").addClass("bg-secondary");
    } else {
        $("#menu").removeClass("bg-secondary");
    }
  });
}) */


/* 
    
 */
   
$(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1600, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });


    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if(scroll < 300){
          $('.fixed-top').css('background', 'transparent');
      } else{
          $('.fixed-top').css('background', 'rgba(23, 163, 184, 0.9)');
      }
  });

  });