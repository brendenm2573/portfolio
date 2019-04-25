$(".navTab").click(function(){
  $(".tab").removeClass("active");
  $(".navTab").removeClass("active");
  $('#' + $(this).attr("dest")).toggleClass("active");
  $('#' + $(this).attr("dest")+ 'Nav').toggleClass("active");
  window.scrollTo(0,0);
});

$("#contactButton").click(function(){
  $("html, body").animate({ scrollTop: $(document).height() }, "slow");
  return false;
});

var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" activeSlide", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " activeSlide";
}
