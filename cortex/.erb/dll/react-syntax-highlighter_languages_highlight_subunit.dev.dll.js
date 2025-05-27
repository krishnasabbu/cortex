/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_subunit"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/subunit.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/subunit.js ***!
  \**************************************************************************************************/
/***/ ((module) => {

eval("/*\nLanguage: SubUnit\nAuthor: Sergey Bronnikov <sergeyb@bronevichok.ru>\nWebsite: https://pypi.org/project/python-subunit/\n*/\n\nfunction subunit(hljs) {\n  const DETAILS = {\n    className: 'string',\n    begin: '\\\\[\\n(multipart)?',\n    end: '\\\\]\\n'\n  };\n  const TIME = {\n    className: 'string',\n    begin: '\\\\d{4}-\\\\d{2}-\\\\d{2}(\\\\s+)\\\\d{2}:\\\\d{2}:\\\\d{2}\\.\\\\d+Z'\n  };\n  const PROGRESSVALUE = {\n    className: 'string',\n    begin: '(\\\\+|-)\\\\d+'\n  };\n  const KEYWORDS = {\n    className: 'keyword',\n    relevance: 10,\n    variants: [\n      {\n        begin: '^(test|testing|success|successful|failure|error|skip|xfail|uxsuccess)(:?)\\\\s+(test)?'\n      },\n      {\n        begin: '^progress(:?)(\\\\s+)?(pop|push)?'\n      },\n      {\n        begin: '^tags:'\n      },\n      {\n        begin: '^time:'\n      }\n    ]\n  };\n  return {\n    name: 'SubUnit',\n    case_insensitive: true,\n    contains: [\n      DETAILS,\n      TIME,\n      PROGRESSVALUE,\n      KEYWORDS\n    ]\n  };\n}\n\nmodule.exports = subunit;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/subunit.js?");

/***/ })

}]);