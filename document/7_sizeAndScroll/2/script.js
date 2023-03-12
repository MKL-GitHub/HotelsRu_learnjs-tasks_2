function getScrollWidth(elem) {
    return elem.offsetWidth - elem.clientWidth;
}

const elem = document.getElementById("elem");

console.log(getScrollWidth(elem));