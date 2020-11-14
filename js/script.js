

$(window).on("load",function() {
  var collapseBtn = document.getElementById("collapseButton");
  var collapsedElems = document.getElementsByClassName("collapse");

  /*Initalising to 0*/
var counter = 0;

  function changeHTML() {
    counter++;
    if(counter % 2 != 0){
      collapseBtn.innerHTML = "See Less"
    }else{
      collapseBtn.innerHTML = "See More"
  }
}

collapseBtn.addEventListener("click",changeHTML);

  /*Only apply this script on large screens, I don't like the fade effect on mobile*/
if($(window).width() >= 1024){
  
    // First check if the user is on a small screen. If not, get all divs with classname "collapse".
    // Apply the "show" classname to these, to make them appear even though they're collapsable.
    // This means they'll show up on desktop but be collapsed on mobile.
   
  for(var i=0; i<collapsedElems.length; i++){
    collapsedElems[i].classList.add("show");
  }

  // alert('found')
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();

    /*Apply this function to each element with classname "fade"*/ 
    $(".fade").each(function() {
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(300,1);}
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
}
});
