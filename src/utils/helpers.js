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
};

export const format_date = (date) => {
	let d = new Date(date),
		month = '' + (d.getMonth() + 1),
		day = '' + d.getDate(),
		year = d.getFullYear();

	if (month.length < 2) month = '0' + month;
	if (day.length < 2) day = '0' + day;

	return [year, month, day].join('-');
};
