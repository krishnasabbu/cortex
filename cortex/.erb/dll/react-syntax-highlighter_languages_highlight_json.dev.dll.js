/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_json"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/json.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/json.js ***!
  \***********************************************************************************************/
/***/ ((module) => {

eval("/*\nLanguage: JSON\nDescription: JSON (JavaScript Object Notation) is a lightweight data-interchange format.\nAuthor: Ivan Sagalaev <maniac@softwaremaniacs.org>\nWebsite: http://www.json.org\nCategory: common, protocols\n*/\n\nfunction json(hljs) {\n  const LITERALS = {\n    literal: 'true false null'\n  };\n  const ALLOWED_COMMENTS = [\n    hljs.C_LINE_COMMENT_MODE,\n    hljs.C_BLOCK_COMMENT_MODE\n  ];\n  const TYPES = [\n    hljs.QUOTE_STRING_MODE,\n    hljs.C_NUMBER_MODE\n  ];\n  const VALUE_CONTAINER = {\n    end: ',',\n    endsWithParent: true,\n    excludeEnd: true,\n    contains: TYPES,\n    keywords: LITERALS\n  };\n  const OBJECT = {\n    begin: /\\{/,\n    end: /\\}/,\n    contains: [\n      {\n        className: 'attr',\n        begin: /\"/,\n        end: /\"/,\n        contains: [hljs.BACKSLASH_ESCAPE],\n        illegal: '\\\\n'\n      },\n      hljs.inherit(VALUE_CONTAINER, {\n        begin: /:/\n      })\n    ].concat(ALLOWED_COMMENTS),\n    illegal: '\\\\S'\n  };\n  const ARRAY = {\n    begin: '\\\\[',\n    end: '\\\\]',\n    contains: [hljs.inherit(VALUE_CONTAINER)], // inherit is a workaround for a bug that makes shared modes with endsWithParent compile only the ending of one of the parents\n    illegal: '\\\\S'\n  };\n  TYPES.push(OBJECT, ARRAY);\n  ALLOWED_COMMENTS.forEach(function(rule) {\n    TYPES.push(rule);\n  });\n  return {\n    name: 'JSON',\n    contains: TYPES,\n    keywords: LITERALS,\n    illegal: '\\\\S'\n  };\n}\n\nmodule.exports = json;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/json.js?");

/***/ })

}]);