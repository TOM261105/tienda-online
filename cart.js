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
