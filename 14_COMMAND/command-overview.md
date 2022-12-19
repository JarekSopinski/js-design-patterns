### Definition

An object which represents an instruction to perform a particular action.
Contains all the information necessary for the action to be taken.

### Motivation

Ordinary statements are perishable.
    - Cannot undo member assignment
    - Cannot directly serialize a sequence of actions (calls)

We want an object that represents an operation, to keep an record of this, i.e.:
    - person should change its age to value 22
    - car should do explode()

Uses: GUI commands, multi-level undo/redo, macro recording and more!

### Implementation

We encapsulate all details of an operation in a separate object.

We define instruction fro applying the command (either in the command itself, or elsewhere).

Optionally we can define instructions for undoing the command.

We can also create composite commands (a.k.a. macros).