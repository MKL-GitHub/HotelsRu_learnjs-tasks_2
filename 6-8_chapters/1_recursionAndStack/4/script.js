function printList_1(list) {
    while (list) {
        // console.log(list.value);
        list = list.next;
    }
}

function printList_2(list) {
    if (list) {
        // console.log(list.value);
        printList_2(list.next);
    }
    
}

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null,
            }
        }
    }
}

let start, end;

start = Date.now();
for (let i = 0; i < 10000000; i++) {
    printList_1(list);
}
end = Date.now();

console.log("Time: ", end - start); // time = ~80ms

start = Date.now();
for (let i = 0; i < 10000000; i++) {
    printList_2(list);
}
end = Date.now();

console.log("Time: ", end - start); // time = ~190ms

