/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_elm"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/elm.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/elm.js ***!
  \**********************************************************************************************/
/***/ ((module) => {

eval("/*\nLanguage: Elm\nAuthor: Janis Voigtlaender <janis.voigtlaender@gmail.com>\nWebsite: https://elm-lang.org\nCategory: functional\n*/\n\n/** @type LanguageFn */\nfunction elm(hljs) {\n  const COMMENT = {\n    variants: [\n      hljs.COMMENT('--', '$'),\n      hljs.COMMENT(\n        /\\{-/,\n        /-\\}/,\n        {\n          contains: ['self']\n        }\n      )\n    ]\n  };\n\n  const CONSTRUCTOR = {\n    className: 'type',\n    begin: '\\\\b[A-Z][\\\\w\\']*', // TODO: other constructors (built-in, infix).\n    relevance: 0\n  };\n\n  const LIST = {\n    begin: '\\\\(',\n    end: '\\\\)',\n    illegal: '\"',\n    contains: [\n      {\n        className: 'type',\n        begin: '\\\\b[A-Z][\\\\w]*(\\\\((\\\\.\\\\.|,|\\\\w+)\\\\))?'\n      },\n      COMMENT\n    ]\n  };\n\n  const RECORD = {\n    begin: /\\{/,\n    end: /\\}/,\n    contains: LIST.contains\n  };\n\n  const CHARACTER = {\n    className: 'string',\n    begin: '\\'\\\\\\\\?.',\n    end: '\\'',\n    illegal: '.'\n  };\n\n  return {\n    name: 'Elm',\n    keywords:\n      'let in if then else case of where module import exposing ' +\n      'type alias as infix infixl infixr port effect command subscription',\n    contains: [\n\n      // Top-level constructions.\n\n      {\n        beginKeywords: 'port effect module',\n        end: 'exposing',\n        keywords: 'port effect module where command subscription exposing',\n        contains: [\n          LIST,\n          COMMENT\n        ],\n        illegal: '\\\\W\\\\.|;'\n      },\n      {\n        begin: 'import',\n        end: '$',\n        keywords: 'import as exposing',\n        contains: [\n          LIST,\n          COMMENT\n        ],\n        illegal: '\\\\W\\\\.|;'\n      },\n      {\n        begin: 'type',\n        end: '$',\n        keywords: 'type alias',\n        contains: [\n          CONSTRUCTOR,\n          LIST,\n          RECORD,\n          COMMENT\n        ]\n      },\n      {\n        beginKeywords: 'infix infixl infixr',\n        end: '$',\n        contains: [\n          hljs.C_NUMBER_MODE,\n          COMMENT\n        ]\n      },\n      {\n        begin: 'port',\n        end: '$',\n        keywords: 'port',\n        contains: [COMMENT]\n      },\n\n      // Literals and names.\n\n      CHARACTER,\n      hljs.QUOTE_STRING_MODE,\n      hljs.C_NUMBER_MODE,\n      CONSTRUCTOR,\n      hljs.inherit(hljs.TITLE_MODE, {\n        begin: '^[_a-z][\\\\w\\']*'\n      }),\n      COMMENT,\n\n      {\n        begin: '->|<-'\n      } // No markup, relevance booster\n    ],\n    illegal: /;/\n  };\n}\n\nmodule.exports = elm;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/elm.js?");

/***/ })

}]);