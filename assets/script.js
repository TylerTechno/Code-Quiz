var quizStatus = true;
var questionNumber = 0;
var answerNumber = 0;
var score = 0;
var highScore = 50;
var finalAnswerCheck = 0;
var checkTimes = 1;
var viewHighScoreButtonE1 = document.getElementById('view-high-scores');
var startQuizButtonE1 = document.getElementById('startQuiz');
var answer1ButtonE1 = document.getElementById('answer1');
var answer2ButtonE1 = document.getElementById('answer2');
var answer3ButtonE1 = document.getElementById('answer3');
var answer4ButtonE1 = document.getElementById('answer4');
var submitScoreE1 = document.getElementById('submitScore');
var questionsE1 = document.getElementById('questions');
var mainDivE1 = document.getElementById('mainDiv');
var htmlTimeLeft = document.getElementById('timeLeft');
var answerCorrectWrong = document.getElementById('answerCorrectWrong');
var questionDisplayEl = document.createElement("questionDisplay");
var finalScoreDisplayEl = document.createElement("finalScoreDisplay");
var enterInitialsEl = document.createElement("enterInitials")
var enterInitialsTextAreaEl = document.createElement("enterInitialsTextArea");
var button1234 = document.createElement("button");
var timeLeft = 60;

answer1ButtonEl.style.display = 'none';
answer2ButtonEl.style.display = 'none';
answer3ButtonEl.style.display = 'none';
answer4ButtonEl.style.display = 'none';
submitScoreEl.style.display = 'none';
answerCorrectWrong.style.display = 'none';
enterInitialsTextArea.style.display = 'none';

var questionsObject = {
    correct: {
        0: "Commonly used datatypes DO NOT include?",
        1: "The condition statement if/else is enclosed with the following:",
        2: "Arrays can be used to store the following",
        3: "A very useful tool to debug arrays is:",
        4: "Strings must be enclosed with:"
    }
};

var answersObject = {
    answers: {
        0: {
            0: "Strings",
            1: "Boolean",
            2: "Alerts",
            3: "Numbers"
        },
        1: {
            0: "Parentheses",
            1: "Curly Brackets",
            2: "Quotes",
            3: "Square Brackets"
        },
        2: {
            0: "Javascript",
            1: "Terminal/bash",
            2: "For loops",
            3: "Console.log"
        },
        3: {
            0: "Commas",
            1: "Curly brackets",
            2: "Quotes",
            3: "Parentheses"
        },
        4: {
            0: "Number of strings",
            1: "Other arrays",
            2: "Booleans",
            3: "All of the above"
        },
    }


};

htmlTimeLeft.textContent = timeLeft;

viewHighScoresBtnEl.addEventListener("click", function () {

    var quizUsers = "";
    var substringTest = "";
    var highScores = "";

    for (var i = 0; i < localStorage.length; i++) {
        var checkUserValue = [];

        quizUsers = localStorage.getItem(localStorage.key(i));
        substringTest = quizUsers.substring(0, 4)
        if (substringTest == "quiz") {
            checkUserValue = quizUsers.split(",");
            var userName = checkUserValue[0]
            highScores += "User " + userName.substring(4) + " high score is: " + checkUserValue[1] + "\n";
        }
    }
    window.alert(highScores);

});

submitScoreEl.addEventListener("click", function () {

    var quizLocalStorage = "quiz";
    var quizUserDetails = "";
    var value = [];

    quizUserDetails = quizLocalStorage + enterInitialsTextArea.value
    value = [quizUserDetails, highScore]

    if (!localStorage.length) {
        localStorage.setItem("test", "test");
    }

    for (var i = 0; i < localStorage.length; i++) {

        var checkUser = "";
        var checkUserValue = [];

        quizUserDetails = quizLocalStorage + enterInitialsTextArea.value;

        checkUser = localStorage.getItem(quizUserDetails);

        if (checkUser == null) {
            localStorage.setItem(quizUserDetails, value);
            window.alert("Your score of " + highScore + " has been submitted!")
            break;
        } else if (checkUser != null) {
            checkUserValue = checkUser.split(",");
        }

        if (quizUserDetails == checkUserValue[0] && highScore == checkUserValue[1]) {
            localStorage.setItem(quizUserDetails, value);
            window.alert(highScore + " " + "is the latest entry for user initial " + enterInitialsTextArea.value + ". Entry will not be added.")
        break; 
        } else if (enterInitialsTextArea.value == "") {
            window.alert("Please enter an initial");
            break;

            } else if ( quizUserDetails == checkUserValue[0] && highScore > checkUserValue[1] ) {
                localStorage.setItem(quizUserDetails, value);
                window.alert("New high score of " + highScore + " has been submitted!.\nYour previous score was " + checkUserValue[1])
            break;

        } else if ( quizUserDetails == checkUserValue[0] && highScore < checkUserValue[1] ) {
            localStorage.setItem(quizUserDetails, value);
            window.alert("Your previous code of " + checkUserValue[1] + " was higher. Entry will not be added.");
            break; 

        } else {
            localStorage.setItem(quizUserDetails, value);
            window.alert("Your score of " + highScore + " has been submitted!")
            break;
        }
                
    }
    
} );


