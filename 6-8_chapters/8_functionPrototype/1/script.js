function Rabbit() {}

Rabbit.prototype = {
    eats: true,
};

let rabbit = new Rabbit();

// Rabbit.prototype = {};  // 1*
// Rabbit.prototype.eats = false;  // *2
// delete rabbit.eats;  // *3
// delete Rabbit.prototype.eats;  // *4

alert( rabbit.eats );

// 1* - true
// 2* - false
// 3* - true
// 4* - undefined