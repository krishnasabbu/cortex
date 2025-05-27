(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("electron");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./src/main/preload.ts ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);
// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */

// export type Channels = 'ipc-example';
const electronHandler = {
    // ipcRenderer: {
    //     sendMessage(channel: Channels, ...args: unknown[]) {
    //         ipcRenderer.send(channel, ...args);
    //     },
    //     on(channel: Channels, func: (...args: unknown[]) => void) {
    //         const subscription = (
    //             _event: IpcRendererEvent,
    //             ...args: unknown[]
    //         ) => func(...args);
    //         ipcRenderer.on(channel, subscription);
    //         return () => {
    //             ipcRenderer.removeListener(channel, subscription);
    //         };
    //     },
    //     once(channel: Channels, func: (...args: unknown[]) => void) {
    //         ipcRenderer.once(channel, (_event, ...args) => func(...args));
    //     },
    // },
    invoke: electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.invoke,
    onSystemThemeChange: (callback) => {
        electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.on('system-theme-updated', callback);
        return () => electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.off('system-theme-updated', callback);
    },
    onWindowShow: (callback) => {
        electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.on('window-show', callback);
        return () => electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.off('window-show', callback);
    },
    onUpdateDownloaded: (callback) => {
        electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.on('update-downloaded', callback);
        return () => electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.off('update-downloaded', callback);
    },
};
electron__WEBPACK_IMPORTED_MODULE_0__.contextBridge.exposeInMainWorld('electronAPI', electronHandler);

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlbG9hZC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7OztBQ1ZBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BLGlEQUFpRDtBQUNqRCxnQ0FBZ0M7QUFDdUM7QUFHdkUsd0NBQXdDO0FBRXhDLE1BQU0sZUFBZSxHQUFnQjtJQUNuQyxpQkFBaUI7SUFDakIsMkRBQTJEO0lBQzNELDhDQUE4QztJQUM5QyxTQUFTO0lBQ1Qsa0VBQWtFO0lBQ2xFLGlDQUFpQztJQUNqQyx3Q0FBd0M7SUFDeEMsaUNBQWlDO0lBQ2pDLDhCQUE4QjtJQUM5QixpREFBaUQ7SUFFakQseUJBQXlCO0lBQ3pCLGlFQUFpRTtJQUNqRSxhQUFhO0lBQ2IsU0FBUztJQUNULG9FQUFvRTtJQUNwRSx5RUFBeUU7SUFDekUsU0FBUztJQUNULEtBQUs7SUFDTCxNQUFNLEVBQUUsaURBQVcsQ0FBQyxNQUFNO0lBQzFCLG1CQUFtQixFQUFFLENBQUMsUUFBb0IsRUFBRSxFQUFFO1FBQzVDLGlEQUFXLENBQUMsRUFBRSxDQUFDLHNCQUFzQixFQUFFLFFBQVEsQ0FBQztRQUNoRCxPQUFPLEdBQUcsRUFBRSxDQUFDLGlEQUFXLENBQUMsR0FBRyxDQUFDLHNCQUFzQixFQUFFLFFBQVEsQ0FBQztJQUNoRSxDQUFDO0lBQ0QsWUFBWSxFQUFFLENBQUMsUUFBb0IsRUFBRSxFQUFFO1FBQ3JDLGlEQUFXLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUM7UUFDdkMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxpREFBVyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDO0lBQ3ZELENBQUM7SUFDRCxrQkFBa0IsRUFBRSxDQUFDLFFBQW9CLEVBQUUsRUFBRTtRQUMzQyxpREFBVyxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxRQUFRLENBQUM7UUFDN0MsT0FBTyxHQUFHLEVBQUUsQ0FBQyxpREFBVyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxRQUFRLENBQUM7SUFDN0QsQ0FBQztDQUNGO0FBRUQsbURBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsZUFBZSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29ydGV4LnBsYXRmb3JtL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9jb3J0ZXgucGxhdGZvcm0vZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcImVsZWN0cm9uXCIiLCJ3ZWJwYWNrOi8vY29ydGV4LnBsYXRmb3JtL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NvcnRleC5wbGF0Zm9ybS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jb3J0ZXgucGxhdGZvcm0vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NvcnRleC5wbGF0Zm9ybS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NvcnRleC5wbGF0Zm9ybS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NvcnRleC5wbGF0Zm9ybS8uL3NyYy9tYWluL3ByZWxvYWQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKGdsb2JhbCwgKCkgPT4ge1xucmV0dXJuICIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVsZWN0cm9uXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBEaXNhYmxlIG5vLXVudXNlZC12YXJzLCBicm9rZW4gZm9yIHNwcmVhZCBhcmdzXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IG9mZiAqL1xuaW1wb3J0IHsgY29udGV4dEJyaWRnZSwgaXBjUmVuZGVyZXIsIElwY1JlbmRlcmVyRXZlbnQgfSBmcm9tICdlbGVjdHJvbidcbmltcG9ydCB7IEVsZWN0cm9uSVBDIH0gZnJvbSAnc3JjL3NoYXJlZC9lbGVjdHJvbi10eXBlcydcblxuLy8gZXhwb3J0IHR5cGUgQ2hhbm5lbHMgPSAnaXBjLWV4YW1wbGUnO1xuXG5jb25zdCBlbGVjdHJvbkhhbmRsZXI6IEVsZWN0cm9uSVBDID0ge1xuICAvLyBpcGNSZW5kZXJlcjoge1xuICAvLyAgICAgc2VuZE1lc3NhZ2UoY2hhbm5lbDogQ2hhbm5lbHMsIC4uLmFyZ3M6IHVua25vd25bXSkge1xuICAvLyAgICAgICAgIGlwY1JlbmRlcmVyLnNlbmQoY2hhbm5lbCwgLi4uYXJncyk7XG4gIC8vICAgICB9LFxuICAvLyAgICAgb24oY2hhbm5lbDogQ2hhbm5lbHMsIGZ1bmM6ICguLi5hcmdzOiB1bmtub3duW10pID0+IHZvaWQpIHtcbiAgLy8gICAgICAgICBjb25zdCBzdWJzY3JpcHRpb24gPSAoXG4gIC8vICAgICAgICAgICAgIF9ldmVudDogSXBjUmVuZGVyZXJFdmVudCxcbiAgLy8gICAgICAgICAgICAgLi4uYXJnczogdW5rbm93bltdXG4gIC8vICAgICAgICAgKSA9PiBmdW5jKC4uLmFyZ3MpO1xuICAvLyAgICAgICAgIGlwY1JlbmRlcmVyLm9uKGNoYW5uZWwsIHN1YnNjcmlwdGlvbik7XG5cbiAgLy8gICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAvLyAgICAgICAgICAgICBpcGNSZW5kZXJlci5yZW1vdmVMaXN0ZW5lcihjaGFubmVsLCBzdWJzY3JpcHRpb24pO1xuICAvLyAgICAgICAgIH07XG4gIC8vICAgICB9LFxuICAvLyAgICAgb25jZShjaGFubmVsOiBDaGFubmVscywgZnVuYzogKC4uLmFyZ3M6IHVua25vd25bXSkgPT4gdm9pZCkge1xuICAvLyAgICAgICAgIGlwY1JlbmRlcmVyLm9uY2UoY2hhbm5lbCwgKF9ldmVudCwgLi4uYXJncykgPT4gZnVuYyguLi5hcmdzKSk7XG4gIC8vICAgICB9LFxuICAvLyB9LFxuICBpbnZva2U6IGlwY1JlbmRlcmVyLmludm9rZSxcbiAgb25TeXN0ZW1UaGVtZUNoYW5nZTogKGNhbGxiYWNrOiAoKSA9PiB2b2lkKSA9PiB7XG4gICAgaXBjUmVuZGVyZXIub24oJ3N5c3RlbS10aGVtZS11cGRhdGVkJywgY2FsbGJhY2spXG4gICAgcmV0dXJuICgpID0+IGlwY1JlbmRlcmVyLm9mZignc3lzdGVtLXRoZW1lLXVwZGF0ZWQnLCBjYWxsYmFjaylcbiAgfSxcbiAgb25XaW5kb3dTaG93OiAoY2FsbGJhY2s6ICgpID0+IHZvaWQpID0+IHtcbiAgICBpcGNSZW5kZXJlci5vbignd2luZG93LXNob3cnLCBjYWxsYmFjaylcbiAgICByZXR1cm4gKCkgPT4gaXBjUmVuZGVyZXIub2ZmKCd3aW5kb3ctc2hvdycsIGNhbGxiYWNrKVxuICB9LFxuICBvblVwZGF0ZURvd25sb2FkZWQ6IChjYWxsYmFjazogKCkgPT4gdm9pZCkgPT4ge1xuICAgIGlwY1JlbmRlcmVyLm9uKCd1cGRhdGUtZG93bmxvYWRlZCcsIGNhbGxiYWNrKVxuICAgIHJldHVybiAoKSA9PiBpcGNSZW5kZXJlci5vZmYoJ3VwZGF0ZS1kb3dubG9hZGVkJywgY2FsbGJhY2spXG4gIH0sXG59XG5cbmNvbnRleHRCcmlkZ2UuZXhwb3NlSW5NYWluV29ybGQoJ2VsZWN0cm9uQVBJJywgZWxlY3Ryb25IYW5kbGVyKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9