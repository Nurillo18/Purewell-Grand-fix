
var elImg1 = document.querySelector(".img1")
var elImg2 = document.querySelector(".img2")
var elImg3 = document.querySelector(".img3")
var elImg4 = document.querySelector(".img4")
var elImg5 = document.querySelector(".img5")
var elImg6 = document.querySelector(".img6")

elImg1.addEventListener("click", function() {
    elImg1.classList.toggle("scale")
    elImg2.classList.toggle("del")
    elImg3.classList.toggle("del")
    elImg4.classList.toggle("del")
    elImg5.classList.toggle("del")
    elImg6.classList.toggle("del")

})
elImg2.addEventListener("click", function() {
    elImg2.classList.toggle("scale")
    elImg1.classList.toggle("del")
    elImg3.classList.toggle("del")
    elImg4.classList.toggle("del")
    elImg5.classList.toggle("del")
    elImg6.classList.toggle("del")

})
elImg3.addEventListener("click", function() {
    elImg3.classList.toggle("scale")
    elImg1.classList.toggle("del")
    elImg2.classList.toggle("del")
    elImg4.classList.toggle("del")
    elImg5.classList.toggle("del")
    elImg6.classList.toggle("del")

})
elImg4.addEventListener("click", function() {
    elImg4.classList.toggle("scale")
    elImg3.classList.toggle("del")
    elImg1.classList.toggle("del")
    elImg2.classList.toggle("del")
    elImg5.classList.toggle("del")
    elImg6.classList.toggle("del")

})
elImg5.addEventListener("click", function() {
    elImg5.classList.toggle("scale")
    elImg4.classList.toggle("del")
    elImg3.classList.toggle("del")
    elImg1.classList.toggle("del")
    elImg2.classList.toggle("del")
    elImg6.classList.toggle("del")

})
elImg6.addEventListener("click", function() {
    elImg6.classList.toggle("scale")
    elImg5.classList.toggle("del")
    elImg4.classList.toggle("del")
    elImg3.classList.toggle("del")
    elImg1.classList.toggle("del")
    elImg2.classList.toggle("del")
})
