import React from 'react';
import ProductListItem from '../components/ProductListItem';
import { connect } from 'react-redux';
import map from 'lodash/map';
import { buyProduct } from '../actions';
import PropTypes from 'prop-types';


const ProductList = (
	({ products, balance, onProductClick }) => (
		<section className="row">
			{
				products.loading ?
				'Carregando doces...' :
				map(products.data, product => (
					<div key={product.id} className="col-xs-12 col-sm-6 col-md-4 col-lg-3 text-center">
						<ProductListItem product={product} balance={balance} onClick={onProductClick} />
					</div>
				))
			}
		</section>
	)
);

ProductList.propTypes = {
	products: PropTypes.shape({
		loading: PropTypes.bool.isRequired,
		data: PropTypes.object.isRequired
	}).isRequired,
	balance: PropTypes.object.isRequired,
	onProductClick: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	products: state.products,
	balance: state.balance
});

const mapDispatchToProps = dispatch => ({
	onProductClick: id =>  dispatch(buyProduct(id))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProductList);
