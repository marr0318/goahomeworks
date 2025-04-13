// შექმენი საიტი, რომელიც მომხმარებლის prompt-ში შეყვანილი ასაკის მიხედვით განსაზღვრავს ბილეთის ფასს:

// წესები:
// თუ ასაკი ნაკლებია 6 წელზე → ბილეთი უფასოა.
// თუ ასაკი 6-დან 17 წლამდეა → ბილეთის ფასი არის 5 ლარი.
// თუ ასაკი 18-დან 64 წლამდეა → ბილეთის ფასი არის 10 ლარი.
// თუ ასაკი 65-ზე მეტია → ბილეთის ფასი არის 7 ლარი.
// თუ შეყვანილია არასწორი ასაკი (ნაკლებია ნულზე ან არაა რიცხვი) → დაბეჭდე: "გთხოვთ, შეიყვანეთ სწორი ასაკი.

let person=int(prompt('Enter your age: '))

if (person<6) {
    alert('The ticket is free!')

}

else if (person>6<17) {
    alert('The ticket costs 5 Gel')

}

else if (person>18<64) {
    alert('The ticket costs 10 Gel')
}

else if (person>65) {
    alert('The ticket costs 7 Gel')
}

else{
    alert('Please, enter right age')
}