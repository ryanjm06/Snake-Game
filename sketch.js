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
let DirX = 20
let DirY = 0

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
    fill(200,0,0)
    circle(foodX,foodY,GRID_SIZE)
    if (headX > 560 || headX < 20 || headY > 560 || headY < 40) {
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