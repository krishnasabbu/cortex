/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_clojureRepl"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/clojure-repl.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/clojure-repl.js ***!
  \*******************************************************************************************************/
/***/ ((module) => {

eval("/*\nLanguage: Clojure REPL\nDescription: Clojure REPL sessions\nAuthor: Ivan Sagalaev <maniac@softwaremaniacs.org>\nRequires: clojure.js\nWebsite: https://clojure.org\nCategory: lisp\n*/\n\n/** @type LanguageFn */\nfunction clojureRepl(hljs) {\n  return {\n    name: 'Clojure REPL',\n    contains: [\n      {\n        className: 'meta',\n        begin: /^([\\w.-]+|\\s*#_)?=>/,\n        starts: {\n          end: /$/,\n          subLanguage: 'clojure'\n        }\n      }\n    ]\n  };\n}\n\nmodule.exports = clojureRepl;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/clojure-repl.js?");

/***/ })

}]);