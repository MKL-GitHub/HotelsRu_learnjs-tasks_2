button.addEventListener("click", () => alert("1"));

button.removeEventListener("click", () => alert("1"));

button.onclick = () => alert(2);

// Выполнится 1-й и 2-й обработчики.
// 1-й обработчик не будет удален, поскольку для удаления
// необходимо указать имя функции.