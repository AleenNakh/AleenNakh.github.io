
// Define the global variables: input, button, and greeting.
let textInput;
let button;
let greeting;
let mood;

function preload(){
  happy = loadImage("HappyCat.jpeg")
  angry = loadImage("AngyCat.jpeg")
  chill = loadImage("ChillCat.jpeg")
}

function setup() {
  createCanvas(710, 700);
  background(200);
  myRadio = createRadio();
    myRadio.position(10, 125)
    myRadio.option('Angry')
    myRadio.option('Happy')
    myRadio.option('Chill')


  greeting = createElement('h2', 'Hello! Whats your name?');
  greeting.position(20, 5);

  mood = createElement ('label', 'How are you feeling today?')
  mood.position(20, 100)

  textInput = createInput();
  textInput.position(20, 65);

  button = createButton('submit');
  button.position(10, 200);
  button.mousePressed(greet);
  
}

function greet() {
  background(200);
  let name = textInput.value();
  let type = myRadio.value();

  greeting.html(`Hello, ${type} ${name}!`);
  textInput.value('');


}

function draw(){
 let cat = myRadio.value()
 
 if(cat == 'Happy'){
   if(mouseIsPressed) {
    image(happy, 200, 200)
   }
 } else if(cat == 'Angry'){
  if(mouseIsPressed) {
    image(angry, 200, 200)
   }
 } else if(cat == 'Chill'){
  if(mouseIsPressed) {
    image(chill, 200, 200)
   }
 }
}

/*let textInput;

function setup(){
    createCanvas(600,300);

    textInput = createInput();
    textInput.position(100,100);

}

function draw(){
    background(200);
    if(MouseIsPressed){
        background(150);
    }

    
}*/