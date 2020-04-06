// Cart

import React from 'react'
import './cart.styles.css'
import CustomButton from 'components/custom-button/custom-button.component'

export const Cart = () => {
    return(
        <div className="cart-overview">
            <div className="cart-items-wrapper">
                <div className="cart-item"> 
                    <span className="item-img"> 
                        <img src="https://i.ibb.co/ypkgK0X/blue-beanie.png" alt="item1" height="50" width="50"></img> 
                    </span>
                    <span className="item-info">
                        <div> Cart Item 1</div>
                        <div> 4 x $35 </div>
                    </span>
                </div>

                <div className="cart-item"> 
                    <span className="item-img"> 
                        <img src="https://i.ibb.co/ypkgK0X/blue-beanie.png" alt="item2" height="50" width="50"></img> 
                    </span>
                    <span className="item-info">
                        <div> Cart Item 2</div>
                        <div> 4 x $35 </div>
                    </span>
                </div>

                <div className="cart-item"> 
                    <span className="item-img"> 
                        <img src="https://i.ibb.co/ypkgK0X/blue-beanie.png" alt="item3" height="50" width="50"></img> 
                    </span>
                    <span className="item-info">
                        <div> Cart Item 3</div>
                        <div> 4 x $35 </div>
                    </span>
                </div>
            </div>
            <div className="checkout-btn">
                <CustomButton 
                className="submit-btn btn"
                value="GO TO CHECKOUT"
                />
            </div>
        </div>
    )
}