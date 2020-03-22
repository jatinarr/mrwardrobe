// Menu Item

import React from 'react'
import './menuitem.styles.css'
import {withRouter} from 'react-router-dom'


// Opens the passed link using history.push()
const OpenLink = (history, match, link) => {
    history.push(`${match.url}${link}`)
}

const Menuitem = (props) => {
    return(
        <div 
        className='menuitem' 
        onClick={ () => OpenLink(props.history, props.match, props.itemLink)}>
            <div className="bgImage" style={{backgroundImage: `url(${props.imageUrl})`}}>
            </div>
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
 
export default withRouter(Menuitem)