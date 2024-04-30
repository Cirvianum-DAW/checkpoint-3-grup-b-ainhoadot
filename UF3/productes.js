const products = [
  { category: "Electrònica", price: 499.99, name: "Telèfon Intel·ligent" },
  { category: "Electrònica", price: 799.99, name: "Portàtil" },
  { category: "Electrònica", price: 299.99, name: "Auriculars sense fils" },
  { category: "Electrònica", price: 199.99, name: "Televisor Intel·ligent" },
  { category: "Electrònica", price: 149.99, name: "Relotge Intel·ligent" },
  { category: "Llar", price: 249.99, name: "Rentadora" },
  { category: "Llar", price: 149.99, name: "Assecadora" },
  { category: "Llar", price: 99.99, name: "Cafetera" },
  { category: "Llar", price: 79.99, name: "Torradora" },
  { category: "Llar", price: 199.99, name: "Aspiradora" },
];

// Selecció dels inputs...
const productInput = document.querySelector('select[name="product"]');
const quantityInput = document.querySelector('input[name="quantity"]');
const priceInput = document.querySelector('input[name="price"]');
const addProductBtn = document.getElementById('add-product');

// Funció per eliminar missatges d'error existents
function removeExistingError(input) {
  const existingError = input.nextElementSibling;
  if (existingError && existingError.classList.contains("error")) {
    existingError.remove();
  }
}

// Funció per crear i mostrar missatges d'error
function displayError(input, message) {
  const error = document.createElement("div");
  error.textContent = message;
  error.classList.add("error");
  input.insertAdjacentElement("afterend", error);
}

// Afegir els productes disponibles al formulari
function loadProducts() {
  const productSelect = document.querySelector('select[name="product"]');
  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.name;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
}

// Cada vegada que canviem el producte la quantitat passa a 0
function changeQuantity() {
  
}

// Cada vegada que canviem el producte la quantitat s'actualitza depenent del preu del producte
function changePrice() {
  
}


// addEventListeners...
document.addEventListener('DOMContentLoaded', loadProducts);
productInput.addEventListener('change', changeQuantity);
productInput.addEventListener('change', changePrice);