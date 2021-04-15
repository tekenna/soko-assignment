import React from 'react'
import {BiSearch} from "react-icons/bi"
import {useState} from "react"
import {Link} from "react-router-dom"
import {FaShoppingCart} from "react-icons/fa"


function Home_desk({catalog}) {
    let [id, setID] = useState("hidden")
    let [classname, ChangeClassName] = useState("active")
    let cartgories = catalog.images.map(cart=>{
        return(
            <Link to="/product" style={{textDecoration: "none"}} >
                <div className="carts_content" >
                    <div className="cart_content_container">
                        <div className="cart_img_wrap">{cart.image}</div>
                        <div className="cart_disccription">
                            <small>{cart.discription}</small>
                            <small>UGX {cart.cost}</small>
                        </div>
                    </div>
                    <button>+Add</button>
                </div>
            </Link>
        )
    })
    return (
        <div className="home_container">
            <div className="list">
                <div className="ul">
                    <FaShoppingCart size="2.5em" color="rgb(42, 95, 240)" className="hidden" onClick={()=>id==""?setID({id:"hidden"}):setID({id:""})} />
                    <ul id={id}>
                        <li className={classname} onClick={()=>ChangeClassName(classname==""? classname="active":classname="active")}><span>Electronics</span></li>
                        <li className="" onClick={()=>ChangeClassName(classname==""? classname="active":classname="active")} ><span>Face Mask</span></li>
                        <li className="" onClick={()=>ChangeClassName(classname==""? classname="active":classname="active")}><span>Fresh Food</span></li>
                        <li className="" onClick={()=>ChangeClassName(classname==""? classname="active":classname="active")}><span>Grocery</span></li>
                        <li className="" onClick={()=>ChangeClassName(classname==""? classname="active":classname="active")}><span>Home</span></li>
                    </ul>
                    <a className="link" href="">View all cartigories</a>
                </div>
            </div>
            <div className="cart2_wrapper" >
                <div className="search_area">
                    <div className="horizontal_board"></div>
                    <input type="search"placeholder="Search for products..." />
                    <div className="search"><BiSearch color="blue" size="1.3em" /></div>
                    <div className="horizontal_board"></div>
                </div>
                <div className="carts_container">
                    <h3>{catalog.title} <span className="num">{catalog.images.length}</span></h3>
                    {cartgories}
                </div>
            </div>
            
            <div className="bags_container">
                <div className="bags_content">
                    
                    <h2>Bag <span className="num">0</span></h2>
                    <div className="content_wrap">
                    <img src="../_images/emoji1.png" width="40%"/>
                        <h4>It's empty hear</h4>
                        <p>start shopping to add to bag</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Home_desk

