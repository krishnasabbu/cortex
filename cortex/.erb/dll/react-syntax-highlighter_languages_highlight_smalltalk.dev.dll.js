/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_smalltalk"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/smalltalk.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/smalltalk.js ***!
  \****************************************************************************************************/
/***/ ((module) => {

eval("/*\nLanguage: Smalltalk\nDescription: Smalltalk is an object-oriented, dynamically typed reflective programming language.\nAuthor: Vladimir Gubarkov <xonixx@gmail.com>\nWebsite: https://en.wikipedia.org/wiki/Smalltalk\n*/\n\nfunction smalltalk(hljs) {\n  const VAR_IDENT_RE = '[a-z][a-zA-Z0-9_]*';\n  const CHAR = {\n    className: 'string',\n    begin: '\\\\$.{1}'\n  };\n  const SYMBOL = {\n    className: 'symbol',\n    begin: '#' + hljs.UNDERSCORE_IDENT_RE\n  };\n  return {\n    name: 'Smalltalk',\n    aliases: [ 'st' ],\n    keywords: 'self super nil true false thisContext', // only 6\n    contains: [\n      hljs.COMMENT('\"', '\"'),\n      hljs.APOS_STRING_MODE,\n      {\n        className: 'type',\n        begin: '\\\\b[A-Z][A-Za-z0-9_]*',\n        relevance: 0\n      },\n      {\n        begin: VAR_IDENT_RE + ':',\n        relevance: 0\n      },\n      hljs.C_NUMBER_MODE,\n      SYMBOL,\n      CHAR,\n      {\n        // This looks more complicated than needed to avoid combinatorial\n        // explosion under V8. It effectively means `| var1 var2 ... |` with\n        // whitespace adjacent to `|` being optional.\n        begin: '\\\\|[ ]*' + VAR_IDENT_RE + '([ ]+' + VAR_IDENT_RE + ')*[ ]*\\\\|',\n        returnBegin: true,\n        end: /\\|/,\n        illegal: /\\S/,\n        contains: [ {\n          begin: '(\\\\|[ ]*)?' + VAR_IDENT_RE\n        } ]\n      },\n      {\n        begin: '#\\\\(',\n        end: '\\\\)',\n        contains: [\n          hljs.APOS_STRING_MODE,\n          CHAR,\n          hljs.C_NUMBER_MODE,\n          SYMBOL\n        ]\n      }\n    ]\n  };\n}\n\nmodule.exports = smalltalk;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/smalltalk.js?");

/***/ })

}]);