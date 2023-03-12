const table = document.getElementById("age-table");
const labels = table.querySelectorAll("label");
const td = table.querySelectorAll("td").find(td => td.textContent == "Age");
const form = document.forms.search;
const firstInput = form.querySelector("input");
const inputs = form.querySelectorAll("input");
const lastInput = inputs[inputs.length - 1];