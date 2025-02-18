import createGame  from "./gameLogicInterface.js"
import { drawGrid , drawTiles}  from "./gameUI.js"

initialiseGame();

function initialiseGame() {
    let game = createGame();

    drawGrid();

    console.log(game);
    
    drawTiles(game);
}

