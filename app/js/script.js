const hamburgerBtn = document.querySelector('.header__clickzone')
const hamburgerMenu = document.querySelector('.header__menu')
const body = document.querySelector('body')

hamburgerBtn.addEventListener('click', ()=>{
    console.log('hello')
    hamburgerMenu.classList.toggle('active')
    body.classList.toggle('noscroll')
})