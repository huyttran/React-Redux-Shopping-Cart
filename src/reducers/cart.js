import * as types from '../constants/ActionType'
import * as localStorageTypes from '../constants/LocalStorageType'
import { getItem, setItem } from '../constants/StorageService';
const initalState = getItem(localStorageTypes.CART);

const reducer = (state = initalState, action) => {
    let index = -1;
    switch (action.type) {
        case types.ADD_TO_CART:
            index = findIndex(state, action.product.id);
            if (index === -1) {
                state.push({
                    product: action.product,
                    quantity: action.quantity
                });
            } else {
                state[index].quantity += action.quantity;
            }
            setItem(localStorageTypes.CART, state);
            return [...state];
        case types.DELETE_CART_ITEM:
            index = findIndex(state, action.id);
            if (index !== -1) {
                state.splice(index, 1);
            }
            setItem(localStorageTypes.CART, state);
            return [...state];
        case types.UPDATE_AMOUNT_ITEM:
            index = findIndex(state, action.id);
            if (index === -1) {
                break;
            }
            if(action.amount >= 1 && action.amount <= state[index].product.inventory){
                state[index].quantity = action.amount
                setItem(localStorageTypes.CART, state);
            }
            return [...state];
        default: break;
    }
    return state;
}


const findIndex = (array, id) => {
    let result = - 1;
    if (array && array.length > 0) {
        for (let index = 0; index < array.length; index++) {
            if (array[index].product.id === id) {
                result = index;
                break;
            }
        }
    }
    return result;
}

export default reducer;