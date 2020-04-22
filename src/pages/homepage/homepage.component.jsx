// landing page

import React from 'react'
import './homepage.styles.css'
import {MenuitemWrapper} from 'components/menuitem-wrapper/menuitem-wrapper.component'
import  {connect} from 'react-redux'

const HomePage = (props) => {
        const {homepageMenuItems} = props
        return(
            <div className='homepage'>
                <MenuitemWrapper menuitems={homepageMenuItems}/>
            </div>
        )
}

const mapStateToProps = (state) => {
    return({
            homepageMenuItems : state.homepage.homepageMenuItems
    })
}

export default connect(mapStateToProps)(HomePage)
