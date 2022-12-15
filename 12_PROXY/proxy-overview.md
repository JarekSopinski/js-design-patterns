### Definition

A class that functions as an interface to a particular resource.
That resource may be remote, expensive to construct, or may require logging or some other added functionality.

### Motivation

You are calling foo.Bar().
That assumes that foo is in the same process as Bar().
What if, later on, you want to put all Foo-related operations into a separate process.
    - Can you avoid changing your code?

Proxy can solve this. It can provide the same interface, but entirely different behavior.

### Implementation

A proxy has the same interface as the underlying object.
To create a proxy, simply replicate the existing interface of an object.
Then add relevant functionality to the redefined member functions.
Different types of proxies can have totally different behaviors.

### Types

Value proxy - return another value instead of default.

Property proxy - instead of using the property like you're expected to, map property onto the instance of the class.
It allows some additional actions on getting/setting a property.

Protection proxy - added to control access to a particular resource. First you have a resource in an unguarded state.
Then you make a wrapper, that tries to mimic the interface of the wrapped object, but it provides additional checks.

Virtual proxy - show that you have a resource, even if in reality you might not have it yet.
It masquarades as a real object until the moment when you actually need the REAL object.
Therefore you can save resources.