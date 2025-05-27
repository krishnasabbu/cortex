/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_properties"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/properties.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/properties.js ***!
  \*****************************************************************************************************/
/***/ ((module) => {

eval("/*\nLanguage: .properties\nContributors: Valentin Aitken <valentin@nalisbg.com>, Egor Rogov <e.rogov@postgrespro.ru>\nWebsite: https://en.wikipedia.org/wiki/.properties\nCategory: common, config\n*/\n\nfunction properties(hljs) {\n\n  // whitespaces: space, tab, formfeed\n  var WS0 = '[ \\\\t\\\\f]*';\n  var WS1 = '[ \\\\t\\\\f]+';\n  // delimiter\n  var EQUAL_DELIM = WS0+'[:=]'+WS0;\n  var WS_DELIM = WS1;\n  var DELIM = '(' + EQUAL_DELIM + '|' + WS_DELIM + ')';\n  var KEY_ALPHANUM = '([^\\\\\\\\\\\\W:= \\\\t\\\\f\\\\n]|\\\\\\\\.)+';\n  var KEY_OTHER = '([^\\\\\\\\:= \\\\t\\\\f\\\\n]|\\\\\\\\.)+';\n\n  var DELIM_AND_VALUE = {\n          // skip DELIM\n          end: DELIM,\n          relevance: 0,\n          starts: {\n            // value: everything until end of line (again, taking into account backslashes)\n            className: 'string',\n            end: /$/,\n            relevance: 0,\n            contains: [\n              { begin: '\\\\\\\\\\\\\\\\'},\n              { begin: '\\\\\\\\\\\\n' }\n            ]\n          }\n        };\n\n  return {\n    name: '.properties',\n    case_insensitive: true,\n    illegal: /\\S/,\n    contains: [\n      hljs.COMMENT('^\\\\s*[!#]', '$'),\n      // key: everything until whitespace or = or : (taking into account backslashes)\n      // case of a \"normal\" key\n      {\n        returnBegin: true,\n        variants: [\n          { begin: KEY_ALPHANUM + EQUAL_DELIM, relevance: 1 },\n          { begin: KEY_ALPHANUM + WS_DELIM, relevance: 0 }\n        ],\n        contains: [\n          {\n            className: 'attr',\n            begin: KEY_ALPHANUM,\n            endsParent: true,\n            relevance: 0\n          }\n        ],\n        starts: DELIM_AND_VALUE\n      },\n      // case of key containing non-alphanumeric chars => relevance = 0\n      {\n        begin: KEY_OTHER + DELIM,\n        returnBegin: true,\n        relevance: 0,\n        contains: [\n          {\n            className: 'meta',\n            begin: KEY_OTHER,\n            endsParent: true,\n            relevance: 0\n          }\n        ],\n        starts: DELIM_AND_VALUE\n      },\n      // case of an empty key\n      {\n        className: 'attr',\n        relevance: 0,\n        begin: KEY_OTHER + WS0 + '$'\n      }\n    ]\n  };\n}\n\nmodule.exports = properties;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/properties.js?");

/***/ })

}]);