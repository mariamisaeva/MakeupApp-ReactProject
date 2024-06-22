import React, { useState, useContext } from 'react';
import useFetchProducts from '../../../../Hooks/useFetchProducts';
import { Link } from 'react-router-dom';
import './products.css';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import { CartContext } from '../../../../Context/CartContext';
import CircularProgress from '@mui/material/CircularProgress';



function Products() {
    const { setCartCount } = useContext(CartContext);
    // 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type="lipstick"&brand="lakme"&price="100.00-400.00"&page=1&per_page=10'
    const products_url = `https://makeup-api.herokuapp.com/api/v1/products.json?rating_greater_than=4&price_greater_than=20`;


    const [selectedCategory, setSelectedCategory] = useState('All');


    //fetch products
    const { products, loading, error } = useFetchProducts(products_url); //all products (too heavy)


    const categories = ['All', ...new Set(products.map(product =>
        (product.product_type).toUpperCase()
    ))].sort(); //unique cats.


    const productsByCategory = selectedCategory === 'All' ? products : products.filter(product =>
        ((product.product_type).toUpperCase()) === selectedCategory);



    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };


    if (loading) {
        return <div className="loading"><CircularProgress /></div>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div className="main-container">

            <div className="categories-container">
                <h1>Categories</h1>
                <div className='category'>
                    {categories.map(cat =>
                        (<button key={cat} onClick={() => handleCategoryClick(cat)} className={selectedCategory === cat ? 'active' : ''} >{cat}</button>))
                    }
                </div>
            </div>

            <div className="products-container">
                {
                    productsByCategory.map(product => (
                        <div className="box" key={product.id}>
                            <div className="content">
                                <Link to={`/products/${product.id}`}>
                                    <img src={product.image_link} alt={product.name} />
                                    <h4>{product.name}</h4>
                                </Link>
                                <p >{product.brand ? product.brand : 'unknown'}</p>
                                <h4 id='price'>€{product.price}</h4>

                                <AddToCartButton setCartCount={setCartCount} item={product} />

                            </div>
                        </div>
                    ))

                }

            </div>

        </div >
    );
}

export default Products;
