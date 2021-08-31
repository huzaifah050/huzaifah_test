import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { edit_product } from '../store/actions';
function EditModal({ info }) {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const dispatch = useDispatch();
	const [product, setProduct] = useState({
		name: info.name,
		price: '',
	});
	const handleChange = (e) => {
		setProduct({ ...product, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const new_product = {
			...info,
			name: product.name,
			prices: [
				...info.prices,
				{
					id: Math.round(Math.random() * 1000000000),
					price: product.price,
					date: new Date().getTime(),
				},
			],
		};
		dispatch(edit_product(info.id, new_product));

		handleClose();
	};
	return (
		<>
			<Button onClick={handleShow} variant="info">
				Edit
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Edit Product</Modal.Title>
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
								placeholder="New product price"
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

export default EditModal;
