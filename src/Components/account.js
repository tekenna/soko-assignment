import React, {useState} from 'react'
import {GiCheckMark} from "react-icons/gi"

function Account({state, setState}) {

    const [value, newValue] = useState({
        inputValue: "",
        btnState: {backgroundColor: "gray", color:"white"}
    })
    const stateChange = ()=>{
        setState({...state, refNum1: <GiCheckMark size="1em" color="white"  />, refStyle2:{backgroundColor: " rgb(42, 95, 240)", color: "white"}, addID:""})
        setNewSate(<div className="acc_small"><p className="txt">You are securely logged in</p></div>)
    }
    // const btnState=()=>{
    //     if(state.input==true){
    //         setState({...state,  input:true})
    //     }
    // }
    let accountSnipet =   <>
                            <p className="txt">To place your order, log in by entering your 10 digit mobile number</p>
                                <div className="input_area">
                                    <form action="">
                                    <label htmlFor="#tel"><small>Mobile number</small></label>
                                    <div className="acc_field">
                                        <input type="text" id="tel" value={value.inputValue} id="input" onChange={(event)=>{
                                            newValue({inputValue:event.target.value, btnStyle: {backgroundColor:"yellow", color:" rgb(42, 95, 240)"}})
                                            state.input==true?setState({...state,  input:true}):setState({...state,  input:false})
                                        }}>
                                        </input>
                                        <button type="submit" style={state.btnStyle} onClick={stateChange}  >Login</button>
                                    </div>
                                    </form>
                                </div>
                            
                        </>
    
    const [newState, setNewSate] = useState(accountSnipet)
    
    return (
        <div className="account">
            <div className="ref_wrap1">
                <div className="ref_num" style={state.refStyle1} >{state.refNum1}</div>
                <div className="board_line"></div>
            </div>
            <div className="acc_wrap" >
                <div className="logged_details">
                    <h3 className="title">Account</h3>
                    {newState}
                </div>
            </div>
        </div>
    )
}

export default Account
