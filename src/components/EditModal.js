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
	});
	const handleChange = (e) => {
		setProduct({ ...product, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const new_product = {
			...info,
			name: product.name,
		};
		dispatch(edit_product(info.id, new_product));
		setProduct({
			name: '',
		});
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
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Name</Form.Label>
							<Form.Control
								value={product.name}
								onChange={handleChange}
								type="text"
								name="name"
								placeholder="Enter product name"
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
