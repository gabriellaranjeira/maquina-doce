import {
	FETCH_PRODUCTS,
	FETCH_PRODUCTS_DONE,
	INCREMENT_BALANCE,
	INCREMENT_BALANCE_DONE,
	DECREMENT_BALANCE,
	BUY_PRODUCT,
	BUY_PRODUCT_DONE,
	DECREMENT_PURCHASED
} from '../constants/ActionTypes';
import axios from 'axios';

export const fetchProducts = () => dispatch => {
	dispatch({
		type: FETCH_PRODUCTS
	});	

	axios.get('data/products.json').then(products => {
		setTimeout(() => {
			dispatch({
				type: FETCH_PRODUCTS_DONE,
				payload: products
			});
		}, 1000);
	});
};

export const incrementBalance = amount => dispatch => {
	dispatch({
		type: INCREMENT_BALANCE,
		payload: amount
	});

	setTimeout(() => {
		dispatch({
			type: INCREMENT_BALANCE_DONE,
			payload: amount
		});		
	}, 1000);
};

export const decrementBalance = amount => dispatch => {
	dispatch({
		type: DECREMENT_BALANCE,
		payload: amount
	});
};

export const buyProduct = id => (dispatch, getState) => {
	dispatch({
		type: BUY_PRODUCT,
		payload: id
	});

	setTimeout(() => {
		dispatch(decrementBalance(getState().products.data[id].price));

		dispatch({
			type: BUY_PRODUCT_DONE,
			payload: id
		});
	}, 1000);
};

export const decrementPurchased = () => dispatch => {
	dispatch({
		type: DECREMENT_PURCHASED,
		payload: null
	});
};

export const finishProduct = () => (dispatch, getState) => {
	alert("Produtos Comprados: " + getState().purchasedProducts.map(id => getState().products.data[id].name).join(" , ") + ".\nTroco: " + getState().balance.value);
	dispatch(decrementBalance(getState().balance.value));
	dispatch(decrementPurchased());
};
