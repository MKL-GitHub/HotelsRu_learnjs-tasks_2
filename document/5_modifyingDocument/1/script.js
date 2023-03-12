elem.append(document.createTextNode(text));  // *1
elem.innerHTML = text;  // *2
elem.textContent = text;  // *3

// В 1 и 3 случае будет просто добавлен текст.
// Во 2 случае будет полностью перезаписано содержимое тега.