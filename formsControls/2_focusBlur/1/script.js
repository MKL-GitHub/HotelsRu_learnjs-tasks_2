const textareaDiv = document.querySelector(".textarea-div");
const textarea = document.createElement("textarea");

textarea.className = "textarea-div";

textareaDiv.addEventListener("mouseup", transformToTextarea);
textarea.addEventListener("focusout", transformToDiv);
document.addEventListener("keydown", handleEnter);

function transformToTextarea() {
    textarea.value = textareaDiv.textContent;
    textareaDiv.replaceWith(textarea);
    textarea.focus();
}

function transformToDiv() {
    textareaDiv.textContent = textarea.value;
    textarea.replaceWith(textareaDiv);
}

function handleEnter(event) {
    if(event.key !== "Enter") return;
    transformToDiv();
}