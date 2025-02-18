import createGame  from "./gameLogicInterface.js"
import { drawGrid, refreshGameDisplay } from "./gameUI.js"

initialiseGame();

function initialiseGame() {
    let game = createGame();
    addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft") {
            console.log("left arrow has been pressed");
            moveLeft();

        }    

    });
    onkeydown = (event) => {};
    
    drawGrid();


    console.log(game);

    window.setInterval(() => {
        game.gameTick();
        refreshGameDisplay(game);
        checkGameOver(game);
    }, 1000);
}

function checkGameOver(game) {
    
}