// external java script 

// var keyword
var x = 5;
var y = 6;
var z = x + y;
document.getElementById("demo").innerHTML =
"The value of z is: " + z;


//let keyword

let  x = 10;
    // Here x is 10
    
    {  
      let x = 2;
      // Here x is 2
    }
    
    // Here x is 10
    document.getElementById("demo").innerHTML = x;


    //without block shope
let  x = 10;
// Here x is 10

  
 x = 2;
// Here x is 2
console.log(x)

    // const keyword


    // Create an Array:
const cars = ["Saab", "Volvo", "BMW"];

// Change an element:
cars[0] = "Toyota";

// Add an element:
cars.push("Audi");

// Display the Array:
document.getElementById("demo").innerHTML = cars; 



// try catch blog const


try {
    const car = {type:"Fiat", model:"500", color:"white"};
    car = {type:"Volvo", model:"EX60", color:"red"};
  }
  catch (err) {
    document.getElementById("demo").innerHTML = err;
  }




