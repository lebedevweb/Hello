(() => {
  let top = document.querySelector('.scrolltop');

  setListener(window,'scroll',() => trackScroll(top))
  setListener(top,'click',() => backToTop(top))
})()


function trackScroll(el) {
  let scrolled = window.pageYOffset;
  let coords = document.documentElement.clientHeight;

  if (scrolled > coords) {
    addClass(el,'active')
  }
  if (scrolled < coords) {
    removeClass(el,'active')
  }
}

function backToTop(el) {
  if (window.pageYOffset > 0) {
    window.scroll({top: 0, behavior: "smooth"});
  }
}
