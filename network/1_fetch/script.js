async function getUsers(names) {
    const URL = "https://api.github.com/users/";
    const userObjects = [];

    for (let name of names) {
        let userObject = fetch(URL + name).then(
            resolve => {
                if (resolve.status != 200) return null;
                return resolve.json();
            },
            reject => null
        );

        userObjects.push(userObject);
    }

    return userObjects;
}

async function showResult() {
    const logins = ["errfree", "mistake-login"];

    for (let user of await getUsers(logins)) {
        console.log( await user);
    }
}

showResult();