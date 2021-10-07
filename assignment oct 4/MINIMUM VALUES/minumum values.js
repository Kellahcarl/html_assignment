//const Arr = []
function min(input) {
    if (toString.call(input) !== "[object Array]")  
      return false;
 return Math.min.apply(null, input);
   }

function max(input) {
    if (toString.call(input) !== "[object Array]")  
      return false;
 return Math.max.apply(null, input);
   }
console.log(max([12,34,56,1]));
console.log(min([-12,-34,0,-56,-1]));