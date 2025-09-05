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

// video

  const video1 = document.getElementById('myVideo1');
  const video2 = document.getElementById('myVideo2');
  const video3 = document.getElementById('myVideo3');
  const video4 = document.getElementById('myVideo4');
        
        function playVideo() {
            video1.play();
            video2.play();
            video3.play();
            video4.play();
        }
        
        function restartVideo() {
            video1.currentTime = 0;
            video1.play();
            video2.currentTime = 0;
            video2.play();
            video3.currentTime = 0;
            video3.play();
            video4.currentTime = 0;
            video4.play();
        }
        
        // تلاش برای پخش خودکار ویدیو پس از بارگیری صفحه
        document.addEventListener('DOMContentLoaded', function() {
            const playPromise1 = video1.play();
            const playPromise2 = video2.play();
            const playPromise3 = video3.play();
            const playPromise4 = video4.play();
            
            if (playPromise1 !== undefined) {
                playPromise1.catch(error => {
                    console.log("پخش خودکار متوقف شد: ", error);
                });
            };
                 if (playPromise2 !== undefined) {
                playPromise2.catch(error => {
                    console.log("پخش خودکار متوقف شد: ", error);
                });
            };
                 if (playPromise3 !== undefined) {
                playPromise3.catch(error => {
                    console.log("پخش خودکار متوقف شد: ", error);
                });
            };
                 if (playPromise4 !== undefined) {
                playPromise4.catch(error => {
                    console.log("پخش خودکار متوقف شد: ", error);
                });
            };
        });