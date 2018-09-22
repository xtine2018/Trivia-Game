var count = 60*10;
var interval = setInterval(function() {
    document.getElementById('timer').innerHTML=count + " seconds remaining";
    count--;
    if(count ===0) {
        clearInterval(time);
        alert("Oh no, you were bit by a zombie!");
    }
}, 1000);