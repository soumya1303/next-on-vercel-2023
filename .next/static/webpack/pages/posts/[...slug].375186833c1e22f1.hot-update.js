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

/***/ "./components/home/post/PostDetails.js":
/*!*********************************************!*\
  !*** ./components/home/post/PostDetails.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _PostHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PostHeader */ \"./components/home/post/PostHeader.js\");\n/* harmony import */ var _blogMaster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../blogMaster */ \"./blogMaster.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst PostDetails = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const post = (0,_blogMaster__WEBPACK_IMPORTED_MODULE_4__.getBlogBySlug)(router.query.slug[0]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PostHeader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                title: post.title,\n                imgURL: post.imgURL\n            }, void 0, false, {\n                fileName: \"/Users/soumya/Athena/FS23/nextjs/blog/components/home/post/PostDetails.js\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                children: \"Content - Will be populated from markdown\"\n            }, void 0, false, {\n                fileName: \"/Users/soumya/Athena/FS23/nextjs/blog/components/home/post/PostDetails.js\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/soumya/Athena/FS23/nextjs/blog/components/home/post/PostDetails.js\",\n        lineNumber: 13,\n        columnNumber: 13\n    }, undefined);\n};\n_s(PostDetails, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = PostDetails;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostDetails);\nvar _c;\n$RefreshReg$(_c, \"PostDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hvbWUvcG9zdC9Qb3N0RGV0YWlscy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEwQjtBQUNjO0FBQ0Y7QUFDYztBQUNaO0FBRXhDLE1BQU1LLGNBQWM7O0lBRWhCLE1BQU1DLFNBQVNMLHNEQUFTQTtJQUV4QixNQUFNTSxPQUFPSiwwREFBYUEsQ0FBQ0csT0FBT0UsS0FBSyxDQUFDQyxJQUFJLENBQUMsRUFBRTtJQUUvQyxxQkFBUSw4REFBQ0M7OzBCQUNMLDhEQUFDUixtREFBVUE7Z0JBQUNTLE9BQU9KLEtBQUtJLEtBQUs7Z0JBQUVDLFFBQVFMLEtBQUtLLE1BQU07Ozs7OzswQkFDbEQsOERBQUNDOzBCQUFROzs7Ozs7Ozs7Ozs7QUFFakI7R0FWTVI7O1FBRWFKLGtEQUFTQTs7O0tBRnRCSTtBQVlOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaG9tZS9wb3N0L1Bvc3REZXRhaWxzLmpzP2Q3OWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgUG9zdEhlYWRlciBmcm9tIFwiLi9Qb3N0SGVhZGVyXCI7XG5pbXBvcnQgeyBnZXRCbG9nQnlTbHVnIH0gZnJvbSBcIi4uLy4uLy4uL2Jsb2dNYXN0ZXJcIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL1Bvc3QubW9kdWxlLmNzc1wiO1xuXG5jb25zdCBQb3N0RGV0YWlscyA9ICgpPT57XG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIGNvbnN0IHBvc3QgPSBnZXRCbG9nQnlTbHVnKHJvdXRlci5xdWVyeS5zbHVnWzBdKTtcblxuICAgIHJldHVybiAoPGFydGljbGU+XG4gICAgICAgIDxQb3N0SGVhZGVyIHRpdGxlPXtwb3N0LnRpdGxlfSBpbWdVUkw9e3Bvc3QuaW1nVVJMfT48L1Bvc3RIZWFkZXI+XG4gICAgICAgIDxzZWN0aW9uPkNvbnRlbnQgLSBXaWxsIGJlIHBvcHVsYXRlZCBmcm9tIG1hcmtkb3duPC9zZWN0aW9uPlxuICAgIDwvYXJ0aWNsZT4pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0RGV0YWlsczsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSb3V0ZXIiLCJQb3N0SGVhZGVyIiwiZ2V0QmxvZ0J5U2x1ZyIsImNsYXNzZXMiLCJQb3N0RGV0YWlscyIsInJvdXRlciIsInBvc3QiLCJxdWVyeSIsInNsdWciLCJhcnRpY2xlIiwidGl0bGUiLCJpbWdVUkwiLCJzZWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/home/post/PostDetails.js\n"));

/***/ })

});