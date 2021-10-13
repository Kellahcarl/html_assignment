/*
an array [10,9,"+","D","c","+"]
value = value at index x in the array
    if the value  is int push into the array
    if the value is "+" push the result of adding prior 2 numbers
    if value is "D" push result of product into the array
    if the value is "C" pop the last value from the array
return sum of all elements
*/
"use strict";

let arr = [10,9,"+","D","C","+"];
//let splicedArr = arr.splice(1,4);
let arr2 = [];
let sum = 0;

for (let i = 0; i <= arr.length; i++) { //loop through each element
    if (typeof(arr[i])==="number"){  //check if a value at index i is an integer
      arr2.push(arr[i]);                // push value of i into new array 
      console.log(arr2);
    }  
    else if ((arr[i])==="+"){ 
      arr2.push(arr2[(arr2.length)-1]+arr2[(arr2.length)-2]);
      console.log(arr2);
    }   
    else if ((arr[i])==="D"){

      arr2.push(arr2[i-1]*arr2[i-2]);
      console.log(arr2);
    }
    else if ((arr[i])==="C"){
      arr2.pop();
      console.log(arr2);
    }
    else {

    }}
 
for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i]; 
}
return console.log(sum);