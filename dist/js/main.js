/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/components/mobileMenu/mobileMenu.js":
/*!********************************************************!*\
  !*** ./src/blocks/components/mobileMenu/mobileMenu.js ***!
  \********************************************************/
/*! exports provided: mobileInit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobileInit", function() { return mobileInit; });
function mobileInit() {
  var toggle = document.querySelector('.header-burger .burger');
  var close = document.querySelector('.mobileMenu-header__toggle .burger');
  var menu = document.querySelector('.mobileMenu');
  var body = document.querySelector('body');
  toggle.addEventListener('click', function (e) {
    e.preventDefault();
    this.classList.add('opened');
    menu.classList.add('opened');
    body.classList.add('mobile');
  });
  close.addEventListener('click', function (e) {
    e.preventDefault();
    toggle.classList.remove('opened');
    menu.classList.remove('opened');
    body.classList.remove('mobile');
  });
}

/***/ }),

/***/ "./src/blocks/components/tabs/tabs.js":
/*!********************************************!*\
  !*** ./src/blocks/components/tabs/tabs.js ***!
  \********************************************/
/*! exports provided: initTabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initTabs", function() { return initTabs; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

function initTabs(parent, elem, content) {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(elem).on("click", function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(elem).removeClass("is-active");
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass("is-active");
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(content).removeClass('is-active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(content).eq(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).index()).addClass('is-active');
  });
}

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _blocks_components_mobileMenu_mobileMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blocks/components/mobileMenu/mobileMenu */ "./src/blocks/components/mobileMenu/mobileMenu.js");
/* harmony import */ var _blocks_components_tabs_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blocks/components/tabs/tabs */ "./src/blocks/components/tabs/tabs.js");

 //Remove animations on load

window.onload = function () {
  document.querySelector('body').classList.remove('perf-no-animation');
}; //100vh hack


var vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", "".concat(vh, "px"));
window.addEventListener("resize", function () {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", "".concat(vh, "px"));
});
/* Mobile menu init */

Object(_blocks_components_mobileMenu_mobileMenu__WEBPACK_IMPORTED_MODULE_0__["mobileInit"])();
/* Init tabs */

Object(_blocks_components_tabs_tabs__WEBPACK_IMPORTED_MODULE_1__["initTabs"])('section.tabs', 'section.tabs .toggle', 'section.tabs .content');
var location = window.location.href;
var anchor = location.split('#');
$('section.tabs .toggle[data-toggle="' + anchor[1] + '"]').addClass('is-active');
$('section.tabs .content[data-content="' + anchor[1] + '"]').addClass('is-active'); //Browser-level image lazy-loading

if ('loading' in HTMLImageElement.prototype) {
  var images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(function (img) {
    img.src = img.dataset.src;
  });
} else {
  var script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.1/lazysizes.min.js';
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
  navigator.serviceWorker.register('./sw.js').then(function () {
    return navigator.serviceWorker.ready.then(function (worker) {
      worker.sync.register('syncdata');
    });
  }).catch(function (err) {
    return console.log(err);
  });
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
$('form.exercise__item .btn input[type="file"]').on('change', function () {
  var files = this.files;
  console.log(files);

  if (files.length != 0) {
    var file = this.files[0].name;
    $(this).parents('.btn').find('span').text(file);
    $(this).parents('form').submit();
  } else {
    $(this).parents('.btn').find('span').text('Файл не выбран');
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

/******/ });
//# sourceMappingURL=main.js.map