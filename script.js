// 
const clearShoppingCart = () => {
 const ol = document.querySelector('.cart__items');
 ol.innerHTML = '';
};

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}
function cartItemClickListener(event) {
  // coloque seu código aqui
  return event.target.remove();
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  const button = document.querySelector('.empty-cart');
  button.addEventListener('click', clearShoppingCart);
  return li;
}
const itemSelected = async (event) => {
  const selectedItem = event.target.parentNode.firstChild.innerText;
  const { id, title, price } = await fetchItem(selectedItem);
  const elementItem = createCartItemElement({ sku: id, name: title, salePrice: price });
  const classItem = document.querySelector('.cart__items');
  classItem.appendChild(elementItem);
};

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'))
  .addEventListener('click', itemSelected);
  return section;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

const productLists = async (product) => {
  const objectArray = await fetchProducts(product);
    console.log(objectArray);
    objectArray.forEach(({ id, title, thumbnail }) => {
    const sku = id;
    const name = title;
    const image = thumbnail;
    const catchItems = document.querySelector('.items');
    catchItems.appendChild(createProductItemElement({ sku, name, image }));
  });
 };
 
window.onload = async () => {
  await productLists('computador');
 };
