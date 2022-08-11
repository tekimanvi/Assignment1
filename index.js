//Creating an array with each object as a flashcard
let myflashcards = [
    {
        question: "What color is the sky?",
        answer: "Blue"
    },
    {
        question: "What color is grass?",
        answer: "Green"
    },
    {
        question: "What color stripes does a zebra have?",
        answer: "Black and White "
    }]

// Initialises variable i with value 0
let i = 0;

// Gets the para tag with id q (question) and stores it in a variable 
let ques = document.getElementById('q');
// Gets the para tag with id a (answer) and stores it in a variable 
let ans = document.getElementById('a');
// Gets the para tag with id Q and stores it in a variable 
let display = document.getElementById('Q');
// Gets the para tag with id N and stores it in a variable 
let next = document.getElementById('N');

//Adds event listener to click and display question 
display.addEventListener("mouseover",function(){
    // display.textContent="changed";
    ques.innerHTML = a;
  })
// Initializing values of a and b to update them 
let a='';
let b='';

//Function that updates the values based on the incremented i value
function update(){
     a=myflashcards[i].question;
     b=myflashcards[i].answer;
}

//Iterates over the valies of i and adds event listeners to display question and answers when clicked. 
while (i < myflashcards.length){
     a=myflashcards[i].question;
     b=myflashcards[i].answer;
  
  display.addEventListener("mouseover",function(){
    update();
    ques.innerHTML = a;
  })
  
   ques.addEventListener("mouseover",function(){
    update();
    ans.innerHTML = b;
    i++;
    console.log(i);
    
  })
 
 next.addEventListener("mouseover",function() {
    // i++;
    // console.log(i); 
    // a=myflashcards[i].question;
     update();     
     console.log(a);
     ques.innerHTML = a;
        ans.innerHTML = '';
          
    });
    
    break;

 
 }
   
