let navLine = document.querySelector('.nav-line'),
    menuBurger = document.querySelector('.nav-menu-burger'),
    closeMenu = document.querySelector('.close-menu'),
    menuItem = document.querySelector('.menu-item'),
    sliders = document.querySelectorAll('.slider-item'),
    navbar = document.querySelector('.wrapper .nav')

let lastScrollTop = 0;


window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if(scrollTop > lastScrollTop) {
    navbar.style.top = '-150px'
  } else {
    navbar.style.top = '0'
  }
  lastScrollTop = scrollTop
})



menuBurger.addEventListener('click', () => {
    menuItem.classList.add('showMenu')
});

closeMenu.addEventListener('click', () => {
    menuItem.classList.remove('showMenu')
});

$('.slider-left').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false, 
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    // autoplay: true,
    // autoplaySpeed: 2000,
    asNavFor: '.slider-right'
})


$('.slider-right').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true, 
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    // autoplay: true,
    // autoplaySpeed: 2000,
    asNavFor: '.slider-left',
});



const reliability = document.querySelector('.reliability-right');
const stability = document.querySelector('.stability-left');
const stability2 = document.querySelector('.stability2-right');
const completedProjects = document.querySelector('.completed-projects-left');
const openAllLine = document.querySelector('.main-openAll-line');
const footerLine = document.querySelector('.footer-sub-line');
const arrow = document.querySelector('.completed-projects-left-arrow');
const completedItem = document.querySelector('.completed-projects-right-item');


if (window.matchMedia("(min-width: 992px)").matches) {
    setTimeout(() => {
        navLine.classList.add('showLine')
    }, 500);

    window.addEventListener('scroll', () => {
        const positionReliability = reliability.getBoundingClientRect().top;
        const positionStability = stability.getBoundingClientRect().top;
        const positionStability2 = stability2.getBoundingClientRect().top;
        const positionCompletedProjects = completedProjects.getBoundingClientRect().top;
        const positionOpenAllLine = openAllLine.getBoundingClientRect().top;
        const positionFooterLine = footerLine.getBoundingClientRect().top;
        const positionCompletedItem = completedItem.getBoundingClientRect().top;
    
        const screenPosition = window.innerHeight;
    
        if(screenPosition > positionReliability) {
            reliability.classList.add('showReliability')
          }
          if(screenPosition > positionStability) {
            stability.classList.add('showStability')
          }
          if(screenPosition > positionStability2) {
            stability2.classList.add('showStability2')
          }
          if(screenPosition > positionCompletedProjects) {
            completedProjects.classList.add('showCompletedProjects')
          }
          if(screenPosition > positionOpenAllLine) {
            openAllLine.classList.add('w-100')
          }
          if(screenPosition > positionFooterLine) {
            footerLine.classList.add('w-100')
          }
          if(screenPosition > positionCompletedItem) {
            arrow.classList.add('arrowScale')
          }
    });
}



const mainOpenAll = document.querySelector('.main-openAll');
const mainOpenAllBtn = document.querySelector('.main-openAll__btn');
const projectArchiveBtn = document.querySelector('.project-archive__btn');
const mainAll = document.querySelector('.main-all');


mainOpenAllBtn.addEventListener('click', () => {
    mainAll.classList.add('showMainAll');
    mainOpenAll.classList.add('d-none')
});
projectArchiveBtn.addEventListener('click', () => {
    mainAll.classList.add('showMainAll');
    mainOpenAll.classList.add('d-none')
});


let form = document.getElementById('form');
let userName = document.getElementById('userName');
let userEmail = document.getElementById('userEmail');
let message = document.getElementById('message');
let submitBtn = document.getElementById('submitForm')


submitBtn.addEventListener('click', () => {
  checkInputs()

  let successName = userName.parentElement.children[2].classList;
  let successEmail = userEmail.parentElement.children[2].classList;
  let successMessage = message.parentElement.children[2].classList;

  if(successName == 'success' && successEmail == 'success' && successMessage == 'success') {

    submitBtn.type = 'submit'
  }
});



function checkInputs() {
  const userNameValue = userName.value.trim();
  const userEmailValue = userEmail.value.trim();
  const messageValue = message.value.trim();


  if(userNameValue === '' || userNameValue.length <= 2) {
    setErrorFor(userName, "1px solid tomato", 'Введите ваше имя')
  } else {
    setSuccesFor(userName)
    userName.parentElement.children[2].classList.add('success')
  }

  if(userEmailValue === '') {
    setErrorFor(userEmail, "1px solid tomato", 'Введите ваше эл. почта')
  }
  else if(!isEmail(userEmailValue)) {
    setErrorFor(userEmail, "1px solid tomato", 'Некорректный эл. почта')
  }
  else {
    setSuccesFor(userEmail)
    userEmail.parentElement.children[2].classList.add('success')
  }
  
  if(messageValue === '') {
    setErrorFor(message, "1px solid tomato", 'Добавьте описание')
  }
  else {
    setSuccesFor(message)
    message.parentElement.children[2].classList.add('success')
  }
}

function setErrorFor(input, border, message) {
let small = input.parentElement.children[2]

    input.style.borderBottom = border
    small.innerText = message
}

function setSuccesFor(input) {
    let small = input.parentElement.children[2]

    input.style.borderBottom = '1px solid #11a192'
    input.classList.add('inputSucces');
    small.innerText = ''

} 

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}