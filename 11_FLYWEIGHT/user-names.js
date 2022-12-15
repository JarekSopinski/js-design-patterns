// Problem - lots of user with the same names

class User {
    constructor(fullName){
        this.fullName = fullName;
    }
}

class BetterUser {
    constructor(fullName){
        let getOrAdd = function(s){
            let idx = BetterUser.strings.indexOf(s);
            if (idx !== -1) return idx;
            else {
                BetterUser.strings.push(s);
                return BetterUser.strings.length - 1;
            }
        }
        fullName.split(' ').map(getOrAdd);
    }
}
BetterUser.strings = [];

function getRandomInteger(max){
    return Math.floor(Math.random() * max);
}

let randomString = function(){
    let result = [];
    for (let x=0; x<10; ++x){
        result.push(String.fromCharCode(65 + getRandomInteger(26)));
    }
};

let firstNames = [];
let lastNames = [];

let users = [];
let betterUsers = [];

for (let i=0; i<100; ++i){
    firstNames.push(randomString());
    lastNames.push(randomString());
}

for (let first of firstNames) {
    for (let last of lastNames) {
        users.push(new User(`${first} ${last}`));
        betterUsers.push(new BetterUser(`${first} ${last}`));
    }
}

console.log(`10k users take up approx ${JSON.stringify(users).length} characters`);

let betterUsersLength = [betterUsers, BetterUser.strings]
    .map(x => JSON.stringify(x).length)
    .reduce((x,y) => x+y);

console.log(`10k flyweight users take up approx ${betterUsersLength} characters`);