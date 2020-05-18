import styled from 'styled-components'
import CustomButton from 'components/custom-button/custom-button.component'

const CartOverviewContainer = styled.div`
    position: absolute;
    right: 0;
    top: 35px;
    height: 320px;
    width: 240px;
    border: 1px solid var(--main-text-color);
    background: white;
    visibility: hidden;
    opacity: 0;
`

const CartItemsWrapperContainer = styled.div`
    padding: 10px;
    height: 70%;
    overflow: scroll;
`

const EmptyCartTextContainer = styled.div`
    font-size: 16px;
    font-weight: 500;
    line-height: 36px;
    margin: 0;
    text-align: center;
`


const TitleContainer = styled.p`
    font-size: 16px;
    font-weight: 500;
    line-height: 36px;
    margin: 0;
    text-align: center;
`

const InfoContainer = styled.p`
    color: #9aa0a6;
    font-size: 15px;
    line-height: 1.72em;
    text-align: center;
`

const CheckoutButtonContainer = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 15px;
    width: 100%;
`

const cbBtnContainer = styled.div`
    width: 90%;
    padding: 15px;
    font-size: 14px;
    border: 1px solid var(--main-text-color);
    cursor: pointer;
    &:hover{
        background: var(--main-text-color);
        opacity: 0.9;
        color: white;
    }
`

const ToCheckoutPage = styled(CustomButton)`
    width: 90%;
    padding: 15px;
    font-size: 14px;
    border: 1px solid var(--main-text-color);
    cursor: pointer;
    &:hover{
        background: var(--main-text-color);
        opacity: 0.9;
        color: white;
    }
`

export{
    CartOverviewContainer,
    CartItemsWrapperContainer,
    EmptyCartTextContainer,
    TitleContainer,
    InfoContainer,
    CheckoutButtonContainer,
    cbBtnContainer,
    ToCheckoutPage
}
