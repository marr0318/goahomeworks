// 1. შექმენით ფუნქცია, რომელიც იღებს რიცხვების მასივს და თითოეულ რიცხვს ბეჭდავს for ციკლის გამოყენებით.

function printNumbers(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }
}

// 2. შექმენით სახელების მასივი, შემდეგ, გამოიყენეთ for ციკლი თითოეული სახელის და მისი პოზიციის დასაბეჭდად.

function printNamesWithIndex(names) {
    for (let i = 0; i < names.length; i++) {
        console.log(`Name: ${names[i]}, Index: ${i}`);
    }
}


function multiplyNumbersByTwo(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i] * 2);
    }
}


function countElementsGreaterThanTen(numbers) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 10) {
            count++;
        }
    }
    return count;
}



function sumArrayElements(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log(sum);
}


document.querySelector
