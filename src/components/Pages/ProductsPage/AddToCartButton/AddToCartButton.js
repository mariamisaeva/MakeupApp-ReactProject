import React, { useContext } from 'react';
import { CartContext } from '../../../../Context/CartContext';


function AddToCartButton({ item, quantity }) {

    const { addToCart } = useContext(CartContext);


    const handleAddToCart = () => {
        if (item && item.id) { // item exists + valid ID 
            addToCart(item, quantity);

        } else {
            console.error("Invalid item or missing ID property"); ////
        }
    };

    return (
        <button className="add-to-cart-btn" onClick={handleAddToCart}>Add To Cart</button>
    );

}

export default AddToCartButton;
