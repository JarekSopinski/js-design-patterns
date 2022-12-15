/**
 * You are given a class called Sentence , which takes a string such as 'hello world'.
 * You need to provide a method at(index) such that the method returns a flyweight that can be used to capitalize a particular word in the sentence.
 */

class TextRange {
    constructor(start, end) {
        this.start = start;
        this.end = end;
        this.capitalize = false;
    }

    covers(position) {
        return position >= this.start && position <= this.end;
    }
}

class Sentence {
    constructor(plainText) {
        this.plainText = plainText;
        this.formatting = [];
    }

    at(index) {
        // find first and last index of letters of searched word
        const word = this.plainText.split(' ')[index];
        if (!word) { return -1; }
        const start = this.plainText.indexOf(word);
        const end = start + word.length;

        console.log(word, start, end);

        // use these indexes to create letters range
        let range = new TextRange(start, end);
        this.formatting.push(range);
        return range;
    }

    toString() {
        if (!this.formatting.length) {
            return;
        }
        let buffer = [];
        for (let i in this.plainText) {
            let c = this.plainText[i];
            for (let range of this.formatting) {
                if (range.covers(i) && range.capitalize) {
                    c = c.toUpperCase();
                }
            }
            buffer.push(c);
        }
        return buffer.join('');
    }
}

let s = new Sentence('alpha beta gamma');
s.at(1).capitalize = true;
console.log(s.toString()); // alpha BETA gamma