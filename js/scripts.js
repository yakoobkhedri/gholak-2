// menu

let openMenu = document.getElementById('openMenu');
let mobileMenu = document.getElementById('mobileMenu');
let overlay = document.getElementById('overlay');

openMenu.addEventListener('click', function () {
  mobileMenu.classList.add('active');
  overlay.classList.add('active');
});

overlay.addEventListener('click', function () {
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
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 2,
    },
  }
});

var whyUs = new Swiper(".whyUs", {
  slidesPerView: 1,
  spaceBetween: 16,
  autoplay: true,
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
    1300: {
      slidesPerView: 6,
      spaceBetween: 24,
    },
  },
   navigation: {
    nextEl: ".swiper-button-next",
  },
});

var team = new Swiper(".team", {
  slidesPerView: 2,
  spaceBetween: 8,
  centeredSlides: false,
  autoplay: true,
  loop: true,
  breakpoints: {
    576: {
      centeredSlides: true,
      slidesPerView: 2.8,
       spaceBetween: 16,
    },
    768: {
      centeredSlides: true,
      slidesPerView: 3.5,
    },
    992: {
      centeredSlides: true,
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1200: {
      centeredSlides: true,
      slidesPerView: 5,
      spaceBetween: 24,
    },
    1300: {
      centeredSlides: true,
      slidesPerView: 5.8,
      spaceBetween: 24,
    },
  },
    navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
});

var companies = new Swiper(".companies", {
  slidesPerView: 2,
  spaceBetween: 16,
  centeredSlides: false,
  autoplay: true,
  loop: true,
  breakpoints: {
    576: {
      loop: true,
      slidesPerView: 3,
    },
    768: {
      loop: true,
      slidesPerView: 4,
    },
    992: {
      loop: true,
      slidesPerView: 5,
    },
    1200: {
      loop: true,
      slidesPerView: 6,
    },
    1300: {
      loop: true,
      slidesPerView: 7.5,
    },
  }
});

// accordion

let accordionBtn = Array.from(document.getElementsByClassName('accordionBtn'));
let accordionBtn2 = Array.from(document.getElementsByClassName('accordionBtn2'));

accordionBtn.forEach((item) => {
  item.addEventListener('click', function () {
    item.classList.toggle('active');
    item.nextElementSibling.classList.toggle('active');
  })
});

accordionBtn2.forEach((item) => {
  item.addEventListener('click', function () {
    item.classList.toggle('active');
    item.nextElementSibling.classList.toggle('active');
  })
});

// tab

document.addEventListener('DOMContentLoaded', function () {
  let tabs = Array.from(document.getElementsByClassName('tab'));
  let tabContent = Array.from(document.getElementsByClassName('tabContent'));

  tabs.forEach((tab) => {
    tab.addEventListener('click', function () {
      let tabId = tab.dataset.id;

      // غیرفعال کردن همه تب‌ها
      tabs.forEach((t) => {
        t.classList.remove('active');
      });

      // غیرفعال کردن همه محتواها
      tabContent.forEach((content) => {
        content.classList.remove('active');
      });

      // فعال کردن تب و محتوای مربوطه
      tab.classList.add('active');
      let correspondingContent = tabContent.find(content => content.dataset.id === tabId);
      if (correspondingContent) {
        correspondingContent.classList.add('active');
      }
    });
  });
});