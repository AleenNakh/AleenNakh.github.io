
//Code from both the Conditionals and Interactivity Tutorial: https://p5js.org/tutorials/conditionals-and-interactivity/
//And from the Organizing Code with Functions Tutorial: https://p5js.org/tutorials/organizing-code-with-functions/
let redVal = 0;
let greenVal = 0;
let sunHeight;

function setup() {
  createCanvas(600, 400);
  noStroke(); //removes shape outlines
}

function draw() {
  // call the sky function
  sky();

  // call the sun function
  sun();

  // call the mountains function
  mountains();

  // draw trees
  trees()

// Interactive Mouse movement Element from the Conditionals and Interactivity Tutorial
// Changes the Sun's Height depending on the Mouse's Height
sunHeight = mouseY;


// Change background color when mouse is pressed (changed it from automatic to interactive)
  if (mouseIsPressed && sunHeight > 130) {
    redVal += 4;
    greenVal += 1;
      }

// slowly return starting color when key is pressed (changed it from automatic to interactive)
if (keyIsPressed && sunHeight < 600) {
    redVal -= 4;
    greenVal -= 1;
      }
    
}


//Inside code from the Conditionals and Interactivity Activity, 
//Functions Organization from the Organizing Code with Functions Tutorial

// A function to draw the sky, inside code from Conditionals and Interactivity Activity Tutorial
// The Function itself created in the Organizing Code with Functions Tutorial
function sky() {
  background(redVal, greenVal, 0);
}

// A function to draw the sun, inside code from Conditionals and Interactivity Activity Tutorial
// The Function itself created in the Organizing Code with Functions Tutorial
function sun() {
  fill(255, 135, 5, 60);
  circle(300, sunHeight, 180);
  fill(255, 100, 0, 100);
  circle(300, sunHeight, 140);
}

//A function to draw mountains, inside code from Conditionals and Interactivity Activity Tutorial
// The Function itself created in the Organizing Code with Functions Tutorial
function mountains() {
  fill(110, 50, 18);
  triangle(200,400,540,230,800,480);
  fill(150, 75, 0);
  triangle(-100, 400, 150, 200, 400, 400);
  fill(150, 100, 0);
  triangle(200, 400, 450, 230, 800, 400);
  fill(100,50,12);
  triangle(-100,400,150,200,0,400);
  fill(120,80,50);
  triangle(200,400,450,230,300,400);
}

//Tree Function from Organizing Code with Functions Tutorial
function tree(x,y,size) {
  fill(80,30,20);
  rect(x-size,y,size*2,size*8);
  fill(20,130,5);
  triangle(x-size*4,y,x,y-size*10,x+size*4,y)
}

//treeLine Function from Organizing Code with Functions Tutorial
function treeLine(x) {
  let y = -0.7 * x + 450;
  return y;
}


//A function that draws many trees from the Organizing Code with Functions Tutorial
//using treeLine() and tree() functions
// Added 3 more trees on a different mountain my adjusting the y variable
function trees() {
  // First tree
  let x = 150;
  let y = treeLine(x);
  tree(x, y, 5);
 
  // Second tree
  x = 180;
  y = treeLine(x);
  tree(x, y, 5);
 
  // Third tree
  x = 210;
  y = treeLine(x);
  tree(x, y, 5);

  // Fourth tree
  x = 450;
  y = treeLine(x);
  tree(x, y+170, 5);

  // Fifth Tree
  x = 485;
  y = treeLine(x);
  tree(x, y+210, 5);

  // Sixth Tree
  x = 520;
  y = treeLine(x);
  tree(x, y+250, 5);
}



