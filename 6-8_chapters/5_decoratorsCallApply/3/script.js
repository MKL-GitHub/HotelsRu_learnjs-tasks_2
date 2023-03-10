function debounce(func, ms) {
    let isReady = true;

    function wrapper(num) {
        if (!isReady) return;

        isReady = false;
        setTimeout(() => isReady = true, ms);
        
        return func(num);
    }

    return wrapper;
}

let f = debounce(console.log, 1000);

f(1);
f(2);

setTimeout( () => f(3), 100 );
setTimeout( () => f(4), 1100 );
setTimeout( () => f(5), 1500 );

