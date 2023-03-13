const button = document.getElementById("button");
const text = document.getElementById("text");

button.addEventListener("mousedown", () => {
    if (!text.hidden) text.hidden = true;
});