var count = 60;
var audio = new Audio("/Users/cnyokoyama/Documents/UCLA/Homework/Trivia-Game/assets/The Walking Dead.mp3");
var interval = setInterval(function() {
    audio.play();
    document.getElementById('timer').innerHTML = count + " seconds";
    count--;
if(count === -1) {
        alert("Oh no, you ran out of time!");
        clearInterval(interval);
    }
}, 1000);




