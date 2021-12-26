let links = document.querySelectorAll('.navlist a');
// console.log(links);

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('mouseover',()=>{
        links[i].classList.add('active')
    })
    
}


let navlist = document.querySelector('.navlist');
let hamburgerButton = document.querySelector('#hamburger');

hamburger.addEventListener('click',()=>{
    navlist.classList.toggle('active');
    hamburger.classList.toggle('fa-times');
})

let navbar = document.querySelector('.navbar');
window.addEventListener('scroll',()=>{
    if(window.scrollY>10 && window.scrollY<740){
        navbar.classList.add('white');
    }
    else{
        navbar.classList.remove('white');
    }
    if(window.scrollY>740){
        navbar.classList.add('normal');    
    }
    else{
        navbar.classList.remove('normal');
    }
    
})

// ----- skills --------------------------------

let skillContent = document.querySelectorAll('.skill_content');
let skillHeader = document.querySelectorAll('.skill_header');
console.log(skillContent);
function toggleSkills () {
    let itemClass = this.parentNode.className
    for (let i = 0; i < skillContent.length; i++) {
        skillContent[i].className = 'skill_content skill_close'
    }
    if(itemClass === 'skill_content skill_close'){
        this.parentNode.className = 'skill_content skill_open'
    }
}
skillHeader.forEach((element)=>{
element.addEventListener('click', toggleSkills)
})

var swiper = new Swiper(".projects-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    grabCusror: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});


