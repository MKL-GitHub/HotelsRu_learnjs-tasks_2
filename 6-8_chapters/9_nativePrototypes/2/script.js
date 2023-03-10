Function.prototype.defer = function(ms) {
    return (...args) => setTimeout(() => this.apply(this, args), ms);
};

function f(a, b) {
    alert( a + b );
}

f.defer(1000)(1, 2);