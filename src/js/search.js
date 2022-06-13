(() => {
	let find = document.querySelector('.find'),
		search = document.querySelector('.search'),
		searchClose = document.querySelector('.search_close');

	setListener(find, 'click', () => addClass(search, 'active'))
	setListener(searchClose, 'click', () => removeClass(search, 'active'))
})()
