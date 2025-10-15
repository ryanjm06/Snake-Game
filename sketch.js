const GRID_SIZE = 20;
let randomCell;
let randomCellFloor;
let foodX;
let foodY;
let headX = 20;
let headY = 300;
let DirX = 20
let DirY = 0

function setup() {
    createCanvas(600,600);
    frameRate(5);
    foodY = newFoodCoordinate();
    foodX = newFoodCoordinate();
}

function draw() {
    background(255)
    food()
    snake()
}
/**
 * Generates a random coordinate on the grid
 * @returns a coordinate
 */
function newFoodCoordinate() {
    let numberOfCells = 600/GRID_SIZE;
    randomCell = random(numberOfCells);
    randomCellFloor = floor(randomCell);
    return randomCellFloor * GRID_SIZE + GRID_SIZE / 2;
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        DirX = 0
        DirY = -20
    }
    if (keyCode === LEFT_ARROW) {
        DirY = 0
        DirX = -20
    }
    if (keyCode === DOWN_ARROW) {
        DirX = 0
        DirY = 20
    }
    if (keyCode === RIGHT_ARROW) {
        DirY = 0
        DirX = 20
    }
}

function snake() {
    if (headX > 560 || headX < 20 || headY > 560 || headY <= 0) {
        fill(0,200,0);
        square(headX,headY,GRID_SIZE)
        headX = headX
        headY = headY
    } else {
        fill(0,200,0);
        square(headX,headY,GRID_SIZE)
        headX = headX + DirX
        headY = headY + DirY
    }
}
/**
 * Draws food and if eaten, moves food
*/
function food() {
    fill(200,0,0)
    circle(foodX,foodY,GRID_SIZE)
    if (headX === foodX - 10 && headY === foodY - 10) {
        foodY = newFoodCoordinate();
        foodX = newFoodCoordinate();  
    }
}