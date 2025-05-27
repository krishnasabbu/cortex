/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_thrift"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/thrift.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/thrift.js ***!
  \*************************************************************************************************/
/***/ ((module) => {

eval("/*\nLanguage: Thrift\nAuthor: Oleg Efimov <efimovov@gmail.com>\nDescription: Thrift message definition format\nWebsite: https://thrift.apache.org\nCategory: protocols\n*/\n\nfunction thrift(hljs) {\n  const BUILT_IN_TYPES = 'bool byte i16 i32 i64 double string binary';\n  return {\n    name: 'Thrift',\n    keywords: {\n      keyword:\n        'namespace const typedef struct enum service exception void oneway set list map required optional',\n      built_in:\n        BUILT_IN_TYPES,\n      literal:\n        'true false'\n    },\n    contains: [\n      hljs.QUOTE_STRING_MODE,\n      hljs.NUMBER_MODE,\n      hljs.C_LINE_COMMENT_MODE,\n      hljs.C_BLOCK_COMMENT_MODE,\n      {\n        className: 'class',\n        beginKeywords: 'struct enum service exception',\n        end: /\\{/,\n        illegal: /\\n/,\n        contains: [\n          hljs.inherit(hljs.TITLE_MODE, {\n            // hack: eating everything after the first title\n            starts: {\n              endsWithParent: true,\n              excludeEnd: true\n            }\n          })\n        ]\n      },\n      {\n        begin: '\\\\b(set|list|map)\\\\s*<',\n        end: '>',\n        keywords: BUILT_IN_TYPES,\n        contains: [ 'self' ]\n      }\n    ]\n  };\n}\n\nmodule.exports = thrift;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/thrift.js?");

/***/ })

}]);