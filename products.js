const products = [
  {
    name: "Discada x kg",
    price: 500,
    image: "images/discada.jpg",
    stripeLink: "https://buy.stripe.com/7sY9ATcxufxY0OQgP0eEo00"
  },
  {
    name: "La de mamá ",
    price: 200,
    image: "images/salsademama.jpg",
    stripeLink: "https://buy.stripe.com/TU_LINK_2"
  },
  {
    name: "Rafavorita",
    price: 200,
    image: "images/rafavorita.jpg",
    stripeLink: "https://buy.stripe.com/TU_LINK_3"
  },
  {
    name: "70 chiles",
    price: 200,
    image: "images/70chiles.jpg",
    stripeLink: "https://buy.stripe.com/TU_LINK_4"
  }
];

const container = document.getElementById("product-list");

products.forEach(product => {
  container.innerHTML += `
    <div class="product">
      <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>Precio: $${product.price} MXN</p>
        <a href="${product.stripeLink}" target="_blank">
          <button>Comprar</button>
        </a>
    </div>
  `;
});
