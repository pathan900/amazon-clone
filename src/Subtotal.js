import { ImageRounded } from '@material-ui/icons'
import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from './StateProvider';
import { getBasketTotal } from './reducer';
import {useHistory} from 'react-router-dom';

function Subtotal() {
    const history = useHistory();
    const [{basket}, dispatch] = useStateValue();
    let proceed = true
    if(basket.length===0){proceed=false}
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) =>(
                    <>
                    <p>
                        Subtotal ({basket.length} items): <strong> &#8377; {value} </strong>
                    </p>
                    <small className="gift">
                        <input type="checkbox"/> This order contains a gift
                    </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
            />
            {proceed && 
            <button onClick={e =>history.push('/address')}>Proceed to Checkout</button> }
           
        </div>
    )
}

export default Subtotal;
