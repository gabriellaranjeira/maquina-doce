import {
	BUY_PRODUCT_DONE,
	DECREMENT_PURCHASED
} from '../constants/ActionTypes';

const initialState = [
];

const reducer = (state = initialState, action) => {
	switch (action.type) {
	case BUY_PRODUCT_DONE:
		return [
			...state,
			action.payload
		];
	case DECREMENT_PURCHASED:
		return [];
	default:
		return state;
	}
};

export default reducer;
