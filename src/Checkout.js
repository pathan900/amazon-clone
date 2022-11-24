import React from 'react'
import './Checkout.css';
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import {useStateValue} from './StateProvider'


function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div class="left">
                <img className="ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonDevices/Changestore/akai-PC-banner.jpg" alt=""/>
                <div>
                <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout_title">Your Shopping Cart</h2>
                {basket.map(item =>(
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                ))}
                </div>
            </div>
            <div class="right">
            <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout;
