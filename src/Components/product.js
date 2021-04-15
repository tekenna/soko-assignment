import React,{Component} from 'react'
import Footer from "./footer"
import {IoIosArrowBack} from "react-icons/io"
import {IoIosArrowForward} from "react-icons/io"
import {Link} from "react-router-dom"

class Product extends Component {
    constructor(props){
        super(props)

        this.state = {
            arrow1: {backgroundColor:"gray", size:"1em", padding:"0.5rem", marginRight:"1rem",borderRadius: "50%"},
            arrow2: {backgroundColor:"rgb(42, 95, 240)", size:"1em", padding:"0.5rem", marginRight:"1rem",borderRadius: "50%"},
            count : 0,
            catalog:{
                image:<img src="../_images/men/men7.jpg" width="100%" alt=""/>,
                title: <>Quality T's for men</>,
                text: <p style={{color: 'gray', fontSize:"15px"}}>Sold in bulk. It comes in differnt colors with red, blue, black, pink, white, 
                        purple, white and brown. It also comes in all sizes.
                    </p>,
                
                cost: <><p className="prod_cost">UGX 118,400 <span>-20%</span></p>
                        <small className="prod_slash">UGX 148,000</small>
                    </>
            },
            categories: [
                {
                    image:<img src="../_images/men/men1.jpg" height="150px" width="150px" alt=""/>,
                    discription: <>Quality T's for men</>
                }
                ,{
                    image:<img src="../_images/men/men2.jpg" height="150px" width="150px" alt=""/>,
                    discription: <>Quality T's for men</>
                },{
                    image:<img src="../_images/men/men3.jpg" height="150px" width="150px" alt=""/>,
                    discription: <>Quality T's for men</>
                },{
                    image:<img src="../_images/men/men4.jpg" height="150px" width="150px" alt=""/>,
                    discription: <>Quality T's for men</>
                },{
                    image:<img src="../_images/men/men5.jpg" height="150px" width="150px" alt=""/>,
                    discription: <>Quality T's for men</>
                },{
                    image:<img src="../_images/men/men6.jpg" height="150px" width="150px" alt=""/>,
                    discription: <>Quality T's for men</>
                },{
                    image:<img src="../_images/men/men7.jpg" height="150px" width="150px" alt=""/>,
                    discription: <>Quality T's for men</>
                },
                {
                    image:<img src="../_images/men/men8.jpg" height="150px" width="150px" alt=""/>,
                    discription: <>Quality T's for men</>
                },
                {
                    image:<img src="../_images/men/men9.jpg" height="150px" width="150px" alt=""/>,
                    discription: <>Quality T's for men</>
                },
                {
                    image:<img src="../_images/men/men10.jpg" height="150px" width="150px" alt=""/>,
                    discription: <>Quality T's for men</>
                },
            ]
        }
    }
    increment(){
        this.setState({
            count : this.state.count + 1
        })
    }
    decrement(){
        this.setState({
            count : this.state.count>0? this.state.count - 1: this.state.count
        })
    }
    render(){
    return (
        <div>
            
            <div className="product_container">
                <div className="prod_header">
                    <h3>T-Shirts</h3>
                </div>
                <div className="prod_body_container">
                    <div className="prod_body">
                        <div className="prod_img_cotainer"><img src="../_images/men/men7.jpg" width="100%" height="100%" alt=""/></div>
                        <div className="prod_body_content">
                            <div className="prod_dis_wrap">
                                <div className="prod_discription">
                                    <h3>{this.state.catalog.title}</h3>
                                    {this.state.catalog.text}
                                    <div className="prod_cost_details">
                                        {this.state.catalog.cost}
                                    </div>
                                </div>
                                <div className="prod_btn">
                                    <span onClick={()=>this.decrement()}>-</span>
                                    {this.state.count}
                                    <span onClick={()=>this.increment()}>+</span>
                                </div>
                            </div>
                            <div className="prod_buttons">
                                <button className="prod_add">Add to bag</button>
                                <button className="prod_buy">
                                    <Link to="/login" style={{textDecoration: "none",textDecorationColor:"none", width:"100%", color:"rgb(42, 95, 240)"}}>Buy Now</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="prod_related">
                        <div className="prod_rel_header">
                            <p>Related products</p>
                            <div className="prd_rel_control">
                                <IoIosArrowBack style={this.state.arrow1}   color="white" />
                                <IoIosArrowForward style={this.state.arrow2} color="white" />
                            </div>
                        </div>
                        <div className="prod_related_slide">
                            {this.state.categories.map(x=>{
                                return(
                                <div className="prod_rel_wrap">
                                    {x.image}
                                    <small>{x.discription}</small>
                                </div>
                                )
                                })}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
    }
}

export default Product
