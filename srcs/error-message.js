export const printErrorMessage = (status, mainContainer) => {
	mainContainer.innerHTML = `
	<p class="warning-message">OOOOPS!</p>
	<p class="warning-message">ALGO DEU ERRADO NA SUA BUSCA.</p>
	<p class="warning-status">status ${status}</p>
	<p class="warning-message">POR FAVOR, TENTE NOVAMENTE.</p>
	`
}