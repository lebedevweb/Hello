function tapMenu(el) {
  let parent = el.target.parentElement;
  // console.log(el)
  let evt = el ? el : window.event;

  // console.log(parent)

  if (parent.classList.contains('active')) {

  } else {
    (evt.preventDefault) ? evt.preventDefault() : evt.returnValue = false;
  }
}

(function initTapMenu() {
  const sidenavMenuLinks = document.querySelectorAll(".sidenav_menu_link");
  for (let i = 0; i < sidenavMenuLinks.length; i++) {
    setListener(sidenavMenuLinks[i],'touchstart',  (e) => {
      tapMenu(e)
      removeMenuClass()
      addClass(e.target.parentElement,'active')
    })
  }
})()


function removeMenuClass() {
  const sidenavMenuLinks = document.querySelectorAll(".sidenav_menu_link");
  for (let i = 0; i < sidenavMenuLinks.length; i++) {
    removeClass(sidenavMenuLinks[i].parentElement,'active')
  }
}
