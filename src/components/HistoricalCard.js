import Table from 'react-bootstrap/Table';
import { format_date } from '../utils/helpers';

function HistoricalCard({ prices }) {
	return (
		<Table striped bordered hover>
			<thead>
				<tr>
					<th>#</th>
					<th>Price</th>
					<th>Date</th>
				</tr>
			</thead>
			<tbody>
				{prices.map((price, index) => {
					const { date } = price;
					const new_date = format_date(date);

					return (
						<tr key={index}>
							<td>{parseInt(index) + 1}</td>
							<td>${price.price}</td>
							<td>{new_date}</td>
						</tr>
					);
				})}
			</tbody>
		</Table>
	);
}

export default HistoricalCard;
