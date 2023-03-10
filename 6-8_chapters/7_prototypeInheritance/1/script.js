let animal = {
    jumps: null,
};
let rabbit = {
    __proto__: animal,
    jumps: true,
};

alert( rabbit.jumps );  // true

delete rabbit.jumps;

alert( rabbit.jumps );  // null

delete animal.jumps;

alert( rabbit.jumps );  // undefined

// Издачально jumps будет равно true, потому что это свойство
// берется из rabbit.
// Затем оно удаляется из объекта rabbit, а значит будет браться
// из родительского объекта animal и будет равно null.
// На следующем шаге свойство jumps также удалаяется и из родительского
// объекта и перестает существовать вообще, поэтому будет равно undefined.