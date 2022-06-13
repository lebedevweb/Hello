(() => {
	let slider = document.querySelector('.cardcustom_container')

	if (slider) {
		let list = slider.querySelector('.cardcustom_list'),
			items = list.querySelectorAll('.cardcustom_item');
		// console.log(list)

		if (items.length >= 5) {
			let slideBack = slider.querySelector('.cardcustom_left'),
				slideNext = slider.querySelector('.cardcustom_right');

			determineWidth(document.documentElement.scrollWidth)

			setListener(slideNext, 'click', () => {
				items.forEach(e => {
					removeClass(e, 'active')
				})
				list.appendChild(items[0])
				items = list.querySelectorAll('.cardcustom_item')
				determineWidth(document.documentElement.scrollWidth)
			})

			setListener(slideBack, 'click', () => {
				items.forEach(e => {
					removeClass(e, 'active')
				})
				list.insertBefore(items[items.length - 1], items[0])
				items = list.querySelectorAll('.cardcustom_item')
				determineWidth(document.documentElement.scrollWidth)
			})

			window.addEventListener('resize', () => {
				items.forEach(e => {
					removeClass(e, 'active')
				})
				determineWidth(document.documentElement.scrollWidth)
			})
		}

		function initItems(number) {
			for (let i = 0; i < number; i++) {
				addClass(items[i], 'active')
			}
		}

		function determineWidth(width) {
			if (width >= 1200) {
				initItems(5)
			} else if (width <= 1199.99 && width >= 960) {
				initItems(4)
			} else if (width <= 959.99 && width >= 768) {
				initItems(3)
			} else if (width <= 767.99 && width >= 460) {
				initItems(2)
			} else if (width <= 459.99) {
				initItems(1)
			}
		}

	} else {return}
})()

