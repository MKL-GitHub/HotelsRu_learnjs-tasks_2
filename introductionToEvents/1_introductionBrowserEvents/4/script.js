const field = document.querySelector(".soccer-field");
const ball = document.querySelector(".ball");

const fieldBorderWidth = parseInt(getComputedStyle(field).borderWidth);
const fieldLeft = field.offsetLeft + fieldBorderWidth;
const fieldRight = fieldLeft + field.clientWidth;
const fieldTop = field.offsetTop + fieldBorderWidth;
const fieldBottom = fieldTop + field.clientWidth;
const halfBallWidth = ball.offsetWidth / 2;


document.addEventListener("mousedown", (e) => {
    if (e.clientX < fieldLeft || e.clientX > fieldRight ||
        e.clientY < fieldTop || e.clientY > fieldBottom) return;

    let ballLeft = e.clientX - fieldLeft - halfBallWidth;
    let ballTop = e.clientY - fieldTop - halfBallWidth;

    if (ballLeft < 0) {
        ballLeft = 0;
    }
    else if (ballLeft > field.clientWidth - ball.offsetWidth) {
        ballLeft = field.clientWidth - ball.offsetWidth;
    }

    if (ballTop < 0) {
        ballTop = 0;
    }
    else if (ballTop > field.clientHeight - ball.offsetWidth) {
        ballTop = field.clientWidth - ball.offsetWidth;
    }

    ball.style.left = ballLeft + "px";
    ball.style.top = ballTop + "px";
});