const canvas = document.getElementById("canvas");
const cont = canvas.getContext("2d");

let size = 20;
let isPressed = false;
let color = "black";
let x;
let y;

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;
  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  cont.beginPath();
  cont.arc(x, y, size, 0, Math.PI * 2);
  cont.fillStyle = color;
  cont.fill();
}

function drawLine(x1, y1, x2, y2) {
  cont.beginPath();
  cont.moveTo(x1, y1);
  cont.lineTo(x2, y1);
  cont.strokeStyle = color;
  cont.lineWidth = size * 2;
  cont.stroke();
}
