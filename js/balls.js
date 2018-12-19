window.onload = function () {
    run();
}

function run() {
    window.setInterval(clock,30);
}
function clock() {
    let c = getCanvas();
    //clear canvas
    c.ctx.clearRect(0,0,c.width,c.height);
    //draw balls
    console.log("tick")
}
function getCanvas() {
    let canvas = document.getElementById('sack');
    let ctx = canvas.getContext('2d');
    let height = window.innerHeight - 50;
    let width = window.innerWidth;
    return {canvas, ctx, height, width};
}