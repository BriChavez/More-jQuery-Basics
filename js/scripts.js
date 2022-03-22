$(document).ready(function() {
  $(".clickable").click(function() {
   $(".words").fadeToggle();
   $(".definition").fadeToggle();
  });
});