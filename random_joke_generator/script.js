//Tell me a joke

//elem.innerHTML is used to populate a div with HTML search online about this method 
//create a website with a div tag combining a random joke given an array of jokes 
//Use math.random and fetch jokes from the internet
//Your website should show a random joke on every reload

let jokes=["There are only 10 kinds of people in this world: those who  know binary and those who don’t.",
          "Programming is like sex: One mistake and you have to support it for the rest of your life.", 
          "I invented a new word! Plagiarism!",
          "Why do we tell actors to “break a leg?” Because every play has a cast.",
          "Hear about the new restaurant called Karma? There’s no menu: You get what you deserve.", 
          "Why don’t scientists trust atoms? Because they make up everything.",
          "Did you hear about the claustrophobic astronaut? He just needed a little space.",
          "Where are average things manufactured? The satisfactory.",
          "Why don’t Calculus majors throw house parties? Because you should never drink and derive.",
          "What’s the different between a cat and a comma? A cat has claws at the end of paws; A comma is a pause at the end of a clause."]

let rnd=Math.floor(Math.random()*9)+1;
let rndjoke=jokes[rnd];
console.log(rndjoke)

let display=document.getElementsByClassName('display')[0];
display.innerHTML=rndjoke;
