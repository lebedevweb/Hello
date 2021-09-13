(function () {
  let figure = document.querySelectorAll('.article_figure');
  let images = document.querySelectorAll('.image');

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

  for (const el of images) {
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
