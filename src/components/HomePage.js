import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetch_products, add_product } from '../store/actions';
import Product from './Product';
function HomePage() {
	const dispatch = useDispatch();
	const state = useSelector((state) => state);
	console.log(state);
	useEffect(() => {
		dispatch(fetch_products());
	}, []);
	const [product, setProduct] = useState({
		name: '',
	});
	const handleChange = (e) => {
		setProduct({ ...product, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const new_product = {
			id: Math.round(Math.random() * 10000000000),
			name: product.name,
		};
		dispatch(add_product(new_product));
		setProduct({
			name: '',
		});
	};
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

			<div>
				<h1>Add</h1>
				<form action="" method="post" onSubmit={handleSubmit}>
					<div className="">
						<input
							type="text"
							name="name"
							placeholder="Name of product"
							value={product.name}
							onChange={handleChange}
						/>
					</div>
					<button>Add</button>
				</form>
			</div>
		</div>
	);
}

export default HomePage;
