import React from 'react'
import './collections-wrapper.styles.css'
import Collection from 'components/collection/collection.component'
import {connect} from 'react-redux'

const CollectionsWrapper = (props) => {
    const {collections} = props
    // console.log(Object.values(collections).map((collection,index) => console.log(collection)))
    // return;
    return(
        <div className='collections-wrapper'>
            {Object.values(collections).map(
                (collection) => 
                <Collection
                key={collection.id}
                collectionName = {collection.title}
                collectionItems = {collection.items}
                collectionRoute = {collection.routeName}
                />
            )}
           
        </div>
    )
}

const mapStateToProps = (state) => {
    return({
        collections : state.shop.shopData
    })
}

export default connect(mapStateToProps)(CollectionsWrapper)