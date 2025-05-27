/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_erlangRepl"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/erlang-repl.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/erlang-repl.js ***!
  \******************************************************************************************************/
/***/ ((module) => {

eval("/**\n * @param {string} value\n * @returns {RegExp}\n * */\n\n/**\n * @param {RegExp | string } re\n * @returns {string}\n */\nfunction source(re) {\n  if (!re) return null;\n  if (typeof re === \"string\") return re;\n\n  return re.source;\n}\n\n/**\n * @param {...(RegExp | string) } args\n * @returns {string}\n */\nfunction concat(...args) {\n  const joined = args.map((x) => source(x)).join(\"\");\n  return joined;\n}\n\n/*\nLanguage: Erlang REPL\nAuthor: Sergey Ignatov <sergey@ignatov.spb.su>\nWebsite: https://www.erlang.org\nCategory: functional\n*/\n\n/** @type LanguageFn */\nfunction erlangRepl(hljs) {\n  return {\n    name: 'Erlang REPL',\n    keywords: {\n      built_in:\n        'spawn spawn_link self',\n      keyword:\n        'after and andalso|10 band begin bnot bor bsl bsr bxor case catch cond div end fun if ' +\n        'let not of or orelse|10 query receive rem try when xor'\n    },\n    contains: [\n      {\n        className: 'meta',\n        begin: '^[0-9]+> ',\n        relevance: 10\n      },\n      hljs.COMMENT('%', '$'),\n      {\n        className: 'number',\n        begin: '\\\\b(\\\\d+(_\\\\d+)*#[a-fA-F0-9]+(_[a-fA-F0-9]+)*|\\\\d+(_\\\\d+)*(\\\\.\\\\d+(_\\\\d+)*)?([eE][-+]?\\\\d+)?)',\n        relevance: 0\n      },\n      hljs.APOS_STRING_MODE,\n      hljs.QUOTE_STRING_MODE,\n      {\n        begin: concat(\n          /\\?(::)?/,\n          /([A-Z]\\w*)/, // at least one identifier\n          /((::)[A-Z]\\w*)*/ // perhaps more\n        )\n      },\n      {\n        begin: '->'\n      },\n      {\n        begin: 'ok'\n      },\n      {\n        begin: '!'\n      },\n      {\n        begin: '(\\\\b[a-z\\'][a-zA-Z0-9_\\']*:[a-z\\'][a-zA-Z0-9_\\']*)|(\\\\b[a-z\\'][a-zA-Z0-9_\\']*)',\n        relevance: 0\n      },\n      {\n        begin: '[A-Z][a-zA-Z0-9_\\']*',\n        relevance: 0\n      }\n    ]\n  };\n}\n\nmodule.exports = erlangRepl;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/erlang-repl.js?");

/***/ })

}]);