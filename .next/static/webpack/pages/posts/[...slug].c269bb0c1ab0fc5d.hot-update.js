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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _blogMaster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../blogMaster */ \"./blogMaster.js\");\n/* harmony import */ var _components_home_post_PostDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/home/post/PostDetails */ \"./components/home/post/PostDetails.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Post = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    if (!router.query.slug) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Loading page...\"\n        }, void 0, false, {\n            fileName: \"/Users/soumya/Athena/FS23/nextjs/blog/pages/posts/[...slug]/index.js\",\n            lineNumber: 12,\n            columnNumber: 17\n        }, undefined);\n    }\n    const post = (0,_blogMaster__WEBPACK_IMPORTED_MODULE_4__.getBlogBySlug)(router.query.slug[0]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: post.title\n                }, void 0, false, {\n                    fileName: \"/Users/soumya/Athena/FS23/nextjs/blog/pages/posts/[...slug]/index.js\",\n                    lineNumber: 19,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/soumya/Athena/FS23/nextjs/blog/pages/posts/[...slug]/index.js\",\n                lineNumber: 18,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_post_PostDetails__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                postItem: post\n            }, void 0, false, {\n                fileName: \"/Users/soumya/Athena/FS23/nextjs/blog/pages/posts/[...slug]/index.js\",\n                lineNumber: 21,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/soumya/Athena/FS23/nextjs/blog/pages/posts/[...slug]/index.js\",\n        lineNumber: 17,\n        columnNumber: 13\n    }, undefined);\n};\n_s(Post, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9bLi4uc2x1Z10vaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNjO0FBQ1g7QUFDcUI7QUFDa0I7QUFFcEUsTUFBTUssT0FBTzs7SUFFVCxNQUFNQyxTQUFTTCxzREFBU0E7SUFFeEIsSUFBSSxDQUFDSyxPQUFPQyxLQUFLLENBQUNDLElBQUksRUFBQztRQUNuQixxQkFBUSw4REFBQ0M7c0JBQUc7Ozs7OztJQUNoQjtJQUVBLE1BQU1DLE9BQU9QLDBEQUFhQSxDQUFDRyxPQUFPQyxLQUFLLENBQUNDLElBQUksQ0FBQyxFQUFFO0lBRS9DLHFCQUFRLDhEQUFDUix1REFBYzs7MEJBQ1gsOERBQUNFLGtEQUFJQTswQkFDRCw0RUFBQ1U7OEJBQU9GLEtBQUtFLEtBQUs7Ozs7Ozs7Ozs7OzBCQUV0Qiw4REFBQ1IseUVBQVdBO2dCQUFDUyxVQUFVSDs7Ozs7Ozs7Ozs7O0FBRXZDO0dBaEJNTDs7UUFFYUosa0RBQVNBOzs7S0FGdEJJO0FBa0JOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bvc3RzL1suLi5zbHVnXS9pbmRleC5qcz9hNjU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHtnZXRCbG9nQnlTbHVnfSBmcm9tIFwiLi4vLi4vLi4vYmxvZ01hc3RlclwiO1xuaW1wb3J0IFBvc3REZXRhaWxzIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2hvbWUvcG9zdC9Qb3N0RGV0YWlsc1wiO1xuXG5jb25zdCBQb3N0ID0gKCk9PntcblxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgaWYgKCFyb3V0ZXIucXVlcnkuc2x1Zyl7XG4gICAgICAgIHJldHVybiAoPGgxPkxvYWRpbmcgcGFnZS4uLjwvaDE+KVxuICAgIH1cblxuICAgIGNvbnN0IHBvc3QgPSBnZXRCbG9nQnlTbHVnKHJvdXRlci5xdWVyeS5zbHVnWzBdKTtcblxuICAgIHJldHVybiAoPFJlYWN0LkZyYWdtZW50PiBcbiAgICAgICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPntwb3N0LnRpdGxlfTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgICAgIDxQb3N0RGV0YWlscyBwb3N0SXRlbT17cG9zdH0+PC9Qb3N0RGV0YWlscz5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+KVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJvdXRlciIsIkhlYWQiLCJnZXRCbG9nQnlTbHVnIiwiUG9zdERldGFpbHMiLCJQb3N0Iiwicm91dGVyIiwicXVlcnkiLCJzbHVnIiwiaDEiLCJwb3N0IiwiRnJhZ21lbnQiLCJ0aXRsZSIsInBvc3RJdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/posts/[...slug]/index.js\n"));

/***/ })

});