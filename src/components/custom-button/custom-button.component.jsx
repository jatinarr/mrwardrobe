import React from 'react'
import './custom-button.styles.css'

const CustomButton = (props) => {
    const {className,type,value} = props
    return(
            <input className={className} 
            type={type} 
            value={value}
            />
    )
}

export default CustomButton