/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_dockerfile"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/dockerfile.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/dockerfile.js ***!
  \*****************************************************************************************************/
/***/ ((module) => {

eval("/*\nLanguage: Dockerfile\nRequires: bash.js\nAuthor: Alexis Hénaut <alexis@henaut.net>\nDescription: language definition for Dockerfile files\nWebsite: https://docs.docker.com/engine/reference/builder/\nCategory: config\n*/\n\n/** @type LanguageFn */\nfunction dockerfile(hljs) {\n  return {\n    name: 'Dockerfile',\n    aliases: ['docker'],\n    case_insensitive: true,\n    keywords: 'from maintainer expose env arg user onbuild stopsignal',\n    contains: [\n      hljs.HASH_COMMENT_MODE,\n      hljs.APOS_STRING_MODE,\n      hljs.QUOTE_STRING_MODE,\n      hljs.NUMBER_MODE,\n      {\n        beginKeywords: 'run cmd entrypoint volume add copy workdir label healthcheck shell',\n        starts: {\n          end: /[^\\\\]$/,\n          subLanguage: 'bash'\n        }\n      }\n    ],\n    illegal: '</'\n  };\n}\n\nmodule.exports = dockerfile;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/dockerfile.js?");

/***/ })

}]);