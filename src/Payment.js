import React from 'react'
import './Payment.css'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import {Elements, CardElement, ElementsConsumer} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js'
import {Button} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { getBasketTotal } from './reducer';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

function Payment({address, nextStep}) {    //bug h isme...bina card details ke bhi final page par ja rha h.

    const [{ basket, user }, dispatch] = useStateValue();
    const toPay = getBasketTotal(basket);
    let proceed = true
    if(basket.length===0){proceed=false}
    const handleSubmit = async (e, elements, stripe) =>{
        e.preventDefault();
        if(!stripe || !elements) return;
        const cardElement= elements.getElement(CardElement);
        const {error, paymentMethod} = await stripe.createPaymentMethod({type: 'card', card: cardElement});
        if(error){ 
            proceed=false;
            console.log(error)}
        else{
            
            console.log("done")
            
        }
    
    }
    return (
        <div className="payment">
            <div class="payment_container">
                <div className="payment_section">
                    <div class="payment_title">
                        <h3>Deliver To</h3>
                    </div>
                    <div className="payment_address">
                        <p>{user?.email}</p>
                        <p>{address.fullname}</p>
                        <p>{address.house}-{address.area}, {address.landmark}</p>
                        <p>{address.city}, {address.pin}</p>
                        <p>India</p>
                    </div>
                </div>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="items">
                        {basket.map(item =>
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        )}
                    </div>
                </div>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment method</h3>
                        <br/>
                        <Elements stripe={stripePromise}>
        <ElementsConsumer>
            {({elements, stripe})=>(
               
                <form onSubmit={(e) => handleSubmit(e, elements, stripe)}> 
                    <CardElement/>
                    <br/> <br/>
                    {proceed && stripe &&
                    <div style={{display:'flex' , justifyContent:'space-between'}}>
                    <Link to="/complete">
                        <Button type="submit" variant="contained"  color="primary">   <strong>Pay &#8377; {toPay} </strong></Button>
                        </Link>
                        
                    </div>
                    }
                </form>
            )}
        </ElementsConsumer>
    </Elements>
                    </div>
                    <div className="payment_details"></div>
                </div>
            </div>
        </div>
    )
}

export default Payment;
