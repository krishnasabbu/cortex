/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_nim"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/nim.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/nim.js ***!
  \**********************************************************************************************/
/***/ ((module) => {

eval("/*\nLanguage: Nim\nDescription: Nim is a statically typed compiled systems programming language.\nWebsite: https://nim-lang.org\nCategory: system\n*/\n\nfunction nim(hljs) {\n  return {\n    name: 'Nim',\n    keywords: {\n      keyword:\n        'addr and as asm bind block break case cast const continue converter ' +\n        'discard distinct div do elif else end enum except export finally ' +\n        'for from func generic if import in include interface is isnot iterator ' +\n        'let macro method mixin mod nil not notin object of or out proc ptr ' +\n        'raise ref return shl shr static template try tuple type using var ' +\n        'when while with without xor yield',\n      literal:\n        'shared guarded stdin stdout stderr result true false',\n      built_in:\n        'int int8 int16 int32 int64 uint uint8 uint16 uint32 uint64 float ' +\n        'float32 float64 bool char string cstring pointer expr stmt void ' +\n        'auto any range array openarray varargs seq set clong culong cchar ' +\n        'cschar cshort cint csize clonglong cfloat cdouble clongdouble ' +\n        'cuchar cushort cuint culonglong cstringarray semistatic'\n    },\n    contains: [\n      {\n        className: 'meta', // Actually pragma\n        begin: /\\{\\./,\n        end: /\\.\\}/,\n        relevance: 10\n      },\n      {\n        className: 'string',\n        begin: /[a-zA-Z]\\w*\"/,\n        end: /\"/,\n        contains: [\n          {\n            begin: /\"\"/\n          }\n        ]\n      },\n      {\n        className: 'string',\n        begin: /([a-zA-Z]\\w*)?\"\"\"/,\n        end: /\"\"\"/\n      },\n      hljs.QUOTE_STRING_MODE,\n      {\n        className: 'type',\n        begin: /\\b[A-Z]\\w+\\b/,\n        relevance: 0\n      },\n      {\n        className: 'number',\n        relevance: 0,\n        variants: [\n          {\n            begin: /\\b(0[xX][0-9a-fA-F][_0-9a-fA-F]*)('?[iIuU](8|16|32|64))?/\n          },\n          {\n            begin: /\\b(0o[0-7][_0-7]*)('?[iIuUfF](8|16|32|64))?/\n          },\n          {\n            begin: /\\b(0(b|B)[01][_01]*)('?[iIuUfF](8|16|32|64))?/\n          },\n          {\n            begin: /\\b(\\d[_\\d]*)('?[iIuUfF](8|16|32|64))?/\n          }\n        ]\n      },\n      hljs.HASH_COMMENT_MODE\n    ]\n  };\n}\n\nmodule.exports = nim;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/nim.js?");

/***/ })

}]);