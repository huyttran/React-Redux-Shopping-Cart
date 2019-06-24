import * as types from "../constants/ActionType";

export const addToCart = (product, quantity) => {
    return {
        type: types.ADD_TO_CART,
        product,
        quantity
    }
}

export const actChangeMessage = (message) => {
    return {
        type: types.CHANGE_MESSAGE,
        message
    }
}


export const actDeleteCartItem = (id) => {
    return {
        type: types.DELETE_CART_ITEM,
        id
    }
}

export const actUpdateAmountItem = (id, amount) => {
    return {
        type: types.UPDATE_AMOUNT_ITEM,
        id,
        amount
    }
}
