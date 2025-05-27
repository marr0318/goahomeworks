function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;

    this.getDescription = function() {
        return Car: ${this.brand} ${this.model}, Year: ${this.year};
    };

    this.age = function(currentYear) {
        return currentYear - this.year;
    };
}
const car1 = new Car("Toyota", "Camry", 2015);
const car2 = new Car("Honda", "Civic", 2018);
const car3 = new Car("Ford", "Mustang", 2020);
console.log(car1.getDescription());
console.log(car2.getDescription());
console.log(car3.getDescription());
console.log(Age of car1: ${car1.age(2025)} years);
console.log(Age of car2: ${car2.age(2025)} years);
console.log(Age of car3: ${car3.age(2025)} years);



function Rectangle(width, height) {
    this.width = width;
    this.height = height;

    this.area = function() {
        return this.width * this.height;
    };

    this.perimeter = function() {
        return 2 * (this.width + this.height);
    };
}
const rect1 = new Rectangle(10, 5);
const rect2 = new Rectangle(7, 3);
console.log(Area of rect1: ${rect1.area()} square units);
console.log(Perimeter of rect1: ${rect1.perimeter()} units);
console.log(Area of rect2: ${rect2.area()} square units);
console.log(Perimeter of rect2: ${rect2.perimeter()} units);