function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
} //this is a random number generator for 0-max

$("#btnSubmit").after("<div></div>"); //adds a `div` after #btnSubmit

$("form").after("<ul></ul>"); //adds a `ul` after `form`

$('input[type="text"]')
  .keyup(function() {
    if ($('input[type= "text"]').val() == "") {
      $("#btnSubmit").attr("disabled", true);
    } else $("#btnSubmit").attr("disabled", false);
  })
  .keyup(); //disables `#btnSubmit` if input text is blank

$("#btnSubmit").click(function(e) {
  e.preventDefault(); //this fixes the page reloading after submit is pressed
  $("#btnSubmit").attr("disabled", true);
  $('input[type="text"]').val(function(i, val) {
    $("ul").append("<li>" + val + "</li>"); //adds `li`s to `ul` with val text any time `#btnSubmit` is clicked
    $("li").click(function() {
      $(this).css(
        "color",
        "rgb(" +
          getRandomInt(255) +
          "," +
          getRandomInt(255) +
          "," +
          getRandomInt(255)
      );
    }); //changes the text color of an li to a random value
    $("li").dblclick(function(e) {
      $("li").remove(); //removes li if double clicked
    });
  });
});
