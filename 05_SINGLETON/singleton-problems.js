const fs = require('fs');
const path = require('path');

class MyDatabase {
    // A low level module (reading file system)
    constructor(){
        const instance = this.constructor.instance;
        if (instance){
            return instance;
        }
        this.constructor.instance = this;

        console.log('Initializing database');
        this.capitals = {};

        let lines = fs.readFileSync(
            path.join(__dirname, 'capitals.txt')
        ).toString().split('\r\n');

        for (let i=0; i < lines.length/2; i++) {
            this.capitals[lines[2*i]] = parseInt(lines[2*i+1]);
        }
    }

    getPopulation(city){
        return this.capitals[city];
    }
}

class SingletonRecordFinder {
    // A high level module
    // WRONG - break dependency inversion principle and breaks unit testing.

    totalPopulation(cities) {
        return cities.map(
            city => new MyDatabase().getPopulation(city)
        ).reduce((x,y) => x+y);
    }
}

class ConfigurableRecordFinder {
    // A high level module
    // CORRECT - fixes unit test problem.

    constructor(database) {
        this.database = database;
    }

    totalPopulation(cities) {
        return cities.map(
            city => this.database.getPopulation(city)
        ).reduce((x,y) => x+y);
    }
}

class DummyDatabase {
    constructor(){
        this.capitals = {
            'alpha': 1,
            'beta': 2,
            'gamma': 3
        }
    }

    getPopulation(city) {
        return this.capitals[city];
    }
}

// Test
describe('singleton database', function() {

    it('is a singleton', function() {
        const db1 = new MyDatabase();
        const db2 = new MyDatabase();
        expect(db1).toBe(db2);
    });

    it('calculates total population', function() { // WRONG
        // The problem with this test - it depends on a real database, we can't use dummy data.
        // It's not really a unit test, it's an integration test (uses db).
        let rf = new SingletonRecordFinder();
        let cities = ['Seoul', 'Mexico City'];
        let tp = rf.totalPopulation(cities);
        expect(tp).toEqual(17400000+17500000); // if these values change in db, test will break.
    });

    it('calculates total population better', function() { // CORRECT
        let db = new DummyDatabase();
        let rf = new ConfigurableRecordFinder(db);
        expect(rf.totalPopulation(['alpha', 'gamma'])).toEqual(4);
    })
})