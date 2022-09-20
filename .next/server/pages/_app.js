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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"app\": () => (/* binding */ app),\n/* harmony export */   \"db\": () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n// TODO: Add SDKs for Firebase products that you want to use\n// https://firebase.google.com/docs/web/setup#available-libraries\n//Your web app's Firebase configuration\nconst firebaseConfig = {\n    apiKey: \"AIzaSyBrI1oL4gk2F1paxcpMycegHAAuiLkrb4k\",\n    authDomain: \"threelink-b269a.firebaseapp.com\",\n    projectId: \"threelink-b269a\",\n    storageBucket: \"threelink-b269a.appspot.com\",\n    messagingSenderId: \"487898461484\",\n    appId: \"1:487898461484:web:443144852291971e072889\"\n};\n//Initialize Firebase\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(app);\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2ZpcmUvZmlyZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE2QztBQUNJO0FBQ2pELDREQUE0RDtBQUM1RCxpRUFBaUU7QUFFakUsdUNBQXVDO0FBQ3ZDLE1BQU1FLGNBQWMsR0FBRztJQUNyQkMsTUFBTSxFQUFFLHlDQUF5QztJQUNqREMsVUFBVSxFQUFFLGlDQUFpQztJQUM3Q0MsU0FBUyxFQUFFLGlCQUFpQjtJQUM1QkMsYUFBYSxFQUFFLDZCQUE2QjtJQUM1Q0MsaUJBQWlCLEVBQUUsY0FBYztJQUNqQ0MsS0FBSyxFQUFFLDJDQUEyQztDQUNuRDtBQUdELHFCQUFxQjtBQUNyQixNQUFNQyxHQUFHLEdBQUdULDJEQUFhLENBQUNFLGNBQWMsQ0FBQztBQUN6QyxNQUFNUSxFQUFFLEdBQUdULGdFQUFZLENBQUNRLEdBQUcsQ0FBQztBQUNYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmlyZWJhc2UtYXBwLy4vY29tcG9uZW50cy9maXJlL2ZpcmUudHN4P2UyNGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcbmltcG9ydCB7IGdldEZpcmVzdG9yZSB9IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSdcbi8vIFRPRE86IEFkZCBTREtzIGZvciBGaXJlYmFzZSBwcm9kdWN0cyB0aGF0IHlvdSB3YW50IHRvIHVzZVxuLy8gaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL2RvY3Mvd2ViL3NldHVwI2F2YWlsYWJsZS1saWJyYXJpZXNcblxuLy9Zb3VyIHdlYiBhcHAncyBGaXJlYmFzZSBjb25maWd1cmF0aW9uXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgYXBpS2V5OiBcIkFJemFTeUJySTFvTDRnazJGMXBheGNwTXljZWdIQUF1aUxrcmI0a1wiLFxuICBhdXRoRG9tYWluOiBcInRocmVlbGluay1iMjY5YS5maXJlYmFzZWFwcC5jb21cIixcbiAgcHJvamVjdElkOiBcInRocmVlbGluay1iMjY5YVwiLFxuICBzdG9yYWdlQnVja2V0OiBcInRocmVlbGluay1iMjY5YS5hcHBzcG90LmNvbVwiLFxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCI0ODc4OTg0NjE0ODRcIixcbiAgYXBwSWQ6IFwiMTo0ODc4OTg0NjE0ODQ6d2ViOjQ0MzE0NDg1MjI5MTk3MWUwNzI4ODlcIlxufTtcblxuXG4vL0luaXRpYWxpemUgRmlyZWJhc2VcbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuY29uc3QgZGIgPSBnZXRGaXJlc3RvcmUoYXBwKSAgICBcbmV4cG9ydCAge2RiLCBhcHB9Il0sIm5hbWVzIjpbImluaXRpYWxpemVBcHAiLCJnZXRGaXJlc3RvcmUiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsImFwcCIsImRiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/fire/fire.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context/AuthContext */ \"./pages/context/AuthContext.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__]);\n_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\tmizu\\\\Downloads\\\\Information-sharing-develop (4)\\\\Information-sharing-develop\\\\pages\\\\_app.tsx\",\n            lineNumber: 10,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\tmizu\\\\Downloads\\\\Information-sharing-develop (4)\\\\Information-sharing-develop\\\\pages\\\\_app.tsx\",\n        lineNumber: 9,\n        columnNumber: 7\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUErQjtBQUdzQjtBQUdyRCxTQUFTQyxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQVksRUFBRTtJQUNqRCxxQkFDSSw4REFBQ0gsOERBQVk7a0JBQ1gsNEVBQUNFLFNBQVM7WUFBRSxHQUFHQyxTQUFTOzs7OztnQkFBSTs7Ozs7WUFDZixDQUNqQjtDQUNIO0FBRUQsaUVBQWVGLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpcmViYXNlLWFwcC8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCB7IEF1dGhQcm92aWRlciB9IGZyb20gXCIuL2NvbnRleHQvQXV0aENvbnRleHRcIjtcbmltcG9ydCBBZGQgZnJvbSBcIi4uL2NvbXBvbmVudHMvYWRkXCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICAgIDxBdXRoUHJvdmlkZXI+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvQXV0aFByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJBdXRoUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./pages/context/AuthContext.tsx":
/*!***************************************!*\
  !*** ./pages/context/AuthContext.tsx ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider),\n/* harmony export */   \"useAuthContext\": () => (/* binding */ useAuthContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_fire_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/fire/fire */ \"./components/fire/fire.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, _components_fire_fire__WEBPACK_IMPORTED_MODULE_4__]);\n([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, _components_fire_fire__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst useAuthContext = ()=>{\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n};\nconst AuthProvider = ({ children  })=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)(_components_fire_fire__WEBPACK_IMPORTED_MODULE_4__.app);\n    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const isAvailableForViewing = router.pathname === \"/login\" || router.pathname === \"/signup\";\n    const value = {\n        user\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const authStateChanged = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChanged)(auth, async (user)=>{\n            setUser(user);\n            !user && !isAvailableForViewing && await router.push(\"/login\");\n        });\n        return ()=>{\n            authStateChanged();\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\tmizu\\\\Downloads\\\\Information-sharing-develop (4)\\\\Information-sharing-develop\\\\pages\\\\context\\\\AuthContext.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb250ZXh0L0F1dGhDb250ZXh0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBaUY7QUFDdEI7QUFFcEI7QUFDUztBQVloRCxNQUFNUSxXQUFXLGlCQUFHUixvREFBYSxDQUE0QixFQUFFLENBQUM7QUFFekQsTUFBTVMsY0FBYyxHQUFHLElBQU07SUFDbEMsT0FBT1AsaURBQVUsQ0FBQ00sV0FBVyxDQUFDO0NBQy9CO0FBRU0sTUFBTUUsWUFBWSxHQUFHLENBQUMsRUFBRUMsUUFBUSxHQUFhLEdBQUs7SUFDdkQsTUFBTUMsTUFBTSxHQUFHTixzREFBUyxFQUFFO0lBQzFCLE1BQU1PLElBQUksR0FBR1Qsc0RBQU8sQ0FBQ0csc0RBQUcsQ0FBQztJQUN6QixNQUFNLEtBQUNPLElBQUksTUFBRUMsT0FBTyxNQUFJZCwrQ0FBUSxDQUFXLElBQUksQ0FBQztJQUNoRCxNQUFNZSxxQkFBcUIsR0FDekJKLE1BQU0sQ0FBQ0ssUUFBUSxLQUFLLFFBQVEsSUFDNUJMLE1BQU0sQ0FBQ0ssUUFBUSxLQUFLLFNBQVM7SUFDL0IsTUFBTUMsS0FBSyxHQUFHO1FBQ1pKLElBQUk7S0FDTDtJQUVEWCxnREFBUyxDQUFDLElBQU07UUFDZCxNQUFNZ0IsZ0JBQWdCLEdBQUdkLGlFQUFrQixDQUFDUSxJQUFJLEVBQUUsT0FBT0MsSUFBSSxHQUFLO1lBQ2hFQyxPQUFPLENBQUNELElBQUksQ0FBQztZQUNiLENBQUNBLElBQUksSUFBSSxDQUFDRSxxQkFBcUIsSUFBSyxNQUFNSixNQUFNLENBQUNRLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDaEUsQ0FBQztRQUNGLE9BQU8sSUFBTTtZQUNYRCxnQkFBZ0IsRUFBRTtTQUNuQjtLQUNGLEVBQUUsRUFBRSxDQUFDO0lBRU4scUJBQ0UsOERBQUNYLFdBQVcsQ0FBQ2EsUUFBUTtRQUFDSCxLQUFLLEVBQUVBLEtBQUs7a0JBQy9CUCxRQUFROzs7OztpQkFDWSxDQUN4QjtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmlyZWJhc2UtYXBwLy4vcGFnZXMvY29udGV4dC9BdXRoQ29udGV4dC50c3g/Mjg3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFjdE5vZGUsIGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgZ2V0QXV0aCwgb25BdXRoU3RhdGVDaGFuZ2VkIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIlxuaW1wb3J0IHR5cGUgeyBVc2VyIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcbmltcG9ydCB7IGFwcCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2ZpcmUvZmlyZVwiXG5cbmV4cG9ydCB0eXBlIFVzZXJUeXBlID0gVXNlciB8IG51bGxcblxuZXhwb3J0IHR5cGUgQXV0aENvbnRleHRQcm9wcyA9IHtcbiAgdXNlcjogVXNlclR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXV0aFByb3BzID0ge1xuICBjaGlsZHJlbjogUmVhY3ROb2RlXG59XG5cbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxQYXJ0aWFsPEF1dGhDb250ZXh0UHJvcHM+Pih7fSlcblxuZXhwb3J0IGNvbnN0IHVzZUF1dGhDb250ZXh0ID0gKCkgPT4ge1xuICByZXR1cm4gdXNlQ29udGV4dChBdXRoQ29udGV4dClcbn1cblxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9ICh7IGNoaWxkcmVuIH06IEF1dGhQcm9wcykgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBhdXRoID0gZ2V0QXV0aChhcHApXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPFVzZXJUeXBlPihudWxsKVxuICBjb25zdCBpc0F2YWlsYWJsZUZvclZpZXdpbmcgPVxuICAgIHJvdXRlci5wYXRobmFtZSA9PT0gXCIvbG9naW5cIiB8fFxuICAgIHJvdXRlci5wYXRobmFtZSA9PT0gXCIvc2lnbnVwXCJcbiAgY29uc3QgdmFsdWUgPSB7XG4gICAgdXNlcixcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgYXV0aFN0YXRlQ2hhbmdlZCA9IG9uQXV0aFN0YXRlQ2hhbmdlZChhdXRoLCBhc3luYyAodXNlcikgPT4ge1xuICAgICAgc2V0VXNlcih1c2VyKVxuICAgICAgIXVzZXIgJiYgIWlzQXZhaWxhYmxlRm9yVmlld2luZyAmJiAoYXdhaXQgcm91dGVyLnB1c2goXCIvbG9naW5cIikpXG4gICAgfSlcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgYXV0aFN0YXRlQ2hhbmdlZCgpXG4gICAgfVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG4gIClcbn0iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsImdldEF1dGgiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJ1c2VSb3V0ZXIiLCJhcHAiLCJBdXRoQ29udGV4dCIsInVzZUF1dGhDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJhdXRoIiwidXNlciIsInNldFVzZXIiLCJpc0F2YWlsYWJsZUZvclZpZXdpbmciLCJwYXRobmFtZSIsInZhbHVlIiwiYXV0aFN0YXRlQ2hhbmdlZCIsInB1c2giLCJQcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/context/AuthContext.tsx\n");

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