"use strict";

function f() {
    alert ( this );
}

let user = {
    g: f.bind(null),
};

user.g();

// В режиме "strict", внутри функции f, this = undefined.
// Внутри объекта user, this для функции f будет сам объект user.
// Но так как мы привязываем к контексту null, то this для фнукции f
// становится равным null, следовательно и ответ будет null.