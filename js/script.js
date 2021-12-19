let links = document.querySelectorAll('.navlist a');
console.log(links);

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('mouseover',()=>{
        links[i].classList.add('active')
    })
    
}

let searchbtn = document.querySelector('#searchbtn');
let search = document.querySelector('#search');
searchbtn.addEventListener('click',()=>{
search.classList.toggle('active')
search.setAttribute('placeholder', 'Search...')
})

let navlist = document.querySelector('.navlist');
let hamburgerButton = document.querySelector('#hamburger');

hamburger.addEventListener('click',()=>{
    navlist.classList.toggle('active');
    hamburger.classList.toggle('fa-times');
})




