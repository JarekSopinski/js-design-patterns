### Definition

A component that facilitates communication between other components without them necessarily being aware of each other or having direct (reference) access to each other.

### Motivation

Components may go in and out of a system at any time.
Therefore it makes no sense for them to have direct references to one another.

Solution: have them all refer to some central component that facilitates communication.

### Implementation

Create the mediator and have each object in the system refer to it.

Mediator then can engages in bidirectional communication with its connected components.

Mediator has functions the components can call.
Also components have functions the mediator can call.