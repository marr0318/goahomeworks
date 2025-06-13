<<<<<<< HEAD
// 1. შექმენით საიტი სადაც გექნებათ ღილაკი, ამ ღილაკზე დაამატეთ 'click' addEventListent და 
// ფუნქციამ კონსოლში გამოიტანოს რიცხვი 5.

// * removeEventListener-ის მეშვეობით წაუშალეთ ზემოთ შექმნილ ფუნქციას event handler.

function FuncTion() {
    console.log(5);
}


let bttn = document.getElementById('btn');


bttn.addEventListener('click', FuncTion);


let rmvButt = document.getElementById('rmv');
removeBtn.addEventListener('click', function() {
  bttn.removeEventListener('click', FuncTion);
  console.log('handler removed');
=======
// 1. შექმენით საიტი სადაც გექნებათ ღილაკი, ამ ღილაკზე დაამატეთ 'click' addEventListent და 
// ფუნქციამ კონსოლში გამოიტანოს რიცხვი 5.

// * removeEventListener-ის მეშვეობით წაუშალეთ ზემოთ შექმნილ ფუნქციას event handler.

function FuncTion() {
    console.log(5);
}


let bttn = document.getElementById('btn');


bttn.addEventListener('click', FuncTion);


let rmvButt = document.getElementById('rmv');
removeBtn.addEventListener('click', function() {
  bttn.removeEventListener('click', FuncTion);
  console.log('handler removed');
>>>>>>> c179ce58ef04408aaf72bb5b20fd57bb674353c5
})