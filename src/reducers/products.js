import * as types from '../constants/ActionType'
import phoneImg from '../assets/Mobile-PNG-Clipart.png';
const initalState = [
    {
        id: 0,
        name: 'Phone 1',
        image: phoneImg,
        description: 'Iphone',
        price: 555,
        inventory: 10,
        rating: 3
    },
    {
        id: 1,
        name: 'Phone 2',
        image: phoneImg,
        description: 'samsung',
        price: 333,
        inventory: 15,
        rating: 5
    },
    {
        id: 2,
        name: 'Phone 3',
        image: phoneImg,
        description: 'nokia',
        price: 250,
        inventory: 3,
        rating: 2
    }
];
const reducer = (state = initalState, action) => {
    switch (action.type) {
        case types.SET_KEY_WORD:
            return action;
        default: return state;
    }
}

export default reducer;