import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetchProducts from '../../../../Hooks/useFetchProducts';
import QuantitySelector from '../QuantitySelector/QuantitySelector';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import { CartContext } from '../../../../Context/CartContext';
import './product-details.css';
import '../QuantitySelector/quantity-selector.css';
import CircularProgress from '@mui/material/CircularProgress';


function ProductDetails() {

    const { setCartCount } = useContext(CartContext);

    const { id } = useParams();
    const url = `https://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
    const { products: product, loading, error } = useFetchProducts(url);

    const [quantity, setQuantity] = useState(1);


    if (loading) {
        return <div className="loading"><CircularProgress /></div>
    } else if (error) {
        return <h1>{error}</h1>
    }
    if (!product) {
        return <h1>Product Not Found</h1>
    }

    return (
        <div className='details-container'>

            <div className='left-section'>
                <img src={product.api_featured_image} alt={product.name} />


                <div className='price'><h3>Price: ${product.price}</h3></div>

                <div className='quantity-selector'><QuantitySelector /*product={product}*/ quantity={quantity} setQuantity={setQuantity} /></div>
                <div className='addBtn-details'><AddToCartButton setCartCount={setCartCount} item={product} quantity={quantity} /></div>
            </div>

            <div className='right-section'>
                <h1>{product.name}</h1>
                <h3>Brand: {product.brand ? product.brand : 'Unknown'}</h3>
                <h3>Product ID: {product.id}</h3>
                <h3>Rating: {product.rating}</h3>
                <p>{product.description}</p>
                <h3>Product Link: <a href={product.product_link} target="_blank" rel="noopener noreferrer">{product.product_link}</a></h3>

            </div>


        </div>



    );
}

export default ProductDetails;
