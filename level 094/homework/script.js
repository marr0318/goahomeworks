
//1
let a = 0;
while (a <= 20) {
  console.log(a);
  a += 2;
}
//2
let b = 10;
while (b >= 1) {
  console.log(b);
  b--;
}
//3
let c = 1;
let count = 0;
while (c <= 5) {
  count++;
  c++;
}
//4
let userInput = prompt("enter a numb:");
let d = 1;
let max = parseInt(userInput);

while (d <= max) {
  console.log(d);
  d++;
}
//5
for (let e = 1; e <= 10; e++) {
  console.log(e * e);
}
//6
for (let f = 1; f <= 50; f++) {
  console.log(f);
}
//7
let names = ['ellie', 'dina', 'joel', 'abby', 'tommy'];
for (let j = 0; j < names.length; j++) {
  console.log(names[j]);
}
//8
for (let h = 100; h >= 0; h -= 10) {
  console.log(h);
}
//9
let numbers = [1, 2, 3, 4, 13, 16, 20];
let sum = 0;

for (let t = 0; t < numbers.length; t++) {
  if (numbers[t] % 2 === 0) {
    sum += numbers[t];
  }
}

