const list = document.getElementById("unordered-list");

while (true) {
    const text = prompt("Введите пункт списка", "");

    if (!text) break;
    
    const li = document.createElement("li");
    
    li.textContent = text;
    list.append(li);
}
