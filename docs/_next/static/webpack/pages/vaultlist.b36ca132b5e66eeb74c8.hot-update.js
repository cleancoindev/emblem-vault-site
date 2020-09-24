webpackHotUpdate_N_E("pages/vaultlist",{

/***/ "./components/VaultList.tsx":
/*!**********************************!*\
  !*** ./components/VaultList.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return VaultList; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\n/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-loader */ \"./node_modules/react-loader/lib/react-loader.js\");\n/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_loader__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Refreshing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Refreshing */ \"./components/Refreshing.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils */ \"./utils.ts\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../constants */ \"./constants.ts\");\n\n\n\n\nvar _jsxFileName = \"/Users/dcode/dev/emblem/emblem-vault-uni/components/VaultList.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\n\n\n\n\nfunction VaultList() {\n  _s();\n\n  var _this = this;\n\n  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_7__[\"useRouter\"])(),\n      query = _useRouter.query;\n\n  var _useWeb3React = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_8__[\"useWeb3React\"])(),\n      account = _useWeb3React.account,\n      chainId = _useWeb3React.chainId;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      vaults = _useState[0],\n      setVaults = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({\n    loaded: false\n  }),\n      state = _useState2[0],\n      setState = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      loadingApi = _useState3[0],\n      setLoadingApi = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(query.address),\n      address = _useState4[0],\n      setAddress = _useState4[1];\n\n  var getVaults = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n      var response, jsonData;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              loadCache();\n              _context.next = 3;\n              return fetch(_constants__WEBPACK_IMPORTED_MODULE_10__[\"EMBLEM_API\"] + '/vaults/' + (address ? address : account), {\n                method: 'GET',\n                headers: {\n                  'Content-Type': 'application/json',\n                  service: 'evmetadata',\n                  chainId: chainId.toString()\n                }\n              });\n\n            case 3:\n              response = _context.sent;\n              _context.next = 6;\n              return response.json();\n\n            case 6:\n              jsonData = _context.sent;\n              setState({\n                loaded: true\n              });\n              setVaults(jsonData);\n              saveCache(jsonData);\n              setLoadingApi(false);\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getVaults() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var loadCache = function loadCache() {\n    var vaults = JSON.parse(localStorage.getItem((address ? address : account) + '_' + chainId + '_vaults')); // Load vaults from storage before updating from server!\n\n    if (vaults) {\n      setState({\n        loaded: true\n      });\n      setVaults(vaults);\n      setLoadingApi(true);\n    }\n  };\n\n  var saveCache = function saveCache(vaults) {\n    localStorage.setItem((address ? address : account) + '_' + chainId + '_vaults', JSON.stringify(vaults)); // Save new state for later\n  };\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(''),\n      acct = _useState5[0],\n      setAcct = _useState5[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    if (account && acct != account) {\n      setAcct(account);\n      setState({\n        loaded: false\n      });\n      getVaults();\n    }\n  }, [account, acct]);\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(chainId),\n      chain = _useState6[0],\n      setChain = _useState6[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    if (chainId && chain != chainId) {\n      setChain(chainId);\n      setState({\n        loaded: false\n      });\n      getVaults();\n    }\n  }, [chainId, chain]);\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    account && chainId ? getVaults() : setState({\n      loaded: true\n    });\n  }, []);\n  return __jsx(react_loader__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    loaded: state.loaded,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 5\n    }\n  }, loadingApi ? __jsx(_Refreshing__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 21\n    }\n  }) : '', __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Flex\"], {\n    w: \"100%\",\n    justify: \"center\",\n    flexWrap: \"wrap\",\n    mt: 16,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }\n  }, vaults.length ? vaults.map(function (vault, index) {\n    var pieces = location.pathname.split('/');\n    pieces.pop();\n    var url = location.origin + pieces.join('/') + '/vault?id=' + vault.tokenId;\n    var flexSettings = {\n      flex: '1',\n      minW: '300px',\n      maxW: '300px',\n      borderWidth: '1px',\n      color: 'white',\n      mx: '6',\n      mb: '6',\n      rounded: 'lg',\n      overflow: 'hidden',\n      borderColor: vault.status == 'claimed' ? 'green !important' : ''\n    };\n\n    var redirect = function redirect() {\n      location.href = url;\n    };\n\n    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Stack\"], {\n      align: \"center\",\n      mt: 2,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 15\n      }\n    }, vault.status == 'claimed' ? __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Text\"], {\n      color: \"green.500\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 46\n      }\n    }, \"CLAIMED\") : null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      key: index\n    }, flexSettings, {\n      onClick: redirect,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 17\n      }\n    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Text\"], {\n      fontWeight: \"semibold\",\n      textAlign: \"center\",\n      mt: 2,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 19\n      }\n    }, vault.name), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Stack\"], {\n      align: \"center\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 19\n      }\n    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Image\"], {\n      src: Object(_utils__WEBPACK_IMPORTED_MODULE_9__[\"validImage\"])(vault.image) ? vault.image : 'https://circuitsofvalue.com/public/coval-logo.png',\n      p: 2,\n      width: \"250px\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 21\n      }\n    })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n      d: \"flex\",\n      alignItems: \"baseline\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 19\n      }\n    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n      color: \"gray.500\",\n      fontWeight: \"semibold\",\n      letterSpacing: \"wide\",\n      fontSize: \"sm\",\n      ml: \"2\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 21\n      }\n    }, vault.isPrivate ? __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Text\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 27\n      }\n    }, \"Contents hidden. Click to view the vault and unlock values.\")) : vault.values.length ? vault.values.map(function (coin) {\n      return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Text\"], {\n        key: coin.name,\n        isTruncated: true,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 118,\n          columnNumber: 29\n        }\n      }, coin.name, \": \", coin.balance);\n    }) : __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Text\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 124,\n        columnNumber: 25\n      }\n    }, \"Nothing in here! \", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 125,\n        columnNumber: 44\n      }\n    }), \"Click to fill 'er up!\")))));\n  }) : __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Text\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 11\n    }\n  }, \"YOU DON'T SEEM TO HAVE ANY VAULTS.\", ' ', __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Link\"], {\n    color: \"#638cd8\",\n    href: \"../create\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 13\n    }\n  }, \"CREATE ONE HERE!\"))));\n}\n\n_s(VaultList, \"21/aXTEysExcpOO0y9XVHJh2gDs=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_7__[\"useRouter\"], _web3_react_core__WEBPACK_IMPORTED_MODULE_8__[\"useWeb3React\"]];\n});\n\n_c = VaultList;\n\nvar _c;\n\n$RefreshReg$(_c, \"VaultList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9WYXVsdExpc3QudHN4PzFmYjgiXSwibmFtZXMiOlsiVmF1bHRMaXN0IiwidXNlUm91dGVyIiwicXVlcnkiLCJ1c2VXZWIzUmVhY3QiLCJhY2NvdW50IiwiY2hhaW5JZCIsInVzZVN0YXRlIiwidmF1bHRzIiwic2V0VmF1bHRzIiwibG9hZGVkIiwic3RhdGUiLCJzZXRTdGF0ZSIsImxvYWRpbmdBcGkiLCJzZXRMb2FkaW5nQXBpIiwiYWRkcmVzcyIsInNldEFkZHJlc3MiLCJnZXRWYXVsdHMiLCJsb2FkQ2FjaGUiLCJmZXRjaCIsIkVNQkxFTV9BUEkiLCJtZXRob2QiLCJoZWFkZXJzIiwic2VydmljZSIsInRvU3RyaW5nIiwicmVzcG9uc2UiLCJqc29uIiwianNvbkRhdGEiLCJzYXZlQ2FjaGUiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImFjY3QiLCJzZXRBY2N0IiwidXNlRWZmZWN0IiwiY2hhaW4iLCJzZXRDaGFpbiIsImxlbmd0aCIsIm1hcCIsInZhdWx0IiwiaW5kZXgiLCJwaWVjZXMiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic3BsaXQiLCJwb3AiLCJ1cmwiLCJvcmlnaW4iLCJqb2luIiwidG9rZW5JZCIsImZsZXhTZXR0aW5ncyIsImZsZXgiLCJtaW5XIiwibWF4VyIsImJvcmRlcldpZHRoIiwiY29sb3IiLCJteCIsIm1iIiwicm91bmRlZCIsIm92ZXJmbG93IiwiYm9yZGVyQ29sb3IiLCJzdGF0dXMiLCJyZWRpcmVjdCIsImhyZWYiLCJuYW1lIiwidmFsaWRJbWFnZSIsImltYWdlIiwiaXNQcml2YXRlIiwidmFsdWVzIiwiY29pbiIsImJhbGFuY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFNBQVQsR0FB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LGFBQ0UsTUFBQyxvREFBRDtBQUFNLFdBQUcsRUFBRUEsSUFBSSxDQUFDTCxJQUFoQjtBQUFzQixtQkFBVyxNQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0dLLElBQUksQ0FBQ0wsSUFEUixRQUNnQkssSUFBSSxDQUFDQyxPQURyQixDQURGO0FBS0QsS0FORCxDQURFLEdBU0YsTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUNtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRG5CLDBCQWRKLENBREYsQ0FYRixDQUZGLENBREY7QUF1Q0QsR0ExREQsQ0FERCxHQTZEQyxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkNBQ3FDLEdBRHJDLEVBRUUsTUFBQyxvREFBRDtBQUFNLFNBQUssRUFBQyxTQUFaO0FBQXNCLFFBQUksRUFBQyxXQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZGLENBOURKLENBSEYsQ0FERjtBQTRFRDs7R0F4SXVCeEUsUztVQUNKQyxxRCxFQUNXRSw2RDs7O0tBRlBILFMiLCJmaWxlIjoiLi9jb21wb25lbnRzL1ZhdWx0TGlzdC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEZsZXgsIFRleHQsIExpbmssIEltYWdlLCBTdGFjaywgU3Bpbm5lciB9IGZyb20gJ0BjaGFrcmEtdWkvY29yZSdcbmltcG9ydCBMb2FkZXIgZnJvbSAncmVhY3QtbG9hZGVyJ1xuaW1wb3J0IFJlZnJlc2hpbmcgZnJvbSAnLi9SZWZyZXNoaW5nJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyB1c2VXZWIzUmVhY3QgfSBmcm9tICdAd2ViMy1yZWFjdC9jb3JlJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdmFsaWRJbWFnZSB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgRU1CTEVNX0FQSSB9IGZyb20gJy4uL2NvbnN0YW50cydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmF1bHRMaXN0KCkge1xuICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKVxuICBjb25zdCB7IGFjY291bnQsIGNoYWluSWQgfSA9IHVzZVdlYjNSZWFjdCgpXG4gIGNvbnN0IFt2YXVsdHMsIHNldFZhdWx0c10gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7IGxvYWRlZDogZmFsc2UgfSlcbiAgY29uc3QgW2xvYWRpbmdBcGksIHNldExvYWRpbmdBcGldID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFthZGRyZXNzLCBzZXRBZGRyZXNzXSA9IHVzZVN0YXRlKHF1ZXJ5LmFkZHJlc3MpXG5cbiAgY29uc3QgZ2V0VmF1bHRzID0gYXN5bmMgKCkgPT4ge1xuICAgIGxvYWRDYWNoZSgpXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChFTUJMRU1fQVBJICsgJy92YXVsdHMvJyArIChhZGRyZXNzID8gYWRkcmVzcyA6IGFjY291bnQpLCB7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICBzZXJ2aWNlOiAnZXZtZXRhZGF0YScsXG4gICAgICAgIGNoYWluSWQ6IGNoYWluSWQudG9TdHJpbmcoKSxcbiAgICAgIH0sXG4gICAgfSlcbiAgICBjb25zdCBqc29uRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgIHNldFN0YXRlKHsgbG9hZGVkOiB0cnVlIH0pXG4gICAgc2V0VmF1bHRzKGpzb25EYXRhKVxuICAgIHNhdmVDYWNoZShqc29uRGF0YSlcbiAgICBzZXRMb2FkaW5nQXBpKGZhbHNlKVxuICB9XG5cbiAgY29uc3QgbG9hZENhY2hlID0gKCkgPT4ge1xuICAgIGxldCB2YXVsdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKChhZGRyZXNzID8gYWRkcmVzcyA6IGFjY291bnQpICsgJ18nICsgY2hhaW5JZCArICdfdmF1bHRzJykpIC8vIExvYWQgdmF1bHRzIGZyb20gc3RvcmFnZSBiZWZvcmUgdXBkYXRpbmcgZnJvbSBzZXJ2ZXIhXG4gICAgaWYgKHZhdWx0cykge1xuICAgICAgc2V0U3RhdGUoeyBsb2FkZWQ6IHRydWUgfSlcbiAgICAgIHNldFZhdWx0cyh2YXVsdHMpXG4gICAgICBzZXRMb2FkaW5nQXBpKHRydWUpXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2F2ZUNhY2hlID0gKHZhdWx0cykgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKChhZGRyZXNzID8gYWRkcmVzcyA6IGFjY291bnQpICsgJ18nICsgY2hhaW5JZCArICdfdmF1bHRzJywgSlNPTi5zdHJpbmdpZnkodmF1bHRzKSkgLy8gU2F2ZSBuZXcgc3RhdGUgZm9yIGxhdGVyXG4gIH1cblxuICBjb25zdCBbYWNjdCwgc2V0QWNjdF0gPSB1c2VTdGF0ZSgnJylcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYWNjb3VudCAmJiBhY2N0ICE9IGFjY291bnQpIHtcbiAgICAgIHNldEFjY3QoYWNjb3VudClcbiAgICAgIHNldFN0YXRlKHsgbG9hZGVkOiBmYWxzZSB9KVxuICAgICAgZ2V0VmF1bHRzKClcbiAgICB9XG4gIH0sIFthY2NvdW50LCBhY2N0XSlcblxuICBjb25zdCBbY2hhaW4sIHNldENoYWluXSA9IHVzZVN0YXRlKGNoYWluSWQpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNoYWluSWQgJiYgY2hhaW4gIT0gY2hhaW5JZCkge1xuICAgICAgc2V0Q2hhaW4oY2hhaW5JZClcbiAgICAgIHNldFN0YXRlKHsgbG9hZGVkOiBmYWxzZSB9KVxuICAgICAgZ2V0VmF1bHRzKClcbiAgICB9XG4gIH0sIFtjaGFpbklkLCBjaGFpbl0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhY2NvdW50ICYmIGNoYWluSWQgPyBnZXRWYXVsdHMoKSA6IHNldFN0YXRlKHsgbG9hZGVkOiB0cnVlIH0pXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPExvYWRlciBsb2FkZWQ9e3N0YXRlLmxvYWRlZH0+XG4gICAgICB7bG9hZGluZ0FwaSA/IDxSZWZyZXNoaW5nIC8+IDogJyd9XG5cbiAgICAgIDxGbGV4IHc9XCIxMDAlXCIganVzdGlmeT1cImNlbnRlclwiIGZsZXhXcmFwPVwid3JhcFwiIG10PXsxNn0+XG4gICAgICAgIHt2YXVsdHMubGVuZ3RoID8gKFxuICAgICAgICAgIHZhdWx0cy5tYXAoKHZhdWx0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgbGV0IHBpZWNlcyA9IGxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KCcvJylcbiAgICAgICAgICAgIHBpZWNlcy5wb3AoKVxuICAgICAgICAgICAgbGV0IHVybCA9IGxvY2F0aW9uLm9yaWdpbiArIHBpZWNlcy5qb2luKCcvJykgKyAnL3ZhdWx0P2lkPScgKyB2YXVsdC50b2tlbklkXG4gICAgICAgICAgICBjb25zdCBmbGV4U2V0dGluZ3MgPSB7XG4gICAgICAgICAgICAgIGZsZXg6ICcxJyxcbiAgICAgICAgICAgICAgbWluVzogJzMwMHB4JyxcbiAgICAgICAgICAgICAgbWF4VzogJzMwMHB4JyxcbiAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6ICcxcHgnLFxuICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgICAgbXg6ICc2JyxcbiAgICAgICAgICAgICAgbWI6ICc2JyxcbiAgICAgICAgICAgICAgcm91bmRlZDogJ2xnJyxcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogdmF1bHQuc3RhdHVzID09ICdjbGFpbWVkJyA/ICdncmVlbiAhaW1wb3J0YW50JyA6ICcnLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVkaXJlY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxTdGFjayBhbGlnbj1cImNlbnRlclwiIG10PXsyfT5cbiAgICAgICAgICAgICAgICB7dmF1bHQuc3RhdHVzID09ICdjbGFpbWVkJyA/IDxUZXh0IGNvbG9yPVwiZ3JlZW4uNTAwXCIgPkNMQUlNRUQ8L1RleHQ+IDogbnVsbH1cbiAgICAgICAgICAgICAgICA8Qm94IGtleT17aW5kZXh9IHsuLi5mbGV4U2V0dGluZ3N9IG9uQ2xpY2s9e3JlZGlyZWN0fT5cbiAgICAgICAgICAgICAgICAgIDxUZXh0IGZvbnRXZWlnaHQ9XCJzZW1pYm9sZFwiIHRleHRBbGlnbj1cImNlbnRlclwiIG10PXsyfT5cbiAgICAgICAgICAgICAgICAgICAge3ZhdWx0Lm5hbWV9XG4gICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICA8U3RhY2sgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXt2YWxpZEltYWdlKHZhdWx0LmltYWdlKSA/IHZhdWx0LmltYWdlIDogJ2h0dHBzOi8vY2lyY3VpdHNvZnZhbHVlLmNvbS9wdWJsaWMvY292YWwtbG9nby5wbmcnfVxuICAgICAgICAgICAgICAgICAgICAgIHA9ezJ9XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyNTBweFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgPEJveCBkPVwiZmxleFwiIGFsaWduSXRlbXM9XCJiYXNlbGluZVwiPlxuICAgICAgICAgICAgICAgICAgICA8Qm94IGNvbG9yPVwiZ3JheS41MDBcIiBmb250V2VpZ2h0PVwic2VtaWJvbGRcIiBsZXR0ZXJTcGFjaW5nPVwid2lkZVwiIGZvbnRTaXplPVwic21cIiBtbD1cIjJcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7dmF1bHQuaXNQcml2YXRlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQ+Q29udGVudHMgaGlkZGVuLiBDbGljayB0byB2aWV3IHRoZSB2YXVsdCBhbmQgdW5sb2NrIHZhbHVlcy48L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICApIDogdmF1bHQudmFsdWVzLmxlbmd0aCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhdWx0LnZhbHVlcy5tYXAoKGNvaW4pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBrZXk9e2NvaW4ubmFtZX0gaXNUcnVuY2F0ZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29pbi5uYW1lfToge2NvaW4uYmFsYW5jZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICBOb3RoaW5nIGluIGhlcmUhIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBDbGljayB0byBmaWxsICdlciB1cCFcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pXG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICBZT1UgRE9OJ1QgU0VFTSBUTyBIQVZFIEFOWSBWQVVMVFMueycgJ31cbiAgICAgICAgICAgIDxMaW5rIGNvbG9yPVwiIzYzOGNkOFwiIGhyZWY9XCIuLi9jcmVhdGVcIj5cbiAgICAgICAgICAgICAgQ1JFQVRFIE9ORSBIRVJFIVxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgKX1cbiAgICAgIDwvRmxleD5cbiAgICA8L0xvYWRlcj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/VaultList.tsx\n");

/***/ })

})