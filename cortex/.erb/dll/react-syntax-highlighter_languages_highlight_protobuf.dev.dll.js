/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_protobuf"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/protobuf.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/protobuf.js ***!
  \***************************************************************************************************/
/***/ ((module) => {

eval("/*\nLanguage: Protocol Buffers\nAuthor: Dan Tao <daniel.tao@gmail.com>\nDescription: Protocol buffer message definition format\nWebsite: https://developers.google.com/protocol-buffers/docs/proto3\nCategory: protocols\n*/\n\nfunction protobuf(hljs) {\n  return {\n    name: 'Protocol Buffers',\n    keywords: {\n      keyword: 'package import option optional required repeated group oneof',\n      built_in: 'double float int32 int64 uint32 uint64 sint32 sint64 ' +\n        'fixed32 fixed64 sfixed32 sfixed64 bool string bytes',\n      literal: 'true false'\n    },\n    contains: [\n      hljs.QUOTE_STRING_MODE,\n      hljs.NUMBER_MODE,\n      hljs.C_LINE_COMMENT_MODE,\n      hljs.C_BLOCK_COMMENT_MODE,\n      {\n        className: 'class',\n        beginKeywords: 'message enum service', end: /\\{/,\n        illegal: /\\n/,\n        contains: [\n          hljs.inherit(hljs.TITLE_MODE, {\n            starts: {endsWithParent: true, excludeEnd: true} // hack: eating everything after the first title\n          })\n        ]\n      },\n      {\n        className: 'function',\n        beginKeywords: 'rpc',\n        end: /[{;]/, excludeEnd: true,\n        keywords: 'rpc returns'\n      },\n      { // match enum items (relevance)\n        // BLAH = ...;\n        begin: /^\\s*[A-Z_]+(?=\\s*=[^\\n]+;$)/\n      }\n    ]\n  };\n}\n\nmodule.exports = protobuf;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/protobuf.js?");

/***/ })

}]);