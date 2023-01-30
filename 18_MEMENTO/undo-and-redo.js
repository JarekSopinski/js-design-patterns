class Memento {
    constructor(balance){
        this.balance = balance;
    }
}

class BankAccount {
    constructor(balance=0){
        this.balance = balance;
        this.changes = [new Memento(balance)];
        this.current = 0;
    }

    deposit(amount){
        this.balance += amount;
        let memento = new Memento(this.balance);
        this.changes.push(memento);
        this.current++;
        return memento;
    }

    restore(memento){
        if (memento){
            this.balance = memento.balance;
            this.changes.push(memento);
            this.current = this.changes.count - 1;
        }
    }

    undo(){
        if (this.current > 0){
            let memento = this.changes[--this.current];
            this.balance = memento.balance;
            return memento;
        }
        return null;
    }

    redo(){
        if (this.current + 1 < this.changes.length){
            let memento = this.changes[++this.current];
            this.balance = memento.balance;
            return memento;
        }
        return null;
    }

    toString(){
        return `Balance: ${this.balance}`;
    }
}

let ba = new BankAccount(100);
let m1 = ba.deposit(50);
let m2 = ba.deposit(25);

console.log(ba.toString()); // 175

ba.undo(); // 150
console.log(`Undo 1: ${ba.toString()}`);

ba.undo(); // 100
console.log(`Undo 2: ${ba.toString()}`);

ba.redo(); // 150
console.log(`Redo: ${ba.toString()}`);