/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_smali"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/smali.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/smali.js ***!
  \************************************************************************************************/
/***/ ((module) => {

eval("/*\nLanguage: Smali\nAuthor: Dennis Titze <dennis.titze@gmail.com>\nDescription: Basic Smali highlighting\nWebsite: https://github.com/JesusFreke/smali\n*/\n\nfunction smali(hljs) {\n  const smali_instr_low_prio = [\n    'add',\n    'and',\n    'cmp',\n    'cmpg',\n    'cmpl',\n    'const',\n    'div',\n    'double',\n    'float',\n    'goto',\n    'if',\n    'int',\n    'long',\n    'move',\n    'mul',\n    'neg',\n    'new',\n    'nop',\n    'not',\n    'or',\n    'rem',\n    'return',\n    'shl',\n    'shr',\n    'sput',\n    'sub',\n    'throw',\n    'ushr',\n    'xor'\n  ];\n  const smali_instr_high_prio = [\n    'aget',\n    'aput',\n    'array',\n    'check',\n    'execute',\n    'fill',\n    'filled',\n    'goto/16',\n    'goto/32',\n    'iget',\n    'instance',\n    'invoke',\n    'iput',\n    'monitor',\n    'packed',\n    'sget',\n    'sparse'\n  ];\n  const smali_keywords = [\n    'transient',\n    'constructor',\n    'abstract',\n    'final',\n    'synthetic',\n    'public',\n    'private',\n    'protected',\n    'static',\n    'bridge',\n    'system'\n  ];\n  return {\n    name: 'Smali',\n    contains: [\n      {\n        className: 'string',\n        begin: '\"',\n        end: '\"',\n        relevance: 0\n      },\n      hljs.COMMENT(\n        '#',\n        '$',\n        {\n          relevance: 0\n        }\n      ),\n      {\n        className: 'keyword',\n        variants: [\n          {\n            begin: '\\\\s*\\\\.end\\\\s[a-zA-Z0-9]*'\n          },\n          {\n            begin: '^[ ]*\\\\.[a-zA-Z]*',\n            relevance: 0\n          },\n          {\n            begin: '\\\\s:[a-zA-Z_0-9]*',\n            relevance: 0\n          },\n          {\n            begin: '\\\\s(' + smali_keywords.join('|') + ')'\n          }\n        ]\n      },\n      {\n        className: 'built_in',\n        variants: [\n          {\n            begin: '\\\\s(' + smali_instr_low_prio.join('|') + ')\\\\s'\n          },\n          {\n            begin: '\\\\s(' + smali_instr_low_prio.join('|') + ')((-|/)[a-zA-Z0-9]+)+\\\\s',\n            relevance: 10\n          },\n          {\n            begin: '\\\\s(' + smali_instr_high_prio.join('|') + ')((-|/)[a-zA-Z0-9]+)*\\\\s',\n            relevance: 10\n          }\n        ]\n      },\n      {\n        className: 'class',\n        begin: 'L[^\\(;:\\n]*;',\n        relevance: 0\n      },\n      {\n        begin: '[vp][0-9]+'\n      }\n    ]\n  };\n}\n\nmodule.exports = smali;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/smali.js?");

/***/ })

}]);