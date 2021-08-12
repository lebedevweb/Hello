(function () {
  const scrolltop = document.querySelector('.scrolltop');

  setListener(window,'scroll',trackScroll())
  setListener(scrolltop,'click',backToTop())


  function trackScroll() {
    let scrolled = window.pageYOffset;
    let coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      addClass(scrolltop,'active')
    }
    if (scrolled < coords) {
      removeClass(scrolltop,'active')
    }
  }


  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(scrolltop, 100);
    }
  }
})()

