/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_go"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/go.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/go.js ***!
  \*********************************************************************************************/
/***/ ((module) => {

eval("/*\nLanguage: Go\nAuthor: Stephan Kountso aka StepLg <steplg@gmail.com>\nContributors: Evgeny Stepanischev <imbolk@gmail.com>\nDescription: Google go language (golang). For info about language\nWebsite: http://golang.org/\nCategory: common, system\n*/\n\nfunction go(hljs) {\n  const GO_KEYWORDS = {\n    keyword:\n      'break default func interface select case map struct chan else goto package switch ' +\n      'const fallthrough if range type continue for import return var go defer ' +\n      'bool byte complex64 complex128 float32 float64 int8 int16 int32 int64 string uint8 ' +\n      'uint16 uint32 uint64 int uint uintptr rune',\n    literal:\n       'true false iota nil',\n    built_in:\n      'append cap close complex copy imag len make new panic print println real recover delete'\n  };\n  return {\n    name: 'Go',\n    aliases: ['golang'],\n    keywords: GO_KEYWORDS,\n    illegal: '</',\n    contains: [\n      hljs.C_LINE_COMMENT_MODE,\n      hljs.C_BLOCK_COMMENT_MODE,\n      {\n        className: 'string',\n        variants: [\n          hljs.QUOTE_STRING_MODE,\n          hljs.APOS_STRING_MODE,\n          {\n            begin: '`',\n            end: '`'\n          }\n        ]\n      },\n      {\n        className: 'number',\n        variants: [\n          {\n            begin: hljs.C_NUMBER_RE + '[i]',\n            relevance: 1\n          },\n          hljs.C_NUMBER_MODE\n        ]\n      },\n      {\n        begin: /:=/ // relevance booster\n      },\n      {\n        className: 'function',\n        beginKeywords: 'func',\n        end: '\\\\s*(\\\\{|$)',\n        excludeEnd: true,\n        contains: [\n          hljs.TITLE_MODE,\n          {\n            className: 'params',\n            begin: /\\(/,\n            end: /\\)/,\n            keywords: GO_KEYWORDS,\n            illegal: /[\"']/\n          }\n        ]\n      }\n    ]\n  };\n}\n\nmodule.exports = go;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/go.js?");

/***/ })

}]);