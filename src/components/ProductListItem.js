import React from 'react';
import PropTypes from 'prop-types';

const ProductListItem = (
	({ product, balance, onClick }) => (
		<div className="panel panel-default">
			<div className="panel-heading">
				<strong>{product.name}</strong>
				<br />
				Preço: <strong>R${product.price.toFixed(2)}</strong> <br /> Estoque: <strong>{product.count}</strong>
			</div>
			<div className="panel-body">
				<img style={{width: 130,height:90}} src={product.image} className="img-rounded img-responsive center-block" />
			</div>
			<div className="panel-footer">
				{
					product.count <= 0 ?
					<label className="btn-sm text-danger">Sem estoque</label> :
					product.loading ?
					<button className="btn btn-primary">Comprando ...</button> :
					product.price <= balance.value ?
					<button className="btn btn-primary" onClick={() => onClick(product.id)}>Comprar</button> :
					<label className="btn-sm text-warning">Colocar mais <strong>R${(product.price - balance.value).toFixed(2)}</strong></label>
				}
			</div>
		</div>
	)
);

ProductListItem.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.number.isRequired,
		price: PropTypes.number.isRequired,
		image: PropTypes.string.isRequired
	}).isRequired,
	balance: PropTypes.shape({
		loading: PropTypes.bool.isRequired,
		value: PropTypes.number.isRequired
	}),
	onClick: PropTypes.func.isRequired
};

export default ProductListItem;
