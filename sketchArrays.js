//referenced https://thecodingtrain.com/tracks/code-programming-with-p5-js/code/7-arrays/3-arrays-objects
//referenced https://p5js.org/reference/p5/Array/

let circles = []; // Array to store circle objects
        let colors = ['red', 'blue', 'green', 'purple', 'orange']; // Array of simple colors
        let sizes = [10, 20, 30]; // Array of circle sizes

        function setup() {
            createCanvas(600, 400);
            background(220);
        }

        function draw() {
            // Refresh background
            background(220);

            // Make new circles when mouse is pressed
            if (mouseIsPressed) {
                // Create a circle object
                let circle = {
                    x: mouseX,
                    y: mouseY,
                    size: random(sizes),
                    color: random(colors),
                    speed: 2
                };
                
                // Add the circle to our array
                circles.push(circle);
            }

            // Loop through all circles
            for (let i = 0; i < circles.length; i++) {
                // Make each circle fall
                circles[i].y = circles[i].y + circles[i].speed;

                // Stop circles at bottom of canvas
                if (circles[i].y > height) {
                    circles[i].y = height;
                }

                // Draw each circle
                fill(circles[i].color);
                noStroke();
                ellipse(circles[i].x, circles[i].y, circles[i].size);
            }
            
            if (circles.length > 100) {
                circles.splice(0, 1);
            }
            
        }


/*let shapes = []; // Array of shape objects
        let colors = ['red', 'blue', 'green', 'purple', 'orange']; // Array of colors
        let shapeTypes = ['circle', 'square', 'triangle']; // Array of shape types
        let sizes = [15, 20, 25, 30, 35]; // Array of possible sizes

        function setup() {
            createCanvas(windowWidth, windowHeight);
            background(240);
        }

        function draw() {
            background(240, 10); // Slight fade effect

            // Create new shapes when mouse is dragged
            if (mouseIsPressed) {
                let shape = {
                    x: mouseX,
                    y: mouseY,
                    size: random(sizes),
                    color: random(colors),
                    type: random(shapeTypes),
                    velocity: random(2, 5),
                    rotation: random(TWO_PI)
                };
                shapes.push(shape);
            }

            // Update and display all shapes
            for (let i = shapes.length - 1; i >= 0; i--) {
                let shape = shapes[i];
                
                // Apply gravity
                shape.y += shape.velocity;
                
                // Check bottom boundary
                if (shape.y > height - shape.size/2) {
                    shape.y = height - shape.size/2;
                }

                // Display shape based on its type
                fill(shape.color);
                noStroke();
                push();
                translate(shape.x, shape.y);
                rotate(shape.rotation);
                
                switch(shape.type) {
                    case 'circle':
                        ellipse(0, 0, shape.size);
                        break;
                    case 'square':
                        rectMode(CENTER);
                        rect(0, 0, shape.size, shape.size);
                        break;
                    case 'triangle':
                        triangle(
                            -shape.size/2, shape.size/2,
                            0, -shape.size/2,
                            shape.size/2, shape.size/2
                        );
                        break;
                }
                pop();
            }

            // Remove shapes if there are too many (optional performance optimization)
            if (shapes.length > 300) {
                shapes.splice(0, 1);
            }
        }*/


/*let circles = [];
let bubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  let r = random(10, 50);
  let b = new Objects(mouseX, mouseY, r);
  bubbles.push(b);

}

function draw() {
  background(50);

  for(let i = 0; i < circles.length; i++) {
    let c = circles[i];
    c.y++;
    circle(c.x, c.y, 25);
  }

  for (let bubble of bubbles) {
    bubble.move();
    bubble.show();
  }

  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }

}

function mouseDragged() {
  circles.push(b);
  let r = random(10, 50);
  let b = new Objects(mouseX, mouseY, r);
  bubbles.push(b);

}



class Objects {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
      }
    
      show() {
        stroke(255);
        strokeWeight(4);
        noFill();
        ellipse(this.x, this.y, this.r * 2);
      }
}*/
