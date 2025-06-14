
// 1. შექმენით საიტი, სადაც გექნებათ ფოტო და ღილაკი. ღილაკზე დაჭერის შემდეგ შეცვალეთ ფოტო, გამოიყენეთ pointerdown მოვლენა.

// 2. შექმენით საიტი, სადაც გექნებათ ტექსტი 'do not remove mouse from a button once you click it!' და ღილაკი, ამ ღილაკზე თუ 
// მომხმარებელი მაუსს დააჭერს და შემდეგ აუშვებს, კონსოლში გამოიტანეთ ტექსტი 'you lost!'.

// bonus:
// 3. შექმენით საიტი, სადაც გექნებათ პარაგრაფი 'do not hover over me', თუ მომხმარებელი მაუსით ამ პარაგრაფზე გადაატარებს, 
// გაუშვით ფუნქცია, რომელიც ტექსტის ფერს გააწითლებს, ხოლო კონტენტს კი 
// შეცვლის სხვა შინაარსით, ვთქვათ 'why did you hover over me'.

document.getElementById('chngbtn').addEventListener('pointerdown', function () {
    document.getElementById('chngimg').src='pexels-souvenirpixels-417074.jpg';
});

document.getElementById('Btn').addEventListener('pointerup', function () {
    console.log('you lost!');
});

document.getElementById('hvp').addEventListener('pointerover', function () {
    this.style.color='red';
    this.textContent='why did you hover over me';
})

