class draw {
    cx: CanvasRenderingContext2D;
    constructor(Context: CanvasRenderingContext2D) {
        this.cx = Context;
        this.trapezoid();
        this.diamond();
        this.zigzag();
        this.spiral();
        this.star();
    }
    private trapezoid() {
        this.cx.beginPath();
        this.cx.moveTo(31, 40);
        this.cx.lineTo(99, 40);
        this.cx.lineTo(120, 90);
        this.cx.lineTo(10, 90);
        this.cx.closePath();
        this.cx.stroke();
    }
    private diamond() {
        this.cx.save();
        this.cx.translate(180, 70);
        this.cx.rotate(Math.PI / 4);
        this.cx.fillStyle = 'red';
        this.cx.fillRect(-39, -39, 78, 78);
        this.cx.restore();
    }
    private zigzag() {
        this.cx.beginPath();
        this.cx.moveTo(250, 10);
        for (let y = 10; y <= 130; y += 20) {
            this.cx.lineTo(350, y + 10);
            this.cx.lineTo(250, y + 20);
        }
        this.cx.stroke();
    }
    private spiral() {
        let radius = 50, xCenter = 360 + radius, yCenter = 10 + radius;
        this.cx.beginPath();
        this.cx.moveTo(xCenter, yCenter);
        for (let i = 0; i < 300; i++) {
            let angle = i * Math.PI / 30;
            let dist = radius * i / 300;
            this.cx.lineTo(xCenter + Math.cos(angle) * dist,
                yCenter + Math.sin(angle) * dist);
        }
        this.cx.stroke();
    }
    private star() {
        let xCenter = 530, yCenter = 65, radius = 55;
        this.cx.beginPath();
        this.cx.moveTo(xCenter + radius, yCenter);
        for (let angle = Math.PI / 4; angle <= 2 * Math.PI; angle += Math.PI / 4)
            this.cx.quadraticCurveTo(xCenter, yCenter, xCenter + radius * Math.cos(angle), yCenter + radius * Math.sin(angle));
        this.cx.fillStyle = 'yellow';
        this.cx.fill();
    }
}

new draw(<CanvasRenderingContext2D>document.querySelector('canvas')?.getContext('2d'));