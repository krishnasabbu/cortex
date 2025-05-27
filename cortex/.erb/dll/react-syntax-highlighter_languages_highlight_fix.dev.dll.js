/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_fix"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/fix.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/fix.js ***!
  \**********************************************************************************************/
/***/ ((module) => {

eval("/*\nLanguage: FIX\nAuthor: Brent Bradbury <brent@brentium.com>\n*/\n\n/** @type LanguageFn */\nfunction fix(hljs) {\n  return {\n    name: 'FIX',\n    contains: [{\n      begin: /[^\\u2401\\u0001]+/,\n      end: /[\\u2401\\u0001]/,\n      excludeEnd: true,\n      returnBegin: true,\n      returnEnd: false,\n      contains: [\n        {\n          begin: /([^\\u2401\\u0001=]+)/,\n          end: /=([^\\u2401\\u0001=]+)/,\n          returnEnd: true,\n          returnBegin: false,\n          className: 'attr'\n        },\n        {\n          begin: /=/,\n          end: /([\\u2401\\u0001])/,\n          excludeEnd: true,\n          excludeBegin: true,\n          className: 'string'\n        }\n      ]\n    }],\n    case_insensitive: true\n  };\n}\n\nmodule.exports = fix;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/fix.js?");

/***/ })

}]);