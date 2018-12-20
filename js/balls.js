window.onload = function () {
    //set up listeners
    let canvas = new Canvas("sack")
    run(canvas);
}

function startListeners() {
    let ballDropper = document.getElementById("btn_drop");
    ballDropper.addEventListener("click", /*make ball*/);
}

function run(canvas) {
    window.setInterval(clock(canvas),30);
}
function clock(canvas) {
    let balls = [];
    let mouse = {x: 0, y: 0};
    //clear canvas
    canvas.clear();
    //draw balls
    console.log("tick")
}

//\/==CLASSES==\/
class Canvas {
    constructor(name) {
        this.name = name;
        this.canvas = document.getElementById(this.name);
        this.ctx = this.canvas.getContext("2d");
        this.height = window.innerHeight - 50;
        this.width = window.innerWidth;
    }
    clear() {
        this.ctx.clearRect(0,0,this.width,this.height);
    }
}
class Ball {
    constructor(x, y, dx, dy, color, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.color = color;
        this.radius = radius;
    }
    changeColor() {}
    changeSpeed() {}
    move() {}
    kill() {}
}