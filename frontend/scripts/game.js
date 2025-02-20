import createGame  from "./gameLogicInterface.js"
import { drawGrid } from "./gameUI.js"

initialiseGame();

function initialiseGame() {
    let game = createGame();
    drawGrid();

    document.addEventListener("keyup", (event) => {
        console.log("Key pressed:", event.key);
        if (event.key === "ArrowUp") {
            console.log("Up arrow has been pressed");
            game.rotateTetrominoClockwise();
        } else if (event.key === "x") {
            console.log("X key has been pressed");
            game.rotateTetrominoAntiClockwise();
        }
    });
}