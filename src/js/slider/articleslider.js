setListener(document, 'readystatechange',() => {
	//Инициализация первого слайда
	let sliders;
	sliders = document.getElementsByClassName('article_slider');

	if (sliders) {
		for (const e of sliders) {
			if (e.classList.contains('no-init')) {

				let photoSlides = e.getElementsByClassName('article_slider_item')
				// console.log(photoSlides)

				if (photoSlides.length > 0) {
					let slideIndex = 0,
						slideBack = e.querySelector('.article_slider_left'),
						slideNext = e.querySelector('.article_slider_right');

					/* Индекс слайда по умолчанию */
					showSlides(slideIndex);

					/* Функция увеличивает индекс на 1, показывает следующй слайд*/
					function plusSlide() {
						showSlides(slideIndex += 1)
					}


					/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
					function minusSlide() {
						showSlides(slideIndex -= 1)
					}

					/* Основная функция слайдера */
					function showSlides(value) {
						// let slides = document.querySelectorAll('.slider_item');

						if (value >= photoSlides.length) {
							slideIndex = 0
						}
						if (value < 0) {
							slideIndex = photoSlides.length - 1
						}
						for (const slide of photoSlides) {
							removeClass(slide, 'active')
						}
						// console.log(slides)
						addClass(photoSlides[slideIndex], 'active')
					}

					setListener(slideBack, 'click', minusSlide)
					setListener(slideNext, 'click', plusSlide)
				}
			}
		}
	}
})