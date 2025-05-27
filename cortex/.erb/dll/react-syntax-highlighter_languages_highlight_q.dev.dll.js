/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_q"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/q.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/q.js ***!
  \********************************************************************************************/
/***/ ((module) => {

eval("/*\nLanguage: Q\nDescription: Q is a vector-based functional paradigm programming language built into the kdb+ database.\n             (K/Q/Kdb+ from Kx Systems)\nAuthor: Sergey Vidyuk <svidyuk@gmail.com>\nWebsite: https://kx.com/connect-with-us/developers/\n*/\n\nfunction q(hljs) {\n  const KEYWORDS = {\n    $pattern: /(`?)[A-Za-z0-9_]+\\b/,\n    keyword:\n      'do while select delete by update from',\n    literal:\n      '0b 1b',\n    built_in:\n      'neg not null string reciprocal floor ceiling signum mod xbar xlog and or each scan over prior mmu lsq inv md5 ltime gtime count first var dev med cov cor all any rand sums prds mins maxs fills deltas ratios avgs differ prev next rank reverse iasc idesc asc desc msum mcount mavg mdev xrank mmin mmax xprev rotate distinct group where flip type key til get value attr cut set upsert raze union inter except cross sv vs sublist enlist read0 read1 hopen hclose hdel hsym hcount peach system ltrim rtrim trim lower upper ssr view tables views cols xcols keys xkey xcol xasc xdesc fkeys meta lj aj aj0 ij pj asof uj ww wj wj1 fby xgroup ungroup ej save load rsave rload show csv parse eval min max avg wavg wsum sin cos tan sum',\n    type:\n      '`float `double int `timestamp `timespan `datetime `time `boolean `symbol `char `byte `short `long `real `month `date `minute `second `guid'\n  };\n\n  return {\n    name: 'Q',\n    aliases: [\n      'k',\n      'kdb'\n    ],\n    keywords: KEYWORDS,\n    contains: [\n      hljs.C_LINE_COMMENT_MODE,\n      hljs.QUOTE_STRING_MODE,\n      hljs.C_NUMBER_MODE\n    ]\n  };\n}\n\nmodule.exports = q;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/q.js?");

/***/ })

}]);