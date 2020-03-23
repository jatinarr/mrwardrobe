import React from 'react'
import SHOP_DATA from 'components/shop/shop.data'
import './shop.styles.css'
import CollectionItemWrapper from 'components/collections-wrapper/collections-wrapper.component'


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
                <CollectionItemWrapper  collections={this.state.collections}/>
            </div>
        )
    }
}

export default ShopPage