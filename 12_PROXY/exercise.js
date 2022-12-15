/**
You are given the Person  class and asked to write a ResponsiblePerson  proxy that does the following:

Allows person to drink unless they are younger than 18 (in that case, return "too young")

Allows person to drive unless they are younger than 16 (otherwise, "too young")

In case of driving while drink, returns "dead", regardless of age
 */

class Person
{
  constructor(age=0)
  {
    this.age = age;
  }

  drink() { return 'drinking'; }
  drive() { return 'driving'; }
  drinkAndDrive() { return 'driving while drunk'; }
}

class ResponsiblePerson
{
  constructor(person)
  {
    this.person = person;
  }

  get age()
  {
    return this.person.age;
  }

  set age(value)
  {
    this.person.age = value;
  }

  drink(){
    return this.age >= 18 ? this.person.drink() : 'too young';
  }

  drive(){
    return this.age >= 16 ? this.person.drive() : 'too young';
  }

  drinkAndDrive(){
    return 'dead';
  }

}

const p = new Person(15);
const rp = new ResponsiblePerson(p);
console.log(rp.drink());
console.log(rp.drive());
console.log(rp.drinkAndDrive());