/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import CartResult from './Cart-Result';
import CartItem from './Cart-Item';

class Cart extends Component {
    render() {
        return (
            <section className="section">
                <div className="table-responsive">
                    <table className="table product-table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Sản Phẩm</th>
                                <th>Giá</th>
                                <th>Số Lượng</th>
                                <th>Tổng Cộng</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <CartItem />
                            <CartItem />
                            <CartItem />
                            <CartItem />
                            <CartResult />
                        </tbody>
                    </table>
                </div>
            </section>
        );
    }
}

export default Cart;