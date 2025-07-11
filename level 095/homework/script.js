
//1
const userName = prompt("enter ur name:");
const userSurname = prompt("eneter ur surname :");
const userAge = prompt("enter ur age:");

const user = {
  name: userName,
  surname: userSurname,
  age: userAge
};

console.log(user)

//2
const me = {
  name: "mari",
  age: 20
};

const you = me;
you.age = 89;

console.log(me.age);