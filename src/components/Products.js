import React, { Component } from 'react';
import Product from './Product';
import { connect } from 'react-redux'

class Products extends Component {
    render() {
        const { products } = this.props
        const elements = products.map((products, index) => {
            return <Product
                key={index}
                name={products.name}
                price={products.price}
            />
        });
        return (
            <section className="section">
                <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                <div className="row">
                    {elements}
                </div>
            </section>
        );
    }
}
const mapStateToProps = state => ({
    products: state.products
});

const mapDispatchToProps = dispatch => {
    return {
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Products);
