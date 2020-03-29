import React from 'react'
import './custom-input-field.styles.css'

const CustomField = (props) => {

    // deconstructing
    const{  
        className,
        name,
        type,
        value,
        onChange,
        label   
        }       =   props

    return(
        <div className={className}>
            <input 
            name = {name.toLowerCase()}
            type = {type.toLowerCase()}
            value = {value}
            onChange={onChange}
            />
            <label>
                {label.charAt(0).toUpperCase() + label.slice(1).toLowerCase()}
            </label>
        </div>
    )
}

export default CustomField