"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/sent",{

/***/ "./pages/sent.tsx":
/*!************************!*\
  !*** ./pages/sent.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_tmizu_next_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_tmizu_next_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_tmizu_next_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/firebase */ \"./utils/firebase.ts\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar SignUp = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        _utils_firebase__WEBPACK_IMPORTED_MODULE_4__.auth.onAuthStateChanged(function(user) {\n            user.emailVerified && router.push(\"/\");\n        });\n    }, []);\n    var sendEmailVerification = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(C_Users_tmizu_next_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return C_Users_tmizu_next_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return _utils_firebase__WEBPACK_IMPORTED_MODULE_4__.auth.currentUser.sendEmailVerification();\n                    case 3:\n                        alert(\"認証メールを再送しました\");\n                        router.push(\"/sent\");\n                        _ctx.next = 10;\n                        break;\n                    case 7:\n                        _ctx.prev = 7;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        alert(_ctx.t0.message);\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    7\n                ]\n            ]);\n        }));\n        return function sendEmailVerification() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                children: \"メール内のリンクをクリックしてユーザーを有効化してください。\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tmizu\\\\next-app\\\\pages\\\\sent.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: sendEmailVerification,\n                children: \"再送する\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tmizu\\\\next-app\\\\pages\\\\sent.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\tmizu\\\\next-app\\\\pages\\\\sent.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, _this);\n};\n_s(SignUp, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = SignUp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignUp);\nvar _c;\n$RefreshReg$(_c, \"SignUp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zZW50LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7OztBQUFxQztBQUNFO0FBRUM7QUFFeEMsSUFBTUcsTUFBTSxHQUFPLFdBQU07O0lBQ3ZCLElBQU1DLE1BQU0sR0FBR0gsc0RBQVMsRUFBRTtJQUUxQkQsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RFLG9FQUF1QixDQUFDLFNBQUNJLElBQVMsRUFBSztZQUNyQ0EsSUFBSSxDQUFDQyxhQUFhLElBQUlILE1BQU0sQ0FBQ0ksSUFBSSxDQUFDLEdBQUcsQ0FBQztTQUN2QyxDQUFDO0tBQ0gsRUFBRSxFQUFFLENBQUM7SUFFTixJQUFNQyxxQkFBcUI7bUJBQUcseU9BQVk7Ozs7OzsrQkFFaENQLG1GQUFzQyxFQUFFOzt3QkFDOUNTLEtBQUssQ0FBQyxjQUFjLENBQUM7d0JBQ3JCUCxNQUFNLENBQUNJLElBQUksQ0FBQyxPQUFPLENBQUM7Ozs7Ozt3QkFFcEJHLEtBQUssQ0FBQ0MsUUFBSUMsT0FBTyxDQUFDOzs7Ozs7Ozs7OztTQUVyQjt3QkFSS0oscUJBQXFCOzs7T0FRMUI7SUFFRCxxQkFDRSw4REFBQ0ssS0FBRzs7MEJBQ0YsOERBQUNDLEdBQUM7MEJBQUMsZ0NBQThCOzs7OztxQkFBSTswQkFDckMsOERBQUNDLFFBQU07Z0JBQUNDLE9BQU8sRUFBRVIscUJBQXFCOzBCQUFFLE1BQUk7Ozs7O3FCQUFTOzs7Ozs7YUFDakQsQ0FDUDtDQUNGO0dBekJLTixNQUFNOztRQUNLRixrREFBUzs7O0FBRHBCRSxLQUFBQSxNQUFNO0FBMkJaLCtEQUFlQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NlbnQudHN4PzkxZjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRkMsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmltcG9ydCB7IGF1dGggfSBmcm9tICcuLi91dGlscy9maXJlYmFzZSdcclxuXHJcbmNvbnN0IFNpZ25VcDogRkMgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGF1dGgub25BdXRoU3RhdGVDaGFuZ2VkKCh1c2VyOiBhbnkpID0+IHtcclxuICAgICAgdXNlci5lbWFpbFZlcmlmaWVkICYmIHJvdXRlci5wdXNoKCcvJylcclxuICAgIH0pXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IHNlbmRFbWFpbFZlcmlmaWNhdGlvbiA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGF1dGguY3VycmVudFVzZXIuc2VuZEVtYWlsVmVyaWZpY2F0aW9uKClcclxuICAgICAgYWxlcnQoJ+iqjeiovOODoeODvOODq+OCkuWGjemAgeOBl+OBvuOBl+OBnycpXHJcbiAgICAgIHJvdXRlci5wdXNoKCcvc2VudCcpXHJcbiAgICB9IGNhdGNoIChlcnI6IGFueSkge1xyXG4gICAgICBhbGVydChlcnIubWVzc2FnZSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8cD7jg6Hjg7zjg6vlhoXjga7jg6rjg7Pjgq/jgpLjgq/jg6rjg4Pjgq/jgZfjgabjg6bjg7zjgrbjg7zjgpLmnInlirnljJbjgZfjgabjgY/jgaDjgZXjgYTjgII8L3A+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17c2VuZEVtYWlsVmVyaWZpY2F0aW9ufT7lho3pgIHjgZnjgos8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnblVwIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJvdXRlciIsImF1dGgiLCJTaWduVXAiLCJyb3V0ZXIiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJ1c2VyIiwiZW1haWxWZXJpZmllZCIsInB1c2giLCJzZW5kRW1haWxWZXJpZmljYXRpb24iLCJjdXJyZW50VXNlciIsImFsZXJ0IiwiZXJyIiwibWVzc2FnZSIsImRpdiIsInAiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/sent.tsx\n"));

/***/ })

});