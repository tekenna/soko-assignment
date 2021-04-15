import React, { useState } from 'react'
import Account from "../Components/account"
import Address from "../Components/address"
import Payment from "../Components/payment"



function NotLogged () {
    const [state, setState] = useState({
        count1: 1,
        count2: 2,
        refNum1: 1,
        refNum2: 2,
        refNum3: 3,
        refStyle1: {backgroundColor: " rgb(42, 95, 240)", color: "white"},
        refStyle2: {backgroundColor: "transparent", color: "black"},
        refStyle3: {backgroundColor: "transparent", color: "black"},
        btnStyle: {backgroundColor:"rgb(216, 196, 18)", color:" rgb(42, 95, 240)"},
        input: false,
        target: false,
        value: "123491919",
        addID: "hide",
        addID2: "hide",
        addID3: "hide"
    })
    return (
        <>
            
            <div className="logged">
                <div className="logged_container">
                    <div className="account_area">
                        <div className="account_content_wrap">
                            <Account state={state} setState={setState} />
                            <Address state={state} setState={setState} />
                            <Payment state={state} setState={setState} />
                        </div>
                    </div>
                    <div className="bag_area">
                        <div className="bag_content_wrap">
                            <div className="bag_head_wrap">
                                <h2>Bag <span className="num">{0}</span></h2>
                                <a>clear bag</a>
                            </div>
                            <div className="bag_item_container">
                                <div className="bag_items">
                                    <div className="bag_item_content">
                                        <p>Earrings and Mangtikka</p>
                                        <small>Per piece</small>
                                        <p>UGX 118,400</p>
                                        <div className="slash">UGX 118,400</div>
                                    </div>
                                    <div className="prod_btn" id="button">
                                        <span onClick={()=>setState(state.count1 > 0?{...state, count1: state.count1 - 1}:{...state, count1: state.count1})}>-</span>
                                        {state.count1}
                                        <span onClick={()=>setState(state.count1 > 0?{...state, count1: state.count1 + 1}:{...state, count1: state.count1})}>+</span>
                                    </div>
                                </div>
                                <div className="bag_items">
                                    <div className="bag_item_content">
                                        <p>Earrings and Mangtikka</p>
                                        <small>Per piece</small>
                                        <p>UGX 118,400</p>
                                        <div className="slash">UGX 118,400</div>
                                    </div>
                                    <div className="prod_btn" id="button">
                                        <span onClick={()=>setState(state.count2 > 0?{...state, count2: state.count2 - 1}:{...state, count2: state.count2})}>-</span>
                                        {state.count2}
                                        <span onClick={()=>setState(state.count2 > 0?{...state, count2: state.count2 + 1}:{...state, count2: state.count2})}>+</span>
                                    </div>
                                </div>
                            </div>
                            <div className="cal_total_wrap">
                                <div className="wrapper">
                                    <div className="wrap">
                                        <p>SubTotal</p>
                                        <p>UGX 12,700</p>
                                    </div>
                                    <div className="wrap">
                                        <p>Delivery</p>
                                        <p id="green1">Free</p>
                                    </div>
                                </div>
                                <div className="wrapper">
                                    <div className="wrap">
                                        <p id="tax">Total</p>
                                        <p id="tax">UGX 12,700</p>
                                    </div>
                                    <small>Inclusive of all taxes</small>
                                </div>
                                <small id="green2">You are about to save UGX 27,400 on this order</small>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
        )
    }
    


export default NotLogged
