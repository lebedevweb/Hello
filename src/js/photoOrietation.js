setListener(document, 'readystatechange',() => {
  if (document.getElementsByClassName('image')[0]) {
    console.log(document.getElementsByClassName('image'))

    for (let key of document.getElementsByClassName('image')) {
      let img = key.children[0];

      let width = img.naturalWidth,
        height = img.naturalHeight,
        ratio = width / height;
      // console.log(ratio)

      if (ratio <= 1) {
        addClass(key, 'vertical')
      }
    }
  }
})
