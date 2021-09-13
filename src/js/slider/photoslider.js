(() => {
//Инициализация первого слайда
  let photoSlides = document.querySelectorAll('.photoslider_item');

  if (photoSlides.length > 0) {
    let slideIndex = 0,
      slideBack = document.querySelector('.photoslider_back'),
      slideNext = document.querySelector('.photoslider_next'),
      slideTotal = document.querySelector('.photoslider_total'),
      slideCurrent = document.querySelector('.photoslider_current'),
      sliderFooter = document.querySelector('.photoslider_footer');

    slideTotal.innerHTML = photoSlides.length

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
      slideCurrent.innerText = slideIndex + 1
      sliderFooter.innerHTML = photoSlides[slideIndex].children[0].alt
    }

    setListener(slideBack, 'click', minusSlide)
    setListener(slideNext, 'click', plusSlide)
  }
})()