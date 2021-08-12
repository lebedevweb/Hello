(function burger() {
  const burger = document.querySelector('.burger'),
        sidenav = document.querySelector('.sidenav'),
        sidenavClose = document.querySelector('.sidenav_close');



  setListener(burger,'click', () => {sidenav.classList.toggle('active')})
  setListener(sidenavClose,'click', () => {
    removeClass(sidenav,'active')
    removeMenuClass()
  })
})()
