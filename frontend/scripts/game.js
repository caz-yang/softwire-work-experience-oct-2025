import createGame  from "./gameLogicInterface.js"
import { drawGrid } from "./gameUI.js"


initialiseGame();

function initialiseGame() {
    let game = createGame();

    drawGrid();

    function updateScoreDisplay(gameScore) {
        document.getElementById("score").textContent=game.getScore()
    }

    console.log(game);
}
