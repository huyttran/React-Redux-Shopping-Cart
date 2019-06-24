import phoneImg from '../assets/Mobile-PNG-Clipart.png';
const initalState = [
    {
        id: 0,
        name: 'Phone 1',
        image: phoneImg,
        description: 'Iphone',
        price: 555,
        inventory: 10,
        rating: 3,
        quantity: 1
    },
    {
        id: 1,
        name: 'Phone 2',
        image: phoneImg,
        description: 'samsung',
        price: 333,
        inventory: 15,
        rating: 5,
        quantity: 1
    },
    {
        id: 2,
        name: 'Phone 3',
        image: phoneImg,
        description: 'nokia',
        price: 250,
        inventory: 3,
        rating: 2,
        quantity: 1
    }
];
const reducer = (state = initalState, action) => {
    switch (action.type) {
        default: return state;
    }
}

export default reducer;