### Definition

A mechanism that decouples an interface (hierarchy) from an implementation (hierarchy).

### Motivation

Bridge is designed to connect different components trough abstractions.
It prevents a 'Cartesian product' complexity explosion.

Example: we have a base class ThreadScheduler.
It can be either: preemptive or cooperative.
Then each of these options can run: on Windows or Unix.
Therefore we end up with a 2x2 scenario: we must create 4 classes.

### Implementation

Bridge pattern avoids the 'entity explosion', as in example above.
Instead of creating multiple classes, we can introduce a dependency.

I.e. we have a base class Shape.
Than we have hierarchy of shapes: Square, Circle, Triangle...
And hierarchy of renders: VectorRenderer, RasterRenderer...
We connect them by the bridge: i.e. the base class of Shape can take renderer class as a dependency,
which will be inherited by Squares, Circles etc.

Reminder: JS has duck typing, so definitions of interfaces are not strictly necessary.