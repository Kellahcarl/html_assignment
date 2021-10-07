const arr = [1, 2, 3, 3, 4, 5, 5, 7, 8, 7, 8, 5, 6, 7, 8, 9, 6, 9];
console.log(arr);

const ranArr=Array.from({length: 40}, () => Math.floor(Math.random() * 40));
//console.log(ranArr);

const newarr = arr.filter((x, y) => arr.indexOf(x) === y); //using defined array

//const newarr = ranArr.filter((x, y) => arr.indexOf(x) === y);// using random array
// we use the built-in functions Array.prototype.filter() and Array.prototype.indexOf()

console.log(newarr);

