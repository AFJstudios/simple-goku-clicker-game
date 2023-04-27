let score = 0;
let topScore = 0;
let currentEvolution = 0;
let gamestate = 0;
let multiplier = 0;

setInterval(update, 1000);

function startGame() {
    score = 10;
    currentEvolution = 0;
    gamestate = 1;
    multiplier = 1;
    document.getElementById("score").innerHTML = score;
    document.getElementById("currentEvolution").src = "1.gif";
}

function addScore(value) {
    if (gamestate == 1) {
        score += value;
        document.getElementById("score").innerHTML = score;
        if (score > topScore) {
            topScore = score;
            document.getElementById("topScore").innerHTML = topScore;
        }
        console.log(score);
    }
}
function removeScore(value) {
    if (gamestate == 1) {
        score -= value;
        document.getElementById("score").innerHTML = score;
    }
}

function chargeUp() {
    addScore(1);
}

function update() {
    if (gamestate == 1) {
        removeScore(1*multiplier);
    }
    if (score <= 0) {
        gamestate = 0;
        document.getElementById("currentEvolution").src = "0.gif";
    }
    if (topScore > 20) {
        multiplier = 2;
        document.getElementById("currentEvolution").src = "2.gif";
    }
    if (topScore > 30) {
        multiplier = 4;
        document.getElementById("currentEvolution").src = "3.gif";
    }
    if (topScore > 40) {
        multiplier = 6;
        document.getElementById("currentEvolution").src = "4.gif";
    }
    if (topScore > 50) {
        multiplier = 8;
        document.getElementById("currentEvolution").src = "5.gif";
    }
    if (topScore > 60) {
        multiplier = 10;
        document.getElementById("currentEvolution").src = "6.gif";
    }
    if (topScore == 70) {
        gamestate = 0;
        document.getElementById("currentEvolution").src = "7.gif";
    }
}

function reset() {
    score = 0;
    document.getElementById("score").innerHTML = score;
    topScore = 0;
    document.getElementById("topScore").innerHTML = topScore;
    multiplier = 0;
}

document.body.onkeyup = function(e) {
  if (e.key == " " ||
      e.code == "Space" ||      
      e.keyCode == 32      
  ) {
    chargeUp();
  }
}