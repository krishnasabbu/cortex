/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_ocaml"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/ocaml.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/ocaml.js ***!
  \************************************************************************************************/
/***/ ((module) => {

eval("/*\nLanguage: OCaml\nAuthor: Mehdi Dogguy <mehdi@dogguy.org>\nContributors: Nicolas Braud-Santoni <nicolas.braud-santoni@ens-cachan.fr>, Mickael Delahaye <mickael.delahaye@gmail.com>\nDescription: OCaml language definition.\nWebsite: https://ocaml.org\nCategory: functional\n*/\n\nfunction ocaml(hljs) {\n  /* missing support for heredoc-like string (OCaml 4.0.2+) */\n  return {\n    name: 'OCaml',\n    aliases: ['ml'],\n    keywords: {\n      $pattern: '[a-z_]\\\\w*!?',\n      keyword:\n        'and as assert asr begin class constraint do done downto else end ' +\n        'exception external for fun function functor if in include ' +\n        'inherit! inherit initializer land lazy let lor lsl lsr lxor match method!|10 method ' +\n        'mod module mutable new object of open! open or private rec sig struct ' +\n        'then to try type val! val virtual when while with ' +\n        /* camlp4 */\n        'parser value',\n      built_in:\n        /* built-in types */\n        'array bool bytes char exn|5 float int int32 int64 list lazy_t|5 nativeint|5 string unit ' +\n        /* (some) types in Pervasives */\n        'in_channel out_channel ref',\n      literal:\n        'true false'\n    },\n    illegal: /\\/\\/|>>/,\n    contains: [\n      {\n        className: 'literal',\n        begin: '\\\\[(\\\\|\\\\|)?\\\\]|\\\\(\\\\)',\n        relevance: 0\n      },\n      hljs.COMMENT(\n        '\\\\(\\\\*',\n        '\\\\*\\\\)',\n        {\n          contains: ['self']\n        }\n      ),\n      { /* type variable */\n        className: 'symbol',\n        begin: '\\'[A-Za-z_](?!\\')[\\\\w\\']*'\n        /* the grammar is ambiguous on how 'a'b should be interpreted but not the compiler */\n      },\n      { /* polymorphic variant */\n        className: 'type',\n        begin: '`[A-Z][\\\\w\\']*'\n      },\n      { /* module or constructor */\n        className: 'type',\n        begin: '\\\\b[A-Z][\\\\w\\']*',\n        relevance: 0\n      },\n      { /* don't color identifiers, but safely catch all identifiers with '*/\n        begin: '[a-z_]\\\\w*\\'[\\\\w\\']*', relevance: 0\n      },\n      hljs.inherit(hljs.APOS_STRING_MODE, {className: 'string', relevance: 0}),\n      hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null}),\n      {\n        className: 'number',\n        begin:\n          '\\\\b(0[xX][a-fA-F0-9_]+[Lln]?|' +\n          '0[oO][0-7_]+[Lln]?|' +\n          '0[bB][01_]+[Lln]?|' +\n          '[0-9][0-9_]*([Lln]|(\\\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)',\n        relevance: 0\n      },\n      {\n        begin: /->/ // relevance booster\n      }\n    ]\n  }\n}\n\nmodule.exports = ocaml;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/ocaml.js?");

/***/ })

}]);