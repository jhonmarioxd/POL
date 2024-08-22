const countElement = document.getElementById('count');
const decrementButton = document.querySelector('.button:first-child');
const incrementButton = document.querySelector('.button:last-child');
const precioElement = document.getElementById('precio');

decrementButton.addEventListener('click', () => {
  let count = parseInt(countElement.textContent);
  if (count > 1) {
    count--;
    countElement.textContent = count;
    updatePrice();
  }
});

incrementButton.addEventListener('click', () => {
  let count = parseInt(countElement.textContent);
  if (count < 50) {
    count++;
    countElement.textContent = count;
    updatePrice();
  }
});

function updatePrice() {
    const basePrice = 25000;
    const count = parseInt(countElement.textContent);
    const totalPrice = basePrice * count;
  
    // Formatear el precio con puntos y sin ceros a la izquierda
    const formattedPrice = totalPrice.toLocaleString('es-ES', { minimumFractionDigits: 0 });
  
    precioElement.textContent = formattedPrice;
  }