import React, { Component } from 'react';

class CartItem extends Component {
    render() {
        const {
            item,
            quantity,
            onDeleteItem,
            onUpdateItem
        } = this.props;
        return (
            <tr>
                <th scope="row">
                    <img src={item.image}
                        alt="" className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{item.name}</strong>
                    </h5>
                </td>
                <td>{item.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty">{quantity}</span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                            onClick={() => onUpdateItem(item.id, quantity - 1)}
                        >
                            —
                        </label>
                        <label
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                            onClick={() => onUpdateItem(item.id, quantity + 1)}
                        >
                            +
                        </label>
                    </div>
                </td>
                <td>{item.price * quantity}$</td>
                <td>
                    <button
                        type="button"
                        className="btn btn-sm btn-primary waves-effect waves-light"
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="Remove item"
                        onClick={() => onDeleteItem(item.id)}
                    >
                        X
                    </button>
                </td>
            </tr>
        );
    }
}

export default CartItem;
