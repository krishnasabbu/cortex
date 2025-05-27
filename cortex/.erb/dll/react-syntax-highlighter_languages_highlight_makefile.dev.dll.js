/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_makefile"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/makefile.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/makefile.js ***!
  \***************************************************************************************************/
/***/ ((module) => {

eval("/*\nLanguage: Makefile\nAuthor: Ivan Sagalaev <maniac@softwaremaniacs.org>\nContributors: Joël Porquet <joel@porquet.org>\nWebsite: https://www.gnu.org/software/make/manual/html_node/Introduction.html\nCategory: common\n*/\n\nfunction makefile(hljs) {\n  /* Variables: simple (eg $(var)) and special (eg $@) */\n  const VARIABLE = {\n    className: 'variable',\n    variants: [\n      {\n        begin: '\\\\$\\\\(' + hljs.UNDERSCORE_IDENT_RE + '\\\\)',\n        contains: [ hljs.BACKSLASH_ESCAPE ]\n      },\n      {\n        begin: /\\$[@%<?\\^\\+\\*]/\n      }\n    ]\n  };\n  /* Quoted string with variables inside */\n  const QUOTE_STRING = {\n    className: 'string',\n    begin: /\"/,\n    end: /\"/,\n    contains: [\n      hljs.BACKSLASH_ESCAPE,\n      VARIABLE\n    ]\n  };\n  /* Function: $(func arg,...) */\n  const FUNC = {\n    className: 'variable',\n    begin: /\\$\\([\\w-]+\\s/,\n    end: /\\)/,\n    keywords: {\n      built_in:\n        'subst patsubst strip findstring filter filter-out sort ' +\n        'word wordlist firstword lastword dir notdir suffix basename ' +\n        'addsuffix addprefix join wildcard realpath abspath error warning ' +\n        'shell origin flavor foreach if or and call eval file value'\n    },\n    contains: [ VARIABLE ]\n  };\n  /* Variable assignment */\n  const ASSIGNMENT = {\n    begin: '^' + hljs.UNDERSCORE_IDENT_RE + '\\\\s*(?=[:+?]?=)'\n  };\n  /* Meta targets (.PHONY) */\n  const META = {\n    className: 'meta',\n    begin: /^\\.PHONY:/,\n    end: /$/,\n    keywords: {\n      $pattern: /[\\.\\w]+/,\n      'meta-keyword': '.PHONY'\n    }\n  };\n  /* Targets */\n  const TARGET = {\n    className: 'section',\n    begin: /^[^\\s]+:/,\n    end: /$/,\n    contains: [ VARIABLE ]\n  };\n  return {\n    name: 'Makefile',\n    aliases: [\n      'mk',\n      'mak',\n      'make',\n    ],\n    keywords: {\n      $pattern: /[\\w-]+/,\n      keyword: 'define endef undefine ifdef ifndef ifeq ifneq else endif ' +\n      'include -include sinclude override export unexport private vpath'\n    },\n    contains: [\n      hljs.HASH_COMMENT_MODE,\n      VARIABLE,\n      QUOTE_STRING,\n      FUNC,\n      ASSIGNMENT,\n      META,\n      TARGET\n    ]\n  };\n}\n\nmodule.exports = makefile;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/makefile.js?");

/***/ })

}]);