import React from 'react'

function Footer() {
    return (
        <div className="footer">
            <div className="footer_header">
                <div className="footer_wrapper">
                    <div className="foot_img_content">
                        <img src="../_images/bus.png"  className="footer_img" />
                        <p>fast delivery</p>
                    </div>
                    <div className="foot_img_content">
                        <img src="../_images/award.png"  className="footer_img" />
                        <p>Buyer Protection</p>
                    </div>
                    <div className="foot_img_content">
                        <img src="../_images/cust.png"  className="footer_img" />
                        <p>Customer Support</p>
                    </div>
                </div>
            </div>
            <div className="foot_content">
                <div className="foot_text">
                    <h4>Target</h4>
                    <p>Rich Towers, PLOT 12 Balogun Rd, Ikeja, Lagos, N</p>
                </div>
                <button><img src="../_images/whats_icon.png"  className="whats_icon" /><span>Chat with us</span></button>
            </div>
        </div>
    )
}

export default Footer
