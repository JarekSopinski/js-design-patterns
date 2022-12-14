class Shape {

}

class Circle extends Shape {
    constructor(radius=0){
        super();
        this.radius = radius;
    }

    resize(factor){
        this.radius *= factor;
    }

    toString(){
        return `A circle of radius ${this.radius}`;
    }
}

// How to add color without breaking open-closed principle?

class ColoredShapeDecorator extends Shape {
    constructor(shape, color){
        super();
        this.shape = shape;
        this.color = color;
    }

    toString(){
        return `${this.shape.toString()} has the color ${this.color}`;
    }
}

class TransparentShapeDecorator extends Shape {
    constructor(shape, transparency){
        super();
        this.shape = shape;
        this.transparency = transparency;
    }

    toString(){
        return `${this.shape.toString()} has ${this.transparency * 100.0}% transparency`;
    }
}

let circle = new Circle(2);
console.log(circle.toString()); // A circle of radius 2

let redCircle = new ColoredShapeDecorator(circle, 'red');
redCircle.shape.resize(2); // Watch out to call on shape, not circle!
console.log(redCircle.toString()); // A circle of radius 2 has the color red

let redHalfCircle = new TransparentShapeDecorator(redCircle, 0.5);
console.log(redHalfCircle.toString());