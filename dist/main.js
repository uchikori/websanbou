/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack/./src/scss/style.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n\nconst onScrollHeadFollow = ( () => {\n    let header = document.querySelector(\".header\");\n    let outerHeight = header.offsetHeight;\n    let overPlus = window.outerWidth * 0.1;\n\n    window.addEventListener('scroll', () => {\n        let scrollNum = window.pageYOffset;\n        if(scrollNum > outerHeight + overPlus){\n            header.style.transition = \"transform 0.5s ease-out\";\n            header.classList.add('standby', 'fixed');\n        } else if (scrollNum > outerHeight) {\n            if(header.classList.contains('standby')){\n                header.style.transition = \"transform 0.5s ease-out\";\n            } else {\n                header.style.transition = \"\";\n            }\n            header.classList.add('standby');\n            header.classList.remove('fixed');\n        } else {\n            header.style.transition = \"\";\n            header.classList.remove('standby', 'fixed');\n        }\n    })\n})();\n\nconst smoothScroll = ( ()=> {\n    const anchors = document.querySelectorAll('a[href^=\"#\"]');\n    console.log(anchors);\n    const header = document.querySelector('header').offsetHeight;\n\n    for(let i = 0; i < anchors.length; i++){\n        anchors[i].addEventListener('click', (event) => {\n            \n            event.preventDefault();\n\n            const href = anchors[i].getAttribute(\"href\");\n            console.log(href);\n\n            const target = document.getElementById(href.replace('#', ''));\n            console.log(target)\n\n            const position = window.pageYOffset + target.getBoundingClientRect().top - header;\n            console.log(position);\n\n            window.scroll({\n                top: position,\n                behavior: 'smooth'\n            });\n\n        })\n    } \n\n})();\n\n//# sourceURL=webpack://webpack/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;