const product=  [
  { id: 1, name: "sprite", price: 15 },
  { id: 2, name: "fanta", price: 5 },
  { id: 3, name: "coffee", price: 7 }
]

const productscont = document.getElementById("products")
const items = document.getElementById("cart-items")

for (let product of products) {
  const div = document.createElement("div")
  div.className = "product"

  const name = document.createElement("h3")
  name.textContent = product.name
  div.appendChild(name)

  const productPrice = document.createElement("p")
  productPrice.textContent = "Price: $" + product.price
  div.appendChild(productPrice)

  const button = document.createElement("button")
  button.textContent = "Add to Cart"

  button.addEventListener("click", function() {
    const li = document.createElement("li")
    li.textContent = product.name + " - $" + product.price
    items.appendChild(li)
  })

  div.appendChild(button)
  productscont.appendChild(div)
}

