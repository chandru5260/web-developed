function addToCart(productName) {
    const cartItems = document.getElementById('cart-items');
    const listItem = document.createElement('li');
    listItem.textContent = productName;
    cartItems.appendChild(listItem);
}
