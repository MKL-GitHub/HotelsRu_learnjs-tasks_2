const mouse = document.getElementById("mouse");

mouse.tabIndex = 0;

mouse.addEventListener("keydown", handleMouseMove);

function handleMouseMove(event) {
    const MOUSE_STEP = 100;

    const mouseLeft = parseFloat(getComputedStyle(mouse).left);
    const mouseTop = parseFloat(getComputedStyle(mouse).top);

    switch (event.key) {
        case "ArrowUp":
            mouse.style.top = `${mouseTop - MOUSE_STEP}px`;
            break;
        case "ArrowDown":
            mouse.style.top = `${mouseTop + MOUSE_STEP}px`;
            break;
        case "ArrowLeft":
            mouse.style.left = `${mouseLeft - MOUSE_STEP}px`;
            break;
        case "ArrowRight":
            mouse.style.left = `${mouseLeft + MOUSE_STEP}px`;
            break;
    }
}