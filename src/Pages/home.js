import React from 'react'
import HomeDesk from "../Components/home_desk"
import Footer from "../Components/footer"
import {useState} from "react"

function Home() {
    const [catalog, changeCatalog] = useState(
    
    {
       title: "Electronics",
       // text: document.querySelector(".img").getAttribute("alt"),
       images: [
           {   image:<img src="../_images/women/women1.jpg" alt="item"  className="cart_img" />,
               discription: "Full gear",
               cost: 100
           },
           {   
               image:<img src="../_images/women/women2.jpg" alt="item"  className="cart_img" />,
               discription: "Official wears",
               cost: 50
           },
           {   
               image:<img src="../_images/women/women3.jpg" alt="item"  className="cart_img" />,
               discription: "Sneakers",
               cost: 80
           },
           {   
               image:<img src="../_images/women/women4.jpg" aalt="item"  className="cart_img" />,
               discription: "Sneakers",
               cost: 100
           },
           {   
               image:<img src="../_images/women/women5.jpg" alt="item"  className="cart_img" />,
               discription: "Sneakers",
               cost: 100
           },
           {   
               image:<img src="../_images/women/women6.jpg" alt="item"  className="cart_img" />,
               discription: "Sneakers",
               cost: 100
           },
           {   
               image:<img src="../_images/women/women7.jpg" alt="item"  className="cart_img" />,
               discription: "Sneakers",
               cost: 100
           },
           {   
               image:<img src="../_images/women/women8.jpg" alt="item"  className="cart_img" />,
               discription: "Sneakers",
               cost: 100
           },
           {   
               image:<img src="../_images/women/women10.jpg" alt="item" className="cart_img" />,
               discription: "Sneakers",
               cost: 100
           },
           {   
               image:<img src="../_images/women/women9.jpg" alt="item" className="cart_img" />,
               discription: "Sneakers",
               cost: 100
           }
        ],
        emoji:<img src="../_images/emoji1.png" alt="emoji" width="10%" />

   }
   )
    return (
        <div>
            <HomeDesk key={catalog.title} catalog={catalog} changeState={changeCatalog}/>
            <Footer />
        </div>
    )
}

export default Home
