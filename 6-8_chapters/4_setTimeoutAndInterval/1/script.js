function printNumbers_1(from, to) {
    let intervalId = setInterval(() => {
        console.log(from++);

        if (from == to + 1) clearInterval(intervalId);
    }, 1000);
}

function printNumbers_2(from, to) {
    setTimeout(function run() {
        console.log(from++);

        if (from <= to) setTimeout(run, 1000);
    }, 1000);
}

// printNumbers_1(10, 12);
printNumbers_2(10, 12);