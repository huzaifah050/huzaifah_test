import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetch_products } from '../store/actions';
import Product from './Product';
function HomePage() {
	const dispatch = useDispatch();
	const state = useSelector((state) => state);

	useEffect(() => {
		dispatch(fetch_products());
	}, []);

	return (
		<div>
			<h1>Lists of products</h1>
			{state.loading ? (
				<h1>Loading...</h1>
			) : (
				state.products.map((product) => (
					<Product key={product.id} product={product} />
				))
			)}
		</div>
	);
}

export default HomePage;
