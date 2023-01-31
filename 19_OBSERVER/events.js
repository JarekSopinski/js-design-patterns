class Event {
    constructor(){
        this.handlers = new Map();
        this.count = 0;
    }

    subscribe(handler){
        this.handlers.set(++this.count, handler); // handler is a function that takes sender and args
        return this.count; // count serves as index (token)
    }

    unsubscribe(idx){
        this.handlers.delete(idx);
    }

    // 1) who fired the event?
    // 2) additional data (event args)
    fire(sender, args){
        this.handlers.forEach((value, key) => value(sender, args));
    }
}

class FallsIllArgs {
    constructor(address){
        this.address = address;
    }
}

class Person {
    constructor(address){
        this.address = address;
        this.fallsIll = new Event();
    }

    catchCold(){
        this.fallsIll.fire(
            this, // sender
            new FallsIllArgs(this.address) // args
        );
    }
}

let person = new Person('123 London Road');
let sub = person.fallsIll.subscribe((sender, args) => {
    console.log(`A doctor has been called to ${args.address}`)
});
person.catchCold(); // A doctor has been called to 123 London Road
person.catchCold(); // A doctor has been called to 123 London Road

person.fallsIll.unsubscribe(sub);
person.catchCold(); // null