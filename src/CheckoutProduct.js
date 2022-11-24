import React from 'react'
import './CheckoutProduct.css'
import {useStateValue} from './StateProvider'

function CheckoutProduct({id, image, title, price, rating}) {
    const [{basket}, dispatch] = useStateValue();
   const removeFromBasket = () =>{
dispatch({
    type:"REMOVE_FROM_BASKET",
    id:id
})
    }
    return (
        <div className="checkoutProduct">
            <img className="image" src={image} alt=""/>
            <div className="product_info">
                <p className="title">{title}</p>
                <strong className="price">&#8377;{price}</strong>
                <p>{"⭐".repeat(rating)}</p>
                <button onClick={removeFromBasket}>Remove From Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct;
