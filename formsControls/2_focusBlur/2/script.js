const table = document.querySelector(".table");
const tds = table.querySelectorAll("td");
const textarea = document.createElement("textarea");

let canHandleTable = true;

table.addEventListener("mouseup", handleTableMouseup);

function addButtons(td) {
    const div = document.createElement("div");
    const okBtn = document.createElement("button");
    const cancelBtn = document.createElement("button");

    div.append(okBtn, cancelBtn);
    td.append(div);

    div.className = "textarea-btns";
    okBtn.textContent = "OK";
    cancelBtn.textContent = "CANCEL";

    okBtn.addEventListener("mouseup", () => {
        td.innerHTML = td.querySelector("textarea").value;
        canHandleTable = true;
    });

    cancelBtn.addEventListener("mouseup", () => {
        td.innerHTML = td.querySelector("textarea").textContent;
        canHandleTable = true;
    });
}

function handleTableMouseup(event) {
    if (!canHandleTable) return;

    const td = event.target.closest("td");

    if (!td) return;
    
    let tdInnerHTML = "";

    for (const child of td.childNodes) {
        tdInnerHTML += child.outerHTML ? "\n" + child.outerHTML : child.textContent.trim();
    }

    canHandleTable = false;
    td.innerHTML = `<textarea>${tdInnerHTML}</textarea>`;
    addButtons(td);
}

