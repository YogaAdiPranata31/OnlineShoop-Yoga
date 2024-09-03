// Muat produk dari file JSON
fetch('/api/products')
    .then(response => response.json())
    .then(products => {
        const productGrid = document.getElementById('product-grid');
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.className = 'product';
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
                <button>Add to Cart</button>
            `;
            productGrid.appendChild(productElement);
        });

        function searchProduct() {
            const searchInput = document.getElementById('search-input').value.toLowerCase();
            const products = document.querySelectorAll('Laptop ABC');
        
            products.forEach(function(product) {
                const productName = product.getAttribute('data-name').toLowerCase();
                
                if (productName.includes(searchInput)) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        }
        

        // Tambahkan fungsi untuk menambah produk ke keranjang
        const buttons = document.querySelectorAll('.product button');
        const cart = [];

        buttons.forEach((button, index) => {
            button.addEventListener('click', () => {
                const productName = products[index].name;"produk"
                const productPrice = products[index].price;

                cart.push({ name: productName, price: productPrice });
                alert(`${productName} telah ditambahkan ke keranjang belanja Anda!`);
                
                // Update jumlah item di keranjang
                document.querySelector('.cart-count').textContent = `(${cart.length})`;
            });
        });
    })
    .catch(error => console.error('Error fetching products:', error));

// Slider sederhana (beralih gambar setiap 3 detik)
let currentSlide = 0;
const slides = document.querySelectorAll('.slider img');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000);
showSlide(currentSlide);

document.getElementById('testimonial-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    if (name && message) {
        addTestimonial(name, message);
        document.getElementById('testimonial-form').reset();
    } else {
        alert('Silakan isi nama dan testimoni Anda.');
    }
});

function addTestimonial(name, message) {
    const testimonialList = document.getElementById('testimonial-list');

    const testimonialItem = document.createElement('div');
    testimonialItem.classList.add('testimonial');

    const testimonialName = document.createElement('h4');
    testimonialName.textContent = name;

    const testimonialMessage = document.createElement('p');
    testimonialMessage.textContent = message;

    testimonialItem.appendChild(testimonialName);
    testimonialItem.appendChild(testimonialMessage);

    testimonialList.appendChild(testimonialItem);
}
