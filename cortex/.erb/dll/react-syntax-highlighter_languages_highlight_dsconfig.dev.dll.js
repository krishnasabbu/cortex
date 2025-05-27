/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_dsconfig"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/dsconfig.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/dsconfig.js ***!
  \***************************************************************************************************/
/***/ ((module) => {

eval("/*\n Language: dsconfig\n Description: dsconfig batch configuration language for LDAP directory servers\n Contributors: Jacob Childress <jacobc@gmail.com>\n Category: enterprise, config\n */\n\n /** @type LanguageFn */\nfunction dsconfig(hljs) {\n  const QUOTED_PROPERTY = {\n    className: 'string',\n    begin: /\"/,\n    end: /\"/\n  };\n  const APOS_PROPERTY = {\n    className: 'string',\n    begin: /'/,\n    end: /'/\n  };\n  const UNQUOTED_PROPERTY = {\n    className: 'string',\n    begin: /[\\w\\-?]+:\\w+/,\n    end: /\\W/,\n    relevance: 0\n  };\n  const VALUELESS_PROPERTY = {\n    className: 'string',\n    begin: /\\w+(\\-\\w+)*/,\n    end: /(?=\\W)/,\n    relevance: 0\n  };\n\n  return {\n    keywords: 'dsconfig',\n    contains: [\n      {\n        className: 'keyword',\n        begin: '^dsconfig',\n        end: /\\s/,\n        excludeEnd: true,\n        relevance: 10\n      },\n      {\n        className: 'built_in',\n        begin: /(list|create|get|set|delete)-(\\w+)/,\n        end: /\\s/,\n        excludeEnd: true,\n        illegal: '!@#$%^&*()',\n        relevance: 10\n      },\n      {\n        className: 'built_in',\n        begin: /--(\\w+)/,\n        end: /\\s/,\n        excludeEnd: true\n      },\n      QUOTED_PROPERTY,\n      APOS_PROPERTY,\n      UNQUOTED_PROPERTY,\n      VALUELESS_PROPERTY,\n      hljs.HASH_COMMENT_MODE\n    ]\n  };\n}\n\nmodule.exports = dsconfig;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/dsconfig.js?");

/***/ })

}]);