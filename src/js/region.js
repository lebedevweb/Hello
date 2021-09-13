(() => {
	let region = document.querySelector('.sidenav_region'),
		regions = document.querySelector('.sidenav_regions');
	setListener(region, 'click', () => regions.classList.toggle('active'))
})()