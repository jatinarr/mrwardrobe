import React from 'react'
import './collection-item.styles.css'

const CollectionItem = (props) => (

        <div className="collection-item">
            <div className="bgImage" 
            style={{backgroundImage: `url(${props.collectionItemImage})`}}
            />
            <div className="add-to-cart">
                <button className='title'>
                ADD TO CART</button>
            </div>
            <div className='details'>
                <span className="left">{props.collectionItemName}</span>
                 <span className="right">${props.collectionItemPrice} </span>
            </div>
        </div> 
    )

export default CollectionItem