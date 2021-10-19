// scroll to top 回到頂部按鈕
const toTop = document.querySelector('.tap_to_top')
const header = document.getElementById('header')

toTop.addEventListener('click', (e) => {
  e.preventDefault()
  header.scrollIntoView({ behavior: 'smooth', block: 'start' })
})


// 手機版彈出式選單＋按鈕

const btnHamburger = document.querySelector('.icon_nav_mobile_ham')
const btnClose = document.querySelector('.icon_nav_mobile_close')
const mobileNav = document.querySelector('.btn_wrapper_mobile')

btnHamburger.addEventListener('click', function(e) {
  e.preventDefault()
  btnHamburger.classList.remove('active')
  mobileNav.classList.add('show_mobile_nav')
  btnClose.classList.add('active')
})

btnClose.addEventListener('click', function(e) {
  e.preventDefault()
  btnHamburger.classList.add('active')
  mobileNav.classList.remove('show_mobile_nav')
  btnClose.classList.remove('active')
})

