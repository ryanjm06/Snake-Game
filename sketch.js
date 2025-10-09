const GRID_SIZE = 20;

function setup() {
    createCanvas(600,600);
    frameRate(5);
    let numberOfCells = width/GRID_SIZE;
    let randomCellx = random(numberOfCells);
    let randomCellFloorx = floor(randomCellx);
    let randomCelly = random(numberOfCells);
    let randomCellFloory = floor(randomCelly);
    let foodX;
    let foodY;
}

    let headX = 20;
    let headY = 300;
function draw() {
    background(255)
    if (headX > 590) {
    }
    else {
    fill(0,200,0);
    square(headX,headY,GRID_SIZE)
    headX = headX + 20
    }
    foodY = randomCellFloory * GRID_SIZE + GRID_SIZE / 2;
    foodX = randomCellFloorx * GRID_SIZE + GRID_SIZE / 2;
    fill(200,0,0)
    circle(foodX,foodY,GRID_SIZE)
}