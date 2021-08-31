import { useSelector, useDispatch } from 'react-redux';
import { delete_product } from '../store/actions';

function Product({ product }) {
	const dispatch = useDispatch();

	const handleDelete = (id) => {
		dispatch(delete_product(id));
	};
	return (
		<div>
			<p>{product.name}</p>
			<button onClick={() => handleDelete(product.id)}>Delete</button>
		</div>
	);
}

export default Product;
