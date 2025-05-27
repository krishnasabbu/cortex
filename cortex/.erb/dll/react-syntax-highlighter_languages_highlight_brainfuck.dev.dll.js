/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_brainfuck"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/brainfuck.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/brainfuck.js ***!
  \****************************************************************************************************/
/***/ ((module) => {

eval("/*\nLanguage: Brainfuck\nAuthor: Evgeny Stepanischev <imbolk@gmail.com>\nWebsite: https://esolangs.org/wiki/Brainfuck\n*/\n\n/** @type LanguageFn */\nfunction brainfuck(hljs) {\n  const LITERAL = {\n    className: 'literal',\n    begin: /[+-]/,\n    relevance: 0\n  };\n  return {\n    name: 'Brainfuck',\n    aliases: ['bf'],\n    contains: [\n      hljs.COMMENT(\n        '[^\\\\[\\\\]\\\\.,\\\\+\\\\-<> \\r\\n]',\n        '[\\\\[\\\\]\\\\.,\\\\+\\\\-<> \\r\\n]',\n        {\n          returnEnd: true,\n          relevance: 0\n        }\n      ),\n      {\n        className: 'title',\n        begin: '[\\\\[\\\\]]',\n        relevance: 0\n      },\n      {\n        className: 'string',\n        begin: '[\\\\.,]',\n        relevance: 0\n      },\n      {\n        // this mode works as the only relevance counter\n        begin: /(?:\\+\\+|--)/,\n        contains: [LITERAL]\n      },\n      LITERAL\n    ]\n  };\n}\n\nmodule.exports = brainfuck;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/brainfuck.js?");

/***/ })

}]);