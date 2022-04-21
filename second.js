//*****************1st prime number or not********************************** */
// function test_prime(n)
// {

//   if (n===1)
//   {
//     return false;
//   }
//   else if(n === 2)
//   {
//     return true;
//   }else
//   {
//     for(var x = 2; x < n; x++)
//     {
//       if(n % x === 0)
//       {
//         return false;
//       }
//     }
//     return true;  
//   }
// }

//console.log(test_prime(37));

//******************************2)  first letter into capitalize**********************/
// program to convert first letter of a string to uppercase
// function cap_first_letter(str) {

   
//     const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

//     return capitalized;
// }
// const string = "javascript";

// const result = cap_first_letter(string);

// console.log(result);

//********************* 3)second largest number in an array**************** */

// function secondLargest(arr) {
//     arr.sort();
//     for (let i = arr.length - 2; i >= 0; i--) {
//       if (arr[i] != arr[i - 1]) {
//         return arr[i];
//       }
//     }
//   }
              
//   arr = [12, 35, 1, 10, 34, 1];
//   console.log(secondLargest(arr));

//***************************4)string is a palindrome or not */************ */
// program to check if the string is palindrome or not

// function checkPalindrome(string) {
//     const len = string.length;
//     for (let i = 0; i < len / 2; i++) {
//         if (string[i] !== string[len - 1 - i]) {
//             return 'It is not a palindrome';
//         }
//     }
//     return 'It is a palindrome';
// }
// const string = "madam";
// const value = checkPalindrome(string);

// console.log(value);
// 6) minimum and maximum number in array

// function getMin(arr, n){
// 	let res = arr[0];
	
// 	for(let i = 1; i < n; i++)
// 		res = Math.min(res, arr[i]);
		
// 	return res;
// }
// function getMax(arr, n)
// {
// 	let res = arr[0];
	
// 	for(let i = 1; i < n; i++)
// 		res = Math.max(res, arr[i]);
		
// 	return res;
// }

// let arr = [ 3, 2, 1, 56, 10000, 167 ];
// let n = arr.length;
// 	console.log(getMin(arr, n) )
// console.log(getMax(arr, n));
				
