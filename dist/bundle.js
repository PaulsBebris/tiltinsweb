/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("lvSelect = document.getElementById(\"lv-select\");\nruSelect = document.getElementById(\"ru-select\");\nlvWrapper = document.getElementById(\"lv-wrapper\");\nruWrapper = document.getElementById(\"ru-wrapper\");\nruWrapper.hidden = true;\n\n// language selsect functionality\nfunction selectlanguage(el) {\n  if (this.dataset.lang == \"lv\") {\n    lvWrapper.hidden = false;\n    ruWrapper.hidden = true;\n  } else if (this.dataset.lang == \"ru\") {\n    ruWrapper.hidden = false;\n    lvWrapper.hidden = true;\n  }\n}\n\nlvSelect.addEventListener(\"click\", selectlanguage);\nruSelect.addEventListener(\"click\", selectlanguage);\n\n// // animations\n// // footballer animation\nfunction mooveFootballers(el,i) {\n  let posX = 0;\n  let posY = 0;\n  let bounce = false;\n  let opacity = 0;\n  // let id = null;\n  // debugger;\n  \n    // clearInterval(id);\n  let id = setInterval(frame, 20*(i+1));\n  function frame() {\n    if (posX <= 150 && bounce) {\n      // debugger;\n      if (posY > 500) posY = 0;\n      //   clearInterval(id);\n      if(bounce == true && posX == 0) {\n        bounce = false;\n      }\n      posX--;\n      posY += Math.floor(Math.random()*5);\n      el.style.top = posY + \"px\";\n      el.style.left = posX + \"px\";\n    } else {\n\n      posX == 149 ? bounce = true : bounce = false;\n      posX++;\n      posY += Math.floor(Math.random()*5);\n      opacity = opacity+0.005;\n      if(opacity > 1) {opacity = opacity-0.05};\n      el.style.opacity = opacity;\n      el.style.top = posY + \"p  x\";\n      el.style.left = posX + \"px\";\n    }\n  }\n}\n\n// elements = document.getElementsByClassName('left-animate-obj');\n// for(let i = 0; i < elements.length; i++) {\n//   mooveFootballers(elements.item(i),i);\n// }\n\n\n//# sourceURL=webpack://tiltins.eu/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;