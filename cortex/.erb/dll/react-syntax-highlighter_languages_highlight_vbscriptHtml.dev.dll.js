/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_vbscriptHtml"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/vbscript-html.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/vbscript-html.js ***!
  \********************************************************************************************************/
/***/ ((module) => {

eval("/*\nLanguage: VBScript in HTML\nRequires: xml.js, vbscript.js\nAuthor: Ivan Sagalaev <maniac@softwaremaniacs.org>\nDescription: \"Bridge\" language defining fragments of VBScript in HTML within <% .. %>\nWebsite: https://en.wikipedia.org/wiki/VBScript\nCategory: scripting\n*/\n\nfunction vbscriptHtml(hljs) {\n  return {\n    name: 'VBScript in HTML',\n    subLanguage: 'xml',\n    contains: [\n      {\n        begin: '<%',\n        end: '%>',\n        subLanguage: 'vbscript'\n      }\n    ]\n  };\n}\n\nmodule.exports = vbscriptHtml;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/vbscript-html.js?");

/***/ })

}]);