let cart = [];
let products = [
   // Array yang menyimpan produk-produk di toko
    {
        name: "Lipstick",
        image: "lipstik.avif",
        price: "Rp100.000",
        description: "Lipstick dengan warna menawan dan tahan lama.",
        rating: "⭐⭐⭐⭐",
        tags: "makeup,kosmetik,kecantikan"
    },
    {
        name: "Foundation",
        image: "fundation.jpg",
        price: "Rp150.000",
        description: "Foundation dengan coverage yang baik dan tahan lama.",
        rating: "⭐⭐⭐⭐⭐",
        tags: "makeup,kosmetik,kecantikan"
    },
    {
        name: "Iphone 15Promex",
        image: "iphone.webp",
        price: "Rp15.000.000",
        description: "Iphone 15Promex dengan teknologi canggih dapat mengahsilkan gambar yang jernih saat memotret.",
        rating: "⭐⭐⭐⭐⭐",
        tags: "elektronik,gadget,ponsel"
    },
    {
        name: "kaos polos",
        image: "baju pria.jpg",
        price: "Rp155.000",
        description: "Kaos polos pria dengan kualitas bagus kain tebal dan lembut sehingga nyaman utuk memakai nya.",
        rating: "⭐⭐⭐⭐⭐",
        tags: "baju,kaos,baju cowok,kaos polos"
    }
    // Tambahkan lebih banyak produk di sini
];

// Fungsi untuk mencari produk berdasarkan input pengguna
function searchProduct() {
    const searchInput = document.getElementById('search-input').value.toLowerCase(); // Mengambil input pencarian dan mengonversinya menjadi huruf kecil
    const productItems = document.querySelectorAll('.product-item'); // Mengambil semua elemen produk dari HTML
    let found = false; // Variabel untuk melacak apakah produk ditemukan

    // Looping melalui setiap produk untuk mencari yang sesuai
    productItems.forEach(function(product) {
        const productName = product.getAttribute('data-name').toLowerCase(); // Mengambil nama produk dan mengonversinya menjadi huruf kecil
        const productTags = product.getAttribute('data-tags').toLowerCase(); // Mengambil tag produk dan mengonversinya menjadi huruf kecil

        // Jika nama produk atau tag produk sesuai dengan input pencarian
        if (productName.includes(searchInput) || productTags.includes(searchInput)) {
            product.style.display = 'block'; // Tampilkan produk
            found = true; // Setel variabel found ke true
        } else {
            product.style.display = 'none'; // Sembunyikan produk
        }
    });

    const notification = document.getElementById('search-notification');
    if (!found) {
        notification.style.display = 'block';
    } else {
        notification.style.display = 'none';
    }

     // Jika tidak ada produk yang ditemukan, tampilkan pesan peringatan
     if (!found) {
        alert('Produk tidak ditemukan.');
    }
}

// Fungsi untuk menambahkan produk ke dalam keranjang belanja
function addToCart(productName) {
    cart.push(productName); // Menambahkan nama produk ke dalam array cart
    updateCartCount(); // Memperbarui jumlah produk dalam keranjang
    updateCartDisplay(); // Memperbarui tampilan keranjang belanja
}

// Fungsi untuk memperbarui jumlah produk dalam keranjang yang ditampilkan
function updateCartCount() {
    const cartCount = document.getElementById('cart-count'); // Mengambil elemen yang menampilkan jumlah produk dalam keranjang
    cartCount.textContent = cart.length; // Mengatur jumlah produk dalam keranjang sesuai dengan panjang array cart
}

function displayCartItems() {
    // Tampilkan item di keranjang
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    cart.forEach(function(item, index) {
        const listItem = document.createElement('li');
        listItem.textContent = item;

        // Tombol Hapus untuk mengeluarkan produk dari keranjang
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Hapus';
        removeButton.style.marginLeft = '10px';
        removeButton.onclick = function() {
            removeFromCart(index);
        };

        listItem.appendChild(removeButton);
        cartItems.appendChild(listItem);
    });
}

function removeFromCart(index) {
    // Hapus produk dari keranjang berdasarkan indeks
    cart.splice(index, 1);
    updateCartCount();
    displayCartItems();
}

// Fungsi untuk menampilkan keranjang belanja
function showCart() {
    document.getElementById('shopping-cart').style.display = 'block';
}

