const arr1 = [1, 2, 3, 4, 5];
const result1 = arr1.map(num => num % 2 === 0 ? num * 2 : num);
console.log(result1);

const arr2 = ["cat", "elephant", "dog"];
const result2 = arr2.map(word => word[0]);
console.log(result2);

const arr3 = ["alice", "bob", "charlie"];
const result3 = arr3.map(name => name[0].toUpperCase() + name.slice(1).toLowerCase());
console.log(result3);

const arr4 = [10, 20, 30];
const result4 = arr4.map((value, index) => `Index: ${index}, Value: ${value}`);
console.log(result4);

const arr5 = [
  {id: 1, name: "apple"},
  {id: 2, name: "banana"},
  {id: 3, name: "cherry"}
];
const result5 = arr5.map(item => item.name.toUpperCase());
console.log(result5);
