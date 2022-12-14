Lets you add additional behavior to classes without modifying them or inheriting from them.

### Motivation

You want to augment an object with additional functionality.
You do not want to rewrite or alter existing code (open-closed principle).
You want to keep new functionality separate (single responsibility).
We need to be able to interact with existing structures.

If for some reason we can't use inheritance, than we build a Decorator, which simply references the decorated object(s).

### Implementation

A decorator keeps the reference to the decorated object(s), usually in the constructor.
Then it adds utility fields and methods to augment the object's features.
It may or may not forward calls to the underlying object.