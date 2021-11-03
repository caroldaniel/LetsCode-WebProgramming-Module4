const url = `https://private-9e061d-piweb.apiary-mock.com`

export const getDataFromAPI = async(location) => {
	try {
		const response = await fetch(`${url}/venda?state=${location.state}&city=${location.city}`);
		const data = await response.json();
		return data;
	}
	catch (err) {
		throw new Error('500', err);
	}
}
