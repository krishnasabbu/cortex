/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_shell"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/shell.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/shell.js ***!
  \************************************************************************************************/
/***/ ((module) => {

eval("/*\nLanguage: Shell Session\nRequires: bash.js\nAuthor: TSUYUSATO Kitsune <make.just.on@gmail.com>\nCategory: common\nAudit: 2020\n*/\n\n/** @type LanguageFn */\nfunction shell(hljs) {\n  return {\n    name: 'Shell Session',\n    aliases: [ 'console' ],\n    contains: [\n      {\n        className: 'meta',\n        // We cannot add \\s (spaces) in the regular expression otherwise it will be too broad and produce unexpected result.\n        // For instance, in the following example, it would match \"echo /path/to/home >\" as a prompt:\n        // echo /path/to/home > t.exe\n        begin: /^\\s{0,3}[/~\\w\\d[\\]()@-]*[>%$#]/,\n        starts: {\n          end: /[^\\\\](?=\\s*$)/,\n          subLanguage: 'bash'\n        }\n      }\n    ]\n  };\n}\n\nmodule.exports = shell;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/shell.js?");

/***/ })

}]);