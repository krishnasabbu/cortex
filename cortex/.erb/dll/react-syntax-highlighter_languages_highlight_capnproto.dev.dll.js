/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_capnproto"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/capnproto.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/capnproto.js ***!
  \****************************************************************************************************/
/***/ ((module) => {

eval("/*\nLanguage: Cap’n Proto\nAuthor: Oleg Efimov <efimovov@gmail.com>\nDescription: Cap’n Proto message definition format\nWebsite: https://capnproto.org/capnp-tool.html\nCategory: protocols\n*/\n\n/** @type LanguageFn */\nfunction capnproto(hljs) {\n  return {\n    name: 'Cap’n Proto',\n    aliases: ['capnp'],\n    keywords: {\n      keyword:\n        'struct enum interface union group import using const annotation extends in of on as with from fixed',\n      built_in:\n        'Void Bool Int8 Int16 Int32 Int64 UInt8 UInt16 UInt32 UInt64 Float32 Float64 ' +\n        'Text Data AnyPointer AnyStruct Capability List',\n      literal:\n        'true false'\n    },\n    contains: [\n      hljs.QUOTE_STRING_MODE,\n      hljs.NUMBER_MODE,\n      hljs.HASH_COMMENT_MODE,\n      {\n        className: 'meta',\n        begin: /@0x[\\w\\d]{16};/,\n        illegal: /\\n/\n      },\n      {\n        className: 'symbol',\n        begin: /@\\d+\\b/\n      },\n      {\n        className: 'class',\n        beginKeywords: 'struct enum',\n        end: /\\{/,\n        illegal: /\\n/,\n        contains: [hljs.inherit(hljs.TITLE_MODE, {\n          starts: {\n            endsWithParent: true,\n            excludeEnd: true\n          } // hack: eating everything after the first title\n        })]\n      },\n      {\n        className: 'class',\n        beginKeywords: 'interface',\n        end: /\\{/,\n        illegal: /\\n/,\n        contains: [hljs.inherit(hljs.TITLE_MODE, {\n          starts: {\n            endsWithParent: true,\n            excludeEnd: true\n          } // hack: eating everything after the first title\n        })]\n      }\n    ]\n  };\n}\n\nmodule.exports = capnproto;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/capnproto.js?");

/***/ })

}]);