 Factory is a component responsible solely for the wholesale (not piecewise) creation of objects.

 Sometimes object creation logic becomes too convoluted.
 Wholesale object creation (non-piecewise, unlike Builder) can be outsourced to:
   - A separate method (Factory Method)
   - That may exist in a separate class (Factory)
   - Can create hierarchy of factories with Abstract Factory