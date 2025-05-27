/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_cal"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/cal.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/cal.js ***!
  \**********************************************************************************************/
/***/ ((module) => {

eval("/*\nLanguage: C/AL\nAuthor: Kenneth Fuglsang Christensen <kfuglsang@gmail.com>\nDescription: Provides highlighting of Microsoft Dynamics NAV C/AL code files\nWebsite: https://docs.microsoft.com/en-us/dynamics-nav/programming-in-c-al\n*/\n\n/** @type LanguageFn */\nfunction cal(hljs) {\n  const KEYWORDS =\n    'div mod in and or not xor asserterror begin case do downto else end exit for if of repeat then to ' +\n    'until while with var';\n  const LITERALS = 'false true';\n  const COMMENT_MODES = [\n    hljs.C_LINE_COMMENT_MODE,\n    hljs.COMMENT(\n      /\\{/,\n      /\\}/,\n      {\n        relevance: 0\n      }\n    ),\n    hljs.COMMENT(\n      /\\(\\*/,\n      /\\*\\)/,\n      {\n        relevance: 10\n      }\n    )\n  ];\n  const STRING = {\n    className: 'string',\n    begin: /'/,\n    end: /'/,\n    contains: [{\n      begin: /''/\n    }]\n  };\n  const CHAR_STRING = {\n    className: 'string',\n    begin: /(#\\d+)+/\n  };\n  const DATE = {\n    className: 'number',\n    begin: '\\\\b\\\\d+(\\\\.\\\\d+)?(DT|D|T)',\n    relevance: 0\n  };\n  const DBL_QUOTED_VARIABLE = {\n    className: 'string', // not a string technically but makes sense to be highlighted in the same style\n    begin: '\"',\n    end: '\"'\n  };\n\n  const PROCEDURE = {\n    className: 'function',\n    beginKeywords: 'procedure',\n    end: /[:;]/,\n    keywords: 'procedure|10',\n    contains: [\n      hljs.TITLE_MODE,\n      {\n        className: 'params',\n        begin: /\\(/,\n        end: /\\)/,\n        keywords: KEYWORDS,\n        contains: [\n          STRING,\n          CHAR_STRING\n        ]\n      }\n    ].concat(COMMENT_MODES)\n  };\n\n  const OBJECT = {\n    className: 'class',\n    begin: 'OBJECT (Table|Form|Report|Dataport|Codeunit|XMLport|MenuSuite|Page|Query) (\\\\d+) ([^\\\\r\\\\n]+)',\n    returnBegin: true,\n    contains: [\n      hljs.TITLE_MODE,\n      PROCEDURE\n    ]\n  };\n\n  return {\n    name: 'C/AL',\n    case_insensitive: true,\n    keywords: {\n      keyword: KEYWORDS,\n      literal: LITERALS\n    },\n    illegal: /\\/\\*/,\n    contains: [\n      STRING,\n      CHAR_STRING,\n      DATE,\n      DBL_QUOTED_VARIABLE,\n      hljs.NUMBER_MODE,\n      OBJECT,\n      PROCEDURE\n    ]\n  };\n}\n\nmodule.exports = cal;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/cal.js?");

/***/ })

}]);