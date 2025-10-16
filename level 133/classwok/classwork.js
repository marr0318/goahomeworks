let number=[1,3,5,7,9];
console.log(number.map(num => num*2));

let strings= ["apple", "banana", "banana", "cherry", "apple", "banana", "cherry"];
console.log(strings.map(string => string.UpperCase()));

let oldlist = [1,2,3];
let newlist = [];
let adfiv = oldlist.map(num => {
let val = num + 5;
newlist.push(val);
    return val;
});
console.log(newlist);

let animals = ["cat", "dog", "parrot"];
console.log(animals.map(animal => animal[0]));

let numb=[2,4,6,8];
console.log(numb.map(numbe => numbe*numbe[0]));

let names=["nino", "da", "mari"];
console.log(names.map(name => name));

