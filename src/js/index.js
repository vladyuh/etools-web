import {
  mobileInit
} from "../blocks/components/mobileMenu/mobileMenu";
import {
  initTabs
} from "../blocks/components/tabs/tabs";

//Remove animations on load
window.onload = function () {
  document.querySelector('body').classList.remove('perf-no-animation');
}

//100vh hack
var vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", "".concat(vh, "px"));
window.addEventListener("resize", function () {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", "".concat(vh, "px"));
});


/* Mobile menu init */
mobileInit();

/* Init tabs */
initTabs('section.tabs', 'section.tabs .toggle', 'section.tabs .content');

//Browser-level image lazy-loading
if ('loading' in HTMLImageElement.prototype) 
{
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(img => {
    img.src = img.dataset.src;
  });
} 
else
{
  const script = document.createElement('script');
  script.src =
    'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.1/lazysizes.min.js';
  document.body.appendChild(script);
  console.log('lazysizes load');
}

/* Sticky header */
window.addEventListener('scroll', function () {
  var header = document.querySelectorAll("header")[0];
  if (window.pageYOffset > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

/* Register service worker */
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then(() => navigator.serviceWorker.ready.then((worker) => {
      worker.sync.register('syncdata');
    }))
    .catch((err) => console.log(err));
}

/* Timer for tests */
var interval;
var timer2 = "30:00";
$('.test__start.btn').on('click', function () {
  $(this).addClass('disabled');  
  $('.test__formAnswers input').removeAttr('disabled');
  $('.test__formSubmit .btn').removeClass('hidden');

  /* interval = setInterval(function () {
    var timer = timer2.split(':');
    var minutes = parseInt(timer[0], 10);
    var seconds = parseInt(timer[1], 10);
    --seconds;
    minutes = (seconds < 0) ? --minutes : minutes;
    if (minutes < 0){
      minutes = 0;
      seconds = 0;
      clearInterval(interval);
      if(confirm("Время ответа вышло")){
        $('.test__form').submit();
      }
    } 
    seconds = (seconds < 0) ? 59 : seconds;
    seconds = (seconds < 10) ? '0' + seconds : seconds;
    $('.test__start.btn span').text(minutes + ':' + seconds);
    timer2 = minutes + ':' + seconds;
  }, 1000); */

  $('html,body').animate({
    scrollTop: $("#test__title").offset().top - ($('header').height() + 20)
  });

});

/* Submit test form */
$('.test__formSubmit .btn').on('click', function () {
  /* clearInterval(interval);
  var time = $('.test__start.btn span').text();
  var times = time.split(':');
  var timee = ((30 - times[0])+":"+(60 - times[1]));
  $('input#time').val(timee); */
  $(this).parents('.test__form').submit();
});