class Memento {
    constructor(balance){
        this.balance = balance;
    }
}

class BankAccount {
    constructor(balance=0){
        this.balance = balance;
    }

    deposit(amount){
        this.balance += amount;
        return new Memento(this.balance);
    }

    restore(memento){
        this.balance = memento.balance;
    }

    toString(){
        return `Balance: ${this.balance}`;
    }
}

let ba = new BankAccount(100);
let m1 = ba.deposit(50);
let m2 = ba.deposit(25);

console.log(ba.toString());

ba.restore(m1);
console.log(ba.toString());

ba.restore(m2);
console.log(ba.toString());