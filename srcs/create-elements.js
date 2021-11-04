export const createSearchBullet = (searchContainer, cityName) => {
	const innerButton = document.createElement("button");
	searchContainer.appendChild(innerButton);
	const labelCity = document.createTextNode(`${cityName}`);
	const innerLabel = document.createElement("label");
	searchContainer.appendChild(innerLabel);
	innerButton.appendChild(labelCity);
}

const createHeader = (apiData, headerContainer, cityName) => {
	const innerDiv = document.createElement("div");
	innerDiv.className = "header-counter";
	headerContainer.appendChild(innerDiv);
	const spanCounter = document.createElement("span");
	spanCounter.className = "total-count";
	const spanText = document.createElement("span");
	spanText.className = "text-count";
	const totalCount = document.createTextNode(`${apiData.totalCount}`)
	const textCount = document.createTextNode(`Imóveis a venda em ${cityName}`)
	innerDiv.appendChild(spanCounter).appendChild(totalCount);
	innerDiv.appendChild(spanText).appendChild(textCount);
}	

const createHeaderBullet = (headerContainer, cityName) => {
	const innerDiv = document.createElement("div");
	innerDiv.className = "header-bullets";
	headerContainer.appendChild(innerDiv);
	const formBullet = document.createElement("form");
	formBullet.className = "location-bullet";
	innerDiv.appendChild(formBullet);
	const buttonBullet = document.createElement("button");
	const labelCity = document.createTextNode(`${cityName}`);
	formBullet.appendChild(buttonBullet).appendChild(labelCity);
}

const createAmenities = (amenity, amenitiesBox) => {
	const amenityLabel =  document.createElement("div");
	amenityLabel.className = "js-amenity-label";
	const amenityP = document.createElement("p")
	amenityLabel.appendChild(amenityP);
	const labelText = document.createTextNode(`${amenity.replace(/_/i, ' ')}`.toLowerCase());
	amenitiesBox.appendChild(amenityLabel).appendChild(amenityP).appendChild(labelText);
}

const createPrice = (apiInfo, contentDiv) => {
	const priceDiv = document.createElement("div");
	priceDiv.className = "js-price";
	contentDiv.appendChild(priceDiv);
	const priceSell = document.createTextNode(`R$ ${parseInt(apiInfo.listing.pricingInfos[0].price).toLocaleString('pt-BR')}`)
	priceDiv.appendChild(priceSell);
	if (apiInfo.listing.pricingInfos[0].monthlyCondoFee) {
		const condoDiv = document.createElement("div");
		condoDiv.className = "js-condo";
		priceDiv.appendChild(condoDiv);
		const condoText = document.createElement("span");
		condoText.className = "js-condo-text";
		const condoNumber = document.createElement("span");
		condoNumber.className = "js-condo-number";
		const text = document.createTextNode("Condomínio: ")
		condoText.appendChild(text);
		const number = document.createTextNode(`R$ ${parseInt(apiInfo.listing.pricingInfos[0].monthlyCondoFee).toLocaleString('pt-BR')}`);
		condoNumber.appendChild(number);
		condoDiv.appendChild(condoText);
		condoDiv.appendChild(condoNumber);
	}
}

const createEstateCard = (apiInfo, divCards) => {
	const cardBox = document.createElement("div");
	cardBox.className = "js-cards";
	divCards.appendChild(cardBox);
	cardBox.innerHTML = `
	<div>
		<img src="${apiInfo.medias[0].url}" />
	</div>
	`
	const content = document.createElement("div");
	content.className = "js-content";
	cardBox.appendChild(content);
	content.innerHTML = `
	<div class="js-card-titles">
		<p class="js-location">${apiInfo.link.data.street}, ${apiInfo.link.data.streetNumber} - ${apiInfo.link.data.neighborhood}, ${apiInfo.link.data.city} - ${apiInfo.link.data.state}</p>
	</div>
	<div class="js-card-titles">
		<p class="js-title">${apiInfo.link.name}</p>
	</div>
	<div class="js-details">
		<span class="js-detail-number">${apiInfo.listing.usableAreas[0]}</span>
		<span class="js-detail-text">m²</span>
		<span class="js-detail-number">${apiInfo.listing.bedrooms[0]}</span>
		<span class="js-detail-text">Quartos</span>
		<span class="js-detail-number">${apiInfo.listing.bathrooms[0]}</span>
		<span class="js-detail-text">Banheiros</span>
		<span class="js-detail-number">${apiInfo.listing.parkingSpaces[0]}</span>
		<span class="js-detail-text">Vagas</span>
	</div>
	`
	const amenitiesBox = document.createElement("div");
	amenitiesBox.className = "js-amenity";
	content.appendChild(amenitiesBox);
	apiInfo.listing.amenities.map((item) => {
		createAmenities(item, amenitiesBox);
	})
	createPrice(apiInfo, content);
}


export const createCards = (apiData, htmlContainer, cityName) => {
	const divHeader = document.createElement("div");
	htmlContainer.appendChild(divHeader);
	divHeader.className = "js-header-block";
	const divCards = document.createElement("div");
	htmlContainer.appendChild(divCards);
	divCards.className = "js-cards-block";
	createHeader(apiData, divHeader, cityName);
	createHeaderBullet(divHeader, cityName);
	apiData.result.listings.map((item => {
		createEstateCard(item, divCards);
	}))
}

