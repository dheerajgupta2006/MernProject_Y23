const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB URI
const mongoURI = 'mongodb+srv://allamsirish6:Asirish2006@cluster0.0naos.mongodb.net/myDatabaseName'; // Replace `myDatabaseName` with your database name

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Product Schema
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  price: Number,
  category: String,
});
const Product = mongoose.model('Product', productSchema);

// User Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});
const User = mongoose.model('User', userSchema);

// Cart Schema
const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
      quantity: { type: Number, default: 1 },
    },
  ],
});
const Cart = mongoose.model('Cart', cartSchema);

// Routes

// Get all products
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching products', error: err.message });
  }
});

// Add a product
app.post('/api/products', async (req, res) => {
  const { name, description, image, price, category } = req.body;
  const newProduct = new Product({ name, description, image, price, category });

  try {
    const product = await newProduct.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ message: 'Error adding product', error: err.message });
  }
});

// User registration
app.post('/api/users/register', async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = new User({ name, email, password });

  try {
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: 'Error registering user', error: err.message });
  }
});

// User login
app.post('/api/users/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });
    if (user) {
      res.json(user);
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error logging in', error: err.message });
  }
});

// Get cart by user ID
app.get('/api/cart/:userId', async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId }).populate('items.productId');
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching cart', error: err.message });
  }
});

// Add item to cart
app.post('/api/cart/:userId', async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    let cart = await Cart.findOne({ userId: req.params.userId });
    if (!cart) {
      cart = new Cart({ userId: req.params.userId, items: [] });
    }

    cart.items.push({ productId, quantity });
    await cart.save();
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: 'Error adding item to cart', error: err.message });
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
