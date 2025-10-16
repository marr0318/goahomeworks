
// გააგზავნეთ მოთხოვნა ამ საიტზე და კონსოლში გამოიტანეთ json-ად ქცეული შედეგი
// 'https://fakestoreapi.com/products/1'

fetch('https://fakestoreapi.com/products/1')
    .then(response => response.json())
    .then(data => console.log(data))

const user = {
  firstName: "Jane",
  lastName: "Doe",
};

console.log(user.firstName)