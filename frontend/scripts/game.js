import createGame from "./gameLogicInterface.js";
import { drawGrid } from "./gameUI.js";
import{ drawUpcomingTetrominoes} from "./gameUI.js"
initialiseGame();

function initialiseGame() {
    let game = createGame();

    drawGrid();
    drawUpcomingTetrominoes(game)

    
}

