import React from 'react'
import SHOP_DATA from 'components/shop/shop.data'
import './shop.styles.css'
import CollectionWrapper from 'components/collections-wrapper/collections-wrapper.component'


class ShopPage extends React.Component {
    constructor(){
        super()
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        return(
            <div className='shop-page'>
                <CollectionWrapper  collections={this.state.collections}/>
            </div>
        )
    }
}

export default ShopPage