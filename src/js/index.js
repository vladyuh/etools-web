import { each } from "jquery";
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

var location = window.location.href;
var anchor = location.split('#');

$('section.tabs .toggle[data-toggle="'+anchor[1]+'"]').addClass('is-active');
$('section.tabs .content[data-content="'+anchor[1]+'"]').addClass('is-active');

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
$('.test__start.btn').on('click', function () {
  $(this).addClass('disabled');  
  $('.test__formAnswers input').removeAttr('disabled');
  $('.test__formSubmit .btn').removeClass('hidden');

  var headerHeight = $('header').height() + 20;

  $('html,body').animate({
    scrollTop: $("#test__title").offset().top - headerHeight
  });

});

/* Submit test form */
$('.test__formSubmit .btn').on('click', function () {
  $(this).parents('.test__form').submit();
});

$('form.exercise__item .btn input[type="file"]').on('change', function(){
  var files = this.files;
  if(files.length != 0){
    var file = this.files[0].name;
    console.log(files);
    $(this).parents('.btn').find('span').text(file);
    $('.exercise__submit').addClass('is-active');
  }
  else{
    $(this).parents('.btn').find('span').text('Файл не выбран');
  }
})

$('.exercise__submitConfirm').on('click', function(){
  $('form.exercise__item').submit();
  $(this).parents('.exercise__submit').removeClass('is-active');
});

$('.exercise__submitClose').on('click', function(){
  $(this).parents('.exercise__submit').removeClass('is-active');
});