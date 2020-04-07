import React from 'react'
import CollectionItem from 'components/collection-item/collection-item.component'
import './collection.styles.css'
import {withRouter} from 'react-router-dom'

const OpenLink = (history, match, routeName) => {
    history.push(`${match.url}${routeName}`)
}

const Collection = (props) => {
    return(
        <div className='collection'>
            <h2 className='title'
            onClick={() => OpenLink(props.history, props.match, props.collectionRoute)}>
                {props.collectionName.toUpperCase()}
            </h2>
             <div className='collection-items'>
                {props.collectionItems
                    .filter((collection_item, index) => (index < 4))
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