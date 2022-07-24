var elHamburger = document.querySelector(".header__hamburger-wrapper")
var elHamLine = document.querySelector(".header__hamburger-line")
var elHamLine1 = document.querySelector(".line1")
var elHamLine2 = document.querySelector(".line2")
var elModal = document.querySelector(".modal")
var elHeader = document.querySelector(".site-header")
elHamburger.addEventListener("click", function() {
    elModal.classList.toggle("open")
    elHamLine.classList.toggle("rotate-open1")
    elHamLine1.classList.toggle("rotate")
    elHamLine2.classList.toggle("rotate-open2")
} )

window.addEventListener("scroll", function() {
    elHeader.classList.toggle("sticky", window.scrollY > 0)

})