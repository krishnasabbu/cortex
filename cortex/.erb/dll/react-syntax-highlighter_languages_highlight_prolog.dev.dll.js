/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_prolog"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/prolog.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/prolog.js ***!
  \*************************************************************************************************/
/***/ ((module) => {

eval("/*\nLanguage: Prolog\nDescription: Prolog is a general purpose logic programming language associated with artificial intelligence and computational linguistics.\nAuthor: Raivo Laanemets <raivo@infdot.com>\nWebsite: https://en.wikipedia.org/wiki/Prolog\n*/\n\nfunction prolog(hljs) {\n  const ATOM = {\n\n    begin: /[a-z][A-Za-z0-9_]*/,\n    relevance: 0\n  };\n\n  const VAR = {\n\n    className: 'symbol',\n    variants: [\n      {\n        begin: /[A-Z][a-zA-Z0-9_]*/\n      },\n      {\n        begin: /_[A-Za-z0-9_]*/\n      }\n    ],\n    relevance: 0\n  };\n\n  const PARENTED = {\n\n    begin: /\\(/,\n    end: /\\)/,\n    relevance: 0\n  };\n\n  const LIST = {\n\n    begin: /\\[/,\n    end: /\\]/\n  };\n\n  const LINE_COMMENT = {\n\n    className: 'comment',\n    begin: /%/,\n    end: /$/,\n    contains: [ hljs.PHRASAL_WORDS_MODE ]\n  };\n\n  const BACKTICK_STRING = {\n\n    className: 'string',\n    begin: /`/,\n    end: /`/,\n    contains: [ hljs.BACKSLASH_ESCAPE ]\n  };\n\n  const CHAR_CODE = {\n    className: 'string', // 0'a etc.\n    begin: /0'(\\\\'|.)/\n  };\n\n  const SPACE_CODE = {\n    className: 'string',\n    begin: /0'\\\\s/ // 0'\\s\n  };\n\n  const PRED_OP = { // relevance booster\n    begin: /:-/\n  };\n\n  const inner = [\n\n    ATOM,\n    VAR,\n    PARENTED,\n    PRED_OP,\n    LIST,\n    LINE_COMMENT,\n    hljs.C_BLOCK_COMMENT_MODE,\n    hljs.QUOTE_STRING_MODE,\n    hljs.APOS_STRING_MODE,\n    BACKTICK_STRING,\n    CHAR_CODE,\n    SPACE_CODE,\n    hljs.C_NUMBER_MODE\n  ];\n\n  PARENTED.contains = inner;\n  LIST.contains = inner;\n\n  return {\n    name: 'Prolog',\n    contains: inner.concat([\n      { // relevance booster\n        begin: /\\.$/\n      }\n    ])\n  };\n}\n\nmodule.exports = prolog;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/prolog.js?");

/***/ })

}]);