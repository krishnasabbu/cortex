/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_dos"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/dos.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/dos.js ***!
  \**********************************************************************************************/
/***/ ((module) => {

eval("/*\nLanguage: Batch file (DOS)\nAuthor: Alexander Makarov <sam@rmcreative.ru>\nContributors: Anton Kochkov <anton.kochkov@gmail.com>\nWebsite: https://en.wikipedia.org/wiki/Batch_file\n*/\n\n/** @type LanguageFn */\nfunction dos(hljs) {\n  const COMMENT = hljs.COMMENT(\n    /^\\s*@?rem\\b/, /$/,\n    {\n      relevance: 10\n    }\n  );\n  const LABEL = {\n    className: 'symbol',\n    begin: '^\\\\s*[A-Za-z._?][A-Za-z0-9_$#@~.?]*(:|\\\\s+label)',\n    relevance: 0\n  };\n  return {\n    name: 'Batch file (DOS)',\n    aliases: [\n      'bat',\n      'cmd'\n    ],\n    case_insensitive: true,\n    illegal: /\\/\\*/,\n    keywords: {\n      keyword:\n        'if else goto for in do call exit not exist errorlevel defined ' +\n        'equ neq lss leq gtr geq',\n      built_in:\n        'prn nul lpt3 lpt2 lpt1 con com4 com3 com2 com1 aux ' +\n        'shift cd dir echo setlocal endlocal set pause copy ' +\n        'append assoc at attrib break cacls cd chcp chdir chkdsk chkntfs cls cmd color ' +\n        'comp compact convert date dir diskcomp diskcopy doskey erase fs ' +\n        'find findstr format ftype graftabl help keyb label md mkdir mode more move path ' +\n        'pause print popd pushd promt rd recover rem rename replace restore rmdir shift ' +\n        'sort start subst time title tree type ver verify vol ' +\n        // winutils\n        'ping net ipconfig taskkill xcopy ren del'\n    },\n    contains: [\n      {\n        className: 'variable',\n        begin: /%%[^ ]|%[^ ]+?%|![^ ]+?!/\n      },\n      {\n        className: 'function',\n        begin: LABEL.begin,\n        end: 'goto:eof',\n        contains: [\n          hljs.inherit(hljs.TITLE_MODE, {\n            begin: '([_a-zA-Z]\\\\w*\\\\.)*([_a-zA-Z]\\\\w*:)?[_a-zA-Z]\\\\w*'\n          }),\n          COMMENT\n        ]\n      },\n      {\n        className: 'number',\n        begin: '\\\\b\\\\d+',\n        relevance: 0\n      },\n      COMMENT\n    ]\n  };\n}\n\nmodule.exports = dos;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/dos.js?");

/***/ })

}]);