//toggle icon navbar 



//Scroll Sections

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav  a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100 ;
        let height = sec.offsetHeight ;
    }) 

    //Sticky Header
    let header = document.querySelector('header') ;

    header.classList.toggle('sticky' , window.scrollY > 100) ;
}