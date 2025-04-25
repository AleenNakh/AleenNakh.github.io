var allPokemon = [];
var currentPokemon = 0;
var pokemonPosition = {x: 100, y: 100, w: 100, h: 100};

function preload(){
    // Using PokeAPI to get first 15 Pokemon
    let url = 'https://pokeapi.co/api/v2/pokemon?limit=15';
    loadJSON(url, successCallback);
}

function successCallback(data){
    console.log(data);
    for(let pokemon of data.results){
        loadJSON(pokemon.url, function(pokemonData){
            var pokemonSprite = createImg(pokemonData.sprites.front_default);
            pokemonSprite.hide();
            allPokemon.push(pokemonSprite);
        });
    }
}

function setup(){
    createCanvas(600, 350);
}

function draw(){
    background('aqua'); 
    text(allPokemon.length, 10, 10);

    if(allPokemon.length > 0) { 
        image(allPokemon[currentPokemon], 
              pokemonPosition.x, 
              pokemonPosition.y, 
              pokemonPosition.w, 
              pokemonPosition.h);
    }
}

function mousePressed(){
    // If we click the Pokemon, increment currentPokemon and change position
    if(mouseX > pokemonPosition.x && 
       mouseX < pokemonPosition.x + pokemonPosition.h &&
       mouseY > pokemonPosition.y && 
       mouseY < pokemonPosition.y + pokemonPosition.h){
        
        currentPokemon++;
        currentPokemon = currentPokemon % allPokemon.length;
        pokemonPosition.x = random(width - pokemonPosition.w);
        pokemonPosition.y = random(height - pokemonPosition.h);
    }
}



