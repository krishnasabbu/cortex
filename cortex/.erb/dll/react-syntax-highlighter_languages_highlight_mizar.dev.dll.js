/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_mizar"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/mizar.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/mizar.js ***!
  \************************************************************************************************/
/***/ ((module) => {

eval("/*\nLanguage: Mizar\nDescription: The Mizar Language is a formal language derived from the mathematical vernacular.\nAuthor: Kelley van Evert <kelleyvanevert@gmail.com>\nWebsite: http://mizar.org/language/\nCategory: scientific\n*/\n\nfunction mizar(hljs) {\n  return {\n    name: 'Mizar',\n    keywords:\n      'environ vocabularies notations constructors definitions ' +\n      'registrations theorems schemes requirements begin end definition ' +\n      'registration cluster existence pred func defpred deffunc theorem ' +\n      'proof let take assume then thus hence ex for st holds consider ' +\n      'reconsider such that and in provided of as from be being by means ' +\n      'equals implies iff redefine define now not or attr is mode ' +\n      'suppose per cases set thesis contradiction scheme reserve struct ' +\n      'correctness compatibility coherence symmetry assymetry ' +\n      'reflexivity irreflexivity connectedness uniqueness commutativity ' +\n      'idempotence involutiveness projectivity',\n    contains: [\n      hljs.COMMENT('::', '$')\n    ]\n  };\n}\n\nmodule.exports = mizar;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/mizar.js?");

/***/ })

}]);