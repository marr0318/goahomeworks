
// შექმენით ობიექტი სახელწოდებით class, 

// კუთვნილებებით: studentCount, grade და favSubject.

// შემდეგ გამოიყენეთ if-else განაცხადი, რათა შეამოწმოთ, არის თუ არა studentCount კუთვნილების მნიშვნელობა 30-ზე მეტი. 

// თუ ასეა, დაბეჭდეთ "very big class", სხვა შემთხვევაში დაბეჭდეთ "Small Class".

// Bonus: 
// დაამატეთ if-else დანარჩენი ორი მნიშვნელობისათვისაც.




const classRoom = {
    studentCount: 25,
    grade: 10,
    favSubject: "Geography"
  };
  
  if (classRoom.studentCount>30){
    console.log('very big class')
} else{
    console.log('small class')
}

if (classRoom.grade>= 9) {
    console.log("good grade");
  } else {
    console.log("low grade");
}
  
if (classRoom.favSubject === "Geography") {
    console.log("Right favourite subject");
} 
  else {
    console.log("Wrong favourite sunbject");
}

