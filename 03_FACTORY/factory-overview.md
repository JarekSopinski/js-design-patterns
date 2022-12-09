Factory is a component responsible solely for the wholesale (not piecewise, like in a Builder) creation of objects.

Sometimes object creation logic becomes too convoluted, i.e. passing to many arguments into constructor.

Wholesale object creation can be outsourced to:
   - A separate method (Factory Method) - a static method that creates objects
   - A separate class (Factory)
   - A hierarchy of factories with (Abstract Factory)

A factory can be external or reside inside the object as an inner class.

Hierarchies of factories can be used to create related objects.