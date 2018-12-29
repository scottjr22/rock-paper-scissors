const userScore = 0;
const compScore = 0;
const userScoreHTML = $("#user-score");
const compScoreHTML = $("#comp-score");
const resultHTML = $(".result > p");
const rockHTML = $("#r");
const paperHTML = $("#p");
const scissorsHTML = $("#s");
const actionHTML = $("action");
var lastListItem;

var compChoice = null;

//Event Listeners
rockHTML.click(function() {
    PlayRound("0");
});
paperHTML.click(function() {
    PlayRound("1");
});
scissorsHTML.click(function() {
    PlayRound("2");
});

//returns random int between 0-2 corresponding to rock,paper,scissors
function CompChoice() {
    return compChoice = Math.floor(Math.random()*3);
};

// Compares user choice with comp choice and displays result
//updates score
function PlayRound(userChoice) {
    var compChoice = CompChoice();
    var outcome = userChoice + compChoice;
    if (outcome == "02" || outcome=="10" || outcome == "21") {
        resultHTML.html("You Win!");
        var value = userScoreHTML.html();
        value++;
        userScoreHTML.html(value);
    }
    else if (outcome=="01" || outcome =="12" || outcome== "20") {
        resultHTML.html("You Lose!");
        var value = compScoreHTML.html();
        value++;
        compScoreHTML.html(value);
    }
    else {
        resultHTML.html("Draw!");
    }
    addHistory(parseInt(userChoice),compChoice);
};

//Adds descriptive result of last round played to history list
function addHistory(userChoice, compChoice) {
    var text = $("<li></li>").text("User plays " + numberToItem(userChoice) + ", Computer plays " + numberToItem(compChoice));

    
    $("ul").prepend(text).first().hide().fadeIn("slow");

    
};

//Returns string corresponding to numerical choice
function numberToItem(choice) {
    switch (choice) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
    };
};