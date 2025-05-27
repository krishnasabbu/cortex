/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_pony"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/pony.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/pony.js ***!
  \***********************************************************************************************/
/***/ ((module) => {

eval("/*\nLanguage: Pony\nAuthor: Joe Eli McIlvain <joe.eli.mac@gmail.com>\nDescription: Pony is an open-source, object-oriented, actor-model,\n             capabilities-secure, high performance programming language.\nWebsite: https://www.ponylang.io\n*/\n\nfunction pony(hljs) {\n  const KEYWORDS = {\n    keyword:\n      'actor addressof and as be break class compile_error compile_intrinsic ' +\n      'consume continue delegate digestof do else elseif embed end error ' +\n      'for fun if ifdef in interface is isnt lambda let match new not object ' +\n      'or primitive recover repeat return struct then trait try type until ' +\n      'use var where while with xor',\n    meta:\n      'iso val tag trn box ref',\n    literal:\n      'this false true'\n  };\n\n  const TRIPLE_QUOTE_STRING_MODE = {\n    className: 'string',\n    begin: '\"\"\"',\n    end: '\"\"\"',\n    relevance: 10\n  };\n\n  const QUOTE_STRING_MODE = {\n    className: 'string',\n    begin: '\"',\n    end: '\"',\n    contains: [ hljs.BACKSLASH_ESCAPE ]\n  };\n\n  const SINGLE_QUOTE_CHAR_MODE = {\n    className: 'string',\n    begin: '\\'',\n    end: '\\'',\n    contains: [ hljs.BACKSLASH_ESCAPE ],\n    relevance: 0\n  };\n\n  const TYPE_NAME = {\n    className: 'type',\n    begin: '\\\\b_?[A-Z][\\\\w]*',\n    relevance: 0\n  };\n\n  const PRIMED_NAME = {\n    begin: hljs.IDENT_RE + '\\'',\n    relevance: 0\n  };\n\n  const NUMBER_MODE = {\n    className: 'number',\n    begin: '(-?)(\\\\b0[xX][a-fA-F0-9]+|\\\\b0[bB][01]+|(\\\\b\\\\d+(_\\\\d+)?(\\\\.\\\\d*)?|\\\\.\\\\d+)([eE][-+]?\\\\d+)?)',\n    relevance: 0\n  };\n\n  /**\n   * The `FUNCTION` and `CLASS` modes were intentionally removed to simplify\n   * highlighting and fix cases like\n   * ```\n   * interface Iterator[A: A]\n   *   fun has_next(): Bool\n   *   fun next(): A?\n   * ```\n   * where it is valid to have a function head without a body\n   */\n\n  return {\n    name: 'Pony',\n    keywords: KEYWORDS,\n    contains: [\n      TYPE_NAME,\n      TRIPLE_QUOTE_STRING_MODE,\n      QUOTE_STRING_MODE,\n      SINGLE_QUOTE_CHAR_MODE,\n      PRIMED_NAME,\n      NUMBER_MODE,\n      hljs.C_LINE_COMMENT_MODE,\n      hljs.C_BLOCK_COMMENT_MODE\n    ]\n  };\n}\n\nmodule.exports = pony;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/pony.js?");

/***/ })

}]);