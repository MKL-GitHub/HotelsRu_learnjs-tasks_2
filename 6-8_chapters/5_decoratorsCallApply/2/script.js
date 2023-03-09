function delay(f, ms) {
    return (...args) => setTimeout(() => f.apply(this, args), ms);
}

function f(...args) {
    console.log(args);
}

let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test", 1, 6);
f1500("test", "Mikhail");