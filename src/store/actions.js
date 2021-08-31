import axios from 'axios';
import {
	FETCH_PRODUCTS_FAILURE,
	FETCH_PRODUCTS_SUCCESS,
	FETCH_PRODUCTS_REQUEST,
} from './constants';

export const fetch_products_request = () => {
	return {
		type: FETCH_PRODUCTS_REQUEST,
	};
};

export const fetch_products_success = (products) => {
	return {
		type: FETCH_PRODUCTS_SUCCESS,
		payload: products,
	};
};

export const fetch_products_failure = (err) => {
	return {
		type: FETCH_PRODUCTS_FAILURE,
		payload: err,
	};
};
export const fetch_products = () => {
	return (dispatch) => {
		dispatch(fetch_products_request);
		axios
			.get(`http://www.mocky.io/v2/5c3e15e63500006e003e9795`)
			.then((response) => {
				dispatch(fetch_products_success(response.data.products));
			})
			.catch((err) => {
				console.log(err);
				dispatch(fetch_products_failure);
			});
	};
};
