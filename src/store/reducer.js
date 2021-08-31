import {
	FETCH_PRODUCTS_SUCCESS,
	FETCH_PRODUCTS_REQUEST,
	FETCH_PRODUCTS_FAILURE,
	ADD_PRODUCT,
	DELETE_PRODUCT,
} from './constants';

const initState = {
	products: [],
	loading: true,
	error: '',
};

const reducer = (state = initState, { type, payload }) => {
	switch (type) {
		case FETCH_PRODUCTS_REQUEST:
			return { ...state, loading: true };
		case FETCH_PRODUCTS_SUCCESS:
			return {
				...state,
				loading: false,
				products: payload,
				error: '',
			};

		case FETCH_PRODUCTS_FAILURE:
			return {
				...state,
				loading: false,
				products: [],
				error: payload,
			};
		case ADD_PRODUCT:
			return { ...state, products: [...state.products, payload] };
		case DELETE_PRODUCT:
			const filtered_products = state.products.filter(
				(product) => product.id !== payload
			);
			return { ...state, products: filtered_products };
		default:
			return state;
	}
};

export default reducer;
