/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_leaf"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/leaf.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/leaf.js ***!
  \***********************************************************************************************/
/***/ ((module) => {

eval("/*\nLanguage: Leaf\nAuthor: Hale Chan <halechan@qq.com>\nDescription: Based on the Leaf reference from https://vapor.github.io/documentation/guide/leaf.html.\n*/\n\nfunction leaf(hljs) {\n  return {\n    name: 'Leaf',\n    contains: [\n      {\n        className: 'function',\n        begin: '#+' + '[A-Za-z_0-9]*' + '\\\\(',\n        end: / \\{/,\n        returnBegin: true,\n        excludeEnd: true,\n        contains: [\n          {\n            className: 'keyword',\n            begin: '#+'\n          },\n          {\n            className: 'title',\n            begin: '[A-Za-z_][A-Za-z_0-9]*'\n          },\n          {\n            className: 'params',\n            begin: '\\\\(',\n            end: '\\\\)',\n            endsParent: true,\n            contains: [\n              {\n                className: 'string',\n                begin: '\"',\n                end: '\"'\n              },\n              {\n                className: 'variable',\n                begin: '[A-Za-z_][A-Za-z_0-9]*'\n              }\n            ]\n          }\n        ]\n      }\n    ]\n  };\n}\n\nmodule.exports = leaf;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/leaf.js?");

/***/ })

}]);