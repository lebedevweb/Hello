//Инициализация первого слайда
let slides = document.querySelectorAll('.slider_article');

if(slides.length > 0) {
  for (let i = 0; i < slides.length; i++) {
    document.querySelector('.slider_dots').innerHTML+= `<li class="slider_dots_item">`
  }

  let slidesIndex, sliderDots;
  slidesIndex = 0;
  sliderDots = document.querySelectorAll('.slider_dots_item');

  /* Индекс слайда по умолчанию */
  showMainSlides(slidesIndex);


  /* Функция увеличивает индекс на 1, показывает следующй слайд*/
  function plusSlide() {
    showMainSlides(slidesIndex += 1)
  }


  /* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
  function minusSlide() { showMainSlides(slidesIndex -= 1) }

  /* Основная функция слайдера */
  function showMainSlides(value) {
    // let slides = document.querySelectorAll('.slider_item');

    if (value >= slides.length) {
      slidesIndex = 0
    }
    if (value < 0) {
      slidesIndex = slides.length - 1
    }
    for (let i = 0; i < slides.length;i++) {
      removeClass(slides[i], 'active')
      removeClass(sliderDots[i], 'active')
    }
    // console.log(slides)
    addClass(slides[slidesIndex], 'active')
    addClass(sliderDots[slidesIndex], 'active')
  }

  setInterval(plusSlide,5000)
  for (let i = 0; i < slides.length; i++) {
    setListener(sliderDots[i], 'click', () => {
      for (let j = 0; j < slides.length; j ++) {
        removeClass(slides[j], 'active')
        removeClass(sliderDots[j], 'active')
      }
        addClass(slides[i], 'active')
        addClass(sliderDots[i], 'active')
    }
    )}
}


