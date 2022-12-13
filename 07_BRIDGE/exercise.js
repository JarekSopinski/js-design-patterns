// hierarchy of renderers
class VectorRenderer {
    get whatToRenderAs(){
        return 'lines';
    }
}

class RasterRenderer {
    get whatToRenderAs(){
        return 'pixels';
    }
}

// base class
class Shape {
    constructor(renderer, name) {
        this.renderer = renderer;
        this.name = name;
    }

    toString() {
        return `Drawing ${this.name} as ${this.renderer.whatToRenderAs}`;
    }
}

// hierarchy of shapes
class Triangle extends Shape {
    constructor(renderer){
        super(renderer, 'Triangle');
    }
}

class Square extends Shape {
    constructor(renderer){
        super(renderer, 'Square');
    }
}

const triangleRaster = new Triangle(new RasterRenderer());
console.log(triangleRaster.toString());

const triangleVector = new Triangle(new VectorRenderer());
console.log(triangleVector.toString());