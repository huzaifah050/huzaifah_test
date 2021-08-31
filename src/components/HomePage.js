import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetch_products } from '../store/actions';
import Product from './Product';
import Container from 'react-bootstrap/Container';
import AddModal from './AddModal';
import Spinner from 'react-bootstrap/Spinner';
function HomePage() {
	const dispatch = useDispatch();
	const state = useSelector((state) => state);

	useEffect(() => {
		dispatch(fetch_products());
	}, [dispatch]);

	return (
		<Container>
			<h1 className="list-heading">Lists of products</h1>

			<AddModal />
			{state.loading ? (
				<div>
					<Spinner animation="border" role="status">
						<span className="visually-hidden">Loading...</span>
					</Spinner>
				</div>
			) : (
				state.products.map((product) => {
					if (!product?.deleted) {
						return <Product key={product.id} product={product} />;
					}
				})
			)}
		</Container>
	);
}

export default HomePage;
