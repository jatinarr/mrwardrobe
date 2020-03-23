import React from 'react'
import CollectionItem from 'components/collection-item/collection-item.component'
import './collection.styles.css'


const Collection = (props) => {
    return(
        <div className='collection'>
            <h2 className='title'>
                {props.collectionName.toUpperCase()}
            </h2>
             <div className='collection-items'>
                {props.collectionItems
                    .filter((collection_item, index) => (index < 4))
                    .map(
                        (collection_item) => (
                        <CollectionItem
                        key={collection_item.id}
                        collectionItemName = {collection_item.name}
                        collectionItemPrice = {collection_item.price}
                        collectionItemImage = {collection_item.imageUrl}
                        /> 
                        )
                )}
                            
            </div>
        </div>
    )
}

export default Collection