class Percentage {
    constructor(percent){
        this.percent = percent; // 0-100
    }

    toString(){
        return `${this.percent}%`;
    }

    valueOf(){
        // this is a proxy - do not return actual percentage
        // overwrites default Object.valueOf
        return this.percent / 100;

    }
}

let fivePercent = new Percentage(5);
console.log(fivePercent.toString());
console.log(`5% of 50 is ${50*fivePercent}`);