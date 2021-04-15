import React from 'react'
import {Link} from "react-router-dom"

function Payment({state, setState}) {
    return (
        <div className="payment_wrap">
            <div className="ref_wrap3">
                <div className="ref_num" style={state.refStyle3}>{state.refNum3}</div>
            </div>
            <div className="payment">
                <div className="logged_details">
                    <h3 className="title">Payment</h3>
                    <p>Select your payment method</p>
                    <div id={state.addID3}>
                        <div className="radio_check">
                            <input type="radio" size="2em"/>
                            <p>Cash on delivery</p>
                        </div>
                        <Link to="/" style={{textDecoration: "none"}}>
                            <button style={{color:"rgb(42, 95, 240)"}}>Place Order</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
