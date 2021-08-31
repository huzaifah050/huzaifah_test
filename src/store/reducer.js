import {
	FETCH_PRODUCTS_SUCCESS,
	FETCH_PRODUCTS_REQUEST,
	FETCH_PRODUCTS_FAILURE,
	ADD_PRODUCT,
	DELETE_PRODUCT,
	EDIT_PRODUCT,
	ADD_DELETED,
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
		// case DELETE_PRODUCT:
		// 	const filtered_products = state.products.filter(
		// 		(product) => product.id !== payload
		// 	);
		// 	return { ...state, products: filtered_products };

		// const obj = filtered_product[0];
		// delete obj['name'];

		// return { ...state, products: [...state.products, obj] };
		// return { ...state, products: filtered_products };
		case DELETE_PRODUCT:
			const deleted_products = state.products.map((product) => {
				if (product.id === payload) {
					delete product['name'];

					return { ...product, deleted: true };
				} else {
					return product;
				}
			});
			return { ...state, products: deleted_products };
		case EDIT_PRODUCT:
			const { id, updated_info } = payload;
			const updated_products = state.products.map((product) => {
				if (product.id === id) {
					return { ...product, ...updated_info };
				} else {
					return product;
				}
			});
			return { ...state, products: updated_products };
		default:
			return state;
	}
};

export default reducer;
