import React from 'react'
import './collection-item.styles.css'
import {addItemToCart} from '../../redux/cart/cart.actions'

import {connect} from 'react-redux'

const CollectionItem = (props) => {
    const {item, addItemToCart} = props
    const {name, price, imageUrl} = item
    // console.log('props: ')
    // console.log(props);
    // console.log("item: ");
    // console.log(item);
    return(
        <div className="collection-item">
            <div className="bgImage" 
            style={{backgroundImage: `url(${imageUrl})`}}
            />
            <div className="add-to-cart">
                <button 
                className='title'
                onClick = {
                    () => addItemToCart(item)
                }
                >
                ADD TO CART</button>
            </div>
            <div className='details'>
                <span className="left">{name}</span>
                 <span className="right">${price} </span>
            </div>
        </div> 
    )
}

const mapDispatchToProps = (dispatch) => {
    return({
      addItemToCart : (item) => dispatch(addItemToCart(item))
    })
}

export default connect(null,mapDispatchToProps)(CollectionItem)