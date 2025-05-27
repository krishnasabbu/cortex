/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_abnf"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/abnf.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/abnf.js ***!
  \***********************************************************************************************/
/***/ ((module) => {

eval("/**\n * @param {string} value\n * @returns {RegExp}\n * */\n\n/**\n * @param {RegExp | string } re\n * @returns {string}\n */\nfunction source(re) {\n  if (!re) return null;\n  if (typeof re === \"string\") return re;\n\n  return re.source;\n}\n\n/**\n * @param {...(RegExp | string) } args\n * @returns {string}\n */\nfunction concat(...args) {\n  const joined = args.map((x) => source(x)).join(\"\");\n  return joined;\n}\n\n/*\nLanguage: Augmented Backus-Naur Form\nAuthor: Alex McKibben <alex@nullscope.net>\nWebsite: https://tools.ietf.org/html/rfc5234\nAudit: 2020\n*/\n\n/** @type LanguageFn */\nfunction abnf(hljs) {\n  const regexes = {\n    ruleDeclaration: /^[a-zA-Z][a-zA-Z0-9-]*/,\n    unexpectedChars: /[!@#$^&',?+~`|:]/\n  };\n\n  const keywords = [\n    \"ALPHA\",\n    \"BIT\",\n    \"CHAR\",\n    \"CR\",\n    \"CRLF\",\n    \"CTL\",\n    \"DIGIT\",\n    \"DQUOTE\",\n    \"HEXDIG\",\n    \"HTAB\",\n    \"LF\",\n    \"LWSP\",\n    \"OCTET\",\n    \"SP\",\n    \"VCHAR\",\n    \"WSP\"\n  ];\n\n  const commentMode = hljs.COMMENT(/;/, /$/);\n\n  const terminalBinaryMode = {\n    className: \"symbol\",\n    begin: /%b[0-1]+(-[0-1]+|(\\.[0-1]+)+){0,1}/\n  };\n\n  const terminalDecimalMode = {\n    className: \"symbol\",\n    begin: /%d[0-9]+(-[0-9]+|(\\.[0-9]+)+){0,1}/\n  };\n\n  const terminalHexadecimalMode = {\n    className: \"symbol\",\n    begin: /%x[0-9A-F]+(-[0-9A-F]+|(\\.[0-9A-F]+)+){0,1}/\n  };\n\n  const caseSensitivityIndicatorMode = {\n    className: \"symbol\",\n    begin: /%[si]/\n  };\n\n  const ruleDeclarationMode = {\n    className: \"attribute\",\n    begin: concat(regexes.ruleDeclaration, /(?=\\s*=)/)\n  };\n\n  return {\n    name: 'Augmented Backus-Naur Form',\n    illegal: regexes.unexpectedChars,\n    keywords: keywords,\n    contains: [\n      ruleDeclarationMode,\n      commentMode,\n      terminalBinaryMode,\n      terminalDecimalMode,\n      terminalHexadecimalMode,\n      caseSensitivityIndicatorMode,\n      hljs.QUOTE_STRING_MODE,\n      hljs.NUMBER_MODE\n    ]\n  };\n}\n\nmodule.exports = abnf;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/abnf.js?");

/***/ })

}]);