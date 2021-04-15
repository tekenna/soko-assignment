import React from 'react'
import {GiCheckMark} from "react-icons/gi"

function Address({state, setState}) {

    return (
        <div className="del_address_wrap">
            <div className="ref_wrap2">
                <div className="ref_num " style={state.refStyle2}>{state.refNum2}</div>
                <div className="board_line"></div>
            </div>
            <div className="del_add">
                <div className="logged_details">
                    <h3 className="title">Delivery address</h3>
                    <div className="del_add_content"id={state.addID} onClick={()=>setState({...state, addID3: "", refNum2: <GiCheckMark size="1em" color="white"  />, refStyle3: {backgroundColor: " rgb(42, 95, 240)", color: "white"}})}>
                        <p className="txt">To place your order, log in by entering your 10 digit mobile number</p>
                        <div className="add_boxes" >
                            <div className="add_box" >
                                <h4>Shrey Kara</h4>
                                <p>Quench Ville, Plot 12 Nkrumah Rd, Kampala, Uganda</p>
                                <small>{state.value}</small>
                            </div>
                            <div className="add_box" id="add_box">
                                + Add New Address
                            </div>
                        </div>
                    </div>
                    <div className="set_details" id={state.addID2}>
                        <div className="current_address">
                            <p className="txt">To place your order, log in by entering your 10 digit mobile number</p>
                            <button>change address</button>
                        </div>
                        <div className="new_add_details">
                            <h4>Shrey Kara</h4>
                            <div className="contact_info"></div>
                            <p>Quench Ville, Plot 12 Nkrumah Rd, Kampala, Uganda; {state.value}</p>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Address
