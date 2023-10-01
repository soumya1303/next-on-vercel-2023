"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts/[...slug]",{

/***/ "./pages/posts/[...slug]/index.js":
/*!****************************************!*\
  !*** ./pages/posts/[...slug]/index.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _blogMaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../blogMaster */ \"./blogMaster.js\");\n/* harmony import */ var _components_home_post_PostDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/home/post/PostDetails */ \"./components/home/post/PostDetails.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Post = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    if (!router.query.slug) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Loading page...\"\n        }, void 0, false, {\n            fileName: \"/Users/soumya/Athena/FS23/nextjs/blog/pages/posts/[...slug]/index.js\",\n            lineNumber: 11,\n            columnNumber: 17\n        }, undefined);\n    }\n    const slugValue = router.query.slug[0];\n    const post = (0,_blogMaster__WEBPACK_IMPORTED_MODULE_3__.getBlogBySlug)(props.slug);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_post_PostDetails__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        postItem: post\n    }, void 0, false, {\n        fileName: \"/Users/soumya/Athena/FS23/nextjs/blog/pages/posts/[...slug]/index.js\",\n        lineNumber: 17,\n        columnNumber: 13\n    }, undefined);\n};\n_s(Post, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9bLi4uc2x1Z10vaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMEI7QUFDYztBQUNTO0FBQ21CO0FBRXBFLE1BQU1JLE9BQU87O0lBRVQsTUFBTUMsU0FBU0osc0RBQVNBO0lBRXhCLElBQUksQ0FBQ0ksT0FBT0MsS0FBSyxDQUFDQyxJQUFJLEVBQUM7UUFDbkIscUJBQVEsOERBQUNDO3NCQUFHOzs7Ozs7SUFDaEI7SUFDQSxNQUFNQyxZQUFZSixPQUFPQyxLQUFLLENBQUNDLElBQUksQ0FBQyxFQUFFO0lBRXRDLE1BQU1HLE9BQU9SLDBEQUFhQSxDQUFDUyxNQUFNSixJQUFJO0lBRXJDLHFCQUFRLDhEQUFDSix5RUFBV0E7UUFBQ1MsVUFBVUY7Ozs7OztBQUNuQztHQVpNTjs7UUFFYUgsa0RBQVNBOzs7S0FGdEJHO0FBY04sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvWy4uLnNsdWddL2luZGV4LmpzP2E2NTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQge2dldEJsb2dCeVNsdWd9IGZyb20gXCIuLi8uLi8uLi9ibG9nTWFzdGVyXCJcbmltcG9ydCBQb3N0RGV0YWlscyBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9ob21lL3Bvc3QvUG9zdERldGFpbHNcIjtcblxuY29uc3QgUG9zdCA9ICgpPT57XG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIGlmICghcm91dGVyLnF1ZXJ5LnNsdWcpe1xuICAgICAgICByZXR1cm4gKDxoMT5Mb2FkaW5nIHBhZ2UuLi48L2gxPilcbiAgICB9XG4gICAgY29uc3Qgc2x1Z1ZhbHVlID0gcm91dGVyLnF1ZXJ5LnNsdWdbMF07XG5cbiAgICBjb25zdCBwb3N0ID0gZ2V0QmxvZ0J5U2x1Zyhwcm9wcy5zbHVnKTtcblxuICAgIHJldHVybiAoPFBvc3REZXRhaWxzIHBvc3RJdGVtPXtwb3N0fT48L1Bvc3REZXRhaWxzPilcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSb3V0ZXIiLCJnZXRCbG9nQnlTbHVnIiwiUG9zdERldGFpbHMiLCJQb3N0Iiwicm91dGVyIiwicXVlcnkiLCJzbHVnIiwiaDEiLCJzbHVnVmFsdWUiLCJwb3N0IiwicHJvcHMiLCJwb3N0SXRlbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/posts/[...slug]/index.js\n"));

/***/ })

});