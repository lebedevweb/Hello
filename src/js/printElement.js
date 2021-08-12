// let mainVideoCounter = 0;
// function getIp() {
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', 'https://api.ipify.org?format=json', true);
//   xhr.send();
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
//       let obj = JSON.parse(xhr.responseText);
//       let maxMainVideoCounter = mainVideoCounter + 4;
//       for (let i = mainVideoCounter; i < maxMainVideoCounter + 4; i++) {
//         addElements(url, src, title, width, height, date);
//         mainVideoCounter += 1
//       }
//     }
//   }
// }
//
//
// function addElements(url,src,title,width,height,date) {
//   let row = document.querySelector('.cardgallery_row');
//   let el = `<article class="cardgallery">
//               <a class="cardgallery_link" href="${url}">
//               <div class="cardgallery_picture">
//               <img class="cardgallery_image" loading="lazy" src="${src}" alt="${title}" width="${width}" height="${height}"></div>
//               <header class="cardgallery_category fs_18 marker marker_red">Галереи</header>
//               <footer class="cardgallery_footer">
//                 <h3 class="cardgallery_title fs_24">Гости презентации онлайн-кинотеатра</h3>
//                 <time class="cardgallery_time fs_14" datetime="${date}">21 июня 2021 / 20:45</time>
//               </footer></a></article>
//   `
//   row.innerHTML += el
// }

