const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

    /*========= Menu Show =========*/
    if(navToggle){
        navToggle.addEventListener('click', function() {
            navMenu.classList.add('show-menu')
        })
    }

    /*========= Menu Hide =========*/
    if(navClose){
        navClose.addEventListener('click', function() {
            navMenu.classList.remove('show-menu')
        })
    }

    /*========= Remove Menu Mobile =========*/
    const navLinks = document.querySelectorAll('.nav__link')
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('show-menu')
        })
    })

    /*========= Smooth Scroll =========*/
    const scrollLinks = document.querySelectorAll('.scroll-link')
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault()
            const target = document.querySelector(link.getAttribute('href'))
            const scrollTop = target.offsetTop - 60
            window.scrollTo({
                top: scrollTop,
                behavior: 'smooth'
            })
        })
    })

    /*========= Accordian Skills =========*/
const skillsContent = document.getElementsByClassName('skills__content')
const skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})



