/**
 * A TokenMachine  is in charge of keeping tokens.
 * Each Token  is a reference type with a single numeric value.
 * The machine supports adding tokens and, when it does, it returns a memento representing the state of that system at that given time.

You are asked to fill in the gaps and implement the Memento design pattern for this scenario.
Pay close attention to the situation where a token is fed in as a reference and its value is subsequently changed on that reference - you still need to return the correct system snapshot!
 */

class Token {
    constructor(value = 0) {
        this.value = value;
    }
}

class Memento {
    constructor() {
        this.tokens = [];
    }
}

class TokenMachine {
    constructor() {
        this.tokens = [];
    }

    addTokenValue(value) {
        return this.addToken(new Token(value));
    }

    addToken(token) {
        this.tokens.push(token);
        let memento = new Memento();
        memento.tokens = this.tokens.map(token => new Token(token.value));
        return memento;
    }

    revert(memento) {
        this.tokens = memento.tokens.map(token => new Token(token.value));
    }
}