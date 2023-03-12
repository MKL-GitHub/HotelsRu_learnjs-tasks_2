const table = document.getElementById("table");
const tbody = table.querySelector("tbody");

for (let i = 0; i < tbody.rows.length; i++) {
    tbody.rows[i].cells[i].style.backgroundColor = "red";
}