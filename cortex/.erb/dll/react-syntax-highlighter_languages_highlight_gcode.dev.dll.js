/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_gcode"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/gcode.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/gcode.js ***!
  \************************************************************************************************/
/***/ ((module) => {

eval("/*\n Language: G-code (ISO 6983)\n Contributors: Adam Joseph Cook <adam.joseph.cook@gmail.com>\n Description: G-code syntax highlighter for Fanuc and other common CNC machine tool controls.\n Website: https://www.sis.se/api/document/preview/911952/\n */\n\nfunction gcode(hljs) {\n  const GCODE_IDENT_RE = '[A-Z_][A-Z0-9_.]*';\n  const GCODE_CLOSE_RE = '%';\n  const GCODE_KEYWORDS = {\n    $pattern: GCODE_IDENT_RE,\n    keyword: 'IF DO WHILE ENDWHILE CALL ENDIF SUB ENDSUB GOTO REPEAT ENDREPEAT ' +\n      'EQ LT GT NE GE LE OR XOR'\n  };\n  const GCODE_START = {\n    className: 'meta',\n    begin: '([O])([0-9]+)'\n  };\n  const NUMBER = hljs.inherit(hljs.C_NUMBER_MODE, {\n    begin: '([-+]?((\\\\.\\\\d+)|(\\\\d+)(\\\\.\\\\d*)?))|' + hljs.C_NUMBER_RE\n  });\n  const GCODE_CODE = [\n    hljs.C_LINE_COMMENT_MODE,\n    hljs.C_BLOCK_COMMENT_MODE,\n    hljs.COMMENT(/\\(/, /\\)/),\n    NUMBER,\n    hljs.inherit(hljs.APOS_STRING_MODE, {\n      illegal: null\n    }),\n    hljs.inherit(hljs.QUOTE_STRING_MODE, {\n      illegal: null\n    }),\n    {\n      className: 'name',\n      begin: '([G])([0-9]+\\\\.?[0-9]?)'\n    },\n    {\n      className: 'name',\n      begin: '([M])([0-9]+\\\\.?[0-9]?)'\n    },\n    {\n      className: 'attr',\n      begin: '(VC|VS|#)',\n      end: '(\\\\d+)'\n    },\n    {\n      className: 'attr',\n      begin: '(VZOFX|VZOFY|VZOFZ)'\n    },\n    {\n      className: 'built_in',\n      begin: '(ATAN|ABS|ACOS|ASIN|SIN|COS|EXP|FIX|FUP|ROUND|LN|TAN)(\\\\[)',\n      contains: [\n        NUMBER\n      ],\n      end: '\\\\]'\n    },\n    {\n      className: 'symbol',\n      variants: [\n        {\n          begin: 'N',\n          end: '\\\\d+',\n          illegal: '\\\\W'\n        }\n      ]\n    }\n  ];\n\n  return {\n    name: 'G-code (ISO 6983)',\n    aliases: ['nc'],\n    // Some implementations (CNC controls) of G-code are interoperable with uppercase and lowercase letters seamlessly.\n    // However, most prefer all uppercase and uppercase is customary.\n    case_insensitive: true,\n    keywords: GCODE_KEYWORDS,\n    contains: [\n      {\n        className: 'meta',\n        begin: GCODE_CLOSE_RE\n      },\n      GCODE_START\n    ].concat(GCODE_CODE)\n  };\n}\n\nmodule.exports = gcode;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/gcode.js?");

/***/ })

}]);