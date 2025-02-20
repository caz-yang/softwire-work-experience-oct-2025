import createGame  from "./gameLogicInterface.js"
import { drawGrid, refreshGameDisplay } from "./gameUI.js"


initialiseGame();

function initialiseGame() {
    let game = createGame();
    console.log(game);

    drawGrid();
    updateScoreDisplay(game);


    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft") {
            console.log("Left arrow has been pressed");
            game.moveLeft();
        }
        if (event.key === "ArrowRight"){
            console.log("Right arrow has been pressed");
            game.moveRight();
        }
    });

    window.setInterval(() => {
        game.gameTick();
        refreshGameDisplay(game);
        checkGameOver(game);
    }, 1000);
}

function checkGameOver(game) {

}

function updateScoreDisplay(game) {
    document.getElementById("score").textContent=game.getScore()

}