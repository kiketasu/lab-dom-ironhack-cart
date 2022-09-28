// ITERATION 1

function updateSubtotal(product) {

  //... your code goes here
  let priceParent = product.querySelector('.price span');
  
  let price = priceParent.innerHTML;

  let quantity = product.querySelector('.quantity input');
  let subtotal = product.querySelector('.subtotal');
  subtotal.innerHTML = `$<span>${quantity.value * price}</span>`;
};

function calculateAll() {
  // ITERATION 2
  //... your code goes here
  let products = document.getElementsByClassName('product');
  for (let i = 0; i < products.length; i++) {
    const element = products[i];
    updateSubtotal(element);
  };
  // ITERATION 3
  //... your code goes here
  let subtotalAll = document.querySelectorAll('.subtotal span');
  let total = document.querySelector('#total-value')
  let sum = 0;
  for (let i = 0; i < subtotalAll.length; i++) {
    const element = subtotalAll[i].innerHTML;
    console.log(element);
    //para 
    sum += parseFloat(element);
 };
 console.log(sum)
  total.innerHTML = `Total: $<span> ${sum}</span>`
  
};
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const removeBtn = document.querySelectorAll('.btn btn-remove')
  removeBtn.addEventListener('click', removeProduct());

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
