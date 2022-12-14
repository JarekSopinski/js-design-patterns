### Definition

A mechanism for treating individual (scalar) objects and compositions of objects in a uniform manner.

### Motivation

Objects use other objects' fields/methods through inheritance and composition (referencing another class).
Some composed and singular objects need similar/identical behaviors.
Composition lets us make compound objects (objects that are collections of things) - i.e. a shape group made of several different shapes.

Composite design pattern is used to treat both single (scalar) and composite objects uniformly (they have the same interface).
I.e. class Foo and an array containing Foo(s) should have the same API.

### Implementations

In JS using Symbol.iterator we can force singular object to be iterable (to act as an array).
A single can object can make itself iterable by yielding this.