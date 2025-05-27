/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_fsharp"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/fsharp.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/fsharp.js ***!
  \*************************************************************************************************/
/***/ ((module) => {

eval("/*\nLanguage: F#\nAuthor: Jonas Follesø <jonas@follesoe.no>\nContributors: Troy Kershaw <hello@troykershaw.com>, Henrik Feldt <henrik@haf.se>\nWebsite: https://docs.microsoft.com/en-us/dotnet/fsharp/\nCategory: functional\n*/\n\n/** @type LanguageFn */\nfunction fsharp(hljs) {\n  const TYPEPARAM = {\n    begin: '<',\n    end: '>',\n    contains: [\n      hljs.inherit(hljs.TITLE_MODE, {\n        begin: /'[a-zA-Z0-9_]+/\n      })\n    ]\n  };\n\n  return {\n    name: 'F#',\n    aliases: ['fs'],\n    keywords:\n      'abstract and as assert base begin class default delegate do done ' +\n      'downcast downto elif else end exception extern false finally for ' +\n      'fun function global if in inherit inline interface internal lazy let ' +\n      'match member module mutable namespace new null of open or ' +\n      'override private public rec return sig static struct then to ' +\n      'true try type upcast use val void when while with yield',\n    illegal: /\\/\\*/,\n    contains: [\n      {\n        // monad builder keywords (matches before non-bang kws)\n        className: 'keyword',\n        begin: /\\b(yield|return|let|do)!/\n      },\n      {\n        className: 'string',\n        begin: '@\"',\n        end: '\"',\n        contains: [\n          {\n            begin: '\"\"'\n          }\n        ]\n      },\n      {\n        className: 'string',\n        begin: '\"\"\"',\n        end: '\"\"\"'\n      },\n      hljs.COMMENT('\\\\(\\\\*(\\\\s)', '\\\\*\\\\)', {\n        contains: [\"self\"]\n      }),\n      {\n        className: 'class',\n        beginKeywords: 'type',\n        end: '\\\\(|=|$',\n        excludeEnd: true,\n        contains: [\n          hljs.UNDERSCORE_TITLE_MODE,\n          TYPEPARAM\n        ]\n      },\n      {\n        className: 'meta',\n        begin: '\\\\[<',\n        end: '>\\\\]',\n        relevance: 10\n      },\n      {\n        className: 'symbol',\n        begin: '\\\\B(\\'[A-Za-z])\\\\b',\n        contains: [hljs.BACKSLASH_ESCAPE]\n      },\n      hljs.C_LINE_COMMENT_MODE,\n      hljs.inherit(hljs.QUOTE_STRING_MODE, {\n        illegal: null\n      }),\n      hljs.C_NUMBER_MODE\n    ]\n  };\n}\n\nmodule.exports = fsharp;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/fsharp.js?");

/***/ })

}]);