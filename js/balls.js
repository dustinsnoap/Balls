window.onload = function () {
    //set up listeners
    setupCanvas();
    startListeners();
    let canvas = getCanvas();
    run();
}

function startListeners() {
    let canvas = getCanvas();
    let ballDropper = document.getElementById("btn_drop");
    ballDropper.addEventListener("click", canvas.addBall);
}

function getCanvas() {
    console.log("Test");
    return document.getElementById("sack");
}
function setupCanvas() {
    let canvas = document.getElementById("sack");
    canvas.ctx = canvas.getContext("2d");
    canvas.height = window.innerHeight - 50;
    canvas.width = window.innerWidth;
    canvas.balls = [];
    canvas.addBall = function() {
        canvas.balls.push(new Ball(getRand(1000), getRand(1000), 1, "red", 10));
    };
    canvas.clear = function() {
        console.log("tes");
        this.ctx.clearRect(0,0,this.width,this.height);
    };
}

function run() {
    window.setInterval(clock,500);
}
function getRand(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function clock() {
    //clear canvas
    let canvas = getCanvas();
    // canvas.clear();
    // let balls = [];
    // let mouse = {x: 0, y: 0};
    //draw balls
    canvas.balls.forEach(function(ball) {
        // ball.move();
        ball.draw();
    });
    console.log(canvas.balls);
}

//\/==CLASSES==\/
class Ball {
    constructor(x, y, speed, color, radius) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.color = color;
        this.radius = radius;
        this.canvas = getCanvas();
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