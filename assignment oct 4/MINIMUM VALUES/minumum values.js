// //const Arr = []
// function min(input) {
//     if (toString.call(input) !== "[object Array]")  
//       return false;
//  return Math.min.apply(null, input);
//    }

// function max(input) {
//     if (toString.call(input) !== "[object Array]")  
//       return false;
//  return Math.max.apply(null, input);
//    }
// console.log(max([12,34,56,1]));
// console.log(min([-12,-34,0,-56,-1]));

// var item = items[Math.floor(Math.random() * items.length)];

//console.log(Math.min.apply(myArr)); gave me infinity

//console.log(Math.min(...myArr));//gave me Nan
const myArr = ["750", "s40", "Audi", 125, "mk", "i", 4 , -12,-34,0,-56,-1];

let miniMum = Infinity

for (let i = 0; i < myArr.length; i++) {

  if (typeof(myArr[i]) === "number"){

      if (miniMum>myArr[i]) {

        miniMum = myArr[i];

      }

  }

}

console.log(miniMum);