// Fungsi untuk menutup keranjang belanja
function closeCart() {
    document.getElementById('shopping-cart').style.display = 'none';
}

function toggleCart() {
    // Toggle tampilan keranjang
    const cartSection = document.getElementById('cart');
    if (cartSection.style.display === 'none' || cartSection.style.display === '') {
        cartSection.style.display = 'block';
    } else {
        cartSection.style.display = 'none';
    }
}

// Fungsi untuk menghapus produk dari keranjang
function removeFromCart(productName) {
    const productIndex = cart.indexOf(productName); // Mencari indeks produk dalam array cart
    if (productIndex !== -1) {
        cart.splice(productIndex, 1); // Menghapus produk dari array cart
        updateCartCount(); // Memperbarui jumlah produk dalam keranjang
        updateCartDisplay(); // Memperbarui tampilan keranjang belanja
    }
}

// Memperbarui fungsi updateCartDisplay untuk menambahkan tombol "Hapus" di samping setiap item produk
function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items'); // Mengambil elemen list untuk menampilkan item keranjang
    cartItems.innerHTML = ''; // Menghapus semua item dalam keranjang
    cart.forEach(function(item) {
        const newItem = document.createElement('li'); // Membuat elemen baru untuk setiap item keranjang
        newItem.textContent = item; // Mengatur teks elemen baru dengan nama produk

        // Membuat tombol "Hapus"
        const removeButton = document.createElement('button'); // Membuat elemen button untuk tombol hapus
        removeButton.textContent = 'Hapus'; // Mengatur teks tombol menjadi "Hapus"
        removeButton.onclick = function() { // Menambahkan event handler untuk tombol hapus
            removeFromCart(item); // Memanggil fungsi removeFromCart saat tombol diklik
        };

        newItem.appendChild(removeButton); // Menambahkan tombol hapus ke item produk
        cartItems.appendChild(newItem); // Menambahkan elemen baru ke dalam list keranjang
    });
}

function selectPaymentMethod(method) {
    switch (method) {
        case 'DANA':
            // Redirect ke API pembayaran DANA atau halaman DANA
            window.location.href = "https://link.dana.id/qr/YOUR_DANA_QR_CODE";
            break;
        case 'Alfamart':
            // Redirect ke instruksi pembayaran Alfamart
            alert("Silakan kunjungi Alfamart terdekat dan berikan kode pembayaran ini: 1234567890");
            break;
        case 'OVO':
            // Redirect ke API pembayaran OVO atau halaman OVO
            window.location.href = "https://www.ovo.id/link/YOUR_OVO_PAYMENT_LINK";
            break;
        default:
            alert("Metode pembayaran tidak valid.");
    }
}

// Fungsi untuk menampilkan detail produk saat pengguna mengklik "Lihat Detail"
function showProductDetail(productName) {
    const productDetailSection = document.getElementById('product-detail'); // Mengambil elemen section detail produk
    const product = products.find(p => p.name === productName); // Mencari produk yang sesuai dengan nama produk

    if (product) {
        document.getElementById('detail-title').textContent = product.name; // Mengatur judul detail produk
        document.getElementById('detail-image').src = product.image; // Mengatur gambar detail produk
        document.getElementById('detail-description').textContent = product.description; // Mengatur deskripsi detail produk
        document.getElementById('detail-price').textContent = 'Harga: ' + product.price; // Mengatur harga detail produk
        document.getElementById('detail-rating').textContent = 'Rating: ' + product.rating; // Mengatur rating detail produk
    }

    productDetailSection.style.display = 'block'; // Tampilkan detail produk
}

// Fungsi untuk menutup tampilan detail produk
function closeProductDetail() {
    document.getElementById('product-detail').style.display = 'none'; // Sembunyikan detail produk
}

// Fungsi untuk menambahkan produk ke keranjang dari halaman detail produk
function addToCartFromDetail() {
    const productName = document.getElementById('detail-title').textContent; // Mengambil nama produk dari detail produk
    addToCart(productName); // Menambahkan produk ke keranjang
    closeProductDetail(); // Menutup detail produk setelah produk ditambahkan ke keranjang
}


function checkout() {
    // Proses checkout (misalnya, menampilkan pesan)
    alert('Anda akan melakukan checkout untuk produk berikut:\n' + cart.join(', '));
    cart = [];  // Kosongkan keranjang setelah checkout
    updateCartCount();
    displayCartItems();
}
