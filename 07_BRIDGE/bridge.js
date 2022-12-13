// hierarchy of shapes: Square, Circle, Triangle...
// hierarchy of renders: VectorRenderer, RasterRenderer...

class VectorRenderer {
    renderCircle(radius){
        console.log(`Drawing a circle of radius ${radius}`);
    }
}

class RasterRenderer {
    renderCircle(radius){
        console.log(`Drawing pixels for circle of radius ${radius}`);
    }
}


class Shape {
    // any kind of figure, including circles, squares...
    constructor(renderer) {
        this.renderer = renderer; // uses render as dependency
    }

    resize(factor){
        this.radius *= factor;
    }
}

class Circle extends Shape {
    constructor(renderer, radius) {
        super(renderer);
        this.radius = radius;
    }

    draw() {
        this.renderer.renderCircle(this.radius);
    }
}

let raster = new RasterRenderer();
let vector = new VectorRenderer();
let circle = new Circle(vector, 5);

circle.draw();
circle.resize(2);
circle.draw();