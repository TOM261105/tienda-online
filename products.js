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
        <a href="${product.stripeLink}" target="_blank">
          <button>Comprar</button>
        </a>
    </div>
  `;
});
