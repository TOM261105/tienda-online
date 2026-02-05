const products = [
  {
    id: 1,
    name: "Discada x kg",
    price: 500,
    image: "images/discada.jpg",
  },
  {
    id: 2,
    name: "La de mamá ",
    price: 200,
    image: "images/salsademama.jpg",
  },
  {
    id: 3,
    name: "Rafavorita",
    price: 200,
    image: "images/rafavorita.jpg",
  },
  {
    id: 4,
    name: "70 chiles",
    price: 200,
    image: "images/70chiles.jpg",
  }
];

const container = document.getElementById("product-list");

products.forEach(product => {
  container.innerHTML += `
    <div class="product">
      <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>Precio: $${product.price} MXN</p>
         <button onclick="addToCart(${product.id})">Agregar al carrito</button>
        </a>
    </div>
  `;
});

function renderCart() {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;

    cartItems.innerHTML += `
      <div class="cart-item">
        <span>${item.name} - $${item.price}</span>

        <div class="cart-controls">
          <button onclick="decreaseQty(${item.id})">−</button>
          <span>${item.quantity}</span>
          <button onclick="increaseQty(${item.id})">+</button>
          <button onclick="removeFromCart(${item.id})">🗑️</button>
        </div>
      </div>
    `;
  });

  cartTotal.textContent = `$${total}`;
}
