const container = document.querySelector(".container");
const buttons = container.querySelectorAll("[data-tooltip]");

addTooltips();

for(const button of buttons) {
    button.addEventListener("mouseover", handleContainerMouseOver);
    button.addEventListener("mouseout", handleContainerMouseOut);
}

function addTooltips() {
    for(let i = 0; i < buttons.length; i++) {
        const tooltip = document.createElement("div");
    
        if (i == 0) tooltip.style.width = "235%";
        else if (i == 1) tooltip.style.width = "116%";

        tooltip.className = "tooltip";
        tooltip.textContent = buttons[i].getAttribute("data-tooltip");
        buttons[i].append(tooltip);
    }
}

function handleContainerMouseOver(e) {
    const tooltip = this.querySelector(".tooltip");

    tooltip.style.display = "block";

    if (this.getBoundingClientRect().top <= tooltip.offsetHeight) {
        tooltip.style.transform = 'none';
        tooltip.style.top = "31px";
    }
    else {
        tooltip.style.transform = 'translateY(calc(-100% - 5px))';
        tooltip.style.top = 0;
    }
}

function handleContainerMouseOut(e) {
    const tooltip = this.querySelector(".tooltip");

    tooltip.style.display = "none";
}