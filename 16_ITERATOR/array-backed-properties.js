class Creature {
    // BAD APPROACH
    // constructor() {
    //     this.strength = this.agility = this.intelligence = 10;
    // }
    // get sumOfStats(){
    //     return this.strength + this.agility + this.intelligence;
    // }

    // get averageStat(){
    //     return this.sumOfStats / 3.0;
    // }

    // get maxStat(){
    //     return Math.max(this.strength, this.agility, this.intelligence);
    // }

    // Better approach - creating props as an array makes methods easier
    // (they don't have to updated when we add a new prop)
    constructor(){
        this.stats = new Array(3).fill(10);
    }

    get strength(){ return this.stats[0]; }
    set strength(value){ return this.stats[0] = value; }

    get agility(){ return this.stats[1]; }
    set agility(value){ return this.stats[1] = value; }

    get intelligence(){ return this.stats[2]; }
    set intelligence(value){ return this.stats[2] = value; }

    get sumOfStats(){
        return this.stats.reduce((x,y) => x+y, 0);
    }

    get averageStat(){
        return this.sumOfStats / this.stats.length;
    }

    get maxStat(){
        return Math.max(...this.stats);
    }
}

let creature = new Creature();
creature.strength = 10;
creature.agility = 11;
creature.intelligence = 15;
console.log(`Creature has average stat ${creature.averageStat} `,
    `max stat = ${creature.maxStat} `,
    `sum of stats = ${creature.sumOfStats}`);