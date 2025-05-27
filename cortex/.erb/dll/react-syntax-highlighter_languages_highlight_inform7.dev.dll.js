/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_inform7"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/inform7.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/inform7.js ***!
  \**************************************************************************************************/
/***/ ((module) => {

eval("/*\nLanguage: Inform 7\nAuthor: Bruno Dias <bruno.r.dias@gmail.com>\nDescription: Language definition for Inform 7, a DSL for writing parser interactive fiction.\nWebsite: http://inform7.com\n*/\n\nfunction inform7(hljs) {\n  const START_BRACKET = '\\\\[';\n  const END_BRACKET = '\\\\]';\n  return {\n    name: 'Inform 7',\n    aliases: ['i7'],\n    case_insensitive: true,\n    keywords: {\n      // Some keywords more or less unique to I7, for relevance.\n      keyword:\n        // kind:\n        'thing room person man woman animal container ' +\n        'supporter backdrop door ' +\n        // characteristic:\n        'scenery open closed locked inside gender ' +\n        // verb:\n        'is are say understand ' +\n        // misc keyword:\n        'kind of rule'\n    },\n    contains: [\n      {\n        className: 'string',\n        begin: '\"',\n        end: '\"',\n        relevance: 0,\n        contains: [\n          {\n            className: 'subst',\n            begin: START_BRACKET,\n            end: END_BRACKET\n          }\n        ]\n      },\n      {\n        className: 'section',\n        begin: /^(Volume|Book|Part|Chapter|Section|Table)\\b/,\n        end: '$'\n      },\n      {\n        // Rule definition\n        // This is here for relevance.\n        begin: /^(Check|Carry out|Report|Instead of|To|Rule|When|Before|After)\\b/,\n        end: ':',\n        contains: [\n          {\n            // Rule name\n            begin: '\\\\(This',\n            end: '\\\\)'\n          }\n        ]\n      },\n      {\n        className: 'comment',\n        begin: START_BRACKET,\n        end: END_BRACKET,\n        contains: ['self']\n      }\n    ]\n  };\n}\n\nmodule.exports = inform7;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/inform7.js?");

/***/ })

}]);