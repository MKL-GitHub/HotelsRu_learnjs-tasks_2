let hamster = {
    eat(food) {
        this.stomach.push(food);
    },
};
let speedy = {
    __proto__: hamster,
    stomach: [],
};
let lazy = {
    __proto__: hamster,
    stomach: [],
};

speedy.eat.call(speedy, "apple");

alert( speedy.stomach );
alert( lazy.stomach );