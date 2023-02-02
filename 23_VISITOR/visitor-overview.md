### Definition

A component (visitor) that knows how to traverse a data structure composed of (possibly related) types.

### Motivation

Need to define a new operation on an entire class hierarchy
    - E.g., make a document model printable to HTML/Markdown

We do not want to keep modifying every class in the hierarchy.

We need access to the non-common aspects of classes in the hierarchy.

Therefore we create an external component to handle rendering.
    - But avoid explicit type checks

### Implementation

