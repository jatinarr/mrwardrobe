import React from 'react'
import Checkout from '../../components/checkout/checkout.component'

class CheckoutPage extends React.Component{
    constructor(props){
    super(props)
    this.state = {
        confirmModal:{
            visibility: false
        }
    }
}

toggleConfirmModalVisibility = (isVisible) => {
    return(
        this.setState({confirmModal:{visibility:isVisible}})
    )
}

render(){
    
    return(
        <Checkout 
        toggleConfirmModalVisibility={this.toggleConfirmModalVisibility} 
        confirmModal = {this.state.confirmModal}
        history={this.props.history}/>
    )
}

}

export {CheckoutPage}