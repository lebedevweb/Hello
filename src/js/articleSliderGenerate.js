setListener(document, 'readystatechange',() => {

	let gallery = document.getElementsByClassName('slider_gallery_block')

	if (gallery) {
		for (const e of gallery) {
			let images = e.children

//   console.log(gallery)

			let list = [];

			for (let i = 0; i < images.length; i++) {
				if (i === 0) {
					list.push(`<li class="article_slider_item active">
    	<img src="${images[i].src}" alt="${images[i].alt}" width="${images[i].width}" height="${images[i].height}">
    	${images[i].dataset.href ? `<p><a href="${images[i].dataset.href}">${images[i].alt}</a></p>` : `<p>${images[i].alt}</p>`}
    </li>`)
				} else {
					list.push(`<li class="article_slider_item">
    	<img src="${images[i].src}" alt="${images[i].alt}" width="${images[i].width}" height="${images[i].height}">
    	${images[i].dataset.href ? `<p><a href="${images[i].dataset.href}">${images[i].alt}</a></p>` : `<p>${images[i].alt}</p>`}
    </li>`)
				}

			}

			// console.log(list)

			e.outerHTML = `
  	<div class="article_slider no-init">
    	<div class="article_slider_left"></div>
      <ul class="article_slider_list">
      	${list.join('\n')}
      </ul>
      <div class="article_slider_right"></div>
  	</div>
  `
		}
	}
})