(function () {
  let figure = document.querySelectorAll('.article_figure');

  for (const el of figure) {
    let image = el.children[0];

    setListener(image, 'load', function () {
      let width = this.naturalWidth,
        height = this.naturalHeight,
        ratio = width / height;

      if (ratio < 1) {
        addClass(el, 'vertical')
      }
    })
  }
})();
