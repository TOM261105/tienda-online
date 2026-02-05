const products = [
  {
    id: 1,
    name: "Discada x kg",
    price: 450,
    image: "images/discada.jpg",
  },
  {
    id: 2,
    name: "La de mamá ",
    price: 150,
    image: "images/salsademama.jpg",
  },
  {
    id: 3,
    name: "Rafavorita",
    price: 150,
    image: "images/rafavorita.jpg",
  },
  {
    id: 4,
    name: "70 chiles",
    price: 150,
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
