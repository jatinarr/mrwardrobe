// Menu Items wrapper

import React from 'react'
import './menuitem-wrapper.styles.css'
import Menuitem from 'components/menuitem/menuitem.component'

export const MenuitemWrapper = (props) => {
    return(
        <div className="menuitem-wrapper">
          {props.menuitems.map(
              (item) => 
              <Menuitem 
              key={item.id} 
              itemName={item.itemName}
              itemLink={item.itemLink}
              linkText = 'SHOP NOW'
              imageUrl = {item.imageUrl}
              />
          )} 
        </div>
    )
}