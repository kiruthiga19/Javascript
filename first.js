//JavaScript program to compute the sum and product of an array of integers. 
// var array = [1, 2, 3, 4, 5, 6],
//     s = 0,
//     p = 1,
//     i;
// for (i = 0; i < array.length; i += 1) 
//    {
//     s += array[i];
//     p *= array[i];
//     }
// console.log('Sum : '+s + ' Product :  ' +p); 
//***********************PROGRAM 2 program to find duplicate values in a JavaScript array.
    
// const numbers = [1, 2, 3, 2, 4, 5, 5, 6];
// const duplicates = numbers.filter((item, index) => index !== numbers.indexOf(item));
// console.log(duplicates);

// **********************PROGRAM 3 JavaScript function to merge two arrays and removes all duplicates elements**********************************
// var myArray1 = [5, 7, 9];
// var myArray2 = [9, 8, 5, 10];
// var myFinalArray = myArray1.concat(myArray2.filter((item) => myArray1.indexOf(item) < 0));
// console.log(myFinalArray);

// **********************************JavaScript function to find an array contains a specific element  PROGRAM 4***************************

// function contains(arr, element) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] === element) {
//             return true;
//         }
//     }
//     return false;
// }
// arr = [2, 5, 9, 6];
// console.log(contains(arr, 5));
//******************************* Find all numbers missing in an array program 5********************************* */

//********** 7)Javascript print candidates with age only above 18(Create array of Objects of your choice containing atleast 20 candidates)

//   let eligible=[
//       {name:'mer',age:18},
//       {name:'kir',age:14},
//       {name:'josh',age:15},
//       {name:'riya',age:17},
//       {name:'shin',age:18},
//       {name:'chan',age:20},
//       {name:'rasi',age:21},
//       {name:'kasthu',age:23},
//   ]
//   let news = eligible.filter((vote)=>{
//       return vote.age >=18;
//   })
//   console.log(news)

// 8 -> string reverse each word in a string

// let reverse =(str)=>{{
//     return str.split('').reverse('').join('');

// }
// }
// console.log(reverse("welcome to javascript guid"));

//9>>>Program to Append an Object to An Array
function insertObject(arr, obj) {

    // append object
    arr.push(obj);
    
    console.log(arr);
}

// original array
let array = [1, 2, 3];

// object to add
let object = {value_x: 12, value_y: 8};

// call the function
insertObject(array, object);

