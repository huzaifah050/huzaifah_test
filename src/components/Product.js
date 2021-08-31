import { useDispatch } from 'react-redux';
import { delete_product } from '../store/actions';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import EditModal from './EditModal';
function Product({ product }) {
	const dispatch = useDispatch();

	const handleDelete = (id) => {
		dispatch(delete_product(id));
	};
	return (
		<Accordion>
			<Accordion.Item eventKey={product.id}>
				<Accordion.Header>{product.name}</Accordion.Header>
				<Accordion.Body>
					<div className="product_btn_group">
						<EditModal info={product} />
						<Button onClick={() => handleDelete(product.id)} variant="danger">
							Delete
						</Button>
					</div>
				</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	);
}

export default Product;
