import React from 'react'
import './collections-wrapper.styles.css'
import Collection from 'components/collection/collection.component'


const CollectionsWrapper = (props) => {
    console.log(props)
    return(
        <div className='collections-wrapper'>
            <h1 className='title'>
                Collections
            </h1>
            {props.collections.map(
                (collection) => 
                <Collection
                key={collection.id}
                collectionName = {collection.title}
                collectionItems = {collection.items}
                />
            )}
           
        </div>
    )
}

export default CollectionsWrapper