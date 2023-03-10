function throttle(f, ms) {
    let isReady = true;
    let funcId;
    let lastArguments;

    function wrapper() {

        if (isReady) {
            isReady = false;
            f.apply(this, arguments);

            return;
        }

        lastArguments = arguments;

        if (!funcId) {
            funcId = setTimeout(() => {
                f.apply(this, lastArguments);
                funcId = null;
                setTimeout(() => isReady = true, ms);
            }, ms);
        }
    }

    return wrapper;
}

let f1000 = throttle(console.log, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)
