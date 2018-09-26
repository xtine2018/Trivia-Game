var triviaQuestions = [{

    question: "In what decade is the Netflix original series set?",
    answerOptions: ["1980s", "1970s", "1990s", "1960s"],
    answer: 0
},

{   question: "Where does Season 1's suspenseful opening scene take place?",
    answerOptions: ["Laboratory", "Spaceship", "The Byers' House", "A Creepy, Derelict Farm in the Middle of Nowhere"],
    answer: 0
},
{   question: "The chilling first Season 1 scene is a reference to which of these prominent 1980s sci-fi films?",
    answerOptions: ["Star Wars", "Alien", "Blade Runner", "Close Encounters of the Third Kind"],
    answer: 1

},
{   question: "Where does the story occur?",
    answerOptions: ["Indiana", "Kansas", "Mississippi", "Oklahoma"],
    answer: 0

},
{   question: "El's favorite food is... ",
    answerOptions: ["Twinkies", "Eggos", "Pop-Tarts", "Oreos"],
    answer: 1

},
{   question: "What is Eleven's superpower?",
    answerOptions: ["Telepathy", "Superhuman Speed", "Telekinesis", "Superhuman Strength"],
    answer: 2

},
{   question: "How does Joyce communicate with her son Will when he is taken?",
    answerOptions: ["By Painting on the Walls", "Through Sensory Deprivation", "With Christmas Lights", "Through a Mirror"],
    answer: 2

},
{   question: "The parallel dimension inhabited by the Demogorgon is referred to as... ",
    answerOptions: ["The Upside Down", "The Butterfly Effect", "The Dark World", "The Other Place"],
    answer: 0

},
{   question: "Finish this quote: 'She can't resist these ____!'",
    answerOptions: ["Skills", "Jokes", "Curls", "Pearls"],
    answer: 3

},
{   question: "Name the game that the boys are always playing.",
    answerOptions: ["Super Mario Bros", "The Legend of Zelda", "Pac-Man", "Dungeons & Dragons"],
    answer: 3

}];

var questionArray = ["question1", "question2", "question3", "question4", "question5", "question6", "question7", "question8", "question9", "question10"];
var currentQuestion; 
var correctAnswer;
var incorrectAnswer;
var answered;
var unanswered;
var seconds;
var time;
var userSelect;
var messages = {
    correct: "Correct!",
        incorrect: "Wrong!",
        timesUp: "Oh no, the Demogorgon got you!",
        finished: "You've escaped the Demogorgon!"
}

$("#startButton").on("click", function() {
    $(this).hide();
    newGame();
});

function newGame(){
    $("#finalMessage").empty();
    $("#correctAnswers").empty();
    $("#incorectAnswers").empty();
    $("#unanswered").empty();
    currentQuestion = 0;
    correctAnswer = 0;
    incorrectAnswer = 0;
    unanswered = 0;
    newQuestion();
}

function newQuestion() {
    $("#message").empty();
    $("#correctedAnswer").empty();
    answered = true;

    $("#currentQuestion").html("Question " + (currentQuestion+1) + "/" + triviaQuestions.length);
    $(".question").html(triviaQuestions[currentQuestion].question);
    for(var i = 0; i < 4; i++) {
        var choices = $('<div>');
        choices.text(triviaQuestions[currentQuestion].answerOptions[i]);
        choices.attr({'data-index': i});
        choices.addClass('thisChoice');
        $('.answerOptions').append(choices);
    }

    countdown();
    $('.thisChoice').on('click', function(){
        userSelect = $(this).data('index');
        clearInterval(time);
        answerPage();
    });
}

    function countdown(){
        seconds = 10;
        $('#timeLeft').html("Time Remaining: " + seconds);
        answered = true;
        time = setInterval(showCountdown, 1000);
        console.log("time", time);
    }

    function showCountdown(){
        seconds--;
        $('#timeLeft').html('Time Remaining: ' + seconds);
        if(seconds < 1){
            clearInterval(time);
            answered = false;
            answerPage();
        }
    }

    function answerPage (){
        $("#currentQuestion").empty();
        $(".thisChoice").empty();
        $(".question").empty();

        var rightAnswerText = triviaQuestions[currentQuestion].answerOptions[triviaQuestions[currentQuestion].answer];
        var rightAnswerIndex = triviaQuestions[currentQuestion].answer;
        if((userSelect == rightAnswerIndex) && (answered == true)){
            correctAnswer++;
            $("#message").html(messages.correct);
        }
        else if((userSelect != rightAnswerIndex) && (answered == true)){
            incorrectAnswer++;
            $("#message").html(messages.incorrect);
            $("#correctedAnswer").html("The correct answer was: " + rightAnswerText);
        }
        else{
            unanswered++;
            $('#message').html(messages.endTime);
            $('#correctedAnswer').html("The correct answer was: " + rightAnswerText);
            answered = true;
        }

        if(currentQuestion == (triviaQuestions.length-1)){
            setTimeout(scoreboard, 2000)
        }
        else{
            currentQuestion++;
            setTimeout(newQuestion, 2000);
        }
    }

    function scoreboard(){
        $("#timeLeft").empty;
        $("#message").empty;
        $("#correctedAnswer").empty;
        $("#finalMessage").html(messages.finished);
        $("#correctAnswers").html("Correct Answers: " + correctAnswer + " out of " + triviaQuestions.length);
        $("#incorrectAnswer").html("Incorrect Answers: " + incorrectAnswer + " out of " + triviaQuestions.length);
        $("#unanswered").html("Unanswered: " + unanswered);    
    }

    const music = new Audio("assets/Stranger Things Theme Song.mp3");
    $('#startButton').click(e => music.play());

    


