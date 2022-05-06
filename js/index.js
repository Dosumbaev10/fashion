const burger = document.querySelector(".burger");
const burger__menu = document.querySelector(".burger__menu");

burger.addEventListener("click",() =>{
    burger__menu.classList.toggle("active")
})

const burger1 = document.querySelector(".burger1");
const burger1__menu = document.querySelector(".burger1__menu");

burger1.addEventListener("click",() =>{
    burger1__menu.classList.toggle("active")
})