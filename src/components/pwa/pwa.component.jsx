import React from 'react'
import './pwa.styles.css'
import mwLogo from '../../images/mw-dark.png'

class Pwa extends React.Component{

    render(){
        return(
            <div>
                <div className="pwa-logo"
                style={{
                    backgroundImage: `url(${ mwLogo })`
                }} >
                </div>
                <h2>
                    Sorry, we're are currently available on desktop and tablets only.
                </h2>

                <p>
                    Mobile version coming <span> soon </span>.
                </p>
            </div>
        )
    }
}

export default Pwa