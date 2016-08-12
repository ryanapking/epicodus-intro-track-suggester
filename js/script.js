var design = 0;
var cSharp = 0;
var jav = 0;
var ruby = 0;

// Start Business Logic

var logAnswer = function(answer) {
  if (answer.includes("d")) {
    design = design + 1;
  }
  if (answer.includes("c")) {
    cSharp = cSharp + 1;
  }
  if (answer.includes("j")) {
    jav = jav + 1;
  }
  if { answer.includes("r"))
    ruby = ruby + 1;
  }
};

var clearDisplay = function() {
  $("#design").slideUp();
  $("#csharp").slideUp();
  $("#ruby").slideUp();
  $("#java").slideUp();
  $("#inconclusive").slideUp();
}

var displayResults = function() {
  if (design > cSharp && design > java && design > ruby) {
    $("#design").slideDown();
  } else if (cSharp > design && cSharp > jav && cSharp > ruby) {
    $("#csharp").slideDown();
  } else if (jav > design && jav > cSharp && jav > ruby) {
    $("#java").slideDown();
  } else if (ruby > design && ruby > cSharp && ruby > jav)  {
    $("#ruby").slideDown();
  } else {
    $("#inconclusive").slideDown();
  }

}

// Start Front-end Logic

$(document).ready(function() {
  $("#questions").submit(function(event) {
    a = b = c = d = 0;
    clearDisplay();
    logAnswer($("input:radio[name='question1']:checked").val());
    logAnswer($("input:radio[name='question2']:checked").val());
    logAnswer($("input:radio[name='question3']:checked").val());
    logAnswer($("input:radio[name='question4']:checked").val());
    logAnswer($("input:radio[name='question5']:checked").val());
    logAnswer($("input:radio[name='question6']:checked").val());
    console.log(a, b, c, d);
    displayResults();
    event.preventDefault();
  });
  $("#clearBtn").click(function() {
    clearDisplay();
    $("input:radio[name='question1'][value='a']").prop("checked", true);
    $("input:radio[name='question2'][value='a']").prop("checked", true);
    $("input:radio[name='question3'][value='a']").prop("checked", true);
    $("input:radio[name='question4'][value='a']").prop("checked", true);
    $("input:radio[name='question5'][value='a']").prop("checked", true);
    $("input:radio[name='question6'][value='a']").prop("checked", true);
  });

});
