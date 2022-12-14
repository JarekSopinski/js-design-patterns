// A problem: don't load and image (costly) if somebody never called draw().

class Image {
    constructor(url){
        this.url = url;
        console.log(`Loading image from ${url}`);
    }

    draw(){
        console.log(`Drawing image from ${this.url}`);
    }
}

class LazyImage {
    // instead of Image, load image only when drawing!
    constructor(url){
        this.url = url;
    }

    draw(){
        if (!this.image)
            this.image = new Image(this.url);
        this.image.draw();
    }
}

function drawImage(img){
    console.log('About to draw the image');
    img.draw();
    console.log('Done drawing the image');
}

let img = new Image('http://image.jpg');
drawImage(img);

let lazy = new LazyImage('http://image2.jpg');
drawImage(lazy);