window.onload = function () {
    //set up listeners
    setupCanvas();
    startListeners();
    let canvas = getCanvas();
    run();
}
//\/===SETUP===\/
function startListeners() {
    let canvas = getCanvas();
    let ballDropper = document.getElementById("btn_drop");
    ballDropper.addEventListener("click", canvas.addBall);
    let colorChanger = document.getElementById("btn_color");
    colorChanger.addEventListener("click", canvas.changeBallColor);
    let clear = document.getElementById("btn_clear");
    clear.addEventListener("click", canvas.castrate);
}
function getCanvas() {
    return document.getElementById("sack");
}
function setupCanvas() {
    let canvas = document.getElementById("sack");
    canvas.ctx = canvas.getContext("2d");
    canvas.height = window.innerHeight - 50;
    canvas.width = window.innerWidth;
    canvas.balls = [];
    canvas.addBall = function() {
        canvas.balls.push(new Ball(getRand(canvas.width), getRand(canvas.height), 1, 1, "red", 10));
    };
    canvas.changeBallColor = function() {
        canvas.balls.forEach(function(ball) {
            ball.changeColor("#00ccff");
        });
    }
    canvas.castrate = function() {
        canvas.balls = [];
    }
    canvas.clear = function() {
        this.ctx.clearRect(0,0,this.width,this.height);
    };
}
function run() {
    window.setInterval(clock,1);
}
function getRand(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
//\/===Main Code===\/
function clock() {
    let canvas = getCanvas();
    canvas.clear();
    canvas.balls.forEach(function(ball) {
        ball.move();
        ball.draw();
    });
}

//\/==CLASSES==\/
class Ball {
    constructor(x, y, dx, dy, color, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
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
        this.x += this.dx;
        this.y += this.dy;
        if(this.x <= 0 || this.x >= this.canvas.width) this.dx *= -1;
        if(this.y <= 0 || this.y >= this.canvas.height) this.dy *= -1;
    }
}