/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_monkey"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/monkey.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/monkey.js ***!
  \*************************************************************************************************/
/***/ ((module) => {

eval("/*\nLanguage: Monkey\nDescription: Monkey2 is an easy to use, cross platform, games oriented programming language from Blitz Research.\nAuthor: Arthur Bikmullin <devolonter@gmail.com>\nWebsite: https://blitzresearch.itch.io/monkey2\n*/\n\nfunction monkey(hljs) {\n  const NUMBER = {\n    className: 'number',\n    relevance: 0,\n    variants: [\n      {\n        begin: '[$][a-fA-F0-9]+'\n      },\n      hljs.NUMBER_MODE\n    ]\n  };\n\n  return {\n    name: 'Monkey',\n    case_insensitive: true,\n    keywords: {\n      keyword: 'public private property continue exit extern new try catch ' +\n        'eachin not abstract final select case default const local global field ' +\n        'end if then else elseif endif while wend repeat until forever for ' +\n        'to step next return module inline throw import',\n\n      built_in: 'DebugLog DebugStop Error Print ACos ACosr ASin ASinr ATan ATan2 ATan2r ATanr Abs Abs Ceil ' +\n        'Clamp Clamp Cos Cosr Exp Floor Log Max Max Min Min Pow Sgn Sgn Sin Sinr Sqrt Tan Tanr Seed PI HALFPI TWOPI',\n\n      literal: 'true false null and or shl shr mod'\n    },\n    illegal: /\\/\\*/,\n    contains: [\n      hljs.COMMENT('#rem', '#end'),\n      hljs.COMMENT(\n        \"'\",\n        '$',\n        {\n          relevance: 0\n        }\n      ),\n      {\n        className: 'function',\n        beginKeywords: 'function method',\n        end: '[(=:]|$',\n        illegal: /\\n/,\n        contains: [ hljs.UNDERSCORE_TITLE_MODE ]\n      },\n      {\n        className: 'class',\n        beginKeywords: 'class interface',\n        end: '$',\n        contains: [\n          {\n            beginKeywords: 'extends implements'\n          },\n          hljs.UNDERSCORE_TITLE_MODE\n        ]\n      },\n      {\n        className: 'built_in',\n        begin: '\\\\b(self|super)\\\\b'\n      },\n      {\n        className: 'meta',\n        begin: '\\\\s*#',\n        end: '$',\n        keywords: {\n          'meta-keyword': 'if else elseif endif end then'\n        }\n      },\n      {\n        className: 'meta',\n        begin: '^\\\\s*strict\\\\b'\n      },\n      {\n        beginKeywords: 'alias',\n        end: '=',\n        contains: [ hljs.UNDERSCORE_TITLE_MODE ]\n      },\n      hljs.QUOTE_STRING_MODE,\n      NUMBER\n    ]\n  };\n}\n\nmodule.exports = monkey;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/monkey.js?");

/***/ })

}]);