import React, { Component } from 'react';
import { connect } from 'react-redux'
import Products from '../components/Products';
import Product from '../components/Product';
import PropTypes from 'prop-types';
import { addToCart, actChangeMessage } from '../actions/index';

class ProductsContainer extends Component {
    render() {
        const { products } = this.props
        return (
            <Products>
                {this.showProducts(products)}
            </Products>
        );
    }
    showProducts = (products) => {
        const { addToCart, onChangeMessage } = this.props;
        const elements = products.map((product, index) => {
            return <Product
                key={index}
                product={product}
                addToCart={addToCart}
                onChangeMessage={onChangeMessage}
            />
        });
        return elements;
    }
}

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        })
    ).isRequired
};

const mapStateToProps = state => ({
    products: state.products
});

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (product, quantity) => {
            dispatch(addToCart(product, quantity));
        },
        onChangeMessage: message => {
            dispatch(actChangeMessage(message));
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
