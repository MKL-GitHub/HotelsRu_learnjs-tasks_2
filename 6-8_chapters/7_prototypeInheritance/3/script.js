let animal = {
    eat() {
        this.full = true;
    },
};
let rabbit = {
    __proto__: animal,
};

rabbit.eat();

// При вызове rabbit.eat(), объект rabbit получит свойство full;
