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
function getRand(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function clock(canvas) {
    //clear canvas
    canvas.clear();
    let balls = [];
    let mouse = {x: 0, y: 0};
    //draw balls
    balls.push(new Ball(getRand(100), getRand(1000), 1, "red", 1));
    balls.forEach(function(ball) {
        ball.move();
        ball.draw();
    });
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
    constructor(x, y, speed, color, radius) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.color = color;
        this.radius = radius;
        this.canvas = new Canvas("sack");
    }
    draw() {
        this.canvas.ctx.fillStyle = this.color;
        this.canvas.ctx.beginPath();
        this.canvas.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.canvas.ctx.stroke();
        this.canvas.ctx.fill();
    }
    changeColor(color) {
        this.color = color;
    }
    changeSpeed(speed) {
        this.speed = speed;
    }
    move() {
        this.x += this.speed;
        this.y += this.speed;
    }
    kill() {}
}