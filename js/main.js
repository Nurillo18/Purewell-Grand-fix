
let elImg1 = document.querySelector(".img1")
let elImg2 = document.querySelector(".img2")
let elImg3 = document.querySelector(".img3")
let elImg4 = document.querySelector(".img4")
let elImg5 = document.querySelector(".img5")
let elImg6 = document.querySelector(".img6")

let elItem1 = document.querySelector(".item1")
let elItem2 = document.querySelector(".item2")
let elItem3 = document.querySelector(".item3")
let elItem4 = document.querySelector(".item4")
let elItem5 = document.querySelector(".item5")
let elItem6 = document.querySelector(".item6")

let elBasixName = document.querySelector(".site-main")

elImg1.addEventListener("click", function() {
    elImg1.classList.toggle("scale")
    elImg2.classList.toggle("del")
    elImg3.classList.toggle("del")
    elImg4.classList.toggle("del")
    elImg5.classList.toggle("del")
    elImg6.classList.toggle("del")
    elBasixName.classList.toggle("opasity")
    // elItem1.classList.toggle("del")
    elItem2.classList.toggle("del")
    elItem3.classList.toggle("del")
    // elItem4.classList.toggle("del")
    elItem5.classList.toggle("del")
    elItem6.classList.toggle("del")
    elDeleteImg.classList.toggle("open")

})
elImg2.addEventListener("click", function() {
    elImg2.classList.toggle("scale")
    elImg1.classList.toggle("del")
    elImg3.classList.toggle("del")
    elImg4.classList.toggle("del")
    elImg5.classList.toggle("del")
    elImg6.classList.toggle("del")
    elBasixName.classList.toggle("opasity")
    elItem1.classList.toggle("del")
    // elItem2.classList.toggle("del")
    // elItem3.classList.toggle("del")
    elItem4.classList.toggle("del")
    elItem5.classList.toggle("del")
    elItem6.classList.toggle("del")


})
elImg3.addEventListener("click", function() {
    elImg3.classList.toggle("scale")
    elImg1.classList.toggle("del")
    elImg2.classList.toggle("del")
    elImg4.classList.toggle("del")
    elImg5.classList.toggle("del")
    elImg6.classList.toggle("del")
    elBasixName.classList.toggle("opasity")
    // elItem1.classList.toggle("del")
    elItem2.classList.toggle("del")
    // elItem3.classList.toggle("del")
    elItem4.classList.toggle("del")
    elItem5.classList.toggle("del")
    elItem6.classList.toggle("del")


})
elImg4.addEventListener("click", function() {
    elImg4.classList.toggle("scale")
    elImg3.classList.toggle("del")
    elImg1.classList.toggle("del")
    elImg2.classList.toggle("del")
    elImg5.classList.toggle("del")
    elImg6.classList.toggle("del")
    elBasixName.classList.toggle("opasity")
    // elItem1.classList.toggle("del")
    elItem2.classList.toggle("del")
    // elItem3.classList.toggle("del")
    // elItem4.classList.toggle("del")
    // elItem5.classList.toggle("del")
    // elItem6.classList.toggle("del")


})
elImg5.addEventListener("click", function() {
    elImg5.classList.toggle("scale")
    elImg4.classList.toggle("del")
    elImg3.classList.toggle("del")
    elImg1.classList.toggle("del")
    elImg2.classList.toggle("del")
    elImg6.classList.toggle("del")
    elBasixName.classList.toggle("opasity")

})
elImg6.addEventListener("click", function() {
    elImg6.classList.toggle("scale")
    elImg5.classList.toggle("del")
    elImg4.classList.toggle("del")
    elImg3.classList.toggle("del")
    elImg1.classList.toggle("del")
    elImg2.classList.toggle("del")
    elBasixName.classList.toggle("opasity")

})
