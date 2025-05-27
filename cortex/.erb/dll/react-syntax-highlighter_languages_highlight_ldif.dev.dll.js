/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_ldif"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/ldif.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/ldif.js ***!
  \***********************************************************************************************/
/***/ ((module) => {

eval("/*\nLanguage: LDIF\nContributors: Jacob Childress <jacobc@gmail.com>\nCategory: enterprise, config\nWebsite: https://en.wikipedia.org/wiki/LDAP_Data_Interchange_Format\n*/\nfunction ldif(hljs) {\n  return {\n    name: 'LDIF',\n    contains: [\n      {\n        className: 'attribute',\n        begin: '^dn',\n        end: ': ',\n        excludeEnd: true,\n        starts: {\n          end: '$',\n          relevance: 0\n        },\n        relevance: 10\n      },\n      {\n        className: 'attribute',\n        begin: '^\\\\w',\n        end: ': ',\n        excludeEnd: true,\n        starts: {\n          end: '$',\n          relevance: 0\n        }\n      },\n      {\n        className: 'literal',\n        begin: '^-',\n        end: '$'\n      },\n      hljs.HASH_COMMENT_MODE\n    ]\n  };\n}\n\nmodule.exports = ldif;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/ldif.js?");

/***/ })

}]);