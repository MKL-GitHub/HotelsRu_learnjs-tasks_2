function getScrollBottom(elem) {
    return elem.scrollHeight - elem.clientHeight - elem.scrollTop;
}

const elem = document.getElementById("elem");

setInterval(() => {
    console.log(getScrollBottom(elem));
}, 1000);
