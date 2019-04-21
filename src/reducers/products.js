import * as types from '../constants/ActionType'

const initalState = [
    {
        id: 0,
        name: 'testing',
        image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        description: 'Iphone',
        price: 555,
        inventory: 10
    },
    {
        id: 1,
        name: 'testing1',
        image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        description: 'samsung',
        price: 333,
        inventory: 15
    },
    {
        id: 2,
        name: 'testing2',
        image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        description: 'nokia',
        price: 250,
        inventory: 3
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