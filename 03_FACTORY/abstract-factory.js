/**
 * You can have a hierarchy of objects and related hierarchy of types.
 * Then you can group factories and i.e. expose them as some sort of list.
 */

const readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

class HotDrink {
    consume() { /* abstract */ }
}

class Tea extends HotDrink {
    consume() {
        console.log('This tea is nice with lemon!')
    }
}

class Coffee extends HotDrink {
    consume() {
        console.log('This coffee is delicious')
    }
}

class HotDrinkFactory {
    prepare(amount) { /* abstract */ }
}

class TeaFactory extends HotDrinkFactory {
    prepare(amount) {
        console.log(`Put in tea bag, boil water, pour ${amount}ml`);
        return new Tea(); // <customize
    }
}

class CoffeeFactory extends HotDrinkFactory {
    prepare(amount) {
        console.log(`Grid some beans, boil water, pour ${amount}ml`);
        return new Coffee(); // <customize
    }
}

let AvailableDrink = Object.freeze({
    coffee: CoffeeFactory,
    tea: TeaFactory
});

class HotDrinkMachine {
    constructor () {
        this.factories = {};
        for (let drink in AvailableDrink) {
            this.factories[drink] = new AvailableDrink[drink]();
        }
    }
    interact(consumer) {
        rl.question('Please specify drink and amount ' + '(e.g., tea 50) ', answer => {
            let parts = answer.split(' ');
            let name = parts[0];
            let amount = parseInt(parts[1]);
            let drink = this.factories[name].prepare(amount);
            consumer(drink);
            rl.close();
        })
    }
}

let machine = new HotDrinkMachine();
machine.interact(
    function(drink) {
        drink.consume();
    }
)