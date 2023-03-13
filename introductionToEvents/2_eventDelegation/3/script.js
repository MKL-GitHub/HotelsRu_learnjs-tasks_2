const grid = document.getElementById("grid");
const tbody = grid.querySelector("tbody");
const rows = Array.from(tbody.querySelectorAll("tr"));

grid.addEventListener("mouseup", handleGridClick);

function handleGridClick(e) {
    if (e.target.tagName !== "TH") return;

    switch (e.target.getAttribute("data-type")) {
        case "string":
            rows.sort((a, b) => a.cells[1].textContent.localeCompare(b.cells[1].textContent));
            break;
        case "number":
            rows.sort((a, b) => a.cells[0].textContent - b.cells[0].textContent);
            break;
    }

    tbody.append(...rows);
}