
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
let elHero = document.querySelector(".hero-section")
let elAbout = document.querySelector(".about-us-section")
let elBasicManu = document.querySelector(".basic-menu")

let elPhone = document.querySelector(".ring-btn")

elPhone.addEventListener("click", function() {
    elPhone.classList.toggle("right-to")
})

window.addEventListener("scroll", function() {
    elBasicManu.classList.remove("none", elHero.scrollY > 100)
    elBasixName.classList.remove("opasity", elHero.scrollY > 100)
    elImg1.classList.remove("scale", elHero.scrollY > 200)
    elImg2.classList.remove("scale", elHero.scrollY > 200)
    elImg3.classList.remove("scale", elHero.scrollY > 200)
    elImg3.classList.remove("scales", elHero.scrollY > 200)
    elImg4.classList.remove("scale", elHero.scrollY > 200)
    elImg5.classList.remove("scale", elHero.scrollY > 200)
    elImg6.classList.remove("scale", elHero.scrollY > 200)

    elImg1.classList.remove("del", elHero.scrollY > 200)
    elImg2.classList.remove("del", elHero.scrollY > 200)
    elImg3.classList.remove("del", elHero.scrollY > 200)
    elImg4.classList.remove("del", elHero.scrollY > 200)
    elImg5.classList.remove("del", elHero.scrollY > 200)
    elImg6.classList.remove("del", elHero.scrollY > 200)


    elItem1.classList.remove("del-opasi", elHero.scrollY > 200)
    elItem2.classList.remove("del-opasi", elHero.scrollY > 200)
    elItem3.classList.remove("del-opasi", elHero.scrollY > 200)
    elItem4.classList.remove("del-opasi", elHero.scrollY > 200)
    elItem5.classList.remove("del-opasi", elHero.scrollY > 200)
    elItem6.classList.remove("del-opasi", elHero.scrollY > 200)


    elItem1.classList.remove("del", elHero.scrollY > 200)
    elItem2.classList.remove("del", elHero.scrollY > 200)
    elItem3.classList.remove("del", elHero.scrollY > 200)
    elItem4.classList.remove("del", elHero.scrollY > 200)
    elItem5.classList.remove("del", elHero.scrollY > 200)
    elItem6.classList.remove("del", elHero.scrollY > 200)

})


elImg1.addEventListener("click", function() {
    elBasicManu.classList.toggle("none")
    elPhone.classList.toggle("none")
    elImg1.classList.toggle("scale")
    elImg2.classList.toggle("del")
    elImg3.classList.toggle("del")
    elImg4.classList.toggle("del")
    elImg5.classList.toggle("del")
    elImg6.classList.toggle("del")
    elBasixName.classList.toggle("opasity")
    elItem1.classList.toggle("del-opasi")
    elItem2.classList.toggle("del")
    elItem3.classList.toggle("del")
    elItem4.classList.toggle("del-opasi")
    elItem5.classList.toggle("del")
    elItem6.classList.toggle("del")

})
elImg2.addEventListener("click", function() {
    elBasicManu.classList.toggle("none")
    elPhone.classList.toggle("none")
    elImg2.classList.toggle("scale")
    elImg1.classList.toggle("del")
    elImg3.classList.toggle("del")
    elImg4.classList.toggle("del")
    elImg5.classList.toggle("del")
    elImg6.classList.toggle("del")
    elBasixName.classList.toggle("opasity")
    elItem1.classList.toggle("del")
    elItem2.classList.toggle("del-opasi")
    elItem3.classList.toggle("del-opasi")
    elItem4.classList.toggle("del")
    elItem5.classList.toggle("del")
    elItem6.classList.toggle("del")
})
elImg3.addEventListener("click", function() {
    elBasicManu.classList.toggle("none")
    elPhone.classList.toggle("none")

    elImg3.classList.toggle("scales")
    elImg1.classList.toggle("del")
    elImg2.classList.toggle("del")
    elImg4.classList.toggle("del")
    elImg5.classList.toggle("del")
    elImg6.classList.toggle("del")
    elBasixName.classList.toggle("opasity")
    elItem1.classList.toggle("del-opasi")
    elItem2.classList.toggle("del")
    elItem3.classList.toggle("del-opasi")
    elItem4.classList.toggle("del")
    elItem5.classList.toggle("del")
    elItem6.classList.toggle("del")


})
elImg4.addEventListener("click", function() {
    elBasicManu.classList.toggle("none")
    elPhone.classList.toggle("none")

    elImg4.classList.toggle("scale")
    elImg3.classList.toggle("del")
    elImg1.classList.toggle("del")
    elImg2.classList.toggle("del")
    elImg5.classList.toggle("del")
    elImg6.classList.toggle("del")
    elBasixName.classList.toggle("opasity")
    elItem1.classList.toggle("del-opasi")
    elItem2.classList.toggle("del-opasi")
    elItem3.classList.toggle("del-opasi")
    elItem4.classList.toggle("del-opasi")
    elItem5.classList.toggle("del-opasi")
    elItem6.classList.toggle("del-opasi")


})
elImg5.addEventListener("click", function() {
    elBasicManu.classList.toggle("none")
    elPhone.classList.toggle("none")

    elImg5.classList.toggle("scale")
    elImg4.classList.toggle("del")
    elImg3.classList.toggle("del")
    elImg1.classList.toggle("del")
    elImg2.classList.toggle("del")
    elImg6.classList.toggle("del")
    elBasixName.classList.toggle("opasity")
    elItem1.classList.toggle("del-opasi")
    elItem2.classList.toggle("del-opasi")
    elItem3.classList.toggle("del-opasi")
    elItem4.classList.toggle("del-opasi")
    elItem5.classList.toggle("del-opasi")
    elItem6.classList.toggle("del-opasi")

})
elImg6.addEventListener("click", function() {
    elBasicManu.classList.toggle("none")
    elPhone.classList.toggle("none")

    elImg6.classList.toggle("scale")
    elImg5.classList.toggle("del")
    elImg4.classList.toggle("del")
    elImg3.classList.toggle("del")
    elImg1.classList.toggle("del")
    elImg2.classList.toggle("del")
    elBasixName.classList.toggle("opasity")
    elItem1.classList.toggle("del-opasi")
    elItem2.classList.toggle("del-opasi")
    elItem3.classList.toggle("del-opasi")
    elItem4.classList.toggle("del-opasi")
    elItem5.classList.toggle("del-opasi")
    elItem6.classList.toggle("del-opasi")

})
let elClients = document.querySelector(".clients-section")
let elSecImg1 = document.querySelector(".c-img1")
let elSecImg2 = document.querySelector(".c-img2")
let elSecImg3 = document.querySelector(".c-img3")
let elSecImg4 = document.querySelector(".c-img4")
let elSecImg5 = document.querySelector(".c-img5")
let elSecImg6 = document.querySelector(".c-img6")

let elSecItem1 = document.querySelector(".c-item1")
let elSecItem2 = document.querySelector(".c-item2")
let elSecItem3 = document.querySelector(".c-item3")
let elSecItem4 = document.querySelector(".c-item4")
let elSecItem5 = document.querySelector(".c-item5")
let elSecItem6 = document.querySelector(".c-item6")

window.addEventListener("scroll", function() {
    elPhone.classList.remove("none", elClients.scrollY > 10)
    elSecItem1.classList.remove("del-sec", elClients.scrollY > 10)
    elSecItem2.classList.remove("del-sec", elClients.scrollY > 10)
    elSecItem3.classList.remove("del-sec", elClients.scrollY > 10)
    elSecItem4.classList.remove("del-sec", elClients.scrollY > 10)
    elSecItem5.classList.remove("del-sec", elClients.scrollY > 10)
    elSecItem6.classList.remove("del-sec", elClients.scrollY > 10)

    elSecItem1.classList.remove("del-sec-opasity", elClients.scrollY > 500)
    elSecItem2.classList.remove("del-sec-opasity", elClients.scrollY > 500)
    elSecItem3.classList.remove("del-sec-opasity", elClients.scrollY > 500)
    elSecItem4.classList.remove("del-sec-opasity", elClients.scrollY > 500)
    elSecItem5.classList.remove("del-sec-opasity", elClients.scrollY > 500)
    elSecItem6.classList.remove("del-sec-opasity", elClients.scrollY > 00)


    elSecImg1.classList.remove("clients-scale", elClients.scrollY > 500)
    elSecImg2.classList.remove("clients-scale", elClients.scrollY > 500)
    elSecImg3.classList.remove("clients-scale", elClients.scrollY > 500)
    elSecImg4.classList.remove("clients-scale", elClients.scrollY > 500)
    elSecImg5.classList.remove("clients-scale", elClients.scrollY > 500)
    elSecImg6.classList.remove("clients-scale", elClients.scrollY > 500)

    elSecImg1.classList.remove("del", elClients.scrollY > 500)
    elSecImg2.classList.remove("del", elClients.scrollY > 500)
    elSecImg3.classList.remove("del", elClients.scrollY > 500)
    elSecImg4.classList.remove("del", elClients.scrollY > 500)
    elSecImg5.classList.remove("del", elClients.scrollY > 500)
    elSecImg6.classList.remove("del", elClients.scrollY > 500)
})

elSecImg1.addEventListener("click", function() {
    elBasicManu.classList.toggle("none")
    elPhone.classList.toggle("none")

    elBasixName.classList.toggle("opasity")
    elSecImg1.classList.toggle("clients-scale")
    elSecImg2.classList.toggle("del")
    elSecImg3.classList.toggle("del")
    elSecImg4.classList.toggle("del")
    elSecImg5.classList.toggle("del")
    elSecImg6.classList.toggle("del")

    elSecItem1.classList.toggle("del-sec")
    elSecItem2.classList.toggle("del-sec-opasity")
    elSecItem3.classList.toggle("del-sec-opasity")
    elSecItem4.classList.toggle("del-sec-opasity")
    elSecItem5.classList.toggle("del-sec-opasity")
    elSecItem6.classList.toggle("del-sec-opasity")

})
elSecImg2.addEventListener("click", function() {
    elBasicManu.classList.toggle("none")
    elPhone.classList.toggle("none")

    elBasixName.classList.toggle("opasity")
    elSecImg1.classList.toggle("del")
    elSecImg2.classList.toggle("clients-scale")
    elSecImg3.classList.toggle("del")
    elSecImg4.classList.toggle("del")
    elSecImg5.classList.toggle("del")
    elSecImg6.classList.toggle("del")

    elSecItem1.classList.toggle("del-sec-opasity")
    elSecItem2.classList.toggle("del-sec")
    elSecItem3.classList.toggle("del-sec-opasity")
    elSecItem4.classList.toggle("del-sec-opasity")
    elSecItem5.classList.toggle("del-sec-opasity")
    elSecItem6.classList.toggle("del-sec-opasity")

})
elSecImg3.addEventListener("click", function() {
    elBasicManu.classList.toggle("none")
    elPhone.classList.toggle("none")

    elBasixName.classList.toggle("opasity")
    elSecImg1.classList.toggle("del")
    elSecImg2.classList.toggle("del")
    elSecImg3.classList.toggle("clients-scale")
    elSecImg4.classList.toggle("del")
    elSecImg5.classList.toggle("del")
    elSecImg6.classList.toggle("del")

    elSecItem1.classList.toggle("del-sec-opasity")
    elSecItem2.classList.toggle("del-sec-opasity")
    elSecItem3.classList.toggle("del-sec")
    elSecItem4.classList.toggle("del-sec-opasity")
    elSecItem5.classList.toggle("del-sec-opasity")
    elSecItem6.classList.toggle("del-sec-opasity")

})
elSecImg4.addEventListener("click", function() {
    elBasicManu.classList.toggle("none")
    elPhone.classList.toggle("none")

    elBasixName.classList.toggle("opasity")
    elSecImg1.classList.toggle("del")
    elSecImg2.classList.toggle("del")
    elSecImg3.classList.toggle("del")
    elSecImg4.classList.toggle("clients-scale")
    elSecImg5.classList.toggle("del")
    elSecImg6.classList.toggle("del")

    elSecItem1.classList.toggle("del-sec-opasity")
    elSecItem2.classList.toggle("del-sec-opasity")
    elSecItem3.classList.toggle("del-sec-opasity")
    elSecItem4.classList.toggle("del-sec")
    elSecItem5.classList.toggle("del-sec-opasity")
    elSecItem6.classList.toggle("del-sec-opasity")

})
elSecImg5.addEventListener("click", function() {
    elBasicManu.classList.toggle("none")
    elPhone.classList.toggle("none")

    elBasixName.classList.toggle("opasity")
    elSecImg1.classList.toggle("del")
    elSecImg2.classList.toggle("del")
    elSecImg3.classList.toggle("del")
    elSecImg4.classList.toggle("del")
    elSecImg5.classList.toggle("clients-scale")
    elSecImg6.classList.toggle("del")

    elSecItem1.classList.toggle("del-sec-opasity")
    elSecItem2.classList.toggle("del-sec-opasity")
    elSecItem3.classList.toggle("del-sec-opasity")
    elSecItem4.classList.toggle("del-sec-opasity")
    elSecItem5.classList.toggle("del-sec")
    elSecItem6.classList.toggle("del-sec-opasity")

})
elSecImg6.addEventListener("click", function() {
    elBasicManu.classList.toggle("none")
    elPhone.classList.toggle("none")

    elBasixName.classList.toggle("opasity")
    elSecImg1.classList.toggle("del")
    elSecImg2.classList.toggle("del")
    elSecImg3.classList.toggle("del")
    elSecImg4.classList.toggle("del")
    elSecImg5.classList.toggle("del")
    elSecImg6.classList.toggle("clients-scale")

    elSecItem1.classList.toggle("del-sec-opasity")
    elSecItem2.classList.toggle("del-sec-opasity")
    elSecItem3.classList.toggle("del-sec-opasity")
    elSecItem4.classList.toggle("del-sec-opasity")
    elSecItem5.classList.toggle("del-sec-opasity")
    elSecItem6.classList.toggle("del-sec")

})

