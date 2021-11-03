export const printErrorMessage = (status, mainContainer) => {
	mainContainer.innerHTML = `
	<h1 class="warning-message">OOOOPS!</h1>
	<h1 class="warning-message">ALGO DEU ERRADO NA SUA BUSCA.</h1>
	<h2 class="warning-status">status ${status}</h2>
	<h1 class="warning-message">POR FAVOR, TENTE NOVAMENTE.</h1>
	`
}