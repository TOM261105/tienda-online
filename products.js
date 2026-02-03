const products = [
  {
    name: "Discada x kg",
    price: 500,
    stripeLink: "https://buy.stripe.com/TU_LINK_1"
  },
  {
    name: "Salsa Verde",
    price: 200,
    stripeLink: "https://buy.stripe.com/TU_LINK_2"
  },
  {
    name: "Salsa Roja",
    price: 200,
    stripeLink: "https://buy.stripe.com/TU_LINK_3"
  },
  {
    name: "Salsa 3",
    price: 200,
    stripeLink: "https://buy.stripe.com/TU_LINK_4"
  }
];

const container = document.getElementById("product-list");

products.forEach(product => {
  container.innerHTML += `
    <div class="product">
      <h2>${product.name}</h2>
      <p>Precio: $${product.price} MXN</p>
      <a href="${product.stripeLink}" target="_blank">
        <button>Comprar</button>
      </a>
    </div>
  `;
});
