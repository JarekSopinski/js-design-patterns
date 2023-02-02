// The best approach, out of the 3 versions - it's scalable
// Here we're allowed to modify base classes, but only with accept() method for a visitor.

class NumberExpression {
    constructor(value){
        this.value = value;
    }

    accept(visitor){
        visitor.visitNumber(this);
    }
}

class AdditionExpression {
    constructor(left, right){
        this.left = left;
        this.right = right;
    }

    accept(visitor){
        visitor.visitAddition(this);
    }
}

class Visitor {
    constructor(){
        this.buffer = [];
    }

    visitNumber(expression){}
    visitAddition(expression){}
}

class ExpressionPrinter extends Visitor {
    constructor(){
        super();
    }

    visitNumber(expression){
        this.buffer.push(expression.value);
    }

    visitAddition(expression){
        this.buffer.push('(');
        expression.left.accept(this);
        this.buffer.push('+');
        expression.right.accept(this);
        this.buffer.push(')');
    }

    toString(){
        return this.buffer.join('');
    }
}

class ExpressionCalculator extends Visitor {
    constructor(){
        super();
        this.result = 0;
    }

    visitNumber(expression){
        this.result = expression.value;
    }

    visitAddition(expression){
        expression.left.accept(this);
        let temp = this.result;
        expression.right.accept(this);
        this.result += temp;
    }
}

// 1 + (2+3) <- we want to print this expression
let e = new AdditionExpression(
    new NumberExpression(1),
    new AdditionExpression(
        new NumberExpression(2),
        new NumberExpression(3)
    )
);

let ep = new ExpressionPrinter();
ep.visitAddition(e);

let ec = new ExpressionCalculator();
ec.visitAddition(e);

console.log(ep.toString(), '=', ec.result);