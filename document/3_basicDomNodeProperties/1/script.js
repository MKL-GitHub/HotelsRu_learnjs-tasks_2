const ul = document.querySelector("ul");
const lis= ul.querySelectorAll("li");
let lisQuantity = lis.length;

for (let li of lis) {
    console.log(li.textContent);
}