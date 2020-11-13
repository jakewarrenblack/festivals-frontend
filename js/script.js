
    
$(window).on("load",function() {

  if($(window).width() >= 1024){
    console.log($(window).width())
  // alert('found')
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(300,1);}
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
}
});
