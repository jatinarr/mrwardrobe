import styled from 'styled-components'

const CartItemContainer = styled.div`
    padding: 10px;
    display: flex;
    border-bottom: 1px solid #ebebeb;

    &:last-child{
        border-bottom: none;
    }
`

const ItemInfo = styled.span`
    width: 100%;
    margin: auto auto auto 20px;
`

export {CartItemContainer, ItemInfo}