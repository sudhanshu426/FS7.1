const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");
const cors = require('cors'); 

const app = express();
const port = 3000;

// --- 1. Middleware ---
app.use(bodyParser.json());
app.use(cors()); // Allow browser requests

// --- 2. Mock Product Data ---
const products = [
  { id: 1, name: 'Wireless Mouse', price: 49.99 },
  { id: 2, name: 'Mechanical Keyboard', price: 129.99 },
  { id: 3, name: '4K Monitor', price: 399.99 },
  { id: 4, name: 'USB-C Hub', price: 34.50 }
];

// --- 3. The API Route ---
/**
 * GET /api/products
 * Returns the list of products.
 */
app.get('/api/products', (req, res) => {
  // We add a 1-second delay to simulate a real network request
  // This helps us see the "Loading..." state on the React frontend
  setTimeout(() => {
    res.status(200).json(products);
  }, 1000);
});

// --- 4. Frontend HTML Route ---
/**
 * ROOT ROUTE
 * Path: GET /
 * Serves the index.html file, which is our React App
 */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// --- 5. Start Server ---
app.listen(port, '0.0.0.0', () => {
    console.log(Backend API server running on port ${port});
    console.log(Use the ByteXL 'Preview' button for port 3000.);
});
