/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_basic"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/basic.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/basic.js ***!
  \************************************************************************************************/
/***/ ((module) => {

eval("/*\nLanguage: BASIC\nAuthor: Raphaël Assénat <raph@raphnet.net>\nDescription: Based on the BASIC reference from the Tandy 1000 guide\nWebsite: https://en.wikipedia.org/wiki/Tandy_1000\n*/\n\n/** @type LanguageFn */\nfunction basic(hljs) {\n  return {\n    name: 'BASIC',\n    case_insensitive: true,\n    illegal: '^\\.',\n    // Support explicitly typed variables that end with $%! or #.\n    keywords: {\n      $pattern: '[a-zA-Z][a-zA-Z0-9_$%!#]*',\n      keyword:\n        'ABS ASC AND ATN AUTO|0 BEEP BLOAD|10 BSAVE|10 CALL CALLS CDBL CHAIN CHDIR CHR$|10 CINT CIRCLE ' +\n        'CLEAR CLOSE CLS COLOR COM COMMON CONT COS CSNG CSRLIN CVD CVI CVS DATA DATE$ ' +\n        'DEFDBL DEFINT DEFSNG DEFSTR DEF|0 SEG USR DELETE DIM DRAW EDIT END ENVIRON ENVIRON$ ' +\n        'EOF EQV ERASE ERDEV ERDEV$ ERL ERR ERROR EXP FIELD FILES FIX FOR|0 FRE GET GOSUB|10 GOTO ' +\n        'HEX$ IF THEN ELSE|0 INKEY$ INP INPUT INPUT# INPUT$ INSTR IMP INT IOCTL IOCTL$ KEY ON ' +\n        'OFF LIST KILL LEFT$ LEN LET LINE LLIST LOAD LOC LOCATE LOF LOG LPRINT USING LSET ' +\n        'MERGE MID$ MKDIR MKD$ MKI$ MKS$ MOD NAME NEW NEXT NOISE NOT OCT$ ON OR PEN PLAY STRIG OPEN OPTION ' +\n        'BASE OUT PAINT PALETTE PCOPY PEEK PMAP POINT POKE POS PRINT PRINT] PSET PRESET ' +\n        'PUT RANDOMIZE READ REM RENUM RESET|0 RESTORE RESUME RETURN|0 RIGHT$ RMDIR RND RSET ' +\n        'RUN SAVE SCREEN SGN SHELL SIN SOUND SPACE$ SPC SQR STEP STICK STOP STR$ STRING$ SWAP ' +\n        'SYSTEM TAB TAN TIME$ TIMER TROFF TRON TO USR VAL VARPTR VARPTR$ VIEW WAIT WHILE ' +\n        'WEND WIDTH WINDOW WRITE XOR'\n    },\n    contains: [\n      hljs.QUOTE_STRING_MODE,\n      hljs.COMMENT('REM', '$', {\n        relevance: 10\n      }),\n      hljs.COMMENT('\\'', '$', {\n        relevance: 0\n      }),\n      {\n        // Match line numbers\n        className: 'symbol',\n        begin: '^[0-9]+ ',\n        relevance: 10\n      },\n      {\n        // Match typed numeric constants (1000, 12.34!, 1.2e5, 1.5#, 1.2D2)\n        className: 'number',\n        begin: '\\\\b\\\\d+(\\\\.\\\\d+)?([edED]\\\\d+)?[#\\!]?',\n        relevance: 0\n      },\n      {\n        // Match hexadecimal numbers (&Hxxxx)\n        className: 'number',\n        begin: '(&[hH][0-9a-fA-F]{1,4})'\n      },\n      {\n        // Match octal numbers (&Oxxxxxx)\n        className: 'number',\n        begin: '(&[oO][0-7]{1,6})'\n      }\n    ]\n  };\n}\n\nmodule.exports = basic;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/basic.js?");

/***/ })

}]);