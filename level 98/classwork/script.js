
// 1. შექმენით ფილმის ობიექტის კონსტრაქტორი, ამ კუთვნილებებით: name, genre, year, imdb და review - 
// სადაც გექნებათ ფუნქცია, რომელიც დააბრუნებს ამ ფილმის ერთ ტექსტურ შეფასებას,

// ამის შემდეგ ამ კონსტრუქტორის მეშვეობით შექმენით რამდენიმე ობიექტი და შედეგი გამოიტანეთ კონსოლში.

function FilmSee (name , genre, year, imbd, review){
    this.name=name
    this.genre=genre
    this.year=year
    this.imbd=imbd
    this.review=review

    this.film=function(){
        return `film: "${this.name}" year: ${this.year}, genre: ${this.genre}, IMDB: ${this.imdb}/10. review: ${this.review}`;
    }

}

const film1=new FilmSee("Moana", 2016, "fantastic", 7.9, "In ancient Polynesia, when a terrible curse incurred by the demigod Maui reaches Moana's island, she answers the Ocean's call to seek out Maui to set things right.")
const film2= new FilmSee("Tangled", 2010, "Fantastic", 7.7, "While Tangled brings Disney inching ever more closely to their Pixar counterparts, the studio continues to play it far too safe with this latest adventure")

// 2. ეცადეთ რომ შექმნათ person კონსტრუქტორი, name, age, lastname კუთვნილებებით.

// შემდეგ html-ში გქონდეთ ღილაკი, რომელზეც გექნებათ მიბმული ფუნქცია, რომელიც შექმნის ახალ person 
// ობიექტს და გამოიტანს კონსოლში.


function Person(name, age, lastname) {
    this.name = name;
    this.age = age;
    this.lastname = lastname;
}

function MyPerson() {
    const person1 = new Person("mary", 89, "gelashvili");
    console.log(person1);

}