import { useDispatch } from 'react-redux';
import { delete_product } from '../store/actions';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import EditModal from './EditModal';
function Product({ product }) {
	const { prices } = product;

	const dispatch = useDispatch();

	const handleDelete = (id) => {
		dispatch(delete_product(id));
	};

	// let current_date = new Date(prices[0].date);
	// for (let index = 0; index < prices.length; index++) {
	// 	const element = new Date(prices[index].date).getTime();
	// 	if (element > current_date) {
	// 		current_date = element;
	// 	}
	// 	// return current_date;
	// }

	return (
		<Accordion>
			<Accordion.Item eventKey={product.id}>
				<Accordion.Header>{product.name}</Accordion.Header>
				<Accordion.Body>
					{prices.map((price) => {
						return (
							<div key={price.id}>
								<p>{new Date(price.date).getHours()}</p>
							</div>
						);
					})}
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
