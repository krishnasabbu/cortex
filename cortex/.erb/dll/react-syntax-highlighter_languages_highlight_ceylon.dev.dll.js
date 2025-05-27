/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_ceylon"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/ceylon.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/ceylon.js ***!
  \*************************************************************************************************/
/***/ ((module) => {

eval("/*\nLanguage: Ceylon\nAuthor: Lucas Werkmeister <mail@lucaswerkmeister.de>\nWebsite: https://ceylon-lang.org\n*/\n\n/** @type LanguageFn */\nfunction ceylon(hljs) {\n  // 2.3. Identifiers and keywords\n  const KEYWORDS =\n    'assembly module package import alias class interface object given value ' +\n    'assign void function new of extends satisfies abstracts in out return ' +\n    'break continue throw assert dynamic if else switch case for while try ' +\n    'catch finally then let this outer super is exists nonempty';\n  // 7.4.1 Declaration Modifiers\n  const DECLARATION_MODIFIERS =\n    'shared abstract formal default actual variable late native deprecated ' +\n    'final sealed annotation suppressWarnings small';\n  // 7.4.2 Documentation\n  const DOCUMENTATION =\n    'doc by license see throws tagged';\n  const SUBST = {\n    className: 'subst',\n    excludeBegin: true,\n    excludeEnd: true,\n    begin: /``/,\n    end: /``/,\n    keywords: KEYWORDS,\n    relevance: 10\n  };\n  const EXPRESSIONS = [\n    {\n      // verbatim string\n      className: 'string',\n      begin: '\"\"\"',\n      end: '\"\"\"',\n      relevance: 10\n    },\n    {\n      // string literal or template\n      className: 'string',\n      begin: '\"',\n      end: '\"',\n      contains: [SUBST]\n    },\n    {\n      // character literal\n      className: 'string',\n      begin: \"'\",\n      end: \"'\"\n    },\n    {\n      // numeric literal\n      className: 'number',\n      begin: '#[0-9a-fA-F_]+|\\\\$[01_]+|[0-9_]+(?:\\\\.[0-9_](?:[eE][+-]?\\\\d+)?)?[kMGTPmunpf]?',\n      relevance: 0\n    }\n  ];\n  SUBST.contains = EXPRESSIONS;\n\n  return {\n    name: 'Ceylon',\n    keywords: {\n      keyword: KEYWORDS + ' ' + DECLARATION_MODIFIERS,\n      meta: DOCUMENTATION\n    },\n    illegal: '\\\\$[^01]|#[^0-9a-fA-F]',\n    contains: [\n      hljs.C_LINE_COMMENT_MODE,\n      hljs.COMMENT('/\\\\*', '\\\\*/', {\n        contains: ['self']\n      }),\n      {\n        // compiler annotation\n        className: 'meta',\n        begin: '@[a-z]\\\\w*(?::\"[^\"]*\")?'\n      }\n    ].concat(EXPRESSIONS)\n  };\n}\n\nmodule.exports = ceylon;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/ceylon.js?");

/***/ })

}]);