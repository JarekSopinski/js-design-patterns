class Singleton {
    constructor() {
        // To prevent creating multiple instance, we can return the same instance in the constructor.
        const instance = this.constructor.instance;
        if (instance) {
            // We check if instance exists - if so, we return the old instance.
            return instance;
        }
        // If no instance has been created, only then we create it - this is going to be the one and only instance.
        this.constructor.instance = this;
    }
    foo(){
        console.log('Doing something...');
    }
}

let s1 = new Singleton(); // we create instance
let s2 = new Singleton(); // instance already created! s2 = s1.

console.log(`Are they identical? ${(s1 === s2)}`); // true

s2.foo();