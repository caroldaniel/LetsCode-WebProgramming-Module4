import { getDataFromAPI } from './api-fetch.js'
import { form, searchInput, locationBullet, mainContainer, showAll, getCity, clearBox } from './element-selector.js'
import { printErrorMessage } from './error-message.js';
import { createCards, createSearchBullet } from './create-elements.js';

const fetchData = async (location) => {
	try {
		const response = await getDataFromAPI(location);
		clearBox(locationBullet);
		createSearchBullet(locationBullet, location.name);
		clearBox(mainContainer);
		createCards(response.search, mainContainer, location.name);
	}
	catch {
		clearBox(locationBullet);
		printErrorMessage("500", mainContainer);
	}
}

// Event listener for search
form.addEventListener('focusout', event => {
	event.preventDefault()
	const searchCity = searchInput.value.trim();
	form.reset();
	if (searchCity) {
		const location = getCity(searchCity);
		fetchData(location);
	}
})

form.addEventListener('submit', event => {
	event.preventDefault()
	const searchCity = searchInput.value.trim();
	form.reset();
	if (searchCity) {
		const location = getCity(searchCity);
		fetchData(location);
	}
})

showAll.addEventListener('click', event => {
	event.preventDefault();
})
