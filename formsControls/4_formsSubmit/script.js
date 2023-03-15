const button = document.querySelector(".button");

button.addEventListener("mouseup", handlePromptMouseup);

function handlePromptMouseup() {
    showPrompt("Введите что-нибудь", (value) => {
        alert("Вы ввели: " + value);
    });
}

function showPrompt(html, callback) {
    const formContainer = document.querySelector(".prompt-form-container");
    const form = formContainer.querySelector(".prompt-form");
    const message = form.querySelector(".prompt-form__message");
    
    formContainer.style.display = "block";
    message.textContent = html;
    form.elements.text.focus();

    if (!showPrompt.hasSubmitResetEvents) {
        form.addEventListener("submit", handleOkSubmit);
        form.addEventListener("reset", handleCancelMouseup);
        showPrompt.hasSubmitResetEvents = true;
    }

    function handleCancelMouseup() {
        callback(null);
        formContainer.style.display = "none";
    }

    function handleOkSubmit(event) {
        event.preventDefault();

        if (form.elements.text.value) {
            callback(form.elements.text.value);
            form.elements.text.value = "";
            formContainer.style.display = "none";
        }
    }
}


