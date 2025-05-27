/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_profile"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/profile.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/profile.js ***!
  \**************************************************************************************************/
/***/ ((module) => {

eval("/*\nLanguage: Python profiler\nDescription: Python profiler results\nAuthor: Brian Beck <exogen@gmail.com>\n*/\n\nfunction profile(hljs) {\n  return {\n    name: 'Python profiler',\n    contains: [\n      hljs.C_NUMBER_MODE,\n      {\n        begin: '[a-zA-Z_][\\\\da-zA-Z_]+\\\\.[\\\\da-zA-Z_]{1,3}',\n        end: ':',\n        excludeEnd: true\n      },\n      {\n        begin: '(ncalls|tottime|cumtime)',\n        end: '$',\n        keywords: 'ncalls tottime|10 cumtime|10 filename',\n        relevance: 10\n      },\n      {\n        begin: 'function calls',\n        end: '$',\n        contains: [ hljs.C_NUMBER_MODE ],\n        relevance: 10\n      },\n      hljs.APOS_STRING_MODE,\n      hljs.QUOTE_STRING_MODE,\n      {\n        className: 'string',\n        begin: '\\\\(',\n        end: '\\\\)$',\n        excludeBegin: true,\n        excludeEnd: true,\n        relevance: 0\n      }\n    ]\n  };\n}\n\nmodule.exports = profile;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/profile.js?");

/***/ })

}]);