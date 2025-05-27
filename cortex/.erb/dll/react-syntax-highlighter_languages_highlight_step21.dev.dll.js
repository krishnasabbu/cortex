/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_step21"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/step21.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/step21.js ***!
  \*************************************************************************************************/
/***/ ((module) => {

eval("/*\nLanguage: STEP Part 21\nContributors: Adam Joseph Cook <adam.joseph.cook@gmail.com>\nDescription: Syntax highlighter for STEP Part 21 files (ISO 10303-21).\nWebsite: https://en.wikipedia.org/wiki/ISO_10303-21\n*/\n\nfunction step21(hljs) {\n  const STEP21_IDENT_RE = '[A-Z_][A-Z0-9_.]*';\n  const STEP21_KEYWORDS = {\n    $pattern: STEP21_IDENT_RE,\n    keyword: 'HEADER ENDSEC DATA'\n  };\n  const STEP21_START = {\n    className: 'meta',\n    begin: 'ISO-10303-21;',\n    relevance: 10\n  };\n  const STEP21_CLOSE = {\n    className: 'meta',\n    begin: 'END-ISO-10303-21;',\n    relevance: 10\n  };\n\n  return {\n    name: 'STEP Part 21',\n    aliases: [\n      'p21',\n      'step',\n      'stp'\n    ],\n    case_insensitive: true, // STEP 21 is case insensitive in theory, in practice all non-comments are capitalized.\n    keywords: STEP21_KEYWORDS,\n    contains: [\n      STEP21_START,\n      STEP21_CLOSE,\n      hljs.C_LINE_COMMENT_MODE,\n      hljs.C_BLOCK_COMMENT_MODE,\n      hljs.COMMENT('/\\\\*\\\\*!', '\\\\*/'),\n      hljs.C_NUMBER_MODE,\n      hljs.inherit(hljs.APOS_STRING_MODE, {\n        illegal: null\n      }),\n      hljs.inherit(hljs.QUOTE_STRING_MODE, {\n        illegal: null\n      }),\n      {\n        className: 'string',\n        begin: \"'\",\n        end: \"'\"\n      },\n      {\n        className: 'symbol',\n        variants: [\n          {\n            begin: '#',\n            end: '\\\\d+',\n            illegal: '\\\\W'\n          }\n        ]\n      }\n    ]\n  };\n}\n\nmodule.exports = step21;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/step21.js?");

/***/ })

}]);