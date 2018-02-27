var currentScore;
var winScore = 0;
var lossScore = 0;
var targetValue;
var redValue;
var yellowValue;
var greenValue;
var blueValue;

function newGame() {
    currentScore = 0;
    redValue = Math.floor(Math.random() * 12) + 1;
    yellowValue = Math.floor(Math.random() * 12) + 1;
    greenValue = Math.floor(Math.random() * 12) + 1;
    blueValue = Math.floor(Math.random() * 12) + 1;
    targetValue = Math.floor(Math.random() * 102) + 19;
    document.getElementById("currentScore").innerHTML = "Current Total: " + currentScore;
    document.getElementById("targetNumber").innerHTML = "Target Number: " + targetValue;
    document.getElementById("difference").innerHTML = "Points to go: " + (targetValue - currentScore);
}

function gameLogic() {
    $("#red").click(function () {
        currentScore = currentScore + redValue;
        document.getElementById("currentScore").innerHTML = "Current Total: " + currentScore;
        document.getElementById("difference").innerHTML = "Points to go: " + (targetValue - currentScore);
        document.getElementById("red").innerHTML = '<img src=red.png id="red" height=64; width=64;>' + redValue;
        if ((targetValue - currentScore) <= 0) {
            endGame();
        }
    });

    $("#yellow").click(function () {
        currentScore = currentScore + yellowValue;
        document.getElementById("currentScore").innerHTML = "Current Total: " + currentScore;
        document.getElementById("difference").innerHTML = "Points to go: " + (targetValue - currentScore);
        if ((targetValue - currentScore) <= 0) {
            endGame();
        }
    });

    $("#green").click(function () {
        currentScore = currentScore + greenValue;
        document.getElementById("currentScore").innerHTML = "Current Total: " + currentScore;
        document.getElementById("difference").innerHTML = "Points to go: " + (targetValue - currentScore);
        if ((targetValue - currentScore) <= 0) {
            endGame();
        }
    });

    $("#blue").click(function () {
        currentScore = currentScore + blueValue;
        document.getElementById("currentScore").innerHTML = "Current Total: " + currentScore;
        document.getElementById("difference").innerHTML = "Points to go: " + (targetValue - currentScore);
        if ((targetValue - currentScore) <= 0) {
            endGame();
        }
    });
}

newGame();
gameLogic();

var endGame = function () {
    if (targetValue == currentScore) {
        document.getElementById("difference").innerHTML = "Points to go: " + (targetValue - currentScore);
        winScore++;
        setTimeout(function () {
            alert("You Win!!!");
        }, 1);

    }
    else {
        document.getElementById("difference").innerHTML = "Points to go: " + (targetValue - currentScore);
        lossScore++;
        setTimeout(function () {
            alert("You didn't win....try again!");
        }, 1);

    }

    document.getElementById("winScore").innerHTML = "Wins: " + winScore;
    document.getElementById("lossScore").innerHTML = "Losses: " + lossScore;

    setTimeout(function () {
        var playAgain = confirm("Play Again?");
        if (playAgain = true) {
            newGame();
        }
    }, 1)
}




