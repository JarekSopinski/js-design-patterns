### Definition

A singleton is a component which is instantiated only once.

### Motivation

For some components it only makes sense to have one instance in the system. E.g.:
    - database repository
    - object factory

E.g., the constructor call is expensive.
    - We want initialization to only happen once.
    - We provide everyone with the same instance.

We want to prevent anyone from creating additional copies.

### Approach

To prevent creating multiple instance, we modify how the constructor works. In the constructor we check if an instance of this class already exists. If it does, we return existing instance. Otherwise, we create new instance, that will be the one and only instance.

### Problems

In unit testing, if we test a class that i.e. depends on DB data, we have to test using real data.
We can't make another instance with dummy data for testing.
Therefore it won't be actual unit test, it will be an integration test (class and db).
We can fix this problem by introducing a dependency i.e. for database.
Therefore directly depending on the Singleton is a bad idea; introduce a dependency instead.