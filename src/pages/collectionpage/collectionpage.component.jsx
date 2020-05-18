import React from 'react'
import './collectionpage.styles.css'

import Collection from '../../components/collection/collection.component'

import {connect} from 'react-redux'

const CollectionPage = (props) => {
    console.log("ssss")
    console.log(props)
    const {collections} = props
    const {categoryId} = props.match.params
    const curr_collection = collections[categoryId]
    
    if(curr_collection == null)
        return null
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