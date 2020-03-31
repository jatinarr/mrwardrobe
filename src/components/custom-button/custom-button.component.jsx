import React from 'react'
import './custom-button.styles.css'

const CustomButton = (props) => {

    // deconstructing
    const {className,value, onClick} = props 

    return(
            <button className={className} 
            onClick = {onClick}
            > {value} </button>
    )
}

export default CustomButton