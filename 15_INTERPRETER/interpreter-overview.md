### Definition

A component that processes structured text data. Does so by turning it into separate lexical tokens (lexing) and then interpreting sequences of said tokens (parsing).

### Motivation

Textual input needs to be processed
    - e.g. turned into OOP structures

Some examples
    - programming language compilers, interpreters and IDEs
    - HTML, XML and similar
    - Numeric expressions (3+4/5)
    - Regular expressions

Turning strings into OOP based structures is a complicated process.

### Implementation

Barring simple cases, an interpreter acts in two stages:

1) Lexing turns text into a set of tokens, e.g.:
    3*(4+5) -> Lit[3] Star Lparen Lit[4] Plus Lit[5] Rparen

2) Parsing tokens into meaningful constructs, e.g.:
    -> MultiplicationExpression[Integer[3], AdditionExpression[Integer[4], Integer[5]]]

Parsed data can then be traversed.