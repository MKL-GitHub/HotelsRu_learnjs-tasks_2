"use strict";

function askPassword(ok, fail) {
    let password = prompt("Password?", "");

    if (password == "rockstar") ok();
    else fail();
}

let user = {
    name: "Вася",

    loginOk() {
        alert(`${this.name} logged in`);
    },

    loginFail() {
        alert(`${this.name} failed to log in`);
    }
};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// Когда мы внутри функции askPassword вызываем функции ok или fail,
// то для этих функций контекстом является undefined, у которого 
// нет свойства name. Следовательно нам надо сделать привязку к
// объекту у которого есть это свойство.