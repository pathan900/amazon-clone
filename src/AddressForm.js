import React from 'react'
import {useForm} from 'react-hook-form'
import {useHistory} from 'react-router-dom';
import './Address.css'

const AddressForm = ({setAddress}) => {
    const history = useHistory();
    const {register, handleSubmit, errors} = useForm();
    const onSubmit = data =>{
        setAddress(data);
        console.log(data);
        history.push('/payment');
    }
   
    return (
        <div className="address">
            <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Add address</h2>
                <input type="text" placeholder="Full Name"  name="fullname" required="true" ref={register}/>
                <input type="number" placeholder="Mobile Number"  name="mobile" required="true" ref={register}/>
                <input type="number" placeholder="PIN Code"  name="pin" required="true" ref={register}/>
                <input type="text" placeholder="Flat, House no., Building, Company, Apartment"  name="house" required="true" ref={register}/>
                <input type="text" placeholder="Area, Colony, Street, Sector, Village" name="area" required="true" ref={register}/>
                <input type="text" placeholder="Landmark e.g. near Apollo Hospital"  name="landmark" required="true" ref={register}/>
                <input type="text" placeholder="Town/City" name="city" required="true" ref={register}/>
                <h2>Add delivery instructions</h2>
                <p>Preferences are used to plan your delivery. However, shipments can sometimes arrive early or later than planned.</p>
                <label >Address Type</label>
                <select name="add_type" id="add_type"  ref={register}>
                    <option value="Select an Address Type" className="delv_option">Select an Address Type</option>
                    <option value="Home(7 am-9 pm delivery)" className="delv_option">Home(7 am-9 pm delivery)</option>
                    <option value="Office/Commercial (10 am-6 pm delivery)" className="delv_option">Office/Commercial (10 am-6 pm delivery)</option>
                </select>
                <small className="check">
                        <input type="checkbox" ref={register}/> Use as my default address.
                    </small>
                <button type="submit" >Continue</button>

            </form>
        </div>
    )
}

export default AddressForm  

