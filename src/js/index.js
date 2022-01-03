import { mobileInit } from "../blocks/components/mobileMenu/mobileMenu";

 // import Swiper bundle with all modules installed
 import Swiper from "swiper/swiper-bundle";

 const swiper = new Swiper('.swiper', {
    lazy: true,
    slidesPerView: 1,
    spaceBetween: 50,
    breakpoints: {
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        1152: {
          slidesPerView: 3,
        },
      },
  });

//Remove animations on load
window.onload = function() {
    document.querySelector('body').classList.remove('perf-no-animation');
}

//100vh hack
var vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", "".concat(vh, "px"));
window.addEventListener("resize", function() {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", "".concat(vh, "px"));
});


//Mobile menu init
mobileInit();

//Browser-level image lazy-loading
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    const script = document.createElement('script');
    script.src =
        'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.1/lazysizes.min.js';
    document.body.appendChild(script);
    console.log('lazysizes load');
}