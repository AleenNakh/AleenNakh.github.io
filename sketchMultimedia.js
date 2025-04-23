function preload(){
   littleGuy = createImg("LittleGuy.png");

}

function setup(){
    createCanvas(windowWidth,windowHeight);
    
    saurianWelp = createVideo('SaurianWelp.mp4'); //https://www.youtube.com/shorts/Cg4r7eciyVQ
    saurianWelp.hide();
    saurianWelp.volume(0);
    roar = createAudio('Saurianroar.wav'); //https://www.youtube.com/watch?v=HGYKG_3qpT4&t=37s

    
}

function draw(){
    background('grey');
    image(saurianWelp, 100, 100)
    littleGuy.position(mouseX,mouseY);
}

function mousePressed(){
    saurianWelp.play();
    roar.play();
}

function windowResized(){
    resizeCanvas(windowWidth,)
}