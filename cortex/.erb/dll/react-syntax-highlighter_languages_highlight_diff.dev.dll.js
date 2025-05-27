/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_diff"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/diff.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/diff.js ***!
  \***********************************************************************************************/
/***/ ((module) => {

eval("/*\nLanguage: Diff\nDescription: Unified and context diff\nAuthor: Vasily Polovnyov <vast@whiteants.net>\nWebsite: https://www.gnu.org/software/diffutils/\nCategory: common\n*/\n\n/** @type LanguageFn */\nfunction diff(hljs) {\n  return {\n    name: 'Diff',\n    aliases: ['patch'],\n    contains: [\n      {\n        className: 'meta',\n        relevance: 10,\n        variants: [\n          {\n            begin: /^@@ +-\\d+,\\d+ +\\+\\d+,\\d+ +@@/\n          },\n          {\n            begin: /^\\*\\*\\* +\\d+,\\d+ +\\*\\*\\*\\*$/\n          },\n          {\n            begin: /^--- +\\d+,\\d+ +----$/\n          }\n        ]\n      },\n      {\n        className: 'comment',\n        variants: [\n          {\n            begin: /Index: /,\n            end: /$/\n          },\n          {\n            begin: /^index/,\n            end: /$/\n          },\n          {\n            begin: /={3,}/,\n            end: /$/\n          },\n          {\n            begin: /^-{3}/,\n            end: /$/\n          },\n          {\n            begin: /^\\*{3} /,\n            end: /$/\n          },\n          {\n            begin: /^\\+{3}/,\n            end: /$/\n          },\n          {\n            begin: /^\\*{15}$/\n          },\n          {\n            begin: /^diff --git/,\n            end: /$/\n          }\n        ]\n      },\n      {\n        className: 'addition',\n        begin: /^\\+/,\n        end: /$/\n      },\n      {\n        className: 'deletion',\n        begin: /^-/,\n        end: /$/\n      },\n      {\n        className: 'addition',\n        begin: /^!/,\n        end: /$/\n      }\n    ]\n  };\n}\n\nmodule.exports = diff;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/diff.js?");

/***/ })

}]);