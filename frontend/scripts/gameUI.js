
import { TetrominoShapes } from "./gameLogicInterface.js";
export const BOARD_UNITS_WIDTH = 10;
export const BOARD_UNITS_HEIGHT = 20;
const BOARD_UNIT_PIXEL_SIZE = 40;

const BOARD_WIDTH = BOARD_UNITS_WIDTH * BOARD_UNIT_PIXEL_SIZE;
const BOARD_HEIGHT = BOARD_UNITS_HEIGHT * BOARD_UNIT_PIXEL_SIZE;

export function drawGrid(){
    var gameCanvas=document.getElementById("game-grid");
    gameCanvas.setAttribute("width", BOARD_WIDTH)
    gameCanvas.setAttribute("height", BOARD_HEIGHT)

    var gameContext = gameCanvas.getContext("2d");
    addHorizontalGameLine(gameContext);
    addVerticalGameLines(gameContext);
    gameContext.stroke();
}

function addVerticalGameLines(gameContext) {
    for (var xPosition=0; xPosition<=BOARD_WIDTH; xPosition = xPosition + BOARD_UNIT_PIXEL_SIZE) {
        gameContext.moveTo(xPosition,0);
        gameContext.lineTo(xPosition, BOARD_HEIGHT);
    }
}

function addHorizontalGameLine(gameContext) {
    for (var yPosition = 0; yPosition <= BOARD_HEIGHT; yPosition = yPosition + BOARD_UNIT_PIXEL_SIZE) {
        gameContext.moveTo(0, yPosition);
        gameContext.lineTo(BOARD_WIDTH, yPosition);
    }
}
export function drawUpcomingTetrominoes(game){
    // Assuming upcomingTetrominoes is an array of tetrominoes
    const upcomingTetrominoes = game.gameState.upcomingTetrominoes;
    const canvas = document.getElementById("upcoming-pieces-canvas");
    const ctx = canvas.getContext("2d");
    ctx.canvas.height = 300;
    ctx.canvas.width = 200;
    const gridSize = 20;
    // Displaying upcoming tetrominoes
    upcomingTetrominoes.forEach((upcomingTetromino, index) => {
        // Here I'm assuming `tetromino` contains the shape of the tetromino and its color
        const xPos = 1;
        const yPos = index * 5;  // This ensures that each upcoming piece is stacked vertically
        
        
        // Assuming you have a way to extract the tetromino's shape and color
        drawPiece(TetrominoShapes[upcomingTetromino], xPos, yPos,ctx);
    });
}

function clearGrid() {
    
}

function drawTiles(game) {
    
}
export function drawPiece(piece, xPos, yPos,ctx) {
    const gridSize = 20;
    ctx.fillStyle = 'cyan';
    for (let row = 0; row < piece.length; row++) {
        for (let col = 0; col < piece[row].length; col++) {
            if (piece[row][col]) {
                ctx.strokeRect(col * gridSize + xPos * gridSize, row * gridSize + yPos * gridSize, gridSize, gridSize); 
                ctx.fillRect(col * gridSize + xPos * gridSize, row * gridSize + yPos * gridSize, gridSize, gridSize);
            }
        }
    }
}
