/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_nodeRepl"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/node-repl.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/node-repl.js ***!
  \****************************************************************************************************/
/***/ ((module) => {

eval("/*\nLanguage: Node REPL\nRequires: javascript.js\nAuthor: Marat Nagayev <nagaevmt@yandex.ru>\nCategory: scripting\n*/\n\n/** @type LanguageFn */\nfunction nodeRepl(hljs) {\n  return {\n    name: 'Node REPL',\n    contains: [\n      {\n        className: 'meta',\n        starts: {\n          // a space separates the REPL prefix from the actual code\n          // this is purely for cleaner HTML output\n          end: / |$/,\n          starts: {\n            end: '$',\n            subLanguage: 'javascript'\n          }\n        },\n        variants: [\n          {\n            begin: /^>(?=[ ]|$)/\n          },\n          {\n            begin: /^\\.\\.\\.(?=[ ]|$)/\n          }\n        ]\n      }\n    ]\n  };\n}\n\nmodule.exports = nodeRepl;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/node-repl.js?");

/***/ })

}]);