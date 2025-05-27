/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_tp"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/tp.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/tp.js ***!
  \*********************************************************************************************/
/***/ ((module) => {

eval("/*\nLanguage: TP\nAuthor: Jay Strybis <jay.strybis@gmail.com>\nDescription: FANUC TP programming language (TPP).\n*/\n\nfunction tp(hljs) {\n  const TPID = {\n    className: 'number',\n    begin: '[1-9][0-9]*', /* no leading zeros */\n    relevance: 0\n  };\n  const TPLABEL = {\n    className: 'symbol',\n    begin: ':[^\\\\]]+'\n  };\n  const TPDATA = {\n    className: 'built_in',\n    begin: '(AR|P|PAYLOAD|PR|R|SR|RSR|LBL|VR|UALM|MESSAGE|UTOOL|UFRAME|TIMER|' +\n    'TIMER_OVERFLOW|JOINT_MAX_SPEED|RESUME_PROG|DIAG_REC)\\\\[',\n    end: '\\\\]',\n    contains: [\n      'self',\n      TPID,\n      TPLABEL\n    ]\n  };\n  const TPIO = {\n    className: 'built_in',\n    begin: '(AI|AO|DI|DO|F|RI|RO|UI|UO|GI|GO|SI|SO)\\\\[',\n    end: '\\\\]',\n    contains: [\n      'self',\n      TPID,\n      hljs.QUOTE_STRING_MODE, /* for pos section at bottom */\n      TPLABEL\n    ]\n  };\n\n  return {\n    name: 'TP',\n    keywords: {\n      keyword:\n        'ABORT ACC ADJUST AND AP_LD BREAK CALL CNT COL CONDITION CONFIG DA DB ' +\n        'DIV DETECT ELSE END ENDFOR ERR_NUM ERROR_PROG FINE FOR GP GUARD INC ' +\n        'IF JMP LINEAR_MAX_SPEED LOCK MOD MONITOR OFFSET Offset OR OVERRIDE ' +\n        'PAUSE PREG PTH RT_LD RUN SELECT SKIP Skip TA TB TO TOOL_OFFSET ' +\n        'Tool_Offset UF UT UFRAME_NUM UTOOL_NUM UNLOCK WAIT X Y Z W P R STRLEN ' +\n        'SUBSTR FINDSTR VOFFSET PROG ATTR MN POS',\n      literal:\n        'ON OFF max_speed LPOS JPOS ENABLE DISABLE START STOP RESET'\n    },\n    contains: [\n      TPDATA,\n      TPIO,\n      {\n        className: 'keyword',\n        begin: '/(PROG|ATTR|MN|POS|END)\\\\b'\n      },\n      {\n        /* this is for cases like ,CALL */\n        className: 'keyword',\n        begin: '(CALL|RUN|POINT_LOGIC|LBL)\\\\b'\n      },\n      {\n        /* this is for cases like CNT100 where the default lexemes do not\n         * separate the keyword and the number */\n        className: 'keyword',\n        begin: '\\\\b(ACC|CNT|Skip|Offset|PSPD|RT_LD|AP_LD|Tool_Offset)'\n      },\n      {\n        /* to catch numbers that do not have a word boundary on the left */\n        className: 'number',\n        begin: '\\\\d+(sec|msec|mm/sec|cm/min|inch/min|deg/sec|mm|in|cm)?\\\\b',\n        relevance: 0\n      },\n      hljs.COMMENT('//', '[;$]'),\n      hljs.COMMENT('!', '[;$]'),\n      hljs.COMMENT('--eg:', '$'),\n      hljs.QUOTE_STRING_MODE,\n      {\n        className: 'string',\n        begin: '\\'',\n        end: '\\''\n      },\n      hljs.C_NUMBER_MODE,\n      {\n        className: 'variable',\n        begin: '\\\\$[A-Za-z0-9_]+'\n      }\n    ]\n  };\n}\n\nmodule.exports = tp;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/tp.js?");

/***/ })

}]);