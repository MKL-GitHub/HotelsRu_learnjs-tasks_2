function makeCounter() {
    let count = 0;

    function counter() {
        return count++;
    }

    counter.set = (value) => count = value;
    counter.decrease = () => count--; 

    return counter;
  }
  
  let counter = makeCounter();
  alert( counter() );

  counter.set(20);
  alert( counter() );

  counter.decrease();
  counter.decrease();
  counter.decrease();
  counter.decrease();
  alert( counter() );