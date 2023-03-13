const closeBtns = document.querySelectorAll(".message-item__close");

for (const btn of closeBtns) {
    btn.addEventListener("mouseup", handleCloseButton);
}

function handleCloseButton() {
    this.parentElement.style.display = "none";
}