### Definition

Enables the exact behavior of a system to be selected at run-time.

### Motivation

Many algorithms can be decomposed into higher- and lower- level parts.
I.e. making tea can be decomposed into:
    - The process of making a hot beverage (boil water, pour into cup) (high level)
    - Tea-specific things, like put teabag into water (low level)
The high-level algorithm can then be reused for making coffee or hot chocolate.

### Implementation

1. Define algorithm at a high level (very general).
2. Define the interface you expect each strategy to follow
3. Provide for dynamic composition of strategies in the resulting object.