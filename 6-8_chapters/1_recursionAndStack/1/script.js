function sumTo_1(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
}

function sumTo_2(n) {
    return n == 1 ? n : n + sumTo_2(n - 1);
}

function sumTo_3(n) {
    return n * (n + 1) / 2;
}

let start, end, result;

start = Date.now();
for (let i = 0; i < 100000; i++) {
    result = sumTo_1(10000);
}
end = Date.now();

console.log("Result: ", result, "Time: ", end - start);  // time = 530ms

start = Date.now();
for (let i = 0; i < 100000; i++) {
    result = sumTo_2(10000);
}
end = Date.now();

console.log("Result: ", result, "Time: ", end - start);  // time = 5383ms

start = Date.now();
for (let i = 0; i < 100000; i++) {
    result = sumTo_3(10000);
}
end = Date.now();

console.log("Result: ", result, "Time: ", end - start);  // time = 3ms

// Самый быстрый вариант решения, с использование арифметической прогрессии,
// поскольку для получения результата, необходима всего одна операция.

// Самый медленный, с использование рекурсии.

// Также метод с рекурсией ограничен на ~10000 итераций