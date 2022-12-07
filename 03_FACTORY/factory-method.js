// We want to create Point() that can work on two different coordinate systems

const CoordinateSystem = {
    cartesian: 0,
    polar: 1
}

// Wrong - We can't have 2 constructors!
/**
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    constructor(rho, theta) {
        this.x = rho * Math.cos(theta);
        this.y = rho * Math.sin(theta);
    }
}
 */

// We can use switch in constructor, but this is problematic - i.e. if we would want to
// add another system, we would be forced to modify constructor, which is against open-closed principle.
/**
class Point {
    constructor(a, b, cs = CoordinateSystem.cartesian) {
        switch (cs) {
            case CoordinateSystem.cartesian:
                this.x = a;
                this.y = b;
                break;

            case CoordinateSystem.polar:
                this.x = a * Math.cos(b);
                this.y = a * Math.sin(b);
        }
    }
}
*/

// Instead of messing with constructor, we can create (static) factory methods inside our class.
class Point
{
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static newCartesianPoint(x,y)
    {
        return new Point(x, y);
    }

    static newPolarPoint(rho, theta)
    {
        return new Point(
            rho * Math.cos(theta),
            rho * Math.sin(theta)
        )
    }

}

let p = Point.newCartesianPoint(4, 5);
console.log(p);

let p2 = Point.newPolarPoint(5, Math.PI/2);
console.log(p2);