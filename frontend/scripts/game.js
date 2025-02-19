import createGame  from "./gameLogicInterface.js"
import { drawGrid } from "./gameUI.js"

initialiseGame();

function initialiseGame() {
    let game = createGame();

    drawGrid();


    game.updateActiveTetromino()


    console.log(game);
}