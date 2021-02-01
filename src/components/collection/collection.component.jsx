import React from 'react'
import CollectionItem from 'components/collection-item/collection-item.component'
import './collection.styles.css'
import {withRouter} from 'react-router-dom'

const OpenLink = (history, match, routeName) => {
    history.push(`${match.url}${routeName}`)
}

const Collection = (props) => {
    const{
        isCategory,match,history,collectionRoute,collectionName,collectionItems} = props

    return(
        <div className='collection'>

            {!isCategory ? (
                <span className='title'
                onClick={() => 
                OpenLink(history, match, collectionRoute)}
                >
                    {collectionName.toUpperCase()}
                </span>
                ) 
                : 
                (
                <span className='title'>
                    {collectionName.toUpperCase()}
                </span>
                )}

             <div className='collection-items'>
                {collectionItems
                    .filter((collection_item, index) =>
                        isCategory ? (index > -1) : (index < 4)
                        )          
                    .map(
                        (collection_item) => (
                        <CollectionItem
                        key={collection_item.id}
                        item = {collection_item}
                        /> 
                        )
                )}
                            
            </div>
        </div>
    )
}

export default withRouter(Collection)