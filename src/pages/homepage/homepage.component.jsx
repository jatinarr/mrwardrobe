// landing page

import React from 'react'
// import './homepage.styles.css'
import {HomePageContainer} from './homepage.styles'
import {MenuitemWrapper} from 'components/menuitem-wrapper/menuitem-wrapper.component'
import  {connect} from 'react-redux'

const HomePage = (props) => {
        const {homepageMenuItems} = props
        return(
            <HomePageContainer>
                <MenuitemWrapper menuitems={homepageMenuItems}/>
            </HomePageContainer>
        )
}

const mapStateToProps = (state) => {
    return({
            homepageMenuItems : state.homepage.homepageMenuItems
    })
}

export default connect(mapStateToProps)(HomePage)
