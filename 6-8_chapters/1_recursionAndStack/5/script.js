function printList_1(list) {
    let tempList = [];

    while (list) {
        tempList.push(list.value);
        list = list.next;
    }

    for (let i = tempList.length - 1; i >= 0 ; i--) {
        // console.log(tempList[i]);
    }
}

function printList_2(list) {
    if (list.next) {
        printList_2(list.next);
    }
    // console.log(list.value);
}

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

let start, end;

start = Date.now();
for (let i = 0; i < 1000000; i++) {
    printList_1(list);
}
end = Date.now();
console.log("Time: ", end - start);

start = Date.now();
for (let i = 0; i < 1000000; i++) {
    printList_2(list);
}
end = Date.now();
console.log("Time: ", end - start);
