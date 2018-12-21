//Business(or back-end)logic:
var answers = ["C", "C", "C", "C", "C", "C", "C", "C", "A", "C"],
  tot = answers.length;

function getCheckedValue(radioName) {
  var radios = document.getElementsByName(radioName); // Get radio group by-name
  for (var y = 0; y < radios.length; y++)
    if (radios[y].checked) return radios[y].value; // return the checked value
}

function getScore() {
  var score = 0;
  for (var i = 0; i < tot; i++)
    if (getCheckedValue("question" + i) === answers[i]) score += 1; // increment only
  return score;
}

function returnScore() {
  alert("Your score is " + getScore() + "/" + tot);
}
//User interface(or front-end)logic:
$(document).ready(function() {
  $("form").submit(function(event) {
    var answers = [];

    // $(".correct").each(function() {
    //   answers.push($(this).prop("checked"));
    // });

    // console.log(answers);

    $("#result").text("Your score is " + getScore(answers));
    // $("#story").show();
    event.preventDefault();
  });
  $("#submit").click(function() {
    $("#quiz").toggle();
    $("#result").slideToggle();
    $("#score").show();
  });
  $("#score").click(function() {
    $("#result").toggle();
    $("#quiz").slideToggle();
    $("#score").toggle();
  });
});
