/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(global["webpackChunkrenderer"] = global["webpackChunkrenderer"] || []).push([["react-syntax-highlighter_languages_highlight_dns"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/dns.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/dns.js ***!
  \**********************************************************************************************/
/***/ ((module) => {

eval("/*\nLanguage: DNS Zone\nAuthor: Tim Schumacher <tim@datenknoten.me>\nCategory: config\nWebsite: https://en.wikipedia.org/wiki/Zone_file\n*/\n\n/** @type LanguageFn */\nfunction dns(hljs) {\n  return {\n    name: 'DNS Zone',\n    aliases: [\n      'bind',\n      'zone'\n    ],\n    keywords: {\n      keyword:\n        'IN A AAAA AFSDB APL CAA CDNSKEY CDS CERT CNAME DHCID DLV DNAME DNSKEY DS HIP IPSECKEY KEY KX ' +\n        'LOC MX NAPTR NS NSEC NSEC3 NSEC3PARAM PTR RRSIG RP SIG SOA SRV SSHFP TA TKEY TLSA TSIG TXT'\n    },\n    contains: [\n      hljs.COMMENT(';', '$', {\n        relevance: 0\n      }),\n      {\n        className: 'meta',\n        begin: /^\\$(TTL|GENERATE|INCLUDE|ORIGIN)\\b/\n      },\n      // IPv6\n      {\n        className: 'number',\n        begin: '((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\\\\d|1\\\\d\\\\d|[1-9]?\\\\d)(\\\\.(25[0-5]|2[0-4]\\\\d|1\\\\d\\\\d|[1-9]?\\\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\\\\d|1\\\\d\\\\d|[1-9]?\\\\d)(\\\\.(25[0-5]|2[0-4]\\\\d|1\\\\d\\\\d|[1-9]?\\\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\\\\d|1\\\\d\\\\d|[1-9]?\\\\d)(\\\\.(25[0-5]|2[0-4]\\\\d|1\\\\d\\\\d|[1-9]?\\\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\\\\d|1\\\\d\\\\d|[1-9]?\\\\d)(\\\\.(25[0-5]|2[0-4]\\\\d|1\\\\d\\\\d|[1-9]?\\\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\\\\d|1\\\\d\\\\d|[1-9]?\\\\d)(\\\\.(25[0-5]|2[0-4]\\\\d|1\\\\d\\\\d|[1-9]?\\\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\\\\d|1\\\\d\\\\d|[1-9]?\\\\d)(\\\\.(25[0-5]|2[0-4]\\\\d|1\\\\d\\\\d|[1-9]?\\\\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\\\\d|1\\\\d\\\\d|[1-9]?\\\\d)(\\\\.(25[0-5]|2[0-4]\\\\d|1\\\\d\\\\d|[1-9]?\\\\d)){3}))|:)))\\\\b'\n      },\n      // IPv4\n      {\n        className: 'number',\n        begin: '((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\\\b'\n      },\n      hljs.inherit(hljs.NUMBER_MODE, {\n        begin: /\\b\\d+[dhwm]?/\n      })\n    ]\n  };\n}\n\nmodule.exports = dns;\n\n\n//# sourceURL=webpack://renderer/./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/dns.js?");

/***/ })

}]);