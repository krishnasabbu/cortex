/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_awk"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/awk.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/awk.js ***!
  \**********************************************************************************************/
/***/ ((module) => {

eval("/*\nLanguage: Awk\nAuthor: Matthew Daly <matthewbdaly@gmail.com>\nWebsite: https://www.gnu.org/software/gawk/manual/gawk.html\nDescription: language definition for Awk scripts\n*/\n\n/** @type LanguageFn */\nfunction awk(hljs) {\n  const VARIABLE = {\n    className: 'variable',\n    variants: [\n      {\n        begin: /\\$[\\w\\d#@][\\w\\d_]*/\n      },\n      {\n        begin: /\\$\\{(.*?)\\}/\n      }\n    ]\n  };\n  const KEYWORDS = 'BEGIN END if else while do for in break continue delete next nextfile function func exit|10';\n  const STRING = {\n    className: 'string',\n    contains: [hljs.BACKSLASH_ESCAPE],\n    variants: [\n      {\n        begin: /(u|b)?r?'''/,\n        end: /'''/,\n        relevance: 10\n      },\n      {\n        begin: /(u|b)?r?\"\"\"/,\n        end: /\"\"\"/,\n        relevance: 10\n      },\n      {\n        begin: /(u|r|ur)'/,\n        end: /'/,\n        relevance: 10\n      },\n      {\n        begin: /(u|r|ur)\"/,\n        end: /\"/,\n        relevance: 10\n      },\n      {\n        begin: /(b|br)'/,\n        end: /'/\n      },\n      {\n        begin: /(b|br)\"/,\n        end: /\"/\n      },\n      hljs.APOS_STRING_MODE,\n      hljs.QUOTE_STRING_MODE\n    ]\n  };\n  return {\n    name: 'Awk',\n    keywords: {\n      keyword: KEYWORDS\n    },\n    contains: [\n      VARIABLE,\n      STRING,\n      hljs.REGEXP_MODE,\n      hljs.HASH_COMMENT_MODE,\n      hljs.NUMBER_MODE\n    ]\n  };\n}\n\nmodule.exports = awk;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/awk.js?");

/***/ })

}]);