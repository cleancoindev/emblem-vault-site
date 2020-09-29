webpackHotUpdate_N_E("pages/vault",{

/***/ "./connectors.ts":
/*!***********************!*\
  !*** ./connectors.ts ***!
  \***********************/
/*! exports provided: getNetwork, injected, walletconnect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getNetwork\", function() { return getNetwork; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"injected\", function() { return injected; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"walletconnect\", function() { return walletconnect; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _web3_react_network_connector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-react/network-connector */ \"./node_modules/@web3-react/network-connector/dist/network-connector.esm.js\");\n/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3-react/injected-connector */ \"./node_modules/@web3-react/injected-connector/dist/injected-connector.esm.js\");\n/* harmony import */ var _web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @web3-react/walletconnect-connector */ \"./node_modules/@web3-react/walletconnect-connector/dist/walletconnect-connector.esm.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ \"./utils.ts\");\n\n\n\n\n\nfunction getNetwork() {\n  var defaultChainId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;\n  return new _web3_react_network_connector__WEBPACK_IMPORTED_MODULE_1__[\"NetworkConnector\"]({\n    urls: [1, 3, 4, 5, 42, 80001, 97].reduce(function (urls, chainId) {\n      return Object.assign(urls, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, chainId, chainId !== 80001 && chainId === 97 ? \"https://\".concat(_utils__WEBPACK_IMPORTED_MODULE_4__[\"INFURA_PREFIXES\"][chainId], \".infura.io/v3/\").concat(\"a4e978103d87452881d1ea298948aa42\") : chainId === 80001 ? \"https://rpc-mumbai.matic.today\" : \"https://data-seed-prebsc-1-s1.binance.org:8545/\"));\n    }, {}),\n    defaultChainId: defaultChainId\n  });\n}\nvar injected = new _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_2__[\"InjectedConnector\"]({\n  supportedChainIds: [1, 3, 4, 5, 42, 80001, 97]\n});\nvar walletconnect = new _web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_3__[\"WalletConnectConnector\"]({\n  rpc: {\n    1: \"https://\".concat(_utils__WEBPACK_IMPORTED_MODULE_4__[\"INFURA_PREFIXES\"][1], \".infura.io/v3/\").concat(\"a4e978103d87452881d1ea298948aa42\")\n  },\n  bridge: 'https://bridge.walletconnect.org'\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29ubmVjdG9ycy50cz8yOTY2Il0sIm5hbWVzIjpbImdldE5ldHdvcmsiLCJkZWZhdWx0Q2hhaW5JZCIsIk5ldHdvcmtDb25uZWN0b3IiLCJ1cmxzIiwicmVkdWNlIiwiY2hhaW5JZCIsIk9iamVjdCIsImFzc2lnbiIsIklORlVSQV9QUkVGSVhFUyIsInByb2Nlc3MiLCJpbmplY3RlZCIsIkluamVjdGVkQ29ubmVjdG9yIiwic3VwcG9ydGVkQ2hhaW5JZHMiLCJ3YWxsZXRjb25uZWN0IiwiV2FsbGV0Q29ubmVjdENvbm5lY3RvciIsInJwYyIsImJyaWRnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRU8sU0FBU0EsVUFBVCxHQUEwRDtBQUFBLE1BQXRDQyxjQUFzQyx1RUFBckIsQ0FBcUI7QUFDL0QsU0FBTyxJQUFJQyw4RUFBSixDQUFxQjtBQUMxQkMsUUFBSSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLEVBQWIsRUFBaUIsS0FBakIsRUFBd0IsRUFBeEIsRUFBNEJDLE1BQTVCLENBQ0osVUFBQ0QsSUFBRCxFQUFPRSxPQUFQO0FBQUEsYUFDRUMsTUFBTSxDQUFDQyxNQUFQLENBQWNKLElBQWQsZ0dBQ0dFLE9BREgsRUFDYUEsT0FBTyxLQUFJLEtBQVgsSUFBb0JBLE9BQU8sS0FBRyxFQUE5QixxQkFBOENHLHNEQUFlLENBQUNILE9BQUQsQ0FBN0QsMkJBQXVGSSxrQ0FBdkYsSUFBd0hKLE9BQU8sS0FBRyxLQUFWLHVGQURySSxFQURGO0FBQUEsS0FESSxFQUtKLEVBTEksQ0FEb0I7QUFRMUJKLGtCQUFjLEVBQWRBO0FBUjBCLEdBQXJCLENBQVA7QUFVRDtBQUVNLElBQU1TLFFBQVEsR0FBRyxJQUFJQyxnRkFBSixDQUFzQjtBQUFFQyxtQkFBaUIsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxFQUFiLEVBQWlCLEtBQWpCLEVBQXdCLEVBQXhCO0FBQXJCLENBQXRCLENBQWpCO0FBRUEsSUFBTUMsYUFBYSxHQUFHLElBQUlDLDBGQUFKLENBQTJCO0FBQ3REQyxLQUFHLEVBQUU7QUFDSCx5QkFBY1Asc0RBQWUsQ0FBQyxDQUFELENBQTdCLDJCQUFpREMsa0NBQWpEO0FBREcsR0FEaUQ7QUFJdERPLFFBQU0sRUFBRTtBQUo4QyxDQUEzQixDQUF0QiIsImZpbGUiOiIuL2Nvbm5lY3RvcnMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXR3b3JrQ29ubmVjdG9yIH0gZnJvbSAnQHdlYjMtcmVhY3QvbmV0d29yay1jb25uZWN0b3InXG5pbXBvcnQgeyBJbmplY3RlZENvbm5lY3RvciB9IGZyb20gJ0B3ZWIzLXJlYWN0L2luamVjdGVkLWNvbm5lY3RvcidcbmltcG9ydCB7IFdhbGxldENvbm5lY3RDb25uZWN0b3IgfSBmcm9tICdAd2ViMy1yZWFjdC93YWxsZXRjb25uZWN0LWNvbm5lY3RvcidcblxuaW1wb3J0IHsgSU5GVVJBX1BSRUZJWEVTIH0gZnJvbSAnLi91dGlscydcblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5ldHdvcmsoZGVmYXVsdENoYWluSWQgPSAxKTogTmV0d29ya0Nvbm5lY3RvciB7XG4gIHJldHVybiBuZXcgTmV0d29ya0Nvbm5lY3Rvcih7XG4gICAgdXJsczogWzEsIDMsIDQsIDUsIDQyLCA4MDAwMSwgOTddLnJlZHVjZShcbiAgICAgICh1cmxzLCBjaGFpbklkKSA9PlxuICAgICAgICBPYmplY3QuYXNzaWduKHVybHMsIHtcbiAgICAgICAgICBbY2hhaW5JZF06IGNoYWluSWQhPT0gODAwMDEgJiYgY2hhaW5JZD09PTk3ID8gYGh0dHBzOi8vJHtJTkZVUkFfUFJFRklYRVNbY2hhaW5JZF19LmluZnVyYS5pby92My8ke3Byb2Nlc3MuZW52LklORlVSQV9QUk9KRUNUX0lEfWA6IGNoYWluSWQ9PT04MDAwMT8gYGh0dHBzOi8vcnBjLW11bWJhaS5tYXRpYy50b2RheWAgOiBgaHR0cHM6Ly9kYXRhLXNlZWQtcHJlYnNjLTEtczEuYmluYW5jZS5vcmc6ODU0NS9gICxcbiAgICAgICAgfSksXG4gICAgICB7fVxuICAgICksXG4gICAgZGVmYXVsdENoYWluSWQsXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBpbmplY3RlZCA9IG5ldyBJbmplY3RlZENvbm5lY3Rvcih7IHN1cHBvcnRlZENoYWluSWRzOiBbMSwgMywgNCwgNSwgNDIsIDgwMDAxLCA5N10gfSlcblxuZXhwb3J0IGNvbnN0IHdhbGxldGNvbm5lY3QgPSBuZXcgV2FsbGV0Q29ubmVjdENvbm5lY3Rvcih7XG4gIHJwYzoge1xuICAgIDE6IGBodHRwczovLyR7SU5GVVJBX1BSRUZJWEVTWzFdfS5pbmZ1cmEuaW8vdjMvJHtwcm9jZXNzLmVudi5JTkZVUkFfUFJPSkVDVF9JRH1gLFxuICB9LFxuICBicmlkZ2U6ICdodHRwczovL2JyaWRnZS53YWxsZXRjb25uZWN0Lm9yZycsXG59KVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./connectors.ts\n");

/***/ })

})