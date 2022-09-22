//FOR LOOP -> repeat a loop a limited amount of time 
//syntax for(initialization;condition;increment or decrement value){}

for(var i=0;i<10;i++){
    console.log(i)
}
// or u want to increment by 2 
for (var i=1;i<=10;i+=2){
    console.log(i)
}

// to print happy birthday

for (let i=10;i>0;i--){
    console.log(i)
}

console.log("happy birthday")

//to display in ui

const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text1 = "";
for (var i = 0; i < cars.length; i++) {
  text1 += cars[i] +" "+i+ "<br>";
}

document.getElementById("demo").innerHTML = text1;


//for in loop

const person1 = {fname:"John", lname:"Doe", age:25}; 

let txt1 = "";
for (let x in person1) {
  txt1 += person1[x] + " ";
}

document.getElementById("demo").innerHTML = txt1;

// to log into console

const person = {fname:"John", lname:"Doe", age:25}; 

let txt2 = "";
for (let x in person) {
  console.log(person[x])
}


// to get a list of headings

let txt = "";
for (let x in person) {
  console.log(x)
}


// 					The While Loop

// The while loop loops through a block of code as long as a specified condition is true.

// Syntax
// while (condition) {
//   // code block to be executed
// }


let text4 = "";
let i = 0;
while (i < 10) {
  text4 += "<br>The number is " + i;
  i++;
}
document.getElementById("demo").innerHTML = text4;


//The Do While Loop
//The loop will always be executed at least once, even if the condition is false, because the code block is executed before the condition is tested:


let text = ""
let i = 0;

do {
  text += "<br>The number is " + i;
  i++;
}
while (i < 10);  

document.getElementById("demo").innerHTML = text;


