function positionAt(anchor, position, elem) {
    const note = document.createElement("div");

    note.textContent = elem;
    note.className = "note";
    document.body.append(note);
    
    switch (position) {
        case "top-in":
            note.style.left = anchor.offsetLeft + "px";
            note.style.top = anchor.offsetTop + "px";
            break;
        case "right-in":
            note.style.left = anchor.offsetWidth + anchor.offsetLeft - note.offsetWidth + "px";
            note.style.top = anchor.offsetTop + "px";
            break;
        case "bottom-in":
            note.style.left = anchor.offsetLeft + "px";
            note.style.top = anchor.offsetTop + anchor.offsetHeight - note.offsetHeight + "px";
            break;
        case "top-out":
            note.style.left = anchor.offsetLeft + "px";
            note.style.top = anchor.offsetTop - note.offsetHeight + "px";
            break;
        case "right-out":
            note.style.left = anchor.offsetWidth + anchor.offsetLeft + "px";
            note.style.top = anchor.offsetTop + "px";
            break;
        case "bottom-out":
            note.style.left = anchor.offsetLeft + "px";
            note.style.top = anchor.offsetTop + anchor.offsetHeight + "px";
            break;
    }
}

const anchor = document.querySelector(".anchor");

positionAt(anchor, "top-out", "note top-out");
positionAt(anchor, "right-out", "note right-out");
positionAt(anchor, "bottom-out", "note bottom-out");
positionAt(anchor, "top-in", "note top-in");
positionAt(anchor, "right-in", "note right-in");
positionAt(anchor, "bottom-in", "note bottom-in");