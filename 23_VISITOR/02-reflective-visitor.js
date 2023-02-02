// A better approach than intrusive - we create separate component ExpressionPrinter.
// But the problem is managing 'if' cases in ExpressionPrinter (we should avoid explicit type checks).

class NumberExpression {
    constructor(value){
        this.value = value;
    }
}

class AdditionExpression {
    constructor(left, right){
        this.left = left;
        this.right = right;
    }
}

class ExpressionPrinter {
    print(e, buffer){
        if (e instanceof NumberExpression){
            buffer.push(e.value);
        }
        else if (e instanceof AdditionExpression){
            buffer.push('(');
            this.print(e.left, buffer);
            buffer.push('+');
            this.print(e.right, buffer);
            buffer.push(')');
        }
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
let buffer = [];
let ep = new ExpressionPrinter();
ep.print(e, buffer);
console.log(buffer.join(''));