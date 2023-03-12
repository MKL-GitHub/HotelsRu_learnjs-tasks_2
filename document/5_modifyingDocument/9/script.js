const ul = document.getElementById("ul");
const li1 = ul.children[0];

const li2 = document.createElement("li");
const li3 = document.createElement("li");

li2.textContent = 2;
li3.textContent = 3;

li1.insertAdjacentElement('afterend', li2);
li2.insertAdjacentElement('afterend', li3);