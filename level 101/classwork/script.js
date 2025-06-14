
// 1. შექმენით საიტი, სადაც გექნებათ დივი, მასში კი ღილაკი, 


// 1. შექმენით საიტი, სადაც გექნებათ დივი, მასში კი ღილაკი, 

// დივში არსებული ღილაკი ჯავასკრიპტის მეშვეობით მოაშორეთ,

// 2. შექმენით საიტი, სადაც გექნებათ პარაგრაფი, ცალკ დივი და მასში კი ღილაკი, 

// ჯავასკრიპტის მეშვეობით დივში არსებული ღილაკი ჩაანაცვლეთ პარაგრაფით.

let div2=document.getElementById("div")
let btn2=document.getElementById("btn")
div2.removeChild(btn2)

let div3 = document.getElementById("divv");
let btn3 = document.getElementById("btnn");
let pp = document.getElementById("p1");
div3.replaceChild(pp,btn3);

