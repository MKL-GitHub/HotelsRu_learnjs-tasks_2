function spy(func) {
    function wrapper(...args) {
        func.apply(this, args);
        wrapper.calls.push(args);
    }

    wrapper.calls = [];
    
    return wrapper;
}

function work(a, b) {
    console.log(a + b);
}

work = spy(work);

work(1, 2);
work(4, 5);
work(56, 43);

for (let args of work.calls) {
    console.log( "call: " + args.join() );
}