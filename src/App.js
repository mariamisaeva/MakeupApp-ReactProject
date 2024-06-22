import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Header/Navbar';
import Home from './components/HomePage/Home';
import Products from './components/Pages/ProductsPage/Products/Products';
import ProductDetails from './components/Pages/ProductsPage/ProductDetails/ProductDetails';
import Cart from './components/Pages/CartPage/Cart';
import About from './components/Pages/AboutPage/About';
import Contact from './components/Pages/ContactPage/Contact';
import { CartProvider } from './Context/CartContext';

import './App.css';

function App() {

    return (
        <CartProvider>
            <>
                <Navbar />

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/products/:id' element={<ProductDetails />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />

                </Routes>

            </>
        </CartProvider>
    );
}

export default App;
