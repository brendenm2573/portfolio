$(".navTab").click(function(){
  $(".tab").removeClass("active");
  $('#' + $(this).attr("dest")).toggleClass("active");
});
