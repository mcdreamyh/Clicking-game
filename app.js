function addTarget() {
    document.getElementById("startbutton").style.display = "none";
    //Create div
    const target = document.createElement("div");

    //Store gamescreen into variable
    const game = document.getElementById("gamescreen");

    //Set id as target in div
    target.setAttribute("id", 1);
    target.setAttribute("class", "ball");
    target.setAttribute("onClick", "clickable()");

    //Add target element into gamescreen
    game.appendChild(target);
    pos("1");
    countdown(0, 1);
}

function pos() {
    let posy = Math.floor(Math.random() * 420); //height=bottom
    let posx = Math.floor(Math.random() * 720); //width=right

    //Set css position
    document.getElementById(1).style.bottom = `${posy}px`;
    document.getElementById(1).style.right = `${posx}px`;
}

var score = 0;

function addScore() {
    const scoreText = document.getElementById("score");
    score++;
    scoreText.innerHTML = score;
    var audio = document.getElementById("audio2");
    audio.play();

}

function clickable() {
    addScore();
    pos();

}

var timeoutHandle;

function countdown(minutes, seconds) {
    function tick() {
        var counter = document.getElementById("timer");
        counter.innerHTML =
            minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        seconds--;
        if (seconds >= 0) {
            timeoutHandle = setTimeout(tick, 1000);
        } else if (counter.innerHTML = "0:00") {
            if (counter.innerHTML === "0:00") {
                document.getElementById("win").style.display = "block";
                document.getElementById("1").style.display = "none";
                var audio = document.getElementById("audio");
                audio.play();

                let endScore = document.getElementById("score").innerHTML;
                console.log("Your score: " + endScore)
                document.getElementById("gameScore").innerHTML = "Nice! You got " + endScore + " points!";
                document.getElementById("restart").style.display = "block";
            }
        } else {
            if (minutes >= 1) {
                // countdown(mins-1);   never reach “00″ issue solved:Contributed by Victor Streithorst
                setTimeout(function() {
                    countdown(minutes - 1, 59);
                }, 1000);
            }
        }
    }
    tick();

}


function startGame() {
    addTarget();



}