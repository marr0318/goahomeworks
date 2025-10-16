let arr1 = [1, 2, 3];
arr1.push(4);
console.log(arr1); 


let arr2 = [1, 2, 3];
let last = arr2.pop();
console.log(last); 
console.log(arr2); 


let arr3 = [2, 3];
arr3.unshift(1);
console.log(arr3); 


let arr4 = [1, 2, 3];
let first = arr4.shift();
console.log(first); 
console.log(arr4); 

let arr5 = [1, 2, 3, 4, 5];
let part = arr5.slice(1, 4);
console.log(part);
console.log(arr5); 


let arr6 = [1, 2, 3, 4];
arr6.splice(1, 2, "a", "b");
console.log(arr6);