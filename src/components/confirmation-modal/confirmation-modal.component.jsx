import React from 'react'
import './confirmation-modal.styles.css'
import confirmcheck from '../../images/checked.svg'

const ConfirmationModal = () => {    
        return(
                <div className="confirmation-modal-wrapper">
                    <div className="confirmation-modal">
                        <div className="confirmation-image-wrapper">
                            <img src={confirmcheck} alt="Confirmation"/>
                        </div>
                        <div className="confirmation-text">Order Successfully Placed</div>
                        <div className="post-confirmation-details"></div>
                    </div>
                </div>
            )
}

export {ConfirmationModal}
