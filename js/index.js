// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  let priceParent = product.querySelector('.price span');
  let price = priceParent.innerHTML;
  let quantity = product.querySelector('.quantity input')
  let subtotal = product.querySelector('.subtotal')
  subtotal.innerHTML = `$<span>${quantity.value * price}</span>`
};

function calculateAll() {
  // ITERATION 2
  //... your code goes here
  let products = document.getElementsByClassName('product');
  for (let i = 0; i < products.length; i++) {
    const element = products[i];
    updateSubtotal(element)
    
  }
  

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
