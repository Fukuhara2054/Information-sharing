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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/fire/fire.tsx":
/*!**********************************!*\
  !*** ./components/fire/fire.tsx ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"app\": () => (/* binding */ app),\n/* harmony export */   \"db\": () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n// TODO: Add SDKs for Firebase products that you want to use\n// https://firebase.google.com/docs/web/setup#available-libraries\n//Your web app's Firebase configuration\nconst firebaseConfig = {\n    apiKey: \"AIzaSyCE4yEbBzefGekUxX2Okq4crSzIQ0zkj44\",\n    authDomain: \"onelink-sample.firebaseapp.com\",\n    projectId: \"onelink-sample\",\n    storageBucket: \"onelink-sample.appspot.com\",\n    messagingSenderId: \"76066462616\",\n    appId: \"1:76066462616:web:542d77bb7b0d01e27469ed\"\n};\n//Initialize Firebase\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(app);\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2ZpcmUvZmlyZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE2QztBQUNJO0FBQ2pELDREQUE0RDtBQUM1RCxpRUFBaUU7QUFFakUsdUNBQXVDO0FBQ3ZDLE1BQU1FLGNBQWMsR0FBRztJQUNyQkMsTUFBTSxFQUFFLHlDQUF5QztJQUNqREMsVUFBVSxFQUFFLGdDQUFnQztJQUM1Q0MsU0FBUyxFQUFFLGdCQUFnQjtJQUMzQkMsYUFBYSxFQUFFLDRCQUE0QjtJQUMzQ0MsaUJBQWlCLEVBQUUsYUFBYTtJQUNoQ0MsS0FBSyxFQUFFLDBDQUEwQztDQUNsRDtBQUVELHFCQUFxQjtBQUNyQixNQUFNQyxHQUFHLEdBQUdULDJEQUFhLENBQUNFLGNBQWMsQ0FBQztBQUN6QyxNQUFNUSxFQUFFLEdBQUdULGdFQUFZLENBQUNRLEdBQUcsQ0FBQztBQUNYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmlyZWJhc2UtYXBwLy4vY29tcG9uZW50cy9maXJlL2ZpcmUudHN4P2UyNGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlIH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJ1xyXG4vLyBUT0RPOiBBZGQgU0RLcyBmb3IgRmlyZWJhc2UgcHJvZHVjdHMgdGhhdCB5b3Ugd2FudCB0byB1c2VcclxuLy8gaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL2RvY3Mvd2ViL3NldHVwI2F2YWlsYWJsZS1saWJyYXJpZXNcclxuXHJcbi8vWW91ciB3ZWIgYXBwJ3MgRmlyZWJhc2UgY29uZmlndXJhdGlvblxyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICBhcGlLZXk6IFwiQUl6YVN5Q0U0eUViQnplZkdla1V4WDJPa3E0Y3JTeklRMHprajQ0XCIsXHJcbiAgYXV0aERvbWFpbjogXCJvbmVsaW5rLXNhbXBsZS5maXJlYmFzZWFwcC5jb21cIixcclxuICBwcm9qZWN0SWQ6IFwib25lbGluay1zYW1wbGVcIixcclxuICBzdG9yYWdlQnVja2V0OiBcIm9uZWxpbmstc2FtcGxlLmFwcHNwb3QuY29tXCIsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNzYwNjY0NjI2MTZcIixcclxuICBhcHBJZDogXCIxOjc2MDY2NDYyNjE2OndlYjo1NDJkNzdiYjdiMGQwMWUyNzQ2OWVkXCJcclxufTtcclxuXHJcbi8vSW5pdGlhbGl6ZSBGaXJlYmFzZVxyXG5jb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxuY29uc3QgZGIgPSBnZXRGaXJlc3RvcmUoYXBwKSAgICBcclxuZXhwb3J0ICB7ZGIsIGFwcH0iXSwibmFtZXMiOlsiaW5pdGlhbGl6ZUFwcCIsImdldEZpcmVzdG9yZSIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwiYXBwIiwiZGIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/fire/fire.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context/AuthContext */ \"./pages/context/AuthContext.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__]);\n_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\ques\\\\pages\\\\_app.tsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\ques\\\\pages\\\\_app.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUE4QjtBQUdzQjtBQUdwRCxTQUFTQyxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQVksRUFBRTtJQUNqRCxxQkFDRSw4REFBQ0gsOERBQVk7a0JBQ1gsNEVBQUNFLFNBQVM7WUFBRSxHQUFHQyxTQUFTOzs7OztnQkFBSTs7Ozs7WUFDZixDQUNoQjtDQUNGO0FBRUQsaUVBQWVGLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXJlYmFzZS1hcHAvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tIFwiLi9jb250ZXh0L0F1dGhDb250ZXh0XCJcbmltcG9ydCBBZGQgZnJvbSAnLi4vY29tcG9uZW50cy9hZGQnXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8QXV0aFByb3ZpZGVyPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvQXV0aFByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsiQXV0aFByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./pages/context/AuthContext.tsx":
