import {
  mobileInit
} from "../blocks/components/mobileMenu/mobileMenu";
import {
  initTabs
} from "../blocks/components/tabs/tabs";
import Cookies from 'js-cookie';

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


var toggle = $('section.tabs .toggle[data-toggle="' + anchor[1] + '"]');
var content = $('section.tabs .content[data-content="' + anchor[1] + '"]');
toggle.addClass('is-active');
content.addClass('is-active');

var detailToggle = $('section.detail .toggle').eq(0);
var detailContent = $('section.detail .content').eq(0);

detailToggle.addClass('is-active');
detailContent.addClass('is-active');


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
  navigator.serviceWorker.register('/static/js/sw.js')
    .then(() => navigator.serviceWorker.ready.then((worker) => {
      worker.sync.register('syncdata');
    }))
    .catch((err) => console.log(err));
}

/* Timer for tests */
$('.test__start.btn').on('click', function () {
  $(this).css('opacity', "0");
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

$('form.exercise__item .btn input[type="file"]').on('change', function () {
  var files = this.files;
  if (files.length != 0) {
    var file = this.files[0].name;
    console.log(files);
    $(this).parents('.btn').find('span').text(file);
    $(this).parents('form.exercise__item .btns').find('.btn-submit').css("display", "flex");
  } else {
    $(this).parents('.btn').find('span').text('???????? ???? ????????????');
    $(this).parents('form.exercise__item .btns').find('.btn-submit').hide();
  }
})


$('.mobileMenu-nav__ul > li > .dropdown').on('click', function () {
  $(this).parents('.mobileMenu-nav__ul > li').toggleClass('is-active');
  $(this).toggleClass('is-active');
})

//dark mode check and set

$(".header-darkMode").click(function () {
  if ($(this).hasClass("enabled")) {
    Cookies.remove('darkmode');
    $(this).removeClass("enabled");
    Cookies.set("darkmode","disabled", { expires: 365 });
    $("html").removeClass("dark");
  } else {
    $(this).addClass("enabled");
    $("html").addClass("dark");
    Cookies.set("darkmode","enabled", { expires: 365 });
  }
});

$('.status__popupClose, .status__popupConfirm').on('click', function(){
  $(this).parents('.status__popup').removeClass('is-active');
});

$(".results__search input").on("input focus", function () {
  if ($(this).val() == "") {
    $(".results__table tbody tr").show();
  } else {
    if ($(".results__table tbody tr td:contains(" + $(this).val() + ")")) {
      $(".results__table tbody tr").hide();
      $(".results__table tbody tr td:contains(" + $(this).val() + ")")
        .parents(".results__table tbody tr")
        .show();
    }
  }
});