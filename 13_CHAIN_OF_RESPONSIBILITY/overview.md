### Definition

A chain of commands who all get a chance to process a command or a query,
optionally having default processing implementation and an ability to terminate
the processing chain.

### Motivation

Unethical behavior by an employee - who takes the blame?
    - Employee
    - Manager
    - CEO
This is a chain of responsibility in a company.

You click a graphical element on a form.
    - Button handles it, stops further processing.
    - Underlying group box
    - Underlying window
This is a chain of responsibility for elements.

### Command Query Separation

We separate all invocations into two different concepts: query and command.

Command = asking for an action or change (e.g. please set your attack value to 2).
Query = asking for information without changing anything (e.g. please give me your attack value).

CQS = having separate means of sending commands and queries to e.g., direct field access.