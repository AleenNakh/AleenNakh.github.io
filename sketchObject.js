var redCircle = {
    x: 0,
    y: 0,
    w: 30,
    h: 30,
    xSpeed: 5,
    ySpeed: 5,
    colour: 'red',
    draw: function(){
        fill( this.colour);
        circle(this.x, this.y, this.w, this.h);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x < 0 || this.x > width - this.w){
            this.xSpeed *= -1;
        }

        if(this.y > height - this.h || this.y < 0){
            this.ySpeed *= -1;
        }
        
    }
};

var aquamarineCircle = {
    x: 40,
    y: 30,
    w: 60,
    h: 60,
    xSpeed: 4,
    ySpeed: 10,
    colour: 'aquamarine',
    draw: function(){
        fill( this.colour);
        circle(this.x, this.y, this.w, this.h);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x < 0 || this.x > width - this.w){
            this.xSpeed *= -1;
        }

        if(this.y > height - this.h || this.y < 0){
            this.ySpeed *= -1;
        }
        
    }
};

var yellowCircle = {
    x: 0,
    y: 0,
    w: 15,
    h: 15,
    xSpeed: 30,
    ySpeed: 30,
    colour: 'yellow',
    draw: function(){
        fill( this.colour);
        circle(this.x, this.y, this.w, this.h);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x < 0 || this.x > width - this.w){
            this.xSpeed *= -1;
        }

        if(this.y > height - this.h || this.y < 0){
            this.ySpeed *= -1;
        }
        
    }
};
    
// redBrick.x++ returns current value then increments
// ++redBrick.x increments value then returns

function setup(){
    createCanvas(720,480);
}

function draw(){
    background('black');
    redCircle.draw();
    redCircle.move();
    aquamarineCircle.draw();
    aquamarineCircle.move();
    yellowCircle.draw();
    yellowCircle.move();
}