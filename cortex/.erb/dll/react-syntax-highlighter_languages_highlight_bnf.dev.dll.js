/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_bnf"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/bnf.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/bnf.js ***!
  \**********************************************************************************************/
/***/ ((module) => {

eval("/*\nLanguage: Backus–Naur Form\nWebsite: https://en.wikipedia.org/wiki/Backus–Naur_form\nAuthor: Oleg Efimov <efimovov@gmail.com>\n*/\n\n/** @type LanguageFn */\nfunction bnf(hljs) {\n  return {\n    name: 'Backus–Naur Form',\n    contains: [\n      // Attribute\n      {\n        className: 'attribute',\n        begin: /</,\n        end: />/\n      },\n      // Specific\n      {\n        begin: /::=/,\n        end: /$/,\n        contains: [\n          {\n            begin: /</,\n            end: />/\n          },\n          // Common\n          hljs.C_LINE_COMMENT_MODE,\n          hljs.C_BLOCK_COMMENT_MODE,\n          hljs.APOS_STRING_MODE,\n          hljs.QUOTE_STRING_MODE\n        ]\n      }\n    ]\n  };\n}\n\nmodule.exports = bnf;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/bnf.js?");

/***/ })

}]);