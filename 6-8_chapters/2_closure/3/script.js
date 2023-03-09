"use strict";

let phrase = "Hello";

if (true) {
    let user = "John";

    function sayHi() {
        alert(`${phrase}, ${user}`);
    }
}

sayHi();

// Выдаст ошибку, поскольку функция sayHi() существует только
// внутри блока if() {} 