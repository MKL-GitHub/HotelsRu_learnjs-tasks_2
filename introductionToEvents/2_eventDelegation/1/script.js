const container = document.querySelector(".container");

container.addEventListener("mouseup", handleCloseButton);

function handleCloseButton(e) {
    if (e.target.className !== "message-item__close") return;

    e.target.parentElement.style.display = "none";
}