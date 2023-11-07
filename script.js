
let images = ["dice-01.svg", "dice-02.svg", "dice-03.svg", "dice-04.svg", "dice-05.svg", "dice-06.svg"];
let dice = document.querySelectorAll("img");
let currentPlayer = 1;
let scorePlayer1 = 0;
let scorePlayer2 = 0;
let round = 0;

function roll() {

    // Check the round count and if it's over, runs the following script
    if (round >= 1) {
        // Show the winner status and the draw status
        document.querySelector("#total").innerHTML = (scorePlayer1 !== scorePlayer2) ? (scorePlayer1 > scorePlayer2) ? "The winner is Player 1" : "The winner is Player 2" : "Game DRAW"
        console.log("THIS SHOULD STOP");
        round = 0; // reset the round
        scorePlayer1 = 0; // reset player scores
        scorePlayer2 = 0;
        return
    } else {

        console.log(round)

        dice.forEach(function (die) {
            die.classList.add("shake");
        });

        setTimeout(function () {
            dice.forEach(function (die) {
                die.classList.remove("shake");
            });


            let dieOneValue = Math.floor(Math.random() * 6); // Dice one value
            let dieTwoValue = Math.floor(Math.random() * 6); // Dice two value
            // console.log(dieOneValue, dieTwoValue);

            document.querySelector("#die-1").setAttribute("src", images[dieOneValue]); // change the image according to the value
            document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]); // change the image according to the value
            document.querySelector("#total").innerHTML = "Your Value is " + ((dieOneValue + 1) + (dieTwoValue + 1));

            if (currentPlayer === 1) {
                scorePlayer1 += (dieOneValue + 1) + (dieTwoValue + 1); // Sum of 2 dices
                document.querySelector("#score-player1").textContent = scorePlayer1; // Display Player 1's score
                round = round + 0.5 // half of a round completed by player one
            } else {
                scorePlayer2 += (dieOneValue + 1) + (dieTwoValue + 1);
                document.querySelector("#score-player2").textContent = scorePlayer2; // Display Player 2's score
                round = round + 0.5 // half of a round completed by one player two
            }

            if (currentPlayer === 1) {
                currentPlayer = 2;
            } else {
                currentPlayer = 1;
            }

        }, 1000);
    }

}

