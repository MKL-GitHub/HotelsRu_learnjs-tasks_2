const table = document.getElementById("table");
const tbody = table.querySelector("tbody");

const rows = Array.from(tbody.rows)
    .sort((a, b) => a.cells[0].textContent.localeCompare(b.cells[0].textContent))

tbody.append(...rows);