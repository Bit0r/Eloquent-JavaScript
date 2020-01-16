let cx = document.querySelector("canvas")?.getContext("2d")!;

let lastTime: number;
function frame(time: number) {
    if (lastTime !== undefined) {
        updateAnimation(Math.min(100, time - lastTime) / 1000);
    }
    lastTime = time;
    requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

let x = 100, y = 300;
let radius = 10;
let speedX = 100, speedY = 60;

function updateAnimation(step: number) {
    cx.clearRect(0, 0, 400, 400);
    cx.strokeStyle = "blue";
    cx.lineWidth = 4;
    cx.strokeRect(25, 25, 350, 350);

    x += step * speedX;
    y += step * speedY;
    if (x < 25 + radius || x > 375 - radius) speedX = -speedX;
    if (y < 25 + radius || y > 375 - radius) speedY = -speedY;
    cx.beginPath();
    cx.arc(x, y, radius, 0, 7);
    cx.fillStyle = "red";
    cx.fill();
}