let otherLinks = document.querySelector(".other-links")
let mainHeader = document.querySelector(".main-header")
let closee = document.querySelector(".close")
otherLinks.addEventListener("click" , function (){
    mainHeader.classList.add("open")
    closee.addEventListener("click" ,function () {
        mainHeader.classList.remove("open")
    })
})