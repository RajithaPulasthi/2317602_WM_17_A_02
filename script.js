
let images = ["dice-01.svg", "dice-02.svg", "dice-03.svg", "dice-04.svg", "dice-05.svg", "dice-06.svg"];
let dice = document.querySelectorAll("img");
let currentPlayer = 1;
let scorePlayer1 = 0;
let scorePlayer2 = 0;

function roll() {
    dice.forEach(function (die) {
        die.classList.add("shake");
    });

    setTimeout(function () {
        dice.forEach(function (die) {
            die.classList.remove("shake");
        });

        let dieOneValue = Math.floor(Math.random() * 6);
        let dieTwoValue = Math.floor(Math.random() * 6);
        console.log(dieOneValue, dieTwoValue);

        document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
        document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
        document.querySelector("#total").innerHTML = "Your Value is " + ((dieOneValue + 1) + (dieTwoValue + 1));

        if (currentPlayer === 1) {
            scorePlayer1 += (dieOneValue + 1) + (dieTwoValue + 1);
            document.querySelector("#score-player1").textContent = scorePlayer1; // Display Player 1's score
        } else {
            scorePlayer2 += (dieOneValue + 1) + (dieTwoValue + 1);
            document.querySelector("#score-player2").textContent = scorePlayer2; // Display Player 2's score
        }

        if (currentPlayer === 1) {
            currentPlayer = 2;
        } else {
            currentPlayer = 1;
        }
    }, 1000);
}
