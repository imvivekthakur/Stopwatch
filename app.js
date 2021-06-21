var time = document.querySelector(".time");

var hours = 0;
var minutes = 0;
var seconds = 0;

if(hours < 10){
    hours = "0" + hours;
}
if(minutes < 10){
    minutes = "0" + minutes;
}
if(seconds < 10){
    seconds = "0" + seconds;
}

var newTime = hours + ":" + minutes + ":" + seconds;
time.textContent = newTime;

var myTime;
var start = $(".start");
start.click(function(){
    clearInterval(myTime);
    myTime = setInterval(function(){
        seconds++;
        minutes = (Math.trunc)(minutes + seconds / 60);
        seconds = (Math.trunc)(seconds % 60);

        hours = (Math.trunc)(hours + minutes / 60);
        minutes = (Math.trunc)(minutes % 60);

        generateTime();
    }, 1000);
});

$(".stop").click(function(){
    clearInterval(myTime);
});

$(".lap").click(function(){
    console.log(newTime);
    $('<p>' + newTime + '</p>').appendTo('.allLaps');
});

$(".reset").click(function(){
    hours = 0;
    minutes = 0;
    seconds = 0;
    clearInterval(myTime);
    generateTime();
    time.textContent = newTime;
})

function generateTime(){
    var currTime = "";
    if(hours < 10){
        currTime = currTime + "0" + hours + ":";
    } else {
        currTime = currTime + hours + ":";
    }

    if(minutes < 10){
        currTime = currTime + "0" + minutes + ":";
    } else {
        currTime = currTime + minutes + ":";
    }

    if(seconds < 10){
        currTime = currTime + "0" + seconds;
    } else {
        currTime = currTime + seconds;
    }
    newTime = currTime;
    time.textContent = currTime;
}