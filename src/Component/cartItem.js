import React from 'react'

const CartItem = ({products}) => {
    return (
        <div className="cartitem">
            <img src={products.image} className="cart-image" alt="product" title={products.title} />
            <h3 className="cart-title">{products.title}</h3>
            <p className="price">price: <span>$ {products.price}</span></p>
        </div>
    )
}

export default CartItem;