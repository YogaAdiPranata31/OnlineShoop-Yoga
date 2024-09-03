const express = require('express');
const path = require('path');
const app = express();

// Menghidangkan file statis
app.use(express.static(path.join(__dirname, '../public')));

// API untuk produk
app.get('/api/products', (req, res) => {
    const products = require('./products.json');
    res.json(products);
});

// Mulai server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});
