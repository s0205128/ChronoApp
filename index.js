var t = 0;
var i;
var running = false;

function startTimer()
{
    if(i == null){
        i = setInterval(countTimer, 1000);
        running = true;
    }
}

function pauseTimer()
{
    if(running){
        clearInterval(i);
        running = false;
    }

}

function contTimer()
{
    if(!running){
        i = setInterval(countTimer, 1000);
        running = true;
    }
}

function countTimer()
{
    t = t + 1;
    document.getElementById("tim").innerHTML = t.toString();
}