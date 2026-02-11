let cart = [];

// Agregar producto
function addToCart(productId) {
  const product = products.find(p => p.id === productId);

  const item = cart.find(p => p.id === productId);

  if (item) {
    item.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  renderCart();
}

// Quitar producto
function removeFromCart(productId) {
  cart = cart.filter(p => p.id !== productId);
  renderCart();
}

// Cambiar cantidad
function changeQuantity(productId, amount) {
  const item = cart.find(p => p.id === productId);
  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {
    removeFromCart(productId);
  }

  renderCart();
}

// Pintar carrito
function renderCart() {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;

cartItems.innerHTML += `
  <div class="cart-item">
    <span class="cart-name">${item.name}</span>

    <div class="cart-controls">
      <button class="qty-btn" onclick="changeQuantity(${item.id}, -1)">−</button>
      <span class="qty">${item.quantity}</span>
      <button class="qty-btn" onclick="changeQuantity(${item.id}, 1)">+</button>
      <button class="remove-btn" onclick="removeFromCart(${item.id})">🗑</button>
    </div>
  </div>
`;

  });

  cartTotal.textContent = `$${total}`;
}

async function checkout() {
  const response = await fetch("https://stripe-backend-xxxx.onrender.com/create-checkout-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      items: cart
    }),
  });

  const data = await response.json();
  window.location.href = data.url;
}

