/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_http"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/http.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/http.js ***!
  \***********************************************************************************************/
/***/ ((module) => {

eval("/**\n * @param {string} value\n * @returns {RegExp}\n * */\n\n/**\n * @param {RegExp | string } re\n * @returns {string}\n */\nfunction source(re) {\n  if (!re) return null;\n  if (typeof re === \"string\") return re;\n\n  return re.source;\n}\n\n/**\n * @param {...(RegExp | string) } args\n * @returns {string}\n */\nfunction concat(...args) {\n  const joined = args.map((x) => source(x)).join(\"\");\n  return joined;\n}\n\n/*\nLanguage: HTTP\nDescription: HTTP request and response headers with automatic body highlighting\nAuthor: Ivan Sagalaev <maniac@softwaremaniacs.org>\nCategory: common, protocols\nWebsite: https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview\n*/\n\nfunction http(hljs) {\n  const VERSION = 'HTTP/(2|1\\\\.[01])';\n  const HEADER_NAME = /[A-Za-z][A-Za-z0-9-]*/;\n  const HEADER = {\n    className: 'attribute',\n    begin: concat('^', HEADER_NAME, '(?=\\\\:\\\\s)'),\n    starts: {\n      contains: [\n        {\n          className: \"punctuation\",\n          begin: /: /,\n          relevance: 0,\n          starts: {\n            end: '$',\n            relevance: 0\n          }\n        }\n      ]\n    }\n  };\n  const HEADERS_AND_BODY = [\n    HEADER,\n    {\n      begin: '\\\\n\\\\n',\n      starts: { subLanguage: [], endsWithParent: true }\n    }\n  ];\n\n  return {\n    name: 'HTTP',\n    aliases: ['https'],\n    illegal: /\\S/,\n    contains: [\n      // response\n      {\n        begin: '^(?=' + VERSION + \" \\\\d{3})\",\n        end: /$/,\n        contains: [\n          {\n            className: \"meta\",\n            begin: VERSION\n          },\n          {\n            className: 'number', begin: '\\\\b\\\\d{3}\\\\b'\n          }\n        ],\n        starts: {\n          end: /\\b\\B/,\n          illegal: /\\S/,\n          contains: HEADERS_AND_BODY\n        }\n      },\n      // request\n      {\n        begin: '(?=^[A-Z]+ (.*?) ' + VERSION + '$)',\n        end: /$/,\n        contains: [\n          {\n            className: 'string',\n            begin: ' ',\n            end: ' ',\n            excludeBegin: true,\n            excludeEnd: true\n          },\n          {\n            className: \"meta\",\n            begin: VERSION\n          },\n          {\n            className: 'keyword',\n            begin: '[A-Z]+'\n          }\n        ],\n        starts: {\n          end: /\\b\\B/,\n          illegal: /\\S/,\n          contains: HEADERS_AND_BODY\n        }\n      },\n      // to allow headers to work even without a preamble\n      hljs.inherit(HEADER, {\n        relevance: 0\n      })\n    ]\n  };\n}\n\nmodule.exports = http;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/http.js?");

/***/ })

}]);