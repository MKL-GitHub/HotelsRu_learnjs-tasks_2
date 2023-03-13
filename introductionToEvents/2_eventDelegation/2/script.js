const container = document.querySelector(".container");

container.addEventListener("mouseup", handleContainerClick)

function handleContainerClick(e) {
    if (e.target.tagName !== "SPAN") return;

    const ul = e.target.parentElement.querySelector("ul");
    
    if (ul) ul.hidden = !ul.hidden;
}