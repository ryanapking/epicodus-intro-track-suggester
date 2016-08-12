var a = 0;
var b = 0;
var c = 0;
var d = 0;

// Start Business Logic

var logAnswer = function(answer) {
  if (answer === "a") {
    a = a + 1;
  } else if (answer ==="b") {
    b = b + 1;
  } else if (answer === "c") {
    c = c + 1;
  } else {
    d = d + 1;
  }
};

// Start Front-end Logic

$(document).ready(function() {

  $("#submitBtn").click(function() {
    a = b = c = d = 0;
    logAnswer($("input:radio[name='question1']:checked").val());
    logAnswer($("input:radio[name='question2']:checked").val());
    logAnswer($("input:radio[name='question3']:checked").val());
    logAnswer($("input:radio[name='question4']:checked").val());
    logAnswer($("input:radio[name='question5']:checked").val());
    logAnswer($("input:radio[name='question6']:checked").val());
    console.log(a, b, c, d);
  });

});