let elAboueItem1 = document.querySelectorAll(".about-item1")
let elAboueItem2 = document.querySelectorAll(".about-item2")
let elAboueItem3 = document.querySelectorAll(".about-item3")
let elAboueItem4 = document.querySelectorAll(".about-item4")
let elAboueItem5 = document.querySelectorAll(".about-item5")
let elAboueItem6 = document.querySelectorAll(".about-item6")

let elAboutImg1 = document.querySelector(".about-img1")
let elAboutImg2 = document.querySelector(".about-img2")
let elAboutImg3 = document.querySelector(".about-img3")
let elAboutImg4 = document.querySelector(".about-img4")
let elAboutImg5 = document.querySelector(".about-img5")
let elAboutImg6 = document.querySelector(".about-img6")


window.addEventListener("scroll", function(){
    elPhone.classList.remove("none",elAbout.scrollY > 100 )
    elAboutImg1.classList.remove("clients-scale", elAbout.scrollY > 100)
    elAboutImg2.classList.remove("clients-scale", elAbout.scrollY > 100)
    elAboutImg3.classList.remove("clients-scale", elAbout.scrollY > 100)
    elAboutImg4.classList.remove("clients-scale", elAbout.scrollY > 100)
    elAboutImg5.classList.remove("clients-scale", elAbout.scrollY > 100)
})

elAboutImg1.addEventListener("click", function() {
    elPhone.classList.toggle("none")
    elBasixName.classList.toggle("opasity")
    elAboutImg1.classList.toggle("clients-scale")
    elBasicManu.classList.toggle("none")

})

elAboutImg2.addEventListener("click", function() {
    elBasixName.classList.toggle("opasity")
    elAboutImg2.classList.toggle("clients-scale")
    elBasicManu.classList.toggle("none")
    elPhone.classList.toggle("none")

})

elAboutImg3.addEventListener("click", function() {
    elBasixName.classList.toggle("opasity")
    elAboutImg3.classList.toggle("clients-scale")
    elBasicManu.classList.toggle("none")
    elPhone.classList.toggle("none")

})

elAboutImg4.addEventListener("click", function() {
    elBasixName.classList.toggle("opasity")
    elAboutImg4.classList.toggle("clients-scale")
    elBasicManu.classList.toggle("none")
    elPhone.classList.toggle("none")

})

elAboutImg5.addEventListener("click", function() {
    elBasixName.classList.toggle("opasity")
    elAboutImg6.classList.toggle("clients-scale")
    elBasicManu.classList.toggle("none")
    elPhone.classList.toggle("none")

})

elAboutImg6.addEventListener("click", function() {
    elBasixName.classList.toggle("opasity")
    elAboutImg6.classList.toggle("clients-scale")
    elBasicManu.classList.toggle("none")
    elPhone.classList.toggle("none")

})
