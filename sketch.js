var x = 0;
var y = 0;

function setup(){
    createCanvas(450,450);
    
}

function draw(){
    background(0);
    fill("#FFFF00")
    circle(x,y,50,50);
    circle(x+180,y,50,50);
    fill("#FFFF00")
    ellipse(x+20,y+120,150,150)
    ellipse(x+165,y+120,150,150)
    fill(0)
    ellipse(x+20,y+100,150,150)
    ellipse(x+165,y+100,150,150)
    
    x = x + 2
    x = x % 400
    y = y + 1
    y = y % 300
    
    
}

console.log(x)
