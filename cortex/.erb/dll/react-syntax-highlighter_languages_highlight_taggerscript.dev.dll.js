/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_taggerscript"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/taggerscript.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/taggerscript.js ***!
  \*******************************************************************************************************/
/***/ ((module) => {

eval("/*\nLanguage: Tagger Script\nAuthor: Philipp Wolfer <ph.wolfer@gmail.com>\nDescription: Syntax Highlighting for the Tagger Script as used by MusicBrainz Picard.\nWebsite: https://picard.musicbrainz.org\n */\nfunction taggerscript(hljs) {\n  const COMMENT = {\n    className: 'comment',\n    begin: /\\$noop\\(/,\n    end: /\\)/,\n    contains: [ {\n      begin: /\\(/,\n      end: /\\)/,\n      contains: [ 'self',\n        {\n          begin: /\\\\./\n        } ]\n    } ],\n    relevance: 10\n  };\n\n  const FUNCTION = {\n    className: 'keyword',\n    begin: /\\$(?!noop)[a-zA-Z][_a-zA-Z0-9]*/,\n    end: /\\(/,\n    excludeEnd: true\n  };\n\n  const VARIABLE = {\n    className: 'variable',\n    begin: /%[_a-zA-Z0-9:]*/,\n    end: '%'\n  };\n\n  const ESCAPE_SEQUENCE = {\n    className: 'symbol',\n    begin: /\\\\./\n  };\n\n  return {\n    name: 'Tagger Script',\n    contains: [\n      COMMENT,\n      FUNCTION,\n      VARIABLE,\n      ESCAPE_SEQUENCE\n    ]\n  };\n}\n\nmodule.exports = taggerscript;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/taggerscript.js?");

/***/ })

}]);