import React from 'react'
import './shop.styles.css'
import CollectionWrapper from 'components/collections-wrapper/collections-wrapper.component'
import CollectionPage from '../collectionpage/collectionpage.component'

import {Route} from 'react-router-dom'

const ShopPage = (props) => {
        const {match} = props
        return(
            <div className='shop-page'>
                <h1 className='title'>
                    Collections
                </h1>
                <Route 
                exact path={`${match.path}`}  
                component = {CollectionWrapper}
                />

                <Route
                exact path={`${match.path}/:categoryId`}
                component={CollectionPage}
                />
                
            </div>
        )
}

export default ShopPage