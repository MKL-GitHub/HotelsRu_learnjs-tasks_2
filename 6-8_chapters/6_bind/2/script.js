"use strict";

function f() {
    alert(this.name);
}

f = f.bind( {name: "Вася"} ).bind( {name: "Петя"} );

f();

// Дополнительное связывание ни к чему не приведет.
// Ответ будет "Вася".

