// TOPIC 
// ARRAY AND LOOP
// CHAPTER 17-20

// Q1 ANSWER

// To declare and initialize an empty multidimensional array (array of arrays) in JavaScript, you can use the following code snippet:

// var myArray = [[]];

// This creates an empty 2D array with one row and one column. You can add more rows or columns by extending the array as needed. For example, to create a 3x3 empty array:

// var myArray = [[], [], []];


// If you don’t know the number of rows or columns in advance, you can create an empty 2D array without specifying the dimensions:

// var myArray = new Array();


// To access elements in a 2D array, you can use the following syntax

// myArray[rowIndex][columnIndex]


// Q2 ANSWER

// var matrix = [
//     [0, 1, 2, 3]
//     [1, 0, 1, 2]
//     [2, 1, 0, 1]
//   ];
//   document.write([]);

// Q3 ANSWER

// for(i = 1; i <= 10; i++ ) {
//     console.log(i);
// }


// Q4

// var userInput = +prompt("enter a number to  a multiplication table");


// var tablelength =+prompt("enter table length");

// for ( var i = 1; i <= tablelength; i++){
//     document.write(userInput + "x" + i + "=" + userInput * i + "<br>");
// }


// Q5



//  var fruits = ["banana", "mango", "apple", "orange","grapes"];
// console.log(fruits);
//  for (var i = 0; i < fruits.length; i++){
//      console.log("element of " + fruits[i] + " at " + " "+ i);
//  }


// Q6 
// document.write("counting <br>");
//  for(var i = 1; i <=15; i++){
//     document.write( i);
//  }


// for(var i = 10; i >=1; i--){
//     console.log(i);
// }


// for(var i = 0; i <=20; i= i+2){
//     console.log(i);
// }


// for(var i = 1; i <=19; i= i+2){
//    console.log(i);
// }

// for(var i = 2; i <=20; i= i+2){
//    console.log(i+ "k");
// }


// Q7 NOT TO DO

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// function searchArray() {
//   var userInput = prompt("Enter an item to search for:");
//   if (A.indexOf(userInput) !== -1) {
//     alert(userInput + " is found in the list.");
//   } else {
//     alert(userInput + " is not found in the list.");
//   }
// }


// Q8


// var a = [24, 53, 78, 91, 12];
// var largest = Math.max(...a);
// console.log("The largest number in the given array is", largest);


// ANOTHER WAY


// var A = [24, 53, 78, 91, 12];
// var largest = A[0];

// for (let i = 1; i < A.length; i++) {
//     if (A[i] > largest) {
//       var  largest = A[i];
//     }
// }

// console.log("The largest number in the array is: " + largest);


// Q9

// var  A = [24, 53, 78, 91, 12];

// var smallest = A[0];

// for (var i = 1; i< A.length; i++) {
//     if (A[i] < smallest) {
//         smallest = A[i];
//     }
// }

// console.log("The smallest number in the array is: " + smallest);


// ANOTHER WAY

// var a = [24, 53, 78, 91, 12];

// var smallest = Math.min(...a);

// console.log("The smallest number in the array is: " + smallest);


// Q10

// for (var i=1; i<=100;i++) {
//     if (i % 5 === 0){
//         console.log(i);
//     }
// }