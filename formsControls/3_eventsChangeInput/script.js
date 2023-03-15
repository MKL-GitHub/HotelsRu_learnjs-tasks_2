const form = document.forms.depositCalculator;
const initialDeposit = form.elements.initialDeposit;
const depositTerm = form.elements.depositTerm;
const annualInterestRate = form.elements.annualInterestRate;
const wasChart = document.querySelector(".chart_was");
const willBeChart = document.querySelector(".chart_will-be");

form.addEventListener("input", handleFormInput);

function handleFormInput(event) {
    console.log(depositTerm.value)
    if (initialDeposit.value) {
        wasChart.children[1].textContent = initialDeposit.value;
    }
    
    if (!initialDeposit.value || !annualInterestRate.value) return;

    willBeChart.children[1].textContent = 
        initialDeposit.value * +annualInterestRate.value * depositTerm.value / 100 + +initialDeposit.value;

    willBeChart.children[2].style.height = "100px";
    let percent =
        initialDeposit.value * 100 / willBeChart.children[1].textContent;

    if (percent < 1) percent = 1;

    wasChart.children[2].style.height = percent + "px";
}