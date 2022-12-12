### Definition

A prototype is a partially or fully initialized object that you copy (clone) and make use of.

### Motivation

Complicated objects (e.g. cars) aren't designed from scratch.
Instead, they reiterate existing designs.

An existing (partially or fully constructed) design is a Prototype.

We make a copy (close) the prototype and customize it.
It requires a 'deep copy' support.

We make the cloning convenient (e.g. via a Factory).

### Approach

To implement a prototype, partially construct and object and store it somewhere, then:
- Deep copy the prototype.
- Customize the resulting instance.
A factory provides a convenient API for using prototypes.