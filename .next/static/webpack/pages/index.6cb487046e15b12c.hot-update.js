"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./containers/home/home.jsx":
/*!**********************************!*\
  !*** ./containers/home/home.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/list */ \"./node_modules/antd/lib/list/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ \"./containers/home/style.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar Home = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), randomArray = _useState[0], setRandomArray = _useState[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var generateRandomString = function() {\n            var length = Math.floor(Math.random() * 5) + 1;\n            var result = \"\";\n            var characters = \"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ\";\n            for(var i = 0; i < length; i++){\n                var randomIndex = Math.floor(Math.random() * characters.length);\n                result += characters[randomIndex];\n            }\n            return result;\n        };\n        var newArray = Array.from({\n            length: 1000\n        }, function() {\n            return generateRandomString();\n        });\n        setRandomArray(newArray);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.HomeContainer, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Random\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\demo\\\\containers\\\\home\\\\home.jsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.BlockScroll, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.ListStyled, {\n                    itemLayout: \"horizontal\",\n                    dataSource: randomArray,\n                    renderItem: function(item, index) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_list__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Item, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_list__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Item.Meta, {\n                                title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: item\n                                }, void 0, false, void 0, void 0)\n                            }, void 0, false, void 0, void 0)\n                        }, void 0, false, void 0, void 0);\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\demo\\\\containers\\\\home\\\\home.jsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\demo\\\\containers\\\\home\\\\home.jsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.ButtonBlock, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.ButtonStyled, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\demo\\\\containers\\\\home\\\\home.jsx\",\n                    lineNumber: 45,\n                    columnNumber: 15\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\demo\\\\containers\\\\home\\\\home.jsx\",\n                lineNumber: 44,\n                columnNumber: 11\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\demo\\\\containers\\\\home\\\\home.jsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"e3nFXnLeXFaKXCujvDKkjb5qpaA=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250YWluZXJzL2hvbWUvaG9tZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ3VCO0FBQ3lDO0FBRTVGLElBQU1TLE9BQU87O0lBQ1gsSUFBc0NOLFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxFQUFFLE9BQTFDTyxjQUErQlAsY0FBbEJRLGlCQUFrQlI7SUFFdENELGdEQUFTQSxDQUFDO1FBQ1IsSUFBTVUsdUJBQXVCO1lBQzNCLElBQU1DLFNBQVNDLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxLQUFLLEtBQUs7WUFDL0MsSUFBSUMsU0FBUztZQUNiLElBQU1DLGFBQWE7WUFFbkIsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUlOLFFBQVFNLElBQUs7Z0JBQy9CLElBQU1DLGNBQWNOLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxLQUFLRSxXQUFXTCxNQUFNO2dCQUNoRUksVUFBVUMsVUFBVSxDQUFDRSxZQUFZO1lBQ25DO1lBRUEsT0FBT0g7UUFDVDtRQUVBLElBQU1JLFdBQVdDLE1BQU1DLElBQUksQ0FBQztZQUFFVixRQUFRO1FBQUssR0FBRzttQkFBTUQ7O1FBQ3BERCxlQUFlVTtJQUNqQixHQUFHLEVBQUU7SUFDTCxxQkFDRSw4REFBQ2QsaURBQWFBOzswQkFDWiw4REFBQ2lCOzBCQUFHOzs7Ozs7MEJBTUosOERBQUNwQiwrQ0FBV0E7MEJBQ1YsNEVBQUNJLDhDQUFVQTtvQkFDVGlCLFlBQVc7b0JBQ1hDLFlBQVloQjtvQkFDWmlCLFlBQVksU0FBQ0MsTUFBTUM7NkNBQ2pCLDhEQUFDN0IsMERBQVM7c0NBQ1IsNEVBQUNBLDBEQUFTLENBQUMrQixJQUFJO2dDQUFDQyxxQkFBTyw4REFBQ0M7OENBQUdMOzs7Ozs7Ozs7Ozs7Ozs7MEJBSy9CLDhEQUFDdkIsK0NBQVdBOzBCQUNSLDRFQUFDQyxnREFBWUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJM0I7R0E1Q01HO0tBQUFBO0FBOENOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRhaW5lcnMvaG9tZS9ob21lLmpzeD8yNjcxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpc3QgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCbG9ja1Njcm9sbCwgQnV0dG9uQmxvY2ssIEJ1dHRvblN0eWxlZCwgSG9tZUNvbnRhaW5lciwgTGlzdFN0eWxlZCB9IGZyb20gXCIuL3N0eWxlXCI7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtyYW5kb21BcnJheSwgc2V0UmFuZG9tQXJyYXldID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZ2VuZXJhdGVSYW5kb21TdHJpbmcgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGxlbmd0aCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUpICsgMTtcclxuICAgICAgbGV0IHJlc3VsdCA9IFwiXCI7XHJcbiAgICAgIGNvbnN0IGNoYXJhY3RlcnMgPSBcImFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpcIjtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYXJhY3RlcnMubGVuZ3RoKTtcclxuICAgICAgICByZXN1bHQgKz0gY2hhcmFjdGVyc1tyYW5kb21JbmRleF07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG5ld0FycmF5ID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogMTAwMCB9LCAoKSA9PiBnZW5lcmF0ZVJhbmRvbVN0cmluZygpKTtcclxuICAgIHNldFJhbmRvbUFycmF5KG5ld0FycmF5KTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxIb21lQ29udGFpbmVyPlxyXG4gICAgICA8aDE+UmFuZG9tPC9oMT5cclxuICAgICAgey8qIDx1bD5cclxuICAgICAgICB7cmFuZG9tQXJyYXkubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPGxpIGtleT17aW5kZXh9PntpdGVtfTwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3VsPiAqL31cclxuICAgICAgPEJsb2NrU2Nyb2xsPlxyXG4gICAgICAgIDxMaXN0U3R5bGVkXHJcbiAgICAgICAgICBpdGVtTGF5b3V0PVwiaG9yaXpvbnRhbFwiXHJcbiAgICAgICAgICBkYXRhU291cmNlPXtyYW5kb21BcnJheX1cclxuICAgICAgICAgIHJlbmRlckl0ZW09eyhpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8TGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgIDxMaXN0Lkl0ZW0uTWV0YSB0aXRsZT17PHA+e2l0ZW19PC9wPn0gLz5cclxuICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Jsb2NrU2Nyb2xsPlxyXG4gICAgICAgICAgPEJ1dHRvbkJsb2NrPlxyXG4gICAgICAgICAgICAgIDxCdXR0b25TdHlsZWQ+PC9CdXR0b25TdHlsZWQ+XHJcbiAgICAgICAgICA8L0J1dHRvbkJsb2NrPlxyXG4gICAgPC9Ib21lQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwibmFtZXMiOlsiTGlzdCIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJCbG9ja1Njcm9sbCIsIkJ1dHRvbkJsb2NrIiwiQnV0dG9uU3R5bGVkIiwiSG9tZUNvbnRhaW5lciIsIkxpc3RTdHlsZWQiLCJIb21lIiwicmFuZG9tQXJyYXkiLCJzZXRSYW5kb21BcnJheSIsImdlbmVyYXRlUmFuZG9tU3RyaW5nIiwibGVuZ3RoIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicmVzdWx0IiwiY2hhcmFjdGVycyIsImkiLCJyYW5kb21JbmRleCIsIm5ld0FycmF5IiwiQXJyYXkiLCJmcm9tIiwiaDEiLCJpdGVtTGF5b3V0IiwiZGF0YVNvdXJjZSIsInJlbmRlckl0ZW0iLCJpdGVtIiwiaW5kZXgiLCJJdGVtIiwiTWV0YSIsInRpdGxlIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./containers/home/home.jsx\n"));

/***/ })

});