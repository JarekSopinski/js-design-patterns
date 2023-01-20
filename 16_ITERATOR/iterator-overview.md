### Definition

An object that facilitates the traversal of a data structure.

### Motivation

Iteration (traversal) is a core functionality of various data structures.
Sometimes traversal is not so easy, and we need a separate class that facilitates the traversal - an iterator.

An iterator:
    - Keeps a reference to the current element
    - Knows how to move to a different element

### Implementation

JavaScript supports this through Symbol.iterator member, that returns an iterator object with a function called next(), that returns an object containing:
    - The value being iterated
    - The done flag indicating whether iteration is finished

An iterator object itself can also be made iterable.