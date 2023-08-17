$( document ).ready(function() {
    // Main variables
      var $aboutTitle = $('.about-myself .content h2');
      var $developmentWrapper = $('.development-wrapper');
      var developmentIsVisible = false;
  
 
    $(window).scroll( function(){
  
      var bottom_of_window = $(window).scrollTop() + $(window).height();
  
      
 
  
  
        $('.experience .content .hidden').each( function(i){
            console.log("yes its ")
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
  
            // /* If the object is completely visible in the window, fadeIn it */
            if( bottom_of_window >= bottom_of_object ){
  
              $(this).animate({
                'opacity':'1',
                'margin-left': '0'
              },600);
            }
        });
  
   
    }); // -- End window scroll --
  });