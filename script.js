// string

//single quotes and double quotes 
let name ='javascript'
let car_name1 ="volvo"
console.log(car_name1)
console.log(names)
// to display in UI

let names ="javascript"
let car_name ="volvo"

document.getElementById("demo").innerHTML=names;

document.getElementById("demo").innerHTML=car_name;
//string propert and method


var myName ="javascript";

console.log(myName.length);
console.log(myName.charAt(0));
console.log(myName.indexOf("s"));
console.log(myName.lastIndexOf("a"));
console.log(myName.trim());
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

// string slicing

// var firstname =myName.slice(0,3);
// console.log(firstname)


// if u dont no the index value use
var firstname =myName.slice(0,myName.indexOf("s"));
console.log(firstname)

//string concadination
var  carName1 = "Volvo XC60";
var carName2 = "Volvo XC60";

var carname=carName1.concat("     ",carName2)
console.log(carname)

// replace method

myPhone="123-456-7890";
myPhone = myPhone.replaceAll("-","")

console.log(myPhone)



