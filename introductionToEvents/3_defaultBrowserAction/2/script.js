const contents = document.getElementById("contents");

contents.addEventListener("click", handleContents);

function handleContents(e) {
    if (e.target.tagName !== "A") return;
    
    const leavePageConfirmation = confirm("Вы действительно хотите покинуть страницу?");
    
    if (!leavePageConfirmation) e.preventDefault();
}