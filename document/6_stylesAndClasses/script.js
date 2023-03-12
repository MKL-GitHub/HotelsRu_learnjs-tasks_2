function showNotification(options) {
    const notification = document.createElement("div");

    notification.innerHTML = options.html;
    notification.className = "notification";
    notification.classList.add(options.className);
    notification.style.top = options.top + "px";
    notification.style.right = options.right + "px";
    notification.style.position = "fixed";

    document.querySelector("body").append(notification);

    setTimeout(() => notification.remove(), 1500);
}

showNotification({
    top: 10,
    right: 10,
    html: "Hello!",
    className: "welcome",
});