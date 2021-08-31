export const get_current_price = (prices) => {
	let dates = [];
	prices.map((element) => dates.push(new Date(element.date).getTime()));
	let max_date = dates[0];
	for (let index = 0; index < dates.length; index++) {
		if (dates[index] > max_date) {
			max_date = dates[index];
		}
	}
	return prices.find((obj) => new Date(obj.date).getTime() === max_date);

	// console.log(finder);
};
