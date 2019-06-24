import React, { Component } from 'react';

class CartResult extends Component {
    render() {
        return (
            <tr>
                <td colSpan="3"></td>
                <td>
                    <h4>
                        <strong>Total Price</strong>
                    </h4>
                </td>
                <td>
                    <h4>
                        <strong>{this.calTotalAmount()} $</strong>
                    </h4>
                </td>
                <td colSpan="3">
                    <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
                                            <i className="fa fa-angle-right right"></i>
                    </button>
                </td>
            </tr>
        );
    }

    calTotalAmount = () => {
        const { cart } = this.props;
        let result = 0;
        cart.forEach(item => {
            result += item.product.price * item.quantity;
        });
        return result;
    }
}

export default CartResult;
