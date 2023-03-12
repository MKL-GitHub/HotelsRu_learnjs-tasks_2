function positionAt(anchor, position, elem) {
    const note = document.createElement("div");

    note.textContent = elem;
    note.className = "note";
    document.body.append(note);
    
    switch (position) {
        case "top":
            note.style.left = anchor.offsetLeft + "px";
            note.style.top = anchor.offsetTop - note.offsetHeight + "px";
            break;
        case "right":
            note.style.left = anchor.offsetWidth + anchor.offsetLeft + "px";
            note.style.top = anchor.offsetTop + "px";
            break;
        case "bottom":
            note.style.left = anchor.offsetLeft + "px";
            note.style.top = anchor.offsetTop + anchor.offsetHeight + "px";
            break;
    }
}

const anchor = document.querySelector(".anchor");

positionAt(anchor, "top", "note above");
positionAt(anchor, "right", "note at the right");
positionAt(anchor, "bottom", "note below");