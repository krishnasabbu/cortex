/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_gherkin"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/gherkin.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/gherkin.js ***!
  \**************************************************************************************************/
/***/ ((module) => {

eval("/*\n Language: Gherkin\n Author: Sam Pikesley (@pikesley) <sam.pikesley@theodi.org>\n Description: Gherkin is the format for cucumber specifications. It is a domain specific language which helps you to describe business behavior without the need to go into detail of implementation.\n Website: https://cucumber.io/docs/gherkin/\n */\n\nfunction gherkin(hljs) {\n  return {\n    name: 'Gherkin',\n    aliases: ['feature'],\n    keywords: 'Feature Background Ability Business\\ Need Scenario Scenarios Scenario\\ Outline Scenario\\ Template Examples Given And Then But When',\n    contains: [\n      {\n        className: 'symbol',\n        begin: '\\\\*',\n        relevance: 0\n      },\n      {\n        className: 'meta',\n        begin: '@[^@\\\\s]+'\n      },\n      {\n        begin: '\\\\|',\n        end: '\\\\|\\\\w*$',\n        contains: [\n          {\n            className: 'string',\n            begin: '[^|]+'\n          }\n        ]\n      },\n      {\n        className: 'variable',\n        begin: '<',\n        end: '>'\n      },\n      hljs.HASH_COMMENT_MODE,\n      {\n        className: 'string',\n        begin: '\"\"\"',\n        end: '\"\"\"'\n      },\n      hljs.QUOTE_STRING_MODE\n    ]\n  };\n}\n\nmodule.exports = gherkin;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/gherkin.js?");

/***/ })

}]);