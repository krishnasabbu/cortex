/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_tap"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/tap.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/tap.js ***!
  \**********************************************************************************************/
/***/ ((module) => {

eval("/*\nLanguage: Test Anything Protocol\nDescription: TAP, the Test Anything Protocol, is a simple text-based interface between testing modules in a test harness.\nRequires: yaml.js\nAuthor: Sergey Bronnikov <sergeyb@bronevichok.ru>\nWebsite: https://testanything.org\n*/\n\nfunction tap(hljs) {\n  return {\n    name: 'Test Anything Protocol',\n    case_insensitive: true,\n    contains: [\n      hljs.HASH_COMMENT_MODE,\n      // version of format and total amount of testcases\n      {\n        className: 'meta',\n        variants: [\n          {\n            begin: '^TAP version (\\\\d+)$'\n          },\n          {\n            begin: '^1\\\\.\\\\.(\\\\d+)$'\n          }\n        ]\n      },\n      // YAML block\n      {\n        begin: /---$/,\n        end: '\\\\.\\\\.\\\\.$',\n        subLanguage: 'yaml',\n        relevance: 0\n      },\n      // testcase number\n      {\n        className: 'number',\n        begin: ' (\\\\d+) '\n      },\n      // testcase status and description\n      {\n        className: 'symbol',\n        variants: [\n          {\n            begin: '^ok'\n          },\n          {\n            begin: '^not ok'\n          }\n        ]\n      }\n    ]\n  };\n}\n\nmodule.exports = tap;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/tap.js?");

/***/ })

}]);