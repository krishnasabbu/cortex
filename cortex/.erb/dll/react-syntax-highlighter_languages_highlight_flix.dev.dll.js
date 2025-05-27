/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_flix"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/flix.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/flix.js ***!
  \***********************************************************************************************/
/***/ ((module) => {

eval("/*\n Language: Flix\n Category: functional\n Author: Magnus Madsen <mmadsen@uwaterloo.ca>\n Website: https://flix.dev/\n */\n\n /** @type LanguageFn */\nfunction flix(hljs) {\n  const CHAR = {\n    className: 'string',\n    begin: /'(.|\\\\[xXuU][a-zA-Z0-9]+)'/\n  };\n\n  const STRING = {\n    className: 'string',\n    variants: [{\n      begin: '\"',\n      end: '\"'\n    }]\n  };\n\n  const NAME = {\n    className: 'title',\n    relevance: 0,\n    begin: /[^0-9\\n\\t \"'(),.`{}\\[\\]:;][^\\n\\t \"'(),.`{}\\[\\]:;]+|[^0-9\\n\\t \"'(),.`{}\\[\\]:;=]/\n  };\n\n  const METHOD = {\n    className: 'function',\n    beginKeywords: 'def',\n    end: /[:={\\[(\\n;]/,\n    excludeEnd: true,\n    contains: [NAME]\n  };\n\n  return {\n    name: 'Flix',\n    keywords: {\n      literal: 'true false',\n      keyword: 'case class def else enum if impl import in lat rel index let match namespace switch type yield with'\n    },\n    contains: [\n      hljs.C_LINE_COMMENT_MODE,\n      hljs.C_BLOCK_COMMENT_MODE,\n      CHAR,\n      STRING,\n      METHOD,\n      hljs.C_NUMBER_MODE\n    ]\n  };\n}\n\nmodule.exports = flix;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/flix.js?");

/***/ })

}]);