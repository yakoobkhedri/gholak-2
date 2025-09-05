// menu

let openMenu = document.getElementById('openMenu');
let mobileMenu = document.getElementById('mobileMenu');
let overlay = document.getElementById('overlay');

openMenu.addEventListener('click' , function () {
  mobileMenu.classList.add('active');
  overlay.classList.add('active');
});

overlay.addEventListener('click' , function () {
  mobileMenu.classList.remove('active');
  overlay.classList.remove('active');
});


// swiper

var banner = new Swiper(".banner", {
  direction: "vertical",
  spaceBetween: 90,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var activeDesigns = new Swiper(".activeDesigns", {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: true,
  breakpoints:{
    1200:{
      slidesPerView: 3,
        spaceBetween: 20,
    },
      992:{
      slidesPerView: 2,
    },
  }
});

