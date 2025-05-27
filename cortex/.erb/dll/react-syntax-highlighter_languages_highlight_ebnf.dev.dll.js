/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_ebnf"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/ebnf.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/ebnf.js ***!
  \***********************************************************************************************/
/***/ ((module) => {

eval("/*\nLanguage: Extended Backus-Naur Form\nAuthor: Alex McKibben <alex@nullscope.net>\nWebsite: https://en.wikipedia.org/wiki/Extended_Backus–Naur_form\n*/\n\n/** @type LanguageFn */\nfunction ebnf(hljs) {\n  const commentMode = hljs.COMMENT(/\\(\\*/, /\\*\\)/);\n\n  const nonTerminalMode = {\n    className: \"attribute\",\n    begin: /^[ ]*[a-zA-Z]+([\\s_-]+[a-zA-Z]+)*/\n  };\n\n  const specialSequenceMode = {\n    className: \"meta\",\n    begin: /\\?.*\\?/\n  };\n\n  const ruleBodyMode = {\n    begin: /=/,\n    end: /[.;]/,\n    contains: [\n      commentMode,\n      specialSequenceMode,\n      {\n        // terminals\n        className: 'string',\n        variants: [\n          hljs.APOS_STRING_MODE,\n          hljs.QUOTE_STRING_MODE,\n          {\n            begin: '`',\n            end: '`'\n          }\n        ]\n      }\n    ]\n  };\n\n  return {\n    name: 'Extended Backus-Naur Form',\n    illegal: /\\S/,\n    contains: [\n      commentMode,\n      nonTerminalMode,\n      ruleBodyMode\n    ]\n  };\n}\n\nmodule.exports = ebnf;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/ebnf.js?");

/***/ })

}]);