function showTime() {
    const currentDate = new Date();

    spans[0].textContent = format(currentDate.getHours());
    spans[1].textContent = format(currentDate.getMinutes());
    spans[2].textContent = format(currentDate.getSeconds());

    function format(elem) {
        return elem < 10 ? "0" + elem : elem;
    }
}

const time = document.querySelector(".time");
const spans = time.querySelectorAll("span");

showTime();
setInterval(showTime, 1000);