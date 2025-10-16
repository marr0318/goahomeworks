
// Stack → ინახება პრიმიტული ტიპები (number, string, boolean) და ფუნქციის კონტექსტი ეს არის პრიმიტიული.

// Heap → ინახება კომპლექსური ტიპები (object, array, function) ეს არის კომლექსური.

const name1= document.getElementById("passw");
const name2= document.getElementById("passwinp");
const name3= document.getElementById("msg");

name1.addEventListener("submit", function(e) {
    e.preventDefault();


if (name2.length >= 8) {
    name3.textContent = "corect pass";
    name3.className = "correct";
} else {
    name3.textContent = "Pasw must contain at least 8 characters";
    name3.className = "not right";
}
});
