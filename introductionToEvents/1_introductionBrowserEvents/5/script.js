const menu = document.querySelector(".menu");
const menuList = menu.querySelector(".menu-list");
const lis = menuList.querySelectorAll("li");

for (let i = 1; i < lis.length; i++) {
    lis[i].style.top = i * 30 + "px";
}

menu.addEventListener("mousedown", (e) => {
    if (getComputedStyle(menuList).visibility === "hidden") {
        menuList.style.visibility = "visible";
    }
    else {
        menuList.style.visibility = "hidden";
    }
});

