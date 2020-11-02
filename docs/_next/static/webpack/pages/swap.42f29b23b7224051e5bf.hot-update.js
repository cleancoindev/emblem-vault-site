webpackHotUpdate_N_E("pages/swap",{

/***/ "./components/SwapChain.tsx":
/*!**********************************!*\
  !*** ./components/SwapChain.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SwapChain; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\n/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-loader */ \"./node_modules/react-loader/lib/react-loader.js\");\n/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_loader__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Refreshing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Refreshing */ \"./components/Refreshing.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks */ \"./hooks.ts\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constants */ \"./constants.ts\");\n\n\n\nvar _jsxFileName = \"/Users/shannoncode/repo/Emblem.Currentwork/emblem-vault-site/components/SwapChain.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\n\nfunction SwapChain() {\n  _s();\n\n  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"])(),\n      query = _useRouter.query;\n\n  var _useWeb3React = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_7__[\"useWeb3React\"])(),\n      account = _useWeb3React.account,\n      chainId = _useWeb3React.chainId; // const [vaults, setVaults] = useState([])\n\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({\n    loaded: false\n  }),\n      state = _useState[0],\n      setState = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      loadingApi = _useState2[0],\n      setLoadingApi = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      balance = _useState3[0],\n      setBalance = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(query.address),\n      address = _useState4[0],\n      setAddress = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(query.experimental),\n      experimental = _useState5[0],\n      setExperimental = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      decimals = _useState6[0],\n      setDecimals = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      allowance = _useState7[0],\n      setAllowance = _useState7[1];\n\n  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0),\n      covalApprovedFor = _useState8[0],\n      setIsCovalApproved = _useState8[1];\n\n  var handlerContract = Object(_hooks__WEBPACK_IMPORTED_MODULE_8__[\"useContract\"])(_constants__WEBPACK_IMPORTED_MODULE_9__[\"contractAddresses\"].vaultHandler[chainId], _constants__WEBPACK_IMPORTED_MODULE_9__[\"contractAddresses\"].vaultHandlerAbi, true);\n  var covalContract = Object(_hooks__WEBPACK_IMPORTED_MODULE_8__[\"useContract\"])(_constants__WEBPACK_IMPORTED_MODULE_9__[\"contractAddresses\"].coval[chainId], _constants__WEBPACK_IMPORTED_MODULE_9__[\"contractAddresses\"].covalAbi, true);\n\n  var getContractStates = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.t0 = setDecimals;\n              _context.next = 3;\n              return covalContract.decimals();\n\n            case 3:\n              _context.t1 = _context.sent;\n              (0, _context.t0)(_context.t1);\n              _context.t2 = setAllowance;\n              _context.next = 8;\n              return covalContract.allowance(account, _constants__WEBPACK_IMPORTED_MODULE_9__[\"contractAddresses\"].vaultHandler[chainId]).then(function (balance) {\n                return balance.toString();\n              });\n\n            case 8:\n              _context.t3 = _context.sent;\n              (0, _context.t2)(_context.t3);\n              _context.t4 = setBalance;\n              _context.next = 13;\n              return covalContract.balanceOf(account).then(function (balance) {\n                return balance.toString();\n              });\n\n            case 13:\n              _context.t5 = _context.sent;\n              (0, _context.t4)(_context.t5);\n\n              if (Number(allowance) >= Number(0)) {\n                setIsCovalApproved(allowance);\n              }\n\n              setState({\n                loaded: true\n              });\n\n            case 17:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getContractStates() {\n      return _ref.apply(this, arguments);\n    };\n  }(); // const getVaults = async () => {\n  //   loadCache()\n  //   try {\n  //     const response = await fetch(EMBLEM_API + '/vaults/' + (address ? address : account) + (experimental? '?experimental=true' : ''), {\n  //       method: 'GET',\n  //       headers: {\n  //         'Content-Type': 'application/json',\n  //         service: 'evmetadata',\n  //         chainId: chainId.toString(),\n  //       },\n  //     })\n  //     const jsonData = await response.json()\n  //     setState({ loaded: true })\n  //     setVaults(jsonData)\n  //     saveCache(jsonData)\n  //     setLoadingApi(false)\n  //     // console.log(jsonData)\n  //   } catch (error) {}\n  // }\n  // const loadCache = () => {\n  //   let vaults = JSON.parse(localStorage.getItem((address ? address : account) + '_' + chainId + '_vaults')) // Load vaults from storage before updating from server!\n  //   if (vaults) {\n  //     setState({ loaded: true })\n  //     setVaults(vaults)\n  //     setLoadingApi(true)\n  //   }\n  // }\n  // const saveCache = (vaults) => {\n  //   localStorage.setItem((address ? address : account) + '_' + chainId + '_vaults', JSON.stringify(vaults)) // Save new state for later\n  // }\n\n\n  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(''),\n      acct = _useState9[0],\n      setAcct = _useState9[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (account && acct != account) {\n      setAcct(account);\n      setState({\n        loaded: false\n      });\n      getContractStates();\n    }\n  }, [account, acct]);\n\n  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(chainId),\n      chain = _useState10[0],\n      setChain = _useState10[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (chainId && chain != chainId) {\n      setChain(chainId);\n      setState({\n        loaded: false\n      }); // getVaults()\n    }\n  }, [chainId, chain]);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    account && chainId ? setState({\n      loaded: true\n    }) : null;\n  }, []);\n  return __jsx(react_loader__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    loaded: state.loaded,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 5\n    }\n  }, loadingApi ? __jsx(_Refreshing__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 21\n    }\n  }) : '', __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Flex\"], {\n    w: \"100%\",\n    justify: \"center\",\n    flexWrap: \"wrap\",\n    mt: 10,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 7\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 9\n    }\n  }, \"Transfer Coval from \", chainId == 137 ? \"Matic\" : \"Ethereum\", \" Network to \", chainId == 137 ? \"Etherum\" : \"Matic\", \" Network\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 9\n    }\n  }, \"Allowance: \", allowance)));\n}\n\n_s(SwapChain, \"mqJ4whQE15tp5/kiyo/54OzQ4Lk=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"], _web3_react_core__WEBPACK_IMPORTED_MODULE_7__[\"useWeb3React\"], _hooks__WEBPACK_IMPORTED_MODULE_8__[\"useContract\"], _hooks__WEBPACK_IMPORTED_MODULE_8__[\"useContract\"]];\n});\n\n_c = SwapChain;\n\nvar _c;\n\n$RefreshReg$(_c, \"SwapChain\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Td2FwQ2hhaW4udHN4PzExNGQiXSwibmFtZXMiOlsiU3dhcENoYWluIiwidXNlUm91dGVyIiwicXVlcnkiLCJ1c2VXZWIzUmVhY3QiLCJhY2NvdW50IiwiY2hhaW5JZCIsInVzZVN0YXRlIiwibG9hZGVkIiwic3RhdGUiLCJzZXRTdGF0ZSIsImxvYWRpbmdBcGkiLCJzZXRMb2FkaW5nQXBpIiwiYmFsYW5jZSIsInNldEJhbGFuY2UiLCJhZGRyZXNzIiwic2V0QWRkcmVzcyIsImV4cGVyaW1lbnRhbCIsInNldEV4cGVyaW1lbnRhbCIsImRlY2ltYWxzIiwic2V0RGVjaW1hbHMiLCJhbGxvd2FuY2UiLCJzZXRBbGxvd2FuY2UiLCJjb3ZhbEFwcHJvdmVkRm9yIiwic2V0SXNDb3ZhbEFwcHJvdmVkIiwiaGFuZGxlckNvbnRyYWN0IiwidXNlQ29udHJhY3QiLCJjb250cmFjdEFkZHJlc3NlcyIsInZhdWx0SGFuZGxlciIsInZhdWx0SGFuZGxlckFiaSIsImNvdmFsQ29udHJhY3QiLCJjb3ZhbCIsImNvdmFsQWJpIiwiZ2V0Q29udHJhY3RTdGF0ZXMiLCJ0aGVuIiwidG9TdHJpbmciLCJiYWxhbmNlT2YiLCJOdW1iZXIiLCJhY2N0Iiwic2V0QWNjdCIsInVzZUVmZmVjdCIsImNoYWluIiwic2V0Q2hhaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFZSxTQUFTQSxTQUFULEdBQXFCO0FBQUE7O0FBQUEsbUJBQ2hCQyw2REFBUyxFQURPO0FBQUEsTUFDMUJDLEtBRDBCLGNBQzFCQSxLQUQwQjs7QUFBQSxzQkFFTEMscUVBQVksRUFGUDtBQUFBLE1BRTFCQyxPQUYwQixpQkFFMUJBLE9BRjBCO0FBQUEsTUFFakJDLE9BRmlCLGlCQUVqQkEsT0FGaUIsRUFHbEM7OztBQUhrQyxrQkFJUkMsc0RBQVEsQ0FBQztBQUFF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QUUsRUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFBMkJMLE9BQU8sSUFBSSxHQUFYLEdBQWlCLE9BQWpCLEdBQTJCLFVBQXRELGtCQUE4RUEsT0FBTyxJQUFJLEdBQVgsR0FBaUIsU0FBakIsR0FBNkIsT0FBM0csYUFERixFQUVFLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBa0JlLFNBQWxCLENBRkYsQ0FIRixDQURGO0FBVUQ7O0dBaEd1QnBCLFM7VUFDSkMscUQsRUFDV0UsNkQsRUFXTHNCLGtELEVBQ0ZBLGtEOzs7S0FkQXpCLFMiLCJmaWxlIjoiLi9jb21wb25lbnRzL1N3YXBDaGFpbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEZsZXgsIFRleHQsIExpbmssIEltYWdlLCBTdGFjaywgU3Bpbm5lciB9IGZyb20gJ0BjaGFrcmEtdWkvY29yZSdcbmltcG9ydCBMb2FkZXIgZnJvbSAncmVhY3QtbG9hZGVyJ1xuaW1wb3J0IFJlZnJlc2hpbmcgZnJvbSAnLi9SZWZyZXNoaW5nJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyB1c2VXZWIzUmVhY3QgfSBmcm9tICdAd2ViMy1yZWFjdC9jb3JlJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdmFsaWRJbWFnZSB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgdXNlQ29udHJhY3QgfSBmcm9tICcuLi9ob29rcydcbmltcG9ydCB7IEVNQkxFTV9BUEksIGNvbnRyYWN0QWRkcmVzc2VzIH0gZnJvbSAnLi4vY29uc3RhbnRzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTd2FwQ2hhaW4oKSB7XG4gIGNvbnN0IHsgcXVlcnkgfSA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHsgYWNjb3VudCwgY2hhaW5JZCB9ID0gdXNlV2ViM1JlYWN0KClcbiAgLy8gY29uc3QgW3ZhdWx0cywgc2V0VmF1bHRzXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHsgbG9hZGVkOiBmYWxzZSB9KVxuICBjb25zdCBbbG9hZGluZ0FwaSwgc2V0TG9hZGluZ0FwaV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2JhbGFuY2UsIHNldEJhbGFuY2VdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW2FkZHJlc3MsIHNldEFkZHJlc3NdID0gdXNlU3RhdGUocXVlcnkuYWRkcmVzcylcbiAgY29uc3QgW2V4cGVyaW1lbnRhbCwgc2V0RXhwZXJpbWVudGFsXSA9IHVzZVN0YXRlKHF1ZXJ5LmV4cGVyaW1lbnRhbClcbiAgY29uc3QgW2RlY2ltYWxzLCBzZXREZWNpbWFsc10gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbYWxsb3dhbmNlLCBzZXRBbGxvd2FuY2VdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW2NvdmFsQXBwcm92ZWRGb3IsIHNldElzQ292YWxBcHByb3ZlZF0gPSB1c2VTdGF0ZSgwKVxuXG4gIGNvbnN0IGhhbmRsZXJDb250cmFjdCA9IHVzZUNvbnRyYWN0KGNvbnRyYWN0QWRkcmVzc2VzLnZhdWx0SGFuZGxlcltjaGFpbklkXSwgY29udHJhY3RBZGRyZXNzZXMudmF1bHRIYW5kbGVyQWJpLCB0cnVlKVxuICBjb25zdCBjb3ZhbENvbnRyYWN0ID0gdXNlQ29udHJhY3QoY29udHJhY3RBZGRyZXNzZXMuY292YWxbY2hhaW5JZF0sIGNvbnRyYWN0QWRkcmVzc2VzLmNvdmFsQWJpLCB0cnVlKVxuXG5cbiAgY29uc3QgZ2V0Q29udHJhY3RTdGF0ZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0RGVjaW1hbHMoYXdhaXQgY292YWxDb250cmFjdC5kZWNpbWFscygpKVxuICAgIHNldEFsbG93YW5jZShcbiAgICAgIGF3YWl0IGNvdmFsQ29udHJhY3RcbiAgICAgICAgLmFsbG93YW5jZShhY2NvdW50LCBjb250cmFjdEFkZHJlc3Nlcy52YXVsdEhhbmRsZXJbY2hhaW5JZF0pXG4gICAgICAgIC50aGVuKChiYWxhbmNlOiB7IHRvU3RyaW5nOiAoKSA9PiBzdHJpbmcgfSkgPT4gYmFsYW5jZS50b1N0cmluZygpKVxuICAgIClcbiAgICBzZXRCYWxhbmNlKGF3YWl0IGNvdmFsQ29udHJhY3QuYmFsYW5jZU9mKGFjY291bnQpLnRoZW4oKGJhbGFuY2U6IHsgdG9TdHJpbmc6ICgpID0+IHN0cmluZyB9KSA9PiBiYWxhbmNlLnRvU3RyaW5nKCkpKVxuICAgIGlmIChOdW1iZXIoYWxsb3dhbmNlKSA+PSBOdW1iZXIoMCkpIHtcbiAgICAgIHNldElzQ292YWxBcHByb3ZlZChhbGxvd2FuY2UpXG4gICAgfVxuICAgIHNldFN0YXRlKHsgbG9hZGVkOiB0cnVlIH0pXG4gIH1cblxuICAvLyBjb25zdCBnZXRWYXVsdHMgPSBhc3luYyAoKSA9PiB7XG4gIC8vICAgbG9hZENhY2hlKClcbiAgLy8gICB0cnkge1xuICAvLyAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChFTUJMRU1fQVBJICsgJy92YXVsdHMvJyArIChhZGRyZXNzID8gYWRkcmVzcyA6IGFjY291bnQpICsgKGV4cGVyaW1lbnRhbD8gJz9leHBlcmltZW50YWw9dHJ1ZScgOiAnJyksIHtcbiAgLy8gICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgLy8gICAgICAgaGVhZGVyczoge1xuICAvLyAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gIC8vICAgICAgICAgc2VydmljZTogJ2V2bWV0YWRhdGEnLFxuICAvLyAgICAgICAgIGNoYWluSWQ6IGNoYWluSWQudG9TdHJpbmcoKSxcbiAgLy8gICAgICAgfSxcbiAgLy8gICAgIH0pXG4gIC8vICAgICBjb25zdCBqc29uRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAvLyAgICAgc2V0U3RhdGUoeyBsb2FkZWQ6IHRydWUgfSlcbiAgLy8gICAgIHNldFZhdWx0cyhqc29uRGF0YSlcbiAgLy8gICAgIHNhdmVDYWNoZShqc29uRGF0YSlcbiAgLy8gICAgIHNldExvYWRpbmdBcGkoZmFsc2UpXG4gIC8vICAgICAvLyBjb25zb2xlLmxvZyhqc29uRGF0YSlcbiAgLy8gICB9IGNhdGNoIChlcnJvcikge31cbiAgLy8gfVxuXG4gIC8vIGNvbnN0IGxvYWRDYWNoZSA9ICgpID0+IHtcbiAgLy8gICBsZXQgdmF1bHRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgoYWRkcmVzcyA/IGFkZHJlc3MgOiBhY2NvdW50KSArICdfJyArIGNoYWluSWQgKyAnX3ZhdWx0cycpKSAvLyBMb2FkIHZhdWx0cyBmcm9tIHN0b3JhZ2UgYmVmb3JlIHVwZGF0aW5nIGZyb20gc2VydmVyIVxuICAvLyAgIGlmICh2YXVsdHMpIHtcbiAgLy8gICAgIHNldFN0YXRlKHsgbG9hZGVkOiB0cnVlIH0pXG4gIC8vICAgICBzZXRWYXVsdHModmF1bHRzKVxuICAvLyAgICAgc2V0TG9hZGluZ0FwaSh0cnVlKVxuICAvLyAgIH1cbiAgLy8gfVxuXG4gIC8vIGNvbnN0IHNhdmVDYWNoZSA9ICh2YXVsdHMpID0+IHtcbiAgLy8gICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgoYWRkcmVzcyA/IGFkZHJlc3MgOiBhY2NvdW50KSArICdfJyArIGNoYWluSWQgKyAnX3ZhdWx0cycsIEpTT04uc3RyaW5naWZ5KHZhdWx0cykpIC8vIFNhdmUgbmV3IHN0YXRlIGZvciBsYXRlclxuICAvLyB9XG5cbiAgY29uc3QgW2FjY3QsIHNldEFjY3RdID0gdXNlU3RhdGUoJycpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGFjY291bnQgJiYgYWNjdCAhPSBhY2NvdW50KSB7XG4gICAgICBzZXRBY2N0KGFjY291bnQpXG4gICAgICBzZXRTdGF0ZSh7IGxvYWRlZDogZmFsc2UgfSlcbiAgICAgIGdldENvbnRyYWN0U3RhdGVzKClcbiAgICB9XG4gIH0sIFthY2NvdW50LCBhY2N0XSlcblxuICBjb25zdCBbY2hhaW4sIHNldENoYWluXSA9IHVzZVN0YXRlKGNoYWluSWQpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNoYWluSWQgJiYgY2hhaW4gIT0gY2hhaW5JZCkge1xuICAgICAgc2V0Q2hhaW4oY2hhaW5JZClcbiAgICAgIHNldFN0YXRlKHsgbG9hZGVkOiBmYWxzZSB9KVxuICAgICAgLy8gZ2V0VmF1bHRzKClcbiAgICB9XG4gIH0sIFtjaGFpbklkLCBjaGFpbl0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhY2NvdW50ICYmIGNoYWluSWQgPyBzZXRTdGF0ZSh7IGxvYWRlZDogdHJ1ZSB9KSA6IG51bGxcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8TG9hZGVyIGxvYWRlZD17c3RhdGUubG9hZGVkfT5cbiAgICAgIHtsb2FkaW5nQXBpID8gPFJlZnJlc2hpbmcgLz4gOiAnJ31cblxuICAgICAgPEZsZXggdz1cIjEwMCVcIiBqdXN0aWZ5PVwiY2VudGVyXCIgZmxleFdyYXA9XCJ3cmFwXCIgbXQ9ezEwfT5cbiAgICAgICAgPFRleHQ+VHJhbnNmZXIgQ292YWwgZnJvbSB7Y2hhaW5JZCA9PSAxMzcgPyBcIk1hdGljXCIgOiBcIkV0aGVyZXVtXCJ9IE5ldHdvcmsgdG8ge2NoYWluSWQgPT0gMTM3ID8gXCJFdGhlcnVtXCIgOiBcIk1hdGljXCJ9IE5ldHdvcms8L1RleHQ+XG4gICAgICAgIDxUZXh0PkFsbG93YW5jZToge2FsbG93YW5jZX08L1RleHQ+XG4gICAgICA8L0ZsZXg+XG4gICAgPC9Mb2FkZXI+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SwapChain.tsx\n");

/***/ })

})