function createTree(container, data) {
    container.append(document.createElement("ul"));

    for (let [key, value] of Object.entries(data)) {
        const li = document.createElement("li");
        
        li.textContent = key;
        ul.append(li);

        if (Object.keys(value).length) {
            createTree(li, value);
        }
    }
}

let data = {
    "Рыбы": {
      "форель": {},
      "лосось": {},
    },
  
    "Деревья": {
      "Огромные": {
        "секвойя": {},
        "дуб": {},
      },

      "Цветковые": {
        "яблоня": {},
        "магнолия": {},
      },
    },
  };

  let container = document.getElementById("container");

  createTree(container, data);