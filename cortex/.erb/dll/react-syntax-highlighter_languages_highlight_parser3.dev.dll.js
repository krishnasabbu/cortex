/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_parser3"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/parser3.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/parser3.js ***!
  \**************************************************************************************************/
/***/ ((module) => {

eval("/*\nLanguage: Parser3\nRequires: xml.js\nAuthor: Oleg Volchkov <oleg@volchkov.net>\nWebsite: https://www.parser.ru/en/\nCategory: template\n*/\n\nfunction parser3(hljs) {\n  const CURLY_SUBCOMMENT = hljs.COMMENT(\n    /\\{/,\n    /\\}/,\n    {\n      contains: [ 'self' ]\n    }\n  );\n  return {\n    name: 'Parser3',\n    subLanguage: 'xml',\n    relevance: 0,\n    contains: [\n      hljs.COMMENT('^#', '$'),\n      hljs.COMMENT(\n        /\\^rem\\{/,\n        /\\}/,\n        {\n          relevance: 10,\n          contains: [ CURLY_SUBCOMMENT ]\n        }\n      ),\n      {\n        className: 'meta',\n        begin: '^@(?:BASE|USE|CLASS|OPTIONS)$',\n        relevance: 10\n      },\n      {\n        className: 'title',\n        begin: '@[\\\\w\\\\-]+\\\\[[\\\\w^;\\\\-]*\\\\](?:\\\\[[\\\\w^;\\\\-]*\\\\])?(?:.*)$'\n      },\n      {\n        className: 'variable',\n        begin: /\\$\\{?[\\w\\-.:]+\\}?/\n      },\n      {\n        className: 'keyword',\n        begin: /\\^[\\w\\-.:]+/\n      },\n      {\n        className: 'number',\n        begin: '\\\\^#[0-9a-fA-F]+'\n      },\n      hljs.C_NUMBER_MODE\n    ]\n  };\n}\n\nmodule.exports = parser3;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/parser3.js?");

/***/ })

}]);