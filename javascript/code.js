
$(document).ready(function () {
  

  
  $('.facebook').mouseenter(function () { 
    
    $('.facebook img').attr('src', 'images/facebook-danger.jpeg');
    
  })
  $('.facebook').mouseleave(function () { 
    
    $('.facebook img').attr('src', 'images/facebook.jpeg');
    
  })
  
  $('.instagram').mouseenter(function () { 
    
    $('.instagram img').attr('src', 'images/ig-danger.jpeg');
    
  })
  $('.instagram').mouseleave(function () { 
    
    $('.instagram img').attr('src', 'images/instagram.jpeg');
    
  })
  
  
  
  $('.flexslider').flexslider({
    prevText: "",           
    nextText: "",
    pauseOnAction: false,
    touch: true,
    slideshowSpeed: 4000,
    useCss: false
    
  })
  
  
  
  /*MOSTRAR LAS PAGINAS  */
  
  
  
  
});


