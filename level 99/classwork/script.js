
// შექმენით ღილაკი, რომელზე დაჭერის შემდეგაც საიტზე მანამდე ცარიელ 
// div-ში ჩაემატება button ელემენტი,

// (დაგჭირდებათ ფუნქცია ჯავასკრიპტში,
// createElement, appendChild..)

let button1=document.getElementById('button')
let button2=document.createElement('button')

let button = document.appendChild(button2)





// საიტზე გქონდეთ ღილაკი, რომელზე დაჭერისას მანამდე არსებულ დივში დაემატება 
// პარაგრაფი, ხოლო იმ პარაგრაფში დაემატება ტექსტი,

// bonus:
// ასევე დივში დაემატება ღილაკიც და იმ ღილაკშიც ტექსტი.

function addParagrap(){
    let cont=document.getElementById('cont')
    let  paragrapi = document.createElement("p")
    paragrapi.textContent = "this is new text";
    cont.appendChild(paragrapi);
    let button=document.createElement('but');
    button.textContent = 'Button';
    container.appendChild(button);

}