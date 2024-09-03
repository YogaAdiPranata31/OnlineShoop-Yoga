let cart = [];

function searchProduct() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const products = document.querySelectorAll('.product-item');
    let found = false;

    products.forEach(function(product) {
        const productName = product.getAttribute('data-name').toLowerCase();
        
        if (productName.includes(searchInput)) {
            product.style.display = 'block';
            found = true;
        } else {
            product.style.display = 'none';
        }
    });

    const notification = document.getElementById('search-notification');
    if (!found) {
        notification.style.display = 'block';
    } else {
        notification.style.display = 'none';
    }
}

function addToCart(productName) {
    cart.push(productName);
    updateCartCount();
    updateCartDisplay();
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

function toggleCart() {
    const cartSection = document.getElementById('cart');
    if (cartSection.style.display === 'none') {
        cartSection.style.display = 'block';
    } else {
        cartSection.style.display = 'none';
    }
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; // Hapus daftar lama
    cart.forEach(function(item) {
        const newItem = document.createElement('li');
        newItem.textContent = item;
        cartItems.appendChild(newItem);
    });
}
