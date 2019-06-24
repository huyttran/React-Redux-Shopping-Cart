/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import * as messages from '../constants/Message'

class Product extends Component {
	render() {
		const { product } = this.props;
		return (
			<div className="col-lg-4 col-md-6 mb-r">
				<div className="card text-center card-cascade narrower">
					<div className="view overlay hm-white-slight z-depth-1">
						<img src={product.image}
							className="img-fluid" alt={product.name} />
						<a>
							<div className="mask waves-light waves-effect waves-light"></div>
						</a>
					</div>
					<div className="card-body">
						<h4 className="card-title">
							<strong>
								<a>{product.name}</a>
							</strong>
						</h4>
						<ul className="rating">
							{this.showRating(product.rating)}
						</ul>
						<p className="card-text">
							Lorem Ipsum is simply dummy text {product.description} Lorem Ipsum is simply dummy text
           				</p>
						<div className="card-footer">
							<span className="left">{product.price} $</span>
							<span className="right">
								<a
									className="btn-floating blue-gradient"
									data-toggle="tooltip"
									data-placement="top"
									title=""
									data-original-title="Add to Cart"
									onClick={() => this.addToCart(product)}
								>
									<i className="fa fa-shopping-cart"></i>
								</a>
							</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
	addToCart = (product) => {
		const { addToCart, onChangeMessage } = this.props;
		addToCart(product, 1);
		onChangeMessage(messages.MSG_ADD_TO_CART_SUCCESS);
	}

	showRating = (rating) => {
		let result = [];
		if (rating > 5 || rating < 0) {
			return;
		}
		for (var i = 0; i < rating; i++) {
			result.push(
				<li key={i}>
					<i className="fa fa-star"></i>
				</li>
			);
		}
		for (let j = 0; j < (5 - rating); j++) {
			result.push(
				<li key={i + j}>
					<i className="fa fa-star-o"></i>
				</li>
			);
		}
		return result;
	}
}

export default Product;
