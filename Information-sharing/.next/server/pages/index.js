"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/firebase */ \"./utils/firebase.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_firebase__WEBPACK_IMPORTED_MODULE_3__]);\n_utils_firebase__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst Home = (props)=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { 0: currentUser , 1: setCurrentUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        _utils_firebase__WEBPACK_IMPORTED_MODULE_3__.auth.onAuthStateChanged((user)=>{\n            user ? setCurrentUser(user) : router.push(\"/login\");\n        //!user.emailVerified && router.push('/sent')\n        });\n    }, []);\n    const logOut = async ()=>{\n        try {\n            await _utils_firebase__WEBPACK_IMPORTED_MODULE_3__.auth.signOut();\n            router.push(\"/login\");\n        } catch (error) {\n            alert(error.message);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: logOut,\n            children: \"Logout\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\tmizu\\\\next-app\\\\pages\\\\index.tsx\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\tmizu\\\\next-app\\\\pages\\\\index.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUErQztBQUNSO0FBQ0Q7QUFHdEMsTUFBTUksSUFBSSxHQUFPLENBQUNDLEtBQVUsR0FBSztJQUMvQixNQUFNQyxNQUFNLEdBQUdKLHNEQUFTLEVBQUU7SUFDMUIsTUFBTSxLQUFDSyxXQUFXLE1BQUVDLGNBQWMsTUFBSVAsK0NBQVEsQ0FBZ0IsSUFBSSxDQUFDO0lBRW5FRCxnREFBUyxDQUFDLElBQU07UUFDZEcsb0VBQXVCLENBQUMsQ0FBQ08sSUFBUyxHQUFLO1lBQ3JDQSxJQUFJLEdBQUdGLGNBQWMsQ0FBQ0UsSUFBSSxDQUFDLEdBQUdKLE1BQU0sQ0FBQ0ssSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNuRCw2Q0FBNkM7U0FDOUMsQ0FBQztLQUNILEVBQUUsRUFBRSxDQUFDO0lBRU4sTUFBTUMsTUFBTSxHQUFHLFVBQVk7UUFDekIsSUFBSTtZQUNGLE1BQU1ULHlEQUFZLEVBQUU7WUFDcEJHLE1BQU0sQ0FBQ0ssSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUN0QixDQUFDLE9BQU9HLEtBQUssRUFBTTtZQUNsQkMsS0FBSyxDQUFDRCxLQUFLLENBQUNFLE9BQU8sQ0FBQztTQUNyQjtLQUNGO0lBRUQscUJBQ0UsOERBQUNDLEtBQUc7a0JBRUYsNEVBQUNDLFFBQU07WUFBQ0MsT0FBTyxFQUFFUCxNQUFNO3NCQUFFLFFBQU07Ozs7O3FCQUFTOzs7OztpQkFDcEMsQ0FDUDtDQUNGO0FBRUQsaUVBQWVSLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFwcC8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgRkMsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7YXV0aH0gZnJvbSAnLi4vdXRpbHMvZmlyZWJhc2UnXG5cblxuY29uc3QgSG9tZTogRkMgPSAocHJvcHM6IGFueSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBbY3VycmVudFVzZXIsIHNldEN1cnJlbnRVc2VyXSA9IHVzZVN0YXRlPG51bGwgfCBvYmplY3Q+KG51bGwpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhdXRoLm9uQXV0aFN0YXRlQ2hhbmdlZCgodXNlcjogYW55KSA9PiB7XG4gICAgICB1c2VyID8gc2V0Q3VycmVudFVzZXIodXNlcikgOiByb3V0ZXIucHVzaCgnL2xvZ2luJylcbiAgICAgIC8vIXVzZXIuZW1haWxWZXJpZmllZCAmJiByb3V0ZXIucHVzaCgnL3NlbnQnKVxuICAgIH0pXG4gIH0sIFtdKVxuXG4gIGNvbnN0IGxvZ091dCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgYXV0aC5zaWduT3V0KClcbiAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKVxuICAgIH0gY2F0Y2ggKGVycm9yOmFueSkge1xuICAgICAgYWxlcnQoZXJyb3IubWVzc2FnZSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7Lyo8cHJlPntjdXJyZW50VXNlciAmJiBKU09OLnN0cmluZ2lmeShjdXJyZW50VXNlciwgbnVsbCwgNCl9PC9wcmU+Ki99XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2xvZ091dH0+TG9nb3V0PC9idXR0b24+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsImF1dGgiLCJIb21lIiwicHJvcHMiLCJyb3V0ZXIiLCJjdXJyZW50VXNlciIsInNldEN1cnJlbnRVc2VyIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwidXNlciIsInB1c2giLCJsb2dPdXQiLCJzaWduT3V0IiwiZXJyb3IiLCJhbGVydCIsIm1lc3NhZ2UiLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./utils/firebase.ts":
/*!***************************!*\
  !*** ./utils/firebase.ts ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth)\n/* harmony export */ });\n/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/compat/auth */ \"firebase/compat/auth\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/compat/app */ \"firebase/compat/app\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_compat_auth__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_compat_auth__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nconst config = {\n    apiKey: \"AIzaSyAdkW7zDEumvsQ71Dvjifnb-HUG88T0RDE\",\n    authDomain: \"onelink-4be1f.firebaseapp.com\",\n    projectId: \"onelink-4be1f\",\n    storageBucket: \"onelink-4be1f.appspot.com\",\n    messagingSenderId: \"878476602685\",\n    appId: \"1:878476602685:web:e5549ade0b8d17c2c9e954\"\n};\nconsole.log(config);\nif (firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__[\"default\"].apps.length === 0) {\n    firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__[\"default\"].initializeApp(config);\n}\nconst auth = firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__[\"default\"].auth();\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9maXJlYmFzZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTZCO0FBQ0Y7QUFDZTtBQUUxQyxNQUFNQyxNQUFNLEdBQUc7SUFDYkMsTUFBTSxFQUFFQyx5Q0FBc0M7SUFDOUNHLFVBQVUsRUFBRUgsK0JBQTBDO0lBQ3RESyxTQUFTLEVBQUVMLGVBQXlDO0lBQ3BETyxhQUFhLEVBQUVQLDJCQUE2QztJQUM1RFMsaUJBQWlCLEVBQUVULGNBQWdEO0lBQ25FVyxLQUFLLEVBQUVYLDJDQUFxQztDQUM3QztBQUVEYSxPQUFPLENBQUNDLEdBQUcsQ0FBQ2hCLE1BQU0sQ0FBQyxDQUFDO0FBRXBCLElBQUlELHVFQUFvQixLQUFLLENBQUMsRUFBRTtJQUM1QkEseUVBQXNCLENBQUNDLE1BQU0sQ0FBQztDQUNqQztBQUVELE1BQU1vQixJQUFJLEdBQUdyQixnRUFBYSxFQUFFO0FBQ2IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFwcC8uL3V0aWxzL2ZpcmViYXNlLnRzPzU2MDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdmaXJlYmFzZS9jb21wYXQvYXV0aCdcclxuaW1wb3J0ICdmaXJlYmFzZS9maXJlc3RvcmUnXHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9jb21wYXQvYXBwJ1xyXG5cclxuY29uc3QgY29uZmlnID0ge1xyXG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0ZJUkVCQVNFX0FQSV9LRVksXHJcbiAgYXV0aERvbWFpbjogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0ZJUkVCQVNFX0FVVEhfRE9NQUlOLFxyXG4gIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0ZJUkVCQVNFX1BST0pFQ1RfSUQsXHJcbiAgc3RvcmFnZUJ1Y2tldDogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0ZJUkVCQVNFX1NUT1JBR0VfQlVDS0VULFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfRklSRUJBU0VfTUVTU0FHRV9TRU5ERVJfSUQsXHJcbiAgYXBwSWQ6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9GSVJFQkFTRV9BUFBfSUQsXHJcbn07XHJcblxyXG5jb25zb2xlLmxvZyhjb25maWcpO1xyXG5cclxuaWYgKGZpcmViYXNlLmFwcHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGNvbmZpZylcclxufTtcclxuXHJcbmNvbnN0IGF1dGggPSBmaXJlYmFzZS5hdXRoKClcclxuZXhwb3J0IHsgYXV0aCB9Il0sIm5hbWVzIjpbImZpcmViYXNlIiwiY29uZmlnIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIlJFQUNUX0FQUF9GSVJFQkFTRV9BUElfS0VZIiwiYXV0aERvbWFpbiIsIlJFQUNUX0FQUF9GSVJFQkFTRV9BVVRIX0RPTUFJTiIsInByb2plY3RJZCIsIlJFQUNUX0FQUF9GSVJFQkFTRV9QUk9KRUNUX0lEIiwic3RvcmFnZUJ1Y2tldCIsIlJFQUNUX0FQUF9GSVJFQkFTRV9TVE9SQUdFX0JVQ0tFVCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiUkVBQ1RfQVBQX0ZJUkVCQVNFX01FU1NBR0VfU0VOREVSX0lEIiwiYXBwSWQiLCJSRUFDVF9BUFBfRklSRUJBU0VfQVBQX0lEIiwiY29uc29sZSIsImxvZyIsImFwcHMiLCJsZW5ndGgiLCJpbml0aWFsaXplQXBwIiwiYXV0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/firebase.ts\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "firebase/compat/app":
/*!**************************************!*\
  !*** external "firebase/compat/app" ***!
  \**************************************/
/***/ ((module) => {

module.exports = import("firebase/compat/app");;

/***/ }),

/***/ "firebase/compat/auth":
/*!***************************************!*\
  !*** external "firebase/compat/auth" ***!
  \***************************************/
/***/ ((module) => {

module.exports = import("firebase/compat/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("firebase/firestore");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();