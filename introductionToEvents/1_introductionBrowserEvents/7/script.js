const carousel = document.querySelector(".carousel");
const ul = carousel.querySelector("ul");
const buttons = carousel.querySelectorAll("button");

for (const btn of buttons) {
    btn.addEventListener("mouseup", handleCarouselButton);
}

function handleCarouselButton() {
    const DURATION = 350;

    let targetScrollLeft = ul.scrollLeft;
    let startTime = null;

    targetScrollLeft = this.className === "carousel__forth"
        ? targetScrollLeft += ul.offsetWidth + 0.5
        : targetScrollLeft -= ul.offsetWidth + 0.5;

    window.requestAnimationFrame(animateScroll);

    function animateScroll(timestamp) {
        if (!startTime) startTime = timestamp;

        const progress = timestamp - startTime;
        const scrollLeft = ul.scrollLeft;
        const currentScrollLeft = scrollLeft + ((targetScrollLeft - scrollLeft) * (progress / DURATION));

        ul.scrollLeft = currentScrollLeft;

        if (progress < DURATION) {
            window.requestAnimationFrame(animateScroll);
        }
    }
}