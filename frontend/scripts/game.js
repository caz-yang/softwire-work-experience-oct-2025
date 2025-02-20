import createGame from "./gameLogicInterface.js";
import { drawGrid, refreshGameDisplay } from "./gameUI.js";
import{ drawUpcomingTetrominoes} from "./gameUI.js"
initialiseGame();

function initialiseGame() {
    let game = createGame();
    console.log(game);

    var audio = new Audio('../assets/Tetris.mp3')
    audio.play();
    audio.loop = true
    drawGrid();
    drawUpcomingTetrominoes(game)
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
        if (event.key === "ArrowDown") {
            console.log("Down arrow has been pressed");
            game.moveDown(); 
        }
        if (event.key === "ArrowUp") {
            console.log("Up arrow has been pressed");
            game.rotateTetrominoClockwise();
        if (event.key === "x") {
            console.log("X key has been pressed");
            game.rotateTetrominoAntiClockwise();
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

