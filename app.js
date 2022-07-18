const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobileMenu= document.querySelector('.header .nav-bar .nav-list ul');
const menuItem= document.querySelectorAll('.header .nav-bar .nav-list ul li a');

const header = document.querySelector('.header .container');

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
})



menuItem.forEach(item=>{
    item.addEventListener('click', ()=>{
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');  
    })
})



AOS.init({
    duration: 2100,
  })
  

  
const fadeOut = ()=>{
    const loaderWrapper = document.querySelector('.wrapper');
    loaderWrapper.classList.add('fade');
    }
    window.addEventListener('load',fadeOut)