/**
 * Instead of creating factory methods, we create the whole factory class that doesn't require initialization.
 */

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class PointFactory {
    static newCartesianPoint(x, y) {
        return new Point(x, y);
    }

    static newPolarPoint(rho, theta) {
        return new Point(
            rho * Math.cos(theta),
            rho * Math.sin(theta)
        )
    }
}

let p = PointFactory.newCartesianPoint(4, 5);
console.log(p);

let p2 = PointFactory.newPolarPoint(5, Math.PI / 2);
console.log(p2);