import React from 'react'
import {Link} from "react-router-dom"

function Bag() {
    return (
        <>
            <div className="empty_bag_coontainer">
                <div className="bag_moji_wrap"><img src="../_images/emoji1.png" alt="emoji" width="100%" /></div>
                <h3>It'empty here</h3>
                <p>Start shopping to add items to bag</p>
                <button>
                    <Link to="/" style={{textDecoration:"none", color:"rgb(42, 95, 240)"}}>Back to homepage</Link>
                </button>
            </div>
        </>
    )
}

export default Bag
