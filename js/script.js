let links = document.querySelectorAll('.navlist a');
// console.log(links);

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('mouseover',()=>{
        links[i].classList.add('active')
    })
    
}
//Force page scroll position to top at page refresh in HTML
window.onload = function()  {
    window.scrollTo(0,0)
  }

let navlist = document.querySelector('.navlist');
let hamburgerButton = document.querySelector('#hamburger');
let closeBtn = document.querySelector('#close')
hamburgerButton.addEventListener('click',()=>{
    navlist.classList.add('active');
    
})
closeBtn.addEventListener('click',()=>{
    navlist.classList.remove('active')
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
    if(window.scrollY>10){
    navlist.classList.remove('active');}
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
    // autoplay: {
    //     delay: 9500,
    //     disableOnInteraction: false,
    // },
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


// copy to clipboard
// function myFunction() {
//     /* Get the text field */
//     var copyText1 = document.querySelector('t1')
//     var copyText2 = document.querySelector('t2')
//     var copyText3 = document.querySelector('t3')
//     var copyText4= document.querySelector('t4')
//     var copyText5= document.querySelector('t5')
//     var copyText5= document.querySelector('t6')
    
//      /* Copy the text inside the text field */
//     navigator.clipboard.writeText(copyText1.href);
  

//   }
// function myFunction() {
//     /* Get the text field */
//     let copyText = document.querySelectorAll('fa-share')
//     for (let index = 0; index < copyText.length; index++) {
//         let element = copyText[index];
//         let txt = element.name
//     navigator.clipboard.writeText(txt);
//     }
  
//     /* Alert the copied text */
//     alert("Copied the text: " + copyText.value);
//   }
// AOS.init();