let shadowElements = document.querySelectorAll('.slider_article_header');

if (shadowElements.length > 0) {
  // setTimeout(() => {
    let fac = new FastAverageColor();

    for (const shadowElement of shadowElements) {
      let color = fac.getColorAsync(shadowElement.querySelector('.slider_article_image'))
        .then(color => {
            shadowElement.style["boxShadow"] = '20px -20px' + color.hex;
            // console.log(color);
            // {
            //     error: null,
            //     rgb: 'rgb(255, 0, 0)',
            //     rgba: 'rgba(255, 0, 0, 1)',
            //     hex: '#ff0000',
            //     hexa: '#ff0000ff',
            //     value: [255, 0, 0, 255],
            //     isDark: true,
            //     isLight: false
            // }
        })
        .catch(e => {
          console.log(e);
        });



    }
  // },1000)

}




