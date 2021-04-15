import React from 'react'
import {GiFamilyHouse} from "react-icons/gi"
import {HiOutlineShoppingBag} from "react-icons/hi"
import {RiContactsLine} from "react-icons/ri"
import {Link} from "react-router-dom"


function Nav() {
    
    return (
        <div className="nav_container">
            <div className="nav_header_container">
                <div className="nav_header">
                    <div className="nav_head_content">
                        <p>Store made with  <span><img src="../_images/logo.png" width="40rem" /></span></p>
                    </div>
                </div>
            </div>
            <div className="nav">
                <div className="icon_wrap home">
                    <Link to="/" style={{ textDecoration:"none", textDecorationColor:"none"}}>
                        <GiFamilyHouse size="2.8em" color="gray" className="icon1" />
                    </Link>
                    <div className="nav_text">
                        <h3>Target</h3>
                        <small>Rich Towers, PLOT 12 Balogun Rd, Ikeja, Lagos, N</small>
                    </div>
                </div>

                <div className="icon_wrap">
                    <button >
                    <Link to="/bags" style={{width:"100%", textDecoration:"none", textDecorationColor:"none", display: "flex"}} >
                        <HiOutlineShoppingBag color="gray" size="1.5em" className="icon" />
                        <p>BAG</p>
                    </Link>
                    </button>
                    <button>
                        <RiContactsLine size="1.5em" className="icon" />
                        <p>Account</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Nav
