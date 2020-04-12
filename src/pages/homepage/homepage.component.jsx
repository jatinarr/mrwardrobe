// landing page

import React from 'react'
import './homepage.styles.css'
import {MenuitemWrapper} from 'components/menuitem-wrapper/menuitem-wrapper.component'

class HomePage extends React.Component{
    constructor(){
        super()
        this.state = {
            homepageMenuItems : [
                
                {   
                    itemName: 'hats',
                    itemLink:'shop/hats',
                    id : 1,
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                },
                {   
                    itemName: 'jackets',
                    itemLink:'shop/jackets',
                    id : 2,
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                },
                {   
                    itemName: 'sneakers',
                    itemLink:'shop/sneakers',
                    id : 3,
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                },
                {   
                    itemName: 'womens',
                    itemLink:'shop/womens',
                    id : 4,
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                },
                {   
                    itemName: 'mens',
                    itemLink:'shop/mens',
                    id: 5,
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                }
            ]
        }
    }

    render(){
        return(
            <div className='homepage'>
                <MenuitemWrapper menuitems={this.state.homepageMenuItems}/>
            </div>
        )
    } 
}

export default HomePage
