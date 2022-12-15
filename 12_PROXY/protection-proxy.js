class Car {
    drive(){
        console.log('Car is being driven');
    }
}

class ProtectedCar {
    // A proxy that protects Car by checking if driver can drive.
    constructor(driver){
        this.driver = driver;
        this._car = new Car();
    }

    drive(){
        if (this.driver.age >= 18){
            this._car.drive();
        } else {
            console.log('Driving not allowed');
        }
    }
}

class Driver {
    constructor(age){
        this.age = age;
    }
}

let car = new Car();
car.drive(); // driving

let carProtected = new ProtectedCar(new Driver(12));
carProtected.drive(); // not allowed