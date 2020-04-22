import React from 'react'
import './collectionpage.styles.css'

import Collection from '../../components/collection/collection.component'
// import CollectionItem from 'components/collection-item/collection-item.component'

import {connect} from 'react-redux'

const CollectionPage = (props) => {
    const {collections} = props
    const {categoryId} = props.match.params
    const curr_collection = collections[categoryId]
    
    return(
        <Collection
        key={curr_collection.id}
        collectionName = {curr_collection.title}
        collectionItems = {curr_collection.items}
        collectionRoute = {curr_collection.routeName}
        isCategory = {true} 
        />
    )
}

const mapStateToProps = (state) => {
    return({
            collections: state.shop.shopData
    })
 
}

export default connect(mapStateToProps)(CollectionPage)