const table = document.querySelector('.promo__image-table');
const topButton = document.querySelector('.promo__button--top');
const bottomButton = document.querySelector('.promo__button--bottom');

topButton.addEventListener('click', () => {
	table.classList.add('promo__lifted');
});

bottomButton.addEventListener('click', () => {
	table.classList.remove('promo__lifted');
});
