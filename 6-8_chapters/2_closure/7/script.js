function makeArmy() {
    let shooters = [];
    let i = 0;

    while (i < 10) {
        const shooterIndex = i;

        let shooter = function() {
            alert(shooterIndex);
        };
        shooters.push(shooter);
        i++;
    }

    return shooters;
}

let army = makeArmy();

army[0]();
army[5]();