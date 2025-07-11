// 1. შექმენით ბურთის ფერის შეცვლის ანიმაცია, რომელსაც გამოიძახებთ ყოველ 5 წამში.

// 2. საიტის ჩატვირთვის დროს პირდაპირ გაუშვით ფუნქცია, რომელიც კონსოლში გამოიტანს 5-ს.

// 3. შექმენით სია და დივი, შემდეგ for loop-ით შექმენით სათაურები, დაამატეთ შიგნით სიის 
// ელემენტების ტექსტები, ბოლოს კი დააამატეთ ეს ტექსტიანი ელემენტები დივში.
function changeColour() {
    const ball = document.getElementById('bll');
    const colors = ['ninojan', 'marijan', 'giojan'];
   for(let i=0; i<colors.length; i++){
    ball.style.color = colors[i]
   }
}

setInterval(changeColour, 5000);

window.onload = function() {
    console.log(5);
}

const list = ['1', '2', '3', '4', '5'];
const arg = document.getElementById('itmc');
for (let i = 0; i < items.length; i++) {
    const sbb = document.createElement('h2');
    sbb.textContent = list[i];
    arg.appendChild(sbb);
}