/*!***************************************!*\
  !*** ./pages/context/AuthContext.tsx ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider),\n/* harmony export */   \"useAuthContext\": () => (/* binding */ useAuthContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_fire_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/fire/fire */ \"./components/fire/fire.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, _components_fire_fire__WEBPACK_IMPORTED_MODULE_4__]);\n([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, _components_fire_fire__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst useAuthContext = ()=>{\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n};\nconst AuthProvider = ({ children  })=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)(_components_fire_fire__WEBPACK_IMPORTED_MODULE_4__.app);\n    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const isAvailableForViewing = router.pathname === \"/login\" || router.pathname === \"/signup\";\n    const value = {\n        user\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const authStateChanged = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChanged)(auth, async (user)=>{\n            setUser(user);\n            !user && !isAvailableForViewing && await router.push(\"/login\");\n        });\n        return ()=>{\n            authStateChanged();\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\ques\\\\pages\\\\context\\\\AuthContext.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb250ZXh0L0F1dGhDb250ZXh0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBaUY7QUFDdEI7QUFFcEI7QUFDUztBQVloRCxNQUFNUSxXQUFXLGlCQUFHUixvREFBYSxDQUE0QixFQUFFLENBQUM7QUFFekQsTUFBTVMsY0FBYyxHQUFHLElBQU07SUFDbEMsT0FBT1AsaURBQVUsQ0FBQ00sV0FBVyxDQUFDO0NBQy9CO0FBRU0sTUFBTUUsWUFBWSxHQUFHLENBQUMsRUFBRUMsUUFBUSxHQUFhLEdBQUs7SUFDdkQsTUFBTUMsTUFBTSxHQUFHTixzREFBUyxFQUFFO0lBQzFCLE1BQU1PLElBQUksR0FBR1Qsc0RBQU8sQ0FBQ0csc0RBQUcsQ0FBQztJQUN6QixNQUFNLEtBQUNPLElBQUksTUFBRUMsT0FBTyxNQUFJZCwrQ0FBUSxDQUFXLElBQUksQ0FBQztJQUNoRCxNQUFNZSxxQkFBcUIsR0FDekJKLE1BQU0sQ0FBQ0ssUUFBUSxLQUFLLFFBQVEsSUFDNUJMLE1BQU0sQ0FBQ0ssUUFBUSxLQUFLLFNBQVM7SUFDL0IsTUFBTUMsS0FBSyxHQUFHO1FBQ1pKLElBQUk7S0FDTDtJQUVEWCxnREFBUyxDQUFDLElBQU07UUFDZCxNQUFNZ0IsZ0JBQWdCLEdBQUdkLGlFQUFrQixDQUFDUSxJQUFJLEVBQUUsT0FBT0MsSUFBSSxHQUFLO1lBQ2hFQyxPQUFPLENBQUNELElBQUksQ0FBQztZQUNiLENBQUNBLElBQUksSUFBSSxDQUFDRSxxQkFBcUIsSUFBSyxNQUFNSixNQUFNLENBQUNRLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDaEUsQ0FBQztRQUNGLE9BQU8sSUFBTTtZQUNYRCxnQkFBZ0IsRUFBRTtTQUNuQjtLQUNGLEVBQUUsRUFBRSxDQUFDO0lBRU4scUJBQ0UsOERBQUNYLFdBQVcsQ0FBQ2EsUUFBUTtRQUFDSCxLQUFLLEVBQUVBLEtBQUs7a0JBQy9CUCxRQUFROzs7OztpQkFDWSxDQUN4QjtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmlyZWJhc2UtYXBwLy4vcGFnZXMvY29udGV4dC9BdXRoQ29udGV4dC50c3g/Mjg3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFjdE5vZGUsIGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBnZXRBdXRoLCBvbkF1dGhTdGF0ZUNoYW5nZWQgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiXHJcbmltcG9ydCB0eXBlIHsgVXNlciB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCJcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IHsgYXBwIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZmlyZS9maXJlXCJcclxuXHJcbmV4cG9ydCB0eXBlIFVzZXJUeXBlID0gVXNlciB8IG51bGxcclxuXHJcbmV4cG9ydCB0eXBlIEF1dGhDb250ZXh0UHJvcHMgPSB7XHJcbiAgdXNlcjogVXNlclR5cGVcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgQXV0aFByb3BzID0ge1xyXG4gIGNoaWxkcmVuOiBSZWFjdE5vZGVcclxufVxyXG5cclxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0PFBhcnRpYWw8QXV0aENvbnRleHRQcm9wcz4+KHt9KVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUF1dGhDb250ZXh0ID0gKCkgPT4ge1xyXG4gIHJldHVybiB1c2VDb250ZXh0KEF1dGhDb250ZXh0KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogQXV0aFByb3BzKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBhdXRoID0gZ2V0QXV0aChhcHApXHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8VXNlclR5cGU+KG51bGwpXHJcbiAgY29uc3QgaXNBdmFpbGFibGVGb3JWaWV3aW5nID1cclxuICAgIHJvdXRlci5wYXRobmFtZSA9PT0gXCIvbG9naW5cIiB8fFxyXG4gICAgcm91dGVyLnBhdGhuYW1lID09PSBcIi9zaWdudXBcIlxyXG4gIGNvbnN0IHZhbHVlID0ge1xyXG4gICAgdXNlcixcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBhdXRoU3RhdGVDaGFuZ2VkID0gb25BdXRoU3RhdGVDaGFuZ2VkKGF1dGgsIGFzeW5jICh1c2VyKSA9PiB7XHJcbiAgICAgIHNldFVzZXIodXNlcilcclxuICAgICAgIXVzZXIgJiYgIWlzQXZhaWxhYmxlRm9yVmlld2luZyAmJiAoYXdhaXQgcm91dGVyLnB1c2goXCIvbG9naW5cIikpXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgYXV0aFN0YXRlQ2hhbmdlZCgpXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICApXHJcbn0iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsImdldEF1dGgiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJ1c2VSb3V0ZXIiLCJhcHAiLCJBdXRoQ29udGV4dCIsInVzZUF1dGhDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJhdXRoIiwidXNlciIsInNldFVzZXIiLCJpc0F2YWlsYWJsZUZvclZpZXdpbmciLCJwYXRobmFtZSIsInZhbHVlIiwiYXV0aFN0YXRlQ2hhbmdlZCIsInB1c2giLCJQcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/context/AuthContext.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/firestore");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();