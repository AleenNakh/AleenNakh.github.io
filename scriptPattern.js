var billy; // variable declaration without definition

console.log(billy);

billy = 13;
billy = 'billy is great';
billy = 'billy said hello';

// keyword expression codeblock
if(true){
    console.log(billy);
}

if(15 < 15){
    console.log('is it true?');
}

billy = "silly";
if(billy){ // coercion change string to a boolean
    console.log('billy is silly')
}

if(billy === "silly"){ // === testing for equal value and same type
    console.log('really silly');
}

// == testing for equal value but allows for coercian
// billy == true 
// billy gets coerced to a boolean and the expression is true

