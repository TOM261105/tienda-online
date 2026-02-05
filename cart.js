let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(productId) {
  const product = products.find(p => p.id === productId);

  const existing = cart.find(item => item.id === productId);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartUI();
}

function updateCartUI() {
  const cartContainer = document.getElementById("cart-items");
  const totalEl = document.getElementById("cart-total");

  cartContainer.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;

    cartContainer.innerHTML += `
      <div class="cart-item">
        <span>${item.name} x${item.quantity}</span>
        <span>$${item.price * item.quantity}</span>
      </div>
    `;
  });

  totalEl.textContent = `$${total}`;
}



function checkout() {
  if (cart.length === 0) {
    alert("Tu carrito está vacío");
    return;
  }

  let summary = "Resumen de tu compra:\n\n";
  let total = 0;

  cart.forEach(item => {
    summary += `${item.name} x${item.quantity} - $${item.price * item.quantity}\n`;
    total += item.price * item.quantity;
  });
  summary += `\nTotal: $${total}`;

  alert(summary);

  // aquí después conectamos Stripe
}




function increaseQty(id) {
  const item = cart.find(p => p.id === id);
  if (item) {
    item.quantity++;
    renderCart();
  }
}

function decreaseQty(id) {
  const item = cart.find(p => p.id === id);
  if (item && item.quantity > 1) {
    item.quantity--;
  } else {
    removeFromCart(id);
  }
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  renderCart();
}



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
