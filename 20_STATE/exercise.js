/**
 * A combination lock is a lock that opens after the right digits have been entered.
 * A lock is preprogrammed with a combination (e.g., 12345 ) and the user is expected to enter this combination to unlock the lock.

The lock has a Status field that indicates the state of the lock. The rules are:

If the lock has just been locked (or at startup), the status is LOCKED.

If a digit has been entered, that digit is shown on the screen. As the user enters more digits, they are added to Status.

If the user has entered the correct sequence of digits, the lock status changes to OPEN.

If the user enters an incorrect sequence of digits, the lock status changes to ERROR.

Please implement the CombinationLock  class to enable this behavior. Be sure to test both correct and incorrect inputs.
 */

const statusesEnum = Object.freeze({
    locked: 'LOCKED',
    open: 'OPEN',
    error: 'ERROR'
});

class CombinationLock
{
  constructor(combination)
  {
    this.combination = combination;
    this.digits = [];
    this.reset();
  }

  reset()
  {
    this.status = statusesEnum.locked;
  }

  enterDigit(digit)
  {
    if (typeof(digit) === 'number'){
        this.digits.push(digit);
        this.status = this.digits.join('');
        (this.digits.length === this.combination.length) && this.checkCombination();
    }
  }

  checkCombination()
  {
    this.status = (this.status === this.combination.join('') ? statusesEnum.open : statusesEnum.error);
    this.digits = [];
  }

  toString()
  {
    console.log(`Current status is: ${this.status} with digits: ${this.digits.length ? this.digits.join('') : '-'}`)
  }
}

let cl = new CombinationLock([1, 2, 3, 4, 5]);
cl.toString();

cl.enterDigit(1);
cl.toString();

cl.enterDigit(2);
cl.toString();

cl.enterDigit(3);
cl.toString();

cl.enterDigit(4);
cl.toString();

cl.enterDigit(5);
cl.toString();

cl.enterDigit(1);
cl.toString();