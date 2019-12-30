const results = [
    { name: "Satisfied", count: 1043, color: "lightblue" },
    { name: "Neutral", count: 563, color: "lightgreen" },
    { name: "Unsatisfied", count: 510, color: "pink" },
    { name: "No comment", count: 175, color: "silver" }
];
let cx = <CanvasRenderingContext2D>document.querySelector("canvas")?.getContext("2d");
let total = results
    .reduce((sum, { count }) => sum + count, 0);//“解构”特性
let currentAngle = -0.5 * Math.PI;
let centerX = 300, centerY = 150;

results.forEach(result => {
    let sliceAngle = (result.count / total) * 2 * Math.PI;
    cx.beginPath();
    cx.arc(centerX, centerY, 100,
        currentAngle, currentAngle + sliceAngle);

    let middleAngle = currentAngle + 0.5 * sliceAngle;
    let textX = Math.cos(middleAngle) * 120 + centerX;
    let textY = Math.sin(middleAngle) * 120 + centerY;
    cx.textBaseline = "middle";
    if (Math.cos(middleAngle) > 0) {
        cx.textAlign = "left";
    } else {
        cx.textAlign = "right";
    }
    cx.font = "15px sans-serif";
    cx.fillStyle = "black";
    cx.fillText(result.name, textX, textY);

    currentAngle += sliceAngle;
    cx.lineTo(centerX, centerY);
    cx.fillStyle = result.color;
    cx.fill();
});