/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 88);
/******/ })
/************************************************************************/
/******/ ({

/***/ 88:
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: Error: Module did not self-register.\n    at Error (native)\n    at Object.Module._extensions..node (module.js:597:18)\n    at Module.load (module.js:487:32)\n    at tryModuleLoad (module.js:446:12)\n    at Function.Module._load (module.js:438:3)\n    at Module.require (module.js:497:17)\n    at require (internal/module.js:20:19)\n    at module.exports (/Users/vacokainia/Desktop/coding/design-system/node_modules/node-sass/lib/binding.js:19:10)\n    at Object.<anonymous> (/Users/vacokainia/Desktop/coding/design-system/node_modules/node-sass/lib/index.js:14:35)\n    at Module._compile (module.js:570:32)\n    at Module._extensions..js (module.js:579:10)\n    at Object.require.extensions.(anonymous function) [as .js] (/Users/vacokainia/Desktop/coding/design-system/node_modules/babel-register/lib/node.js:152:7)\n    at Module.load (module.js:487:32)\n    at tryModuleLoad (module.js:446:12)\n    at Function.Module._load (module.js:438:3)\n    at Module.require (module.js:497:17)\n    at runLoaders (/Users/vacokainia/Desktop/coding/design-system/node_modules/webpack/lib/NormalModule.js:192:19)\n    at /Users/vacokainia/Desktop/coding/design-system/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/vacokainia/Desktop/coding/design-system/node_modules/loader-runner/lib/LoaderRunner.js:170:18\n    at loadLoader (/Users/vacokainia/Desktop/coding/design-system/node_modules/loader-runner/lib/loadLoader.js:27:11)\n    at iteratePitchingLoaders (/Users/vacokainia/Desktop/coding/design-system/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/Users/vacokainia/Desktop/coding/design-system/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /Users/vacokainia/Desktop/coding/design-system/node_modules/loader-runner/lib/LoaderRunner.js:173:18\n    at loadLoader (/Users/vacokainia/Desktop/coding/design-system/node_modules/loader-runner/lib/loadLoader.js:36:3)\n    at iteratePitchingLoaders (/Users/vacokainia/Desktop/coding/design-system/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/Users/vacokainia/Desktop/coding/design-system/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /Users/vacokainia/Desktop/coding/design-system/node_modules/loader-runner/lib/LoaderRunner.js:173:18\n    at loadLoader (/Users/vacokainia/Desktop/coding/design-system/node_modules/loader-runner/lib/loadLoader.js:36:3)\n    at iteratePitchingLoaders (/Users/vacokainia/Desktop/coding/design-system/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at runLoaders (/Users/vacokainia/Desktop/coding/design-system/node_modules/loader-runner/lib/LoaderRunner.js:362:2)\n    at NormalModule.doBuild (/Users/vacokainia/Desktop/coding/design-system/node_modules/webpack/lib/NormalModule.js:179:3)\n    at NormalModule.build (/Users/vacokainia/Desktop/coding/design-system/node_modules/webpack/lib/NormalModule.js:268:15)");

/***/ })

/******/ });