/**
 * Consider the code presented below. We have two classes called SingleValue and ManyValues.
 * SingleValue stores just one numeric value (initialized in the constructor), but ManyValues can store
 * either numeric values or SingleValue objects (assume it implements a push() method for adding items).
 *
 * You are asked to write a function called sum that takes an array of items (any item can be either SingleValue or ManyValues).
 */

class SingleValue {
    get value() {
        return this._value.reduce((partialSum, a) => partialSum + a, 0);
    }
    constructor(value = 0) {
        this._value = [ value ];
    }
}

class ManyValues extends SingleValue {
    constructor(value = 0){
        super(value);
    }
    push(newValue){
        this._value.push(newValue);
    }
}

let sum = function (containers) {
    let result = 0;
    containers.forEach(i => {
        result += i.value;
    });
    return result;
};

let singleValue = new SingleValue(11);
let otherValues = new ManyValues();
otherValues.push(22);
otherValues.push(33);
const summed = sum([singleValue, otherValues]); // should be 66
console.log(summed);

/**
 * Another (instructor's) solution
 */

class _SingleValue
{
  constructor(value)
  {
    this.value = value;
  }

  [Symbol.iterator]()
  {
    let returned = false;
    return {
      next: () => ({
        value: this.value,
        done: returned++
      })
    }
  }
}

class _ManyValues extends Array {}

let _sum = function(containers)
{
  let result = 0;
  for (let c of containers)
    for (let i of c)
      result += i;
  return result;
};