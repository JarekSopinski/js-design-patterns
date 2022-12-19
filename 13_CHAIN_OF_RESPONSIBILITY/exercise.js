const WhatToQuery = Object.freeze({
    'attack': 1,
    'defense': 2
});

class Event {
    constructor() {
        this.handlers = new Map();
        this.count = 0;
    }

    subscribe(handler) {
        this.handlers.set(++this.count, handler);
        return this.count;
    }

    unsubscribe(idx) {
        this.handlers.delete(idx);
    }

    fire(sender, args) {
        this.handlers.forEach((value, key) => value(sender, args));
    }
};

class Game {
    constructor() {
        this.queries = new Event();
        this._goblins = [];
        this._kings = [];
    }

    get goblins() {
        return this._goblins;
    }

    get kings() {
        return this._kings;
    }

    set goblins(value) {
        this._goblins = value;
    }

    set kings(value) {
        this._kings = value;
    }

    performQuery(sender, query) {
        this.queries.fire(sender, query);
    }
}

class Query {
    constructor(id, whatToQuery, value) {
        this.id = id;
        this.whatToQuery = whatToQuery;
        this.value = value;
    }
}

class GoblinModifier {
    constructor(game, goblin, baseValue) {
        this.game = game;
        this.goblin = goblin;
        this.baseValue = baseValue;
        this.token = game.queries.subscribe(
            this.handle.bind(this) // preserve reference to GoblinModifier
        )
    }

    handle(sender, query) {
        // in inheritors
    }

    dispose() {
        this.game.queries.unsubscribe(this.token);
    }
}

class IncreaseAttackModifier extends GoblinModifier {
    constructor(game, goblin, baseValue) {
        super(game, goblin, baseValue);
    }

    handle(sender, query) {
        if (
            query.id === this.goblin.id &&
            query.whatToQuery === WhatToQuery.attack
        ) {
            let base = this.baseValue;
            if (game.kings.length) {
                base += 1;
            }
            query.value = base;
        }
    }
}

class IncreaseDefenseModifier extends GoblinModifier {
    constructor(game, goblin, baseValue) {
        super(game, goblin, baseValue);
    }

    handle(sender, query) {
        if (
            query.id === this.goblin.id &&
            query.whatToQuery === WhatToQuery.defense
        ) {
            let base = this.baseValue;
            if (game.goblins.length) {
                let otherGoblins = game.goblins.slice(0, game.goblins.length - 1);
                otherGoblins.forEach(g => base += 1);
            }
            query.value = base;
        }
    }
}

class Goblin {
    constructor(game, baseAttack = 1, baseDefense = 1) {
        this.game = game;
        this.initial_attack = baseAttack;
        this.initial_defense = baseDefense;
        this.id = game.goblins.length;

        new IncreaseAttackModifier(game, this, baseAttack);
        new IncreaseDefenseModifier(game, this, baseDefense);

        game.goblins.push(this);
    }

    get attack() {
        let q = new Query(
            this.id, WhatToQuery.attack, this.initial_attack
        );
        this.game.performQuery(this, q);
        return q.value;
    }

    get defense() {
        let q = new Query(
            this.id, WhatToQuery.defense, this.initial_defense
        );
        this.game.performQuery(this, q);
        return q.value;
    }

    toString() {
        return `A Goblin with id ${this.id} and A/D: (${this.attack}/${this.defense})`;
    }
}

class GoblinKing extends Goblin {
    constructor(game) {
        super(game, 3, 3);
        game.kings.push(this);
    }

    toString() {
        return `A King with id ${this.id} and A/D: (${this.attack}/${this.defense})`;
    }
}

// let game = new Game();

// let goblin1 = new Goblin(game);
// let goblin2 = new Goblin(game);
// let goblin3 = new Goblin(game);

// let king1 = new GoblinKing(game);

// console.log('There are ', game.goblins.length, ' goblins in the game.');
// console.log('There are ', game.kings.length, ' kings in the game.');

// game.goblins.forEach(g => console.log(g.toString()));
// game.kings.forEach(k => console.log(k.toString()));

let game = new Game();
let goblin = new Goblin(game);

console.log(goblin.attack, ' should be 1');
console.log(goblin.defense, ' should be 1');

let goblin2 = new Goblin(game);

console.log(goblin.attack, ' should be 1');
console.log(goblin.defense, ' should be 2');

let goblin3 = new GoblinKing(game);

console.log(goblin.attack, ' should be 2');
console.log(goblin.defense, ' should be 3');