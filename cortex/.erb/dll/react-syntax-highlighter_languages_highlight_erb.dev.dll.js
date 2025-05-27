/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_erb"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/erb.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/erb.js ***!
  \**********************************************************************************************/
/***/ ((module) => {

eval("/*\nLanguage: ERB (Embedded Ruby)\nRequires: xml.js, ruby.js\nAuthor: Lucas Mazza <lucastmazza@gmail.com>\nContributors: Kassio Borges <kassioborgesm@gmail.com>\nDescription: \"Bridge\" language defining fragments of Ruby in HTML within <% .. %>\nWebsite: https://ruby-doc.org/stdlib-2.6.5/libdoc/erb/rdoc/ERB.html\nCategory: template\n*/\n\n/** @type LanguageFn */\nfunction erb(hljs) {\n  return {\n    name: 'ERB',\n    subLanguage: 'xml',\n    contains: [\n      hljs.COMMENT('<%#', '%>'),\n      {\n        begin: '<%[%=-]?',\n        end: '[%-]?%>',\n        subLanguage: 'ruby',\n        excludeBegin: true,\n        excludeEnd: true\n      }\n    ]\n  };\n}\n\nmodule.exports = erb;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/erb.js?");

/***/ })

}]);