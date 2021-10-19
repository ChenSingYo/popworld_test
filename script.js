// scroll to top 回到頂部按鈕
const toTop = document.querySelector('.tap_to_top')
const header = document.getElementById('header')

toTop.addEventListener('click', (e) => {
  e.preventDefault()
  header.scrollIntoView({ behavior: 'smooth', block: 'start' })
})
