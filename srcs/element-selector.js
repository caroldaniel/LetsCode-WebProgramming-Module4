export const form = document.querySelector("#js-form");
export const searchInput = document.querySelector(".js-search-input");
export const locationBullet = document.querySelector(".js-search-location");
export const mainContainer = document.querySelector(".js-main-container");
export const showAll = document.querySelector("#searchbar");

// Cities Dictionaries and possible inputs
const cities = {
	SP: {
		name: 'São Paulo - SP',
		city:'sao-paulo',
		state:'sp'
	},	
	RJ: {
		name: 'Rio de Janeiro - RJ',
		city:'rio-de-janeiro',
		state:'rj'
	}	
}	

const saoPauloAlias = ['sp', 'sao paulo', 'são paulo']
const rioDeJaneiroAlias = ['rj', 'rio de janeiro', 'rio janeiro']

// Get correct city names
export const getCity = (searchInput) => {
	if (saoPauloAlias.find(alias => alias == searchInput.toLowerCase())) {
		return cities.SP;
	}
	else if (rioDeJaneiroAlias.find(alias => alias == searchInput.toLowerCase())) {
		return cities.RJ;
	}
	else return undefined
}

// Clear screen
export const clearBox = (element) => {
	element.innerHTML = "";
}