### Definition

Allows us to define the 'skeleton' of the algorithm, with concrete implementations defined in subclasses.

Similar to Strategy, but uses different approach.

### Motivation

Algorithms can be decomposed into common and specific parts.

Strategy pattern does this through composition.
    - High level algorithm uses an interface
    - Concrete implementations implement the interface

Template Method does the same thing through inheritance.
    - Overall algorithm makes use of empty ('abstract') members
    - Inheritors override those members
    - Parent template method invoked

### Implementation

1. Define an algorithm at a high level
2. Define constituent parts as empty methods/properties
3. Inherit the algorithm class, providing necessary overrides