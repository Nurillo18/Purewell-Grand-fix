var elHamburger = document.querySelector(".header__hamburger-wrapper")
var elHamLine = document.querySelector(".header__hamburger-line")
var elHamLine1 = document.querySelector(".line1")
var elHamLine2 = document.querySelector(".line2")
var elModal = document.querySelector(".modal")
var elHeader = document.querySelector(".site-header")

var elModalLink = document.querySelector(".modal__link")
var elModalLink1 = document.querySelector(".modal1")
var elModalLink2 = document.querySelector(".modal2")
var elModalLink3 = document.querySelector(".modal3")
var elMain = document.querySelector("main")
var elFooter = document.querySelector("footer")



elHamburger.addEventListener("click", function() {
    elModal.classList.toggle("open")
    elHamLine.classList.toggle("rotate-open1")
    elHamLine1.classList.toggle("rotate")
    elHamLine2.classList.toggle("rotate-open2")
} )

elMain.addEventListener("click", function() {
    elModal.classList.remove("open")
    elHamLine.classList.remove("rotate-open1")
    elHamLine1.classList.remove("rotate")
    elHamLine2.classList.remove("rotate-open2")
})
elFooter.addEventListener("click", function() {
    elModal.classList.remove("open")
    elHamLine.classList.remove("rotate-open1")
    elHamLine1.classList.remove("rotate")
    elHamLine2.classList.remove("rotate-open2")
})



elModalLink.addEventListener("click", function() {
    elModal.classList.remove("open")
    elHamLine.classList.remove("rotate-open1")
    elHamLine1.classList.remove("rotate")
    elHamLine2.classList.remove("rotate-open2")
})
elModalLink1.addEventListener("click", function() {
    elModal.classList.remove("open")
    elHamLine.classList.remove("rotate-open1")
    elHamLine1.classList.remove("rotate")
    elHamLine2.classList.remove("rotate-open2")
})
elModalLink2.addEventListener("click", function() {
    elModal.classList.remove("open")
    elHamLine.classList.remove("rotate-open1")
    elHamLine1.classList.remove("rotate")
    elHamLine2.classList.remove("rotate-open2")
})
elModalLink3.addEventListener("click", function() {
    elModal.classList.remove("open")
})
window.addEventListener("scroll", function() {
    elHeader.classList.toggle("sticky", window.scrollY > 0)

})