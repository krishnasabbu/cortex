/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_roboconf"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/roboconf.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/roboconf.js ***!
  \***************************************************************************************************/
/***/ ((module) => {

eval("/*\nLanguage: Roboconf\nAuthor: Vincent Zurczak <vzurczak@linagora.com>\nDescription: Syntax highlighting for Roboconf's DSL\nWebsite: http://roboconf.net\nCategory: config\n*/\n\nfunction roboconf(hljs) {\n  const IDENTIFIER = '[a-zA-Z-_][^\\\\n{]+\\\\{';\n\n  const PROPERTY = {\n    className: 'attribute',\n    begin: /[a-zA-Z-_]+/,\n    end: /\\s*:/,\n    excludeEnd: true,\n    starts: {\n      end: ';',\n      relevance: 0,\n      contains: [\n        {\n          className: 'variable',\n          begin: /\\.[a-zA-Z-_]+/\n        },\n        {\n          className: 'keyword',\n          begin: /\\(optional\\)/\n        }\n      ]\n    }\n  };\n\n  return {\n    name: 'Roboconf',\n    aliases: [\n      'graph',\n      'instances'\n    ],\n    case_insensitive: true,\n    keywords: 'import',\n    contains: [\n      // Facet sections\n      {\n        begin: '^facet ' + IDENTIFIER,\n        end: /\\}/,\n        keywords: 'facet',\n        contains: [\n          PROPERTY,\n          hljs.HASH_COMMENT_MODE\n        ]\n      },\n\n      // Instance sections\n      {\n        begin: '^\\\\s*instance of ' + IDENTIFIER,\n        end: /\\}/,\n        keywords: 'name count channels instance-data instance-state instance of',\n        illegal: /\\S/,\n        contains: [\n          'self',\n          PROPERTY,\n          hljs.HASH_COMMENT_MODE\n        ]\n      },\n\n      // Component sections\n      {\n        begin: '^' + IDENTIFIER,\n        end: /\\}/,\n        contains: [\n          PROPERTY,\n          hljs.HASH_COMMENT_MODE\n        ]\n      },\n\n      // Comments\n      hljs.HASH_COMMENT_MODE\n    ]\n  };\n}\n\nmodule.exports = roboconf;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/roboconf.js?");

/***/ })

}]);