let i = 0;

setTimeout(() => console.log(i), 100);

console.log("start");
for (let j = 0; j < 100000000; j++) {
    i++;
}
console.log("end");

// Функции setTimeout и setInterval всегда выполняются после основного
// кода.