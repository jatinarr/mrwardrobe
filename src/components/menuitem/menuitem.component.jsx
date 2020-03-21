// Menu Item

import React from 'react'
import './menuitem.styles.css'

export const Menuitem = (props) => {
    return(
        <div className='menuitem'>
            <div className="bgImage" style={{backgroundImage: `url(${props.imageUrl})`}}></div>
            <div className='item-highlight'>
            <div>
                <div className="title"> 
                    {props.itemName.toUpperCase()} 
                </div>
                <div className="link">
                    <a href={props.itemLink}>{props.linkText}</a>
                </div>
            </div>
            </div>
        </div>
    )
}