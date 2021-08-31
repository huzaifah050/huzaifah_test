import { useEffect, useState } from 'react';
import axios from 'axios';

function Test() {
	useEffect(() => {
		const fetch = () => {
			axios
				.get(`http://www.mocky.io/v2/5c3e15e63500006e003e9795`)
				.then((response) => {
					console.log(response);
				})
				.catch((err) => {
					console.log(err);
				});
		};

		fetch();
	}, []);

	return (
		<div>
			<h1>jtvgbhkjnm</h1>
		</div>
	);
}

export default Test;
