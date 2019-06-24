import { combineReducers } from 'redux';
import cart from './cart';
import message from './message';
import products from './products';

const myReducers = combineReducers({
    cart,
    message,
    products
});

export default myReducers;