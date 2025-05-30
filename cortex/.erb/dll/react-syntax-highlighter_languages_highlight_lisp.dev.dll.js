/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_lisp"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/lisp.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/lisp.js ***!
  \***********************************************************************************************/
/***/ ((module) => {

eval("/*\nLanguage: Lisp\nDescription: Generic lisp syntax\nAuthor: Vasily Polovnyov <vast@whiteants.net>\nCategory: lisp\n*/\n\nfunction lisp(hljs) {\n  var LISP_IDENT_RE = '[a-zA-Z_\\\\-+\\\\*\\\\/<=>&#][a-zA-Z0-9_\\\\-+*\\\\/<=>&#!]*';\n  var MEC_RE = '\\\\|[^]*?\\\\|';\n  var LISP_SIMPLE_NUMBER_RE = '(-|\\\\+)?\\\\d+(\\\\.\\\\d+|\\\\/\\\\d+)?((d|e|f|l|s|D|E|F|L|S)(\\\\+|-)?\\\\d+)?';\n  var LITERAL = {\n    className: 'literal',\n    begin: '\\\\b(t{1}|nil)\\\\b'\n  };\n  var NUMBER = {\n    className: 'number',\n    variants: [\n      {begin: LISP_SIMPLE_NUMBER_RE, relevance: 0},\n      {begin: '#(b|B)[0-1]+(/[0-1]+)?'},\n      {begin: '#(o|O)[0-7]+(/[0-7]+)?'},\n      {begin: '#(x|X)[0-9a-fA-F]+(/[0-9a-fA-F]+)?'},\n      {begin: '#(c|C)\\\\(' + LISP_SIMPLE_NUMBER_RE + ' +' + LISP_SIMPLE_NUMBER_RE, end: '\\\\)'}\n    ]\n  };\n  var STRING = hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null});\n  var COMMENT = hljs.COMMENT(\n    ';', '$',\n    {\n      relevance: 0\n    }\n  );\n  var VARIABLE = {\n    begin: '\\\\*', end: '\\\\*'\n  };\n  var KEYWORD = {\n    className: 'symbol',\n    begin: '[:&]' + LISP_IDENT_RE\n  };\n  var IDENT = {\n    begin: LISP_IDENT_RE,\n    relevance: 0\n  };\n  var MEC = {\n    begin: MEC_RE\n  };\n  var QUOTED_LIST = {\n    begin: '\\\\(', end: '\\\\)',\n    contains: ['self', LITERAL, STRING, NUMBER, IDENT]\n  };\n  var QUOTED = {\n    contains: [NUMBER, STRING, VARIABLE, KEYWORD, QUOTED_LIST, IDENT],\n    variants: [\n      {\n        begin: '[\\'`]\\\\(', end: '\\\\)'\n      },\n      {\n        begin: '\\\\(quote ', end: '\\\\)',\n        keywords: {name: 'quote'}\n      },\n      {\n        begin: '\\'' + MEC_RE\n      }\n    ]\n  };\n  var QUOTED_ATOM = {\n    variants: [\n      {begin: '\\'' + LISP_IDENT_RE},\n      {begin: '#\\'' + LISP_IDENT_RE + '(::' + LISP_IDENT_RE + ')*'}\n    ]\n  };\n  var LIST = {\n    begin: '\\\\(\\\\s*', end: '\\\\)'\n  };\n  var BODY = {\n    endsWithParent: true,\n    relevance: 0\n  };\n  LIST.contains = [\n    {\n      className: 'name',\n      variants: [\n        {\n          begin: LISP_IDENT_RE,\n          relevance: 0,\n        },\n        {begin: MEC_RE}\n      ]\n    },\n    BODY\n  ];\n  BODY.contains = [QUOTED, QUOTED_ATOM, LIST, LITERAL, NUMBER, STRING, COMMENT, VARIABLE, KEYWORD, MEC, IDENT];\n\n  return {\n    name: 'Lisp',\n    illegal: /\\S/,\n    contains: [\n      NUMBER,\n      hljs.SHEBANG(),\n      LITERAL,\n      STRING,\n      COMMENT,\n      QUOTED,\n      QUOTED_ATOM,\n      LIST,\n      IDENT\n    ]\n  };\n}\n\nmodule.exports = lisp;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/lisp.js?");

/***/ })

}]);