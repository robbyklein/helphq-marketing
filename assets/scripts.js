var d = document
var body = d.querySelector('body')
var hamburger = d.querySelector('.hamburger')
var nav = d.querySelector('.nav')

nav.addEventListener('click', function(e) {
  e.stopPropagation()
})

body.addEventListener('click', function(e) {
  e.stopPropagation()
  body.classList.remove('nav-active')
})

hamburger.addEventListener('click', function(e) {
  e.stopPropagation()
  body.classList.toggle('nav-active')
})