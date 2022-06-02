const checkbox = document.querySelector('#toggle')
const buttonGroup = document.querySelectorAll('.menu-button')

buttonGroup.forEach(button => {
  button.addEventListener('click', () => {
    checkbox.checked = false
  })
})

window.addEventListener('scroll', onScroll)
onScroll()

function onScroll() {
  ShowBackToTopButtonOnscroll()
}

function ShowBackToTopButtonOnscroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(
  `#home, #project, #project .cards-container, #project .card, #about .about-me`
)
