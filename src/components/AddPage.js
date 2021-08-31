import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add_product } from '../store/actions';
function AddPage() {
	const dispatch = useDispatch();
	const statte = useSelector((state) => state);
	console.log(statte);
	const [state, setState] = useState({
		name: '',
	});
	const handleChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(state);
		dispatch(add_product(state));
	};
	return (
		<div>
			<h1>Add</h1>
			<form action="" method="post" onSubmit={handleSubmit}>
				<div className="">
					<input
						type="text"
						name="name"
						placeholder="Name of product"
						value={state.product}
						onChange={handleChange}
					/>
				</div>
				<button>Add</button>
			</form>
		</div>
	);
}

export default AddPage;
