"use strict";

function sayHi() {
    alert( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind( {name: "Вася"} );

alert( bound.text ); 

// Ответом будет "undefined", поскольку мы привязываем объект, у которого
// нет такого свойства.