import React, { Component } from 'react';
import { connect } from 'react-redux'
import CartItem from '../components/CartItem';
import Cart from '../components/Cart';
import CartResult from '../components/CartResult';
import * as messages from '../constants/Message'

import {
    actDeleteCartItem,
    actChangeMessage,
    actUpdateAmountItem
} from '../actions/index';

class CartContainer extends Component {
    render() {
        const { cart } = this.props
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>
        );
    }

    showCartItem = (cart) => {
        const {
            onUpdateItem
        } = this.props;
        let elements = <tr>
            <td>{messages.MSG_CART_EMPTY}</td>
        </tr>
        if (cart.length > 0) {
            elements = cart.map((cart, index) => {
                return <CartItem
                    key={index}
                    item={cart.product}
                    quantity={cart.quantity}
                    inventory={cart.product.inventory}
                    onDeleteItem={this.onDelete}
                    onUpdateItem={onUpdateItem}
                />
            });
        }

        return elements;
    }
    onDelete = (id) => {
        const {
            onDeleteCartItem,
            onChangeMessage
        } = this.props;
        onDeleteCartItem(id);
        onChangeMessage(messages.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
    }
    showTotalAmount = (cart) => {
        let result = null;
        if (cart.length > 0) {
            result = <CartResult cart={cart} />
        }
        return result;
    }
}

const mapStateToProps = state => ({
    cart: state.cart
});

const mapDispatchToProps = dispatch => {
    return {
        onDeleteCartItem: id => {
            dispatch(actDeleteCartItem(id));
        },
        onChangeMessage: message => {
            dispatch(actChangeMessage(message));
        },
        onUpdateItem: (id, amount) => {
            dispatch(actUpdateAmountItem(id, amount));
        },

    }
};
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
