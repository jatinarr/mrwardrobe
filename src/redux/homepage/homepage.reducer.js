const INITIAL_STATE = {
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

const HomepageReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state
    }
}

export {
    HomepageReducer
}
