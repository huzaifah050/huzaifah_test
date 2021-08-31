import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { add_product } from '../store/actions';
function AddModal() {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const dispatch = useDispatch();
	const [product, setProduct] = useState({
		name: '',
		price: '',
	});
	const handleChange = (e) => {
		setProduct({ ...product, [e.target.id]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const new_product = {
			id: Math.round(Math.random() * 10000000000),
			name: product.name,
			prices: [
				{
					id: Math.round(Math.random() * 1000000000),
					price: product.price,
					date: new Date().getTime(),
				},
			],
		};

		dispatch(add_product(new_product));
		setProduct({
			name: '',
			price: '',
		});
		handleClose();
	};
	return (
		<>
			<Button variant="primary mb-3" onClick={handleShow}>
				Add
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Add Product</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={handleSubmit}>
						<Form.Group className="mb-3">
							<Form.Label>Name</Form.Label>
							<Form.Control
								value={product.name}
								onChange={handleChange}
								type="text"
								name="name"
								id="name"
								placeholder="Enter product name"
							/>
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label>Price</Form.Label>
							<Form.Control
								value={product.price}
								name="price"
								id="price"
								placeholder="Enter product price"
								onChange={handleChange}
							/>
						</Form.Group>

						<Button variant="primary" type="submit">
							Add
						</Button>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default AddModal;
