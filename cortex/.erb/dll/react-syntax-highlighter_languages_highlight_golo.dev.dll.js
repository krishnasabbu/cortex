/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_golo"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/golo.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/golo.js ***!
  \***********************************************************************************************/
/***/ ((module) => {

eval("/*\nLanguage: Golo\nAuthor: Philippe Charriere <ph.charriere@gmail.com>\nDescription: a lightweight dynamic language for the JVM\nWebsite: http://golo-lang.org/\n*/\n\nfunction golo(hljs) {\n  return {\n    name: 'Golo',\n    keywords: {\n      keyword:\n          'println readln print import module function local return let var ' +\n          'while for foreach times in case when match with break continue ' +\n          'augment augmentation each find filter reduce ' +\n          'if then else otherwise try catch finally raise throw orIfNull ' +\n          'DynamicObject|10 DynamicVariable struct Observable map set vector list array',\n      literal:\n          'true false null'\n    },\n    contains: [\n      hljs.HASH_COMMENT_MODE,\n      hljs.QUOTE_STRING_MODE,\n      hljs.C_NUMBER_MODE,\n      {\n        className: 'meta',\n        begin: '@[A-Za-z]+'\n      }\n    ]\n  };\n}\n\nmodule.exports = golo;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/golo.js?");

/***/ })

}]);