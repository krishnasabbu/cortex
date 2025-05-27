/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_clean"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/clean.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/clean.js ***!
  \************************************************************************************************/
/***/ ((module) => {

eval("/*\nLanguage: Clean\nAuthor: Camil Staps <info@camilstaps.nl>\nCategory: functional\nWebsite: http://clean.cs.ru.nl\n*/\n\n/** @type LanguageFn */\nfunction clean(hljs) {\n  return {\n    name: 'Clean',\n    aliases: [\n      'icl',\n      'dcl'\n    ],\n    keywords: {\n      keyword:\n        'if let in with where case of class instance otherwise ' +\n        'implementation definition system module from import qualified as ' +\n        'special code inline foreign export ccall stdcall generic derive ' +\n        'infix infixl infixr',\n      built_in:\n        'Int Real Char Bool',\n      literal:\n        'True False'\n    },\n    contains: [\n      hljs.C_LINE_COMMENT_MODE,\n      hljs.C_BLOCK_COMMENT_MODE,\n      hljs.APOS_STRING_MODE,\n      hljs.QUOTE_STRING_MODE,\n      hljs.C_NUMBER_MODE,\n      { // relevance booster\n        begin: '->|<-[|:]?|#!?|>>=|\\\\{\\\\||\\\\|\\\\}|:==|=:|<>'\n      }\n    ]\n  };\n}\n\nmodule.exports = clean;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/clean.js?");

/***/ })

}]);