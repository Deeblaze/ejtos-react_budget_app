import React, { useContext, } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { Currency } = useContext(AppContext);
    return (
        <div className='alert alert-secondary'>
            <label style={{marginRight: '3px'}} for = "Currency">Currency </label>
            <select style= {{backgroundColor:'lightgreen'}}>
                <option>&#36; Dollar</option>
                <option>&#163; Pound</option>
                <option>&#8364; Euro</option>
                <option> &#8377; Ruppee</option>
            </select>
        </div>
    )
}
export default Currency