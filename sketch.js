const GRID_SIZE = 20;
let numberOfCells = 600/GRID_SIZE;
let randomCellx;
let randomCelly;
let randomCellFloorx;
let randomCellFloory;
let foodX;
let foodY;
let headX = 20;
let headY = 300;

function setup() {
    createCanvas(600,600);
    frameRate(5);
    randomCellx = random(numberOfCells);
    randomCellFloorx = floor(randomCellx);
    randomCelly = random(numberOfCells);
    randomCellFloory = floor(randomCelly);
    foodY = randomCellFloory * GRID_SIZE + GRID_SIZE / 2;
    foodX = randomCellFloorx * GRID_SIZE + GRID_SIZE / 2;
}



function draw() {
    background(255)
    if (headX > 560) {
        fill(0,200,0);
        square(headX,headY,GRID_SIZE)
        headX = headX
    } else {
        fill(0,200,0);
        square(headX,headY,GRID_SIZE)
        headX = headX + GRID_SIZE
    }
    fill(200,0,0)
    circle(foodX,foodY,GRID_SIZE)
}