/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_phpTemplate"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/php-template.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/php-template.js ***!
  \*******************************************************************************************************/
/***/ ((module) => {

eval("/*\nLanguage: PHP Template\nRequires: xml.js, php.js\nAuthor: Josh Goebel <hello@joshgoebel.com>\nWebsite: https://www.php.net\nCategory: common\n*/\n\nfunction phpTemplate(hljs) {\n  return {\n    name: \"PHP template\",\n    subLanguage: 'xml',\n    contains: [\n      {\n        begin: /<\\?(php|=)?/,\n        end: /\\?>/,\n        subLanguage: 'php',\n        contains: [\n          // We don't want the php closing tag ?> to close the PHP block when\n          // inside any of the following blocks:\n          {\n            begin: '/\\\\*',\n            end: '\\\\*/',\n            skip: true\n          },\n          {\n            begin: 'b\"',\n            end: '\"',\n            skip: true\n          },\n          {\n            begin: 'b\\'',\n            end: '\\'',\n            skip: true\n          },\n          hljs.inherit(hljs.APOS_STRING_MODE, {\n            illegal: null,\n            className: null,\n            contains: null,\n            skip: true\n          }),\n          hljs.inherit(hljs.QUOTE_STRING_MODE, {\n            illegal: null,\n            className: null,\n            contains: null,\n            skip: true\n          })\n        ]\n      }\n    ]\n  };\n}\n\nmodule.exports = phpTemplate;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/php-template.js?");

/***/ })

}]);