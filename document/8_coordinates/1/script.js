document.addEventListener("mousedown", (e) => {
    console.log(`${e.clientY}:${e.clientX}`);
});

const soccerField = document.querySelector(".soccer-field");
const style = getComputedStyle(soccerField);

let y = parseFloat(style.top);
let x = parseFloat(style.left);
let h = parseFloat(style.height);
let w = parseFloat(style.width);

let pos_1 = `${y}:${x}`;
let pos_2 = `${y + soccerField.offsetHeight}:${x + soccerField.offsetWidth}`;
let pos_3 = `${y + soccerField.clientTop}:${x + soccerField.clientLeft}`;
let pos_4 = `${y + h + (soccerField.offsetHeight - h) / 2}:${x + w + (soccerField.offsetWidth - w) / 2}`;

console.log("pos_1:", pos_1);
console.log("pos_2:", pos_2);
console.log("pos_3:", pos_3);
console.log("pos_4:", pos_4);
