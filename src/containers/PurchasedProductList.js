import React from 'react';
import PurchasedProductListItem from '../components/PurchasedProductListItem';
import { connect } from 'react-redux';
import map from 'lodash/map';
import PropTypes from 'prop-types';
import { finishProduct } from '../actions';

const ProductList = (
	({ products, onFinishedClick }) => (
		<section className="panel panel-primary">
			<div className="panel-heading">
				Doces comprados
			</div>
			<div class="col text-center">
     
    
				<button style={{
					marginTop: 10,
					marginBottom: 10

				}} className="btn btn-primary" onClick={() => onFinishedClick()}>Finalizar</button>
			</div>
			{map(products, (product, index) => (
				<div key={index}>
					<PurchasedProductListItem product={product} />
				</div>
			))}
		</section>
	)
);

ProductList.propTypes = {
	products: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired
	}).isRequired)
};

const mapStateToProps = state => ({
	products: state.purchasedProducts.map(id => state.products.data[id]),
	balance: state.balance
});

const mapDispatchToProps = dispatch => ({
	onFinishedClick: () =>  dispatch(finishProduct())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProductList);
