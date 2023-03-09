function sum(n) {
    let res = 0;

    function getSum(x) {
        res += x;

        getSum.valueOf = () => res;
        
        return getSum;
    }

    return getSum(n);
}

console.log( +sum(1)(-5)(100));