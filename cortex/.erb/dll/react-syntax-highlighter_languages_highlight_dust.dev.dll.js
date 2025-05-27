/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_dust"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/dust.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/dust.js ***!
  \***********************************************************************************************/
/***/ ((module) => {

eval("/*\nLanguage: Dust\nRequires: xml.js\nAuthor: Michael Allen <michael.allen@benefitfocus.com>\nDescription: Matcher for dust.js templates.\nWebsite: https://www.dustjs.com\nCategory: template\n*/\n\n/** @type LanguageFn */\nfunction dust(hljs) {\n  const EXPRESSION_KEYWORDS = 'if eq ne lt lte gt gte select default math sep';\n  return {\n    name: 'Dust',\n    aliases: ['dst'],\n    case_insensitive: true,\n    subLanguage: 'xml',\n    contains: [\n      {\n        className: 'template-tag',\n        begin: /\\{[#\\/]/,\n        end: /\\}/,\n        illegal: /;/,\n        contains: [{\n          className: 'name',\n          begin: /[a-zA-Z\\.-]+/,\n          starts: {\n            endsWithParent: true,\n            relevance: 0,\n            contains: [hljs.QUOTE_STRING_MODE]\n          }\n        }]\n      },\n      {\n        className: 'template-variable',\n        begin: /\\{/,\n        end: /\\}/,\n        illegal: /;/,\n        keywords: EXPRESSION_KEYWORDS\n      }\n    ]\n  };\n}\n\nmodule.exports = dust;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/dust.js?");

/***/ })

}]);