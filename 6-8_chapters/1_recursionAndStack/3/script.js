function fib_1(n) {
    let before = 0;
    let after = 1;
    let res;

    for (let i = 1; i < n; i++) {
        res = before + after;
        before = after;
        after = res;
    }

    return res;
}

function fib_2(n) {
    return n <= 1 ? n : fib_2(n - 1) + fib_2(n - 2);
}

console.log( fib_1(77) );
console.log( fib_2(40) );