import React from 'react';


function QuantitySelector({ quantity, setQuantity }) { //better pass as params


    const handleIncrease = () => {
        setQuantity(quantity + 1)
    }
    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <>
            <div className="quantity-selector">
                <button onClick={handleDecrease} className='decrease'>-</button>
                <span>{quantity}</span>
                <button onClick={handleIncrease} className='increase'>+</button>
            </div>

        </>
    );
}


export default QuantitySelector;
