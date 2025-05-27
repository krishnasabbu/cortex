/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_csp"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/csp.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/csp.js ***!
  \**********************************************************************************************/
/***/ ((module) => {

eval("/*\nLanguage: CSP\nDescription: Content Security Policy definition highlighting\nAuthor: Taras <oxdef@oxdef.info>\nWebsite: https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP\n\nvim: ts=2 sw=2 st=2\n*/\n\n/** @type LanguageFn */\nfunction csp(hljs) {\n  return {\n    name: 'CSP',\n    case_insensitive: false,\n    keywords: {\n      $pattern: '[a-zA-Z][a-zA-Z0-9_-]*',\n      keyword: 'base-uri child-src connect-src default-src font-src form-action ' +\n        'frame-ancestors frame-src img-src media-src object-src plugin-types ' +\n        'report-uri sandbox script-src style-src'\n    },\n    contains: [\n      {\n        className: 'string',\n        begin: \"'\",\n        end: \"'\"\n      },\n      {\n        className: 'attribute',\n        begin: '^Content',\n        end: ':',\n        excludeEnd: true\n      }\n    ]\n  };\n}\n\nmodule.exports = csp;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/csp.js?");

/***/ })

}]);