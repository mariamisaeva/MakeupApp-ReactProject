import React, { useContext } from 'react';
import { CartContext } from '../../../Context/CartContext';
import QuantitySelector from '../ProductsPage/QuantitySelector/QuantitySelector';
import './cart.css';



function Cart() {
    const { cartItems, setCartItems, removeFromCart } = useContext(CartContext);


    const handleRemoveItem = (item) => {
        removeFromCart(item.id);
    };

    const handleQuantityChange = (item, newQuantity) => {
        setCartItems(currentItems => currentItems.map(i =>
            i.id === item.id ? { ...i, quantity: newQuantity } : i));
    };


    const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2);


    const checkout = () => {
        setCartItems([]); //empty the cart after user has checked out
        alert('Checkout complete! Thank you for your purchase.');

        window.location.reload();
    };


    return (
        <div className='cart-container'>
            <h2>Your Cart</h2>
            <ul className='cart-items'>
                {
                    cartItems.length === 0 ? <p className='empty-cart-msg'>No Items in your cart</p> :

                        cartItems.map((item, index) => (
                            <li key={index} className='cart-item'>
                                <img src={item.image_link} alt={item.name} />
                                <div className='cart-item-details'>
                                    <h3>{item.name}</h3>
                                    <p>Price: ${item.price}</p>

                                    <QuantitySelector
                                        quantity={item.quantity}
                                        setQuantity={
                                            (newQuantity) => handleQuantityChange(item, newQuantity)
                                        } />
                                    <p className='cart-item-quantity' >Quantity: {item.quantity}</p>

                                    <button onClick={() => handleRemoveItem(item)} className='remove-btn'>Remove</button>
                                </div>
                            </li>
                        ))

                }
            </ul>
            <hr />

            {
                cartItems.length > 0 && (
                    <div className="checkout-section">
                        <div>
                            <h2 className="total-price">Total Price: ${totalPrice}</h2>
                        </div>
                        <div>
                            <button onClick={checkout} className="checkout-btn">Checkout</button>
                        </div>
                    </div>
                )
            }


        </div>
    );
}

export default Cart;
