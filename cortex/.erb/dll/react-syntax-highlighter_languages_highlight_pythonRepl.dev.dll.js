/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_pythonRepl"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/python-repl.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/python-repl.js ***!
  \******************************************************************************************************/
/***/ ((module) => {

eval("/*\nLanguage: Python REPL\nRequires: python.js\nAuthor: Josh Goebel <hello@joshgoebel.com>\nCategory: common\n*/\n\nfunction pythonRepl(hljs) {\n  return {\n    aliases: [ 'pycon' ],\n    contains: [\n      {\n        className: 'meta',\n        starts: {\n          // a space separates the REPL prefix from the actual code\n          // this is purely for cleaner HTML output\n          end: / |$/,\n          starts: {\n            end: '$',\n            subLanguage: 'python'\n          }\n        },\n        variants: [\n          {\n            begin: /^>>>(?=[ ]|$)/\n          },\n          {\n            begin: /^\\.\\.\\.(?=[ ]|$)/\n          }\n        ]\n      }\n    ]\n  };\n}\n\nmodule.exports = pythonRepl;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/python-repl.js?");

/***/ })

}]);