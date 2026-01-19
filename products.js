const products = [
  {
    name: "Playera Negra",
    price: 300,
    stripeLink: "https://buy.stripe.com/TU_LINK_1"
  },
  {
    name: "Sudadera Gris",
    price: 600,
    stripeLink: "https://buy.stripe.com/TU_LINK_2"
  },
  {
    name: "Gorra Blanca",
    price: 250,
    stripeLink: "https://buy.stripe.com/TU_LINK_3"
  }
];

const container = document.getElementById("product-list");

products.forEach(product => {
  container.innerHTML += `
    <div class="product">
      <h2>${product.name}</h2>
      <p>Precio: $${product.price} MXN</p>
      <a href="${product.stripeLink}">
        <button>Comprar</button>
      </a>
    </div>
  `;
});
