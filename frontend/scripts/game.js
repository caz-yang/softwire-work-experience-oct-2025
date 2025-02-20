import createGame  from "./gameLogicInterface.js"
import { drawGrid } from "./gameUI.js"

initialiseGame();

function initialiseGame() {
    let game = createGame();

    document.addEventListener("keyup", (event) => {
        if (event.key === "ArrowUp"){
            console.log("Up arrow has been pressed");{
            game.rotateTetrominoClockwise();
        }
        if (event.key === "keyX"){
            console.log("X key has been pressed");{
            game.rotateTetrominoAnticlockwise();
           
        }
          
    drawGrid();    
    }
}  
    });                 
}     