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

/***/ "./css/style.module.css":
/*!******************************!*\
  !*** ./css/style.module.css ***!
  \******************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"content1\": \"style_content1__6ntSP\",\n\t\"group\": \"style_group__deFze\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jc3Mvc3R5bGUubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGlzdG9yeS8uL2Nzcy9zdHlsZS5tb2R1bGUuY3NzP2JjMmIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGVudDFcIjogXCJzdHlsZV9jb250ZW50MV9fNm50U1BcIixcblx0XCJncm91cFwiOiBcInN0eWxlX2dyb3VwX19kZUZ6ZVwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./css/style.module.css\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_style_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/style.module.css */ \"./css/style.module.css\");\n/* harmony import */ var _css_style_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_style_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n\n\n// import Icon from '../component/icon/index';\n\n\n// import '../app.css'\n\nclass Index extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    constructor(color, radius, v, angle, x, y){\n        super();\n        this.color = color;\n        this.radius = radius;\n        this.v = v;\n        this.angle = angle;\n        this.x = x;\n        this.y = y;\n        // 创建一个 ref 来存储 canvas 的 DOM 元素\n        this.canvas = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createRef();\n    }\n    handleClick = (item)=>{\n        console.log('click ');\n        // this.props.history.push(\"/home\");\n        next_router__WEBPACK_IMPORTED_MODULE_2___default().push('/firstpage');\n    };\n    componentDidMount() {\n        //获取真实canvasDOM\n        const canvas = this.canvas.current;\n        //圆对象数组\n        let arr = [];\n        //圆数量\n        const CNT = 50;\n        //绘制区域中心点\n        let centerX, centerY;\n        //绘制上下文\n        const ctx = canvas.getContext(\"2d\");\n        //设置canvas满屏\n        canvas.width = window.innerWidth;\n        canvas.height = window.innerHeight;\n        //设置中心点\n        centerX = canvas.width / 2;\n        centerY = canvas.height / 2;\n        //实例化圆\n        for(let i1 = 0; i1 < CNT; i1++){\n            let c1 = new Index(//随机颜色\n            \"rgba(\" + 255 * Math.random() + \",\" + 255 * Math.random() + \",\" + 255 * Math.random() + \",\" + Math.random() + \")\", //随机半径\n            66 * Math.random() + 1, //随机速度\n            4 * Math.random() + 1, //随机角度\n            360 * Math.random(), //x坐标\n            centerX, //y坐标\n            centerY);\n            arr.push(c1);\n        }\n        function draw() {\n            //清除画布\n            ctx.clearRect(0, 0, canvas.width, canvas.height);\n            for(let i = 0; i < CNT; i++){\n                //移动x坐标\n                arr[i].x += arr[i].v * Math.cos(arr[i].angle);\n                //移动y坐标\n                arr[i].y += arr[i].v * Math.sin(arr[i].angle);\n                //反弹（angle在笛卡尔坐标系）\n                if (arr[i].y < arr[i].radius) {\n                    //上\n                    arr[i].angle = 0 - arr[i].angle;\n                }\n                if (arr[i].y > canvas.height - arr[i].radius) {\n                    //下\n                    arr[i].angle = 0 - arr[i].angle;\n                }\n                if (arr[i].x < arr[i].radius) {\n                    //左\n                    arr[i].angle = Math.PI - arr[i].angle;\n                }\n                if (arr[i].x > canvas.width - arr[i].radius) {\n                    //右\n                    arr[i].angle = Math.PI - arr[i].angle;\n                }\n                //调用圆的绘制方法\n                arr[i].draw(ctx);\n            }\n            //延迟50ms\n            setTimeout(draw, 42);\n        }\n        //调用绘制\n        draw();\n    }\n    /**\r\n   * 绘制圆\r\n   * @param  ctx 绘制上下文\r\n   */ draw(ctx) {\n        //开始绘制路径\n        ctx.beginPath();\n        //绘制圆\n        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);\n        //关闭绘制路径\n        ctx.closePath();\n        //设置fill颜色\n        ctx.fillStyle = this.color;\n        //fill\n        ctx.fill();\n    }\n    render() {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    __source: {\n                        fileName: \"D:\\\\没头发的不归路\\\\history\\\\build\\\\pages\\\\index.js\",\n                        lineNumber: 123,\n                        columnNumber: 7\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"link\", {\n                        href: \"https://fonts.googleapis.com/css2?family=Inter&display=optional\",\n                        rel: \"stylesheet\",\n                        __source: {\n                            fileName: \"D:\\\\没头发的不归路\\\\history\\\\build\\\\pages\\\\index.js\",\n                            lineNumber: 124,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: (_css_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().content1),\n                    __source: {\n                        fileName: \"D:\\\\没头发的不归路\\\\history\\\\build\\\\pages\\\\index.js\",\n                        lineNumber: 129,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                            className: \"ab\",\n                            onClick: ()=>{\n                                this.handleClick();\n                            },\n                            __source: {\n                                fileName: \"D:\\\\没头发的不归路\\\\history\\\\build\\\\pages\\\\index.js\",\n                                lineNumber: 130,\n                                columnNumber: 13\n                            },\n                            __self: this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                    __source: {\n                                        fileName: \"D:\\\\没头发的不归路\\\\history\\\\build\\\\pages\\\\index.js\",\n                                        lineNumber: 131,\n                                        columnNumber: 18\n                                    },\n                                    __self: this,\n                                    children: \"下\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                    __source: {\n                                        fileName: \"D:\\\\没头发的不归路\\\\history\\\\build\\\\pages\\\\index.js\",\n                                        lineNumber: 132,\n                                        columnNumber: 18\n                                    },\n                                    __self: this,\n                                    children: \"面\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                    __source: {\n                                        fileName: \"D:\\\\没头发的不归路\\\\history\\\\build\\\\pages\\\\index.js\",\n                                        lineNumber: 133,\n                                        columnNumber: 18\n                                    },\n                                    __self: this,\n                                    children: \"进\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                    __source: {\n                                        fileName: \"D:\\\\没头发的不归路\\\\history\\\\build\\\\pages\\\\index.js\",\n                                        lineNumber: 134,\n                                        columnNumber: 18\n                                    },\n                                    __self: this,\n                                    children: \"行\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                    __source: {\n                                        fileName: \"D:\\\\没头发的不归路\\\\history\\\\build\\\\pages\\\\index.js\",\n                                        lineNumber: 135,\n                                        columnNumber: 18\n                                    },\n                                    __self: this,\n                                    children: \"小\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                    __source: {\n                                        fileName: \"D:\\\\没头发的不归路\\\\history\\\\build\\\\pages\\\\index.js\",\n                                        lineNumber: 136,\n                                        columnNumber: 18\n                                    },\n                                    __self: this,\n                                    children: \"组\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                    __source: {\n                                        fileName: \"D:\\\\没头发的不归路\\\\history\\\\build\\\\pages\\\\index.js\",\n                                        lineNumber: 137,\n                                        columnNumber: 18\n                                    },\n                                    __self: this,\n                                    children: \"展\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                    __source: {\n                                        fileName: \"D:\\\\没头发的不归路\\\\history\\\\build\\\\pages\\\\index.js\",\n                                        lineNumber: 138,\n                                        columnNumber: 18\n                                    },\n                                    __self: this,\n                                    children: \"示\"\n                                })\n                            ]\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                            className: (_css_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().group),\n                            __source: {\n                                fileName: \"D:\\\\没头发的不归路\\\\history\\\\build\\\\pages\\\\index.js\",\n                                lineNumber: 140,\n                                columnNumber: 14\n                            },\n                            __self: this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                    __source: {\n                                        fileName: \"D:\\\\没头发的不归路\\\\history\\\\build\\\\pages\\\\index.js\",\n                                        lineNumber: 141,\n                                        columnNumber: 16\n                                    },\n                                    __self: this,\n                                    children: \"小组成员:\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                    __source: {\n                                        fileName: \"D:\\\\没头发的不归路\\\\history\\\\build\\\\pages\\\\index.js\",\n                                        lineNumber: 142,\n                                        columnNumber: 16\n                                    },\n                                    __self: this,\n                                    children: \"付艺锦,程嘉龙,杜佳怡,马丞,杨涵,王勤勤,易宇腾,罗琪玮,王彦军,张超,黑纪源\"\n                                })\n                            ]\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"canvas\", {\n                            ref: this.canvas,\n                            className: (_css_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().circle),\n                            __source: {\n                                fileName: \"D:\\\\没头发的不归路\\\\history\\\\build\\\\pages\\\\index.js\",\n                                lineNumber: 144,\n                                columnNumber: 16\n                            },\n                            __self: this\n                        })\n                    ]\n                })\n            ]\n        }));\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7OENBQ0QsQ0FBQzs7Ozs7NEJBRU5zQzs7Ozs7Ozs7Ozs7Ozs7OzhDQUNHLENBQUs7Ozs7Ozs7Ozs4Q0FDTCxDQUF3Qzs7Ozs7NEJBRXRDSzs7Ozs7Ozs7Ozs7OztJQUtyQixDQUFDOztBQUlILE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oaXN0b3J5Ly4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGUgZnJvbSBcIi4uL2Nzcy9zdHlsZS5tb2R1bGUuY3NzXCJcclxuLy8gaW1wb3J0IEljb24gZnJvbSAnLi4vY29tcG9uZW50L2ljb24vaW5kZXgnO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbi8vIGltcG9ydCAnLi4vYXBwLmNzcydcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5jbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoY29sb3IsIHJhZGl1cywgdiwgYW5nbGUsIHgsIHkpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcclxuICAgIHRoaXMudiA9IHY7XHJcbiAgICB0aGlzLmFuZ2xlID0gYW5nbGU7XHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgdGhpcy55ID0geTtcclxuICAgIC8vIOWIm+W7uuS4gOS4qiByZWYg5p2l5a2Y5YKoIGNhbnZhcyDnmoQgRE9NIOWFg+e0oFxyXG4gICAgdGhpcy5jYW52YXMgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICB9XHJcbiAgaGFuZGxlQ2xpY2sgPSAoaXRlbSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ2NsaWNrICcpO1xyXG4gICAgLy8gdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCIvaG9tZVwiKTtcclxuICAgIFJvdXRlci5wdXNoKCcvZmlyc3RwYWdlJylcclxuICB9O1xyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgLy/ojrflj5bnnJ/lrp5jYW52YXNET01cclxuICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuY2FudmFzLmN1cnJlbnQ7XHJcbiAgICAvL+WchuWvueixoeaVsOe7hFxyXG4gICAgbGV0IGFyciA9IFtdO1xyXG4gICAgLy/lnIbmlbDph49cclxuICAgIGNvbnN0IENOVCA9IDUwO1xyXG4gICAgLy/nu5jliLbljLrln5/kuK3lv4PngrlcclxuICAgIGxldCBjZW50ZXJYLCBjZW50ZXJZO1xyXG4gICAgLy/nu5jliLbkuIrkuIvmlodcclxuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAvL+iuvue9rmNhbnZhc+a7oeWxj1xyXG4gICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgLy/orr7nva7kuK3lv4PngrlcclxuICAgIGNlbnRlclggPSBjYW52YXMud2lkdGggLyAyO1xyXG4gICAgY2VudGVyWSA9IGNhbnZhcy5oZWlnaHQgLyAyO1xyXG4gICAgLy/lrp7kvovljJblnIZcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQ05UOyBpKyspIHtcclxuICAgICAgbGV0IGMxID0gbmV3IEluZGV4KFxyXG4gICAgICAgIC8v6ZqP5py66aKc6ImyXHJcbiAgICAgICAgXCJyZ2JhKFwiICtcclxuICAgICAgICAyNTUgKiBNYXRoLnJhbmRvbSgpICtcclxuICAgICAgICBcIixcIiArXHJcbiAgICAgICAgMjU1ICogTWF0aC5yYW5kb20oKSArXHJcbiAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgIDI1NSAqIE1hdGgucmFuZG9tKCkgK1xyXG4gICAgICAgIFwiLFwiICtcclxuICAgICAgICBNYXRoLnJhbmRvbSgpICtcclxuICAgICAgICBcIilcIixcclxuICAgICAgICAvL+maj+acuuWNiuW+hFxyXG4gICAgICAgIDY2ICogTWF0aC5yYW5kb20oKSArIDEsXHJcbiAgICAgICAgLy/pmo/mnLrpgJ/luqZcclxuICAgICAgICA0ICogTWF0aC5yYW5kb20oKSArIDEsXHJcbiAgICAgICAgLy/pmo/mnLrop5LluqZcclxuICAgICAgICAzNjAgKiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgIC8veOWdkOagh1xyXG4gICAgICAgIGNlbnRlclgsXHJcbiAgICAgICAgLy955Z2Q5qCHXHJcbiAgICAgICAgY2VudGVyWVxyXG4gICAgICApO1xyXG4gICAgICBhcnIucHVzaChjMSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZHJhdygpIHtcclxuICAgICAgLy/muIXpmaTnlLvluINcclxuICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IENOVDsgaSsrKSB7XHJcbiAgICAgICAgLy/np7vliqh45Z2Q5qCHXHJcbiAgICAgICAgYXJyW2ldLnggKz0gYXJyW2ldLnYgKiBNYXRoLmNvcyhhcnJbaV0uYW5nbGUpO1xyXG4gICAgICAgIC8v56e75YqoeeWdkOagh1xyXG4gICAgICAgIGFycltpXS55ICs9IGFycltpXS52ICogTWF0aC5zaW4oYXJyW2ldLmFuZ2xlKTtcclxuICAgICAgICAvL+WPjeW8ue+8iGFuZ2xl5Zyo56yb5Y2h5bCU5Z2Q5qCH57O777yJXHJcbiAgICAgICAgaWYgKGFycltpXS55IDwgYXJyW2ldLnJhZGl1cykge1xyXG4gICAgICAgICAgLy/kuIpcclxuICAgICAgICAgIGFycltpXS5hbmdsZSA9IDAgLSBhcnJbaV0uYW5nbGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhcnJbaV0ueSA+IGNhbnZhcy5oZWlnaHQgLSBhcnJbaV0ucmFkaXVzKSB7XHJcbiAgICAgICAgICAvL+S4i1xyXG4gICAgICAgICAgYXJyW2ldLmFuZ2xlID0gMCAtIGFycltpXS5hbmdsZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFycltpXS54IDwgYXJyW2ldLnJhZGl1cykge1xyXG4gICAgICAgICAgLy/lt6ZcclxuICAgICAgICAgIGFycltpXS5hbmdsZSA9IE1hdGguUEkgLSBhcnJbaV0uYW5nbGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhcnJbaV0ueCA+IGNhbnZhcy53aWR0aCAtIGFycltpXS5yYWRpdXMpIHtcclxuICAgICAgICAgIC8v5Y+zXHJcbiAgICAgICAgICBhcnJbaV0uYW5nbGUgPSBNYXRoLlBJIC0gYXJyW2ldLmFuZ2xlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+iwg+eUqOWchueahOe7mOWItuaWueazlVxyXG4gICAgICAgIGFycltpXS5kcmF3KGN0eCk7XHJcbiAgICAgIH1cclxuICAgICAgLy/lu7bov581MG1zXHJcbiAgICAgIHNldFRpbWVvdXQoZHJhdywgNDIpO1xyXG4gICAgfVxyXG4gICAgLy/osIPnlKjnu5jliLZcclxuICAgIGRyYXcoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOe7mOWItuWchlxyXG4gICAqIEBwYXJhbSAgY3R4IOe7mOWItuS4iuS4i+aWh1xyXG4gICAqL1xyXG4gIGRyYXcoY3R4KSB7XHJcbiAgICAvL+W8gOWni+e7mOWItui3r+W+hFxyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgLy/nu5jliLblnIZcclxuICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAvL+WFs+mXree7mOWItui3r+W+hFxyXG4gICAgY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgLy/orr7nva5maWxs6aKc6ImyXHJcbiAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcclxuICAgIC8vZmlsbFxyXG4gICAgY3R4LmZpbGwoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbnRlciZkaXNwbGF5PW9wdGlvbmFsXCJcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29udGVudDF9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFiXCIgb25DbGljaz17KCk9Pnt0aGlzLmhhbmRsZUNsaWNrKCl9fSA+XHJcbiAgICAgICAgICAgICAgICAgPHNwYW4+5LiLPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgIDxzcGFuPumdojwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICA8c3Bhbj7ov5s8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgPHNwYW4+6KGMPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgIDxzcGFuPuWwjzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICA8c3Bhbj7nu4Q8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgPHNwYW4+5bGVPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgIDxzcGFuPuekujwvc3Bhbj5cclxuICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmdyb3VwfT5cclxuICAgICAgICAgICAgICAgPHNwYW4+5bCP57uE5oiQ5ZGYOjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgPHNwYW4+5LuY6Im66ZSmLOeoi+WYiem+mSzmnZzkvbPmgKEs6ams5LieLOadqOa2tSznjovli6Tli6Qs5piT5a6H6IW+LOe9l+eQqueOriznjovlvablhpss5byg6LaFLOm7kee6qua6kDwvc3Bhbj5cclxuICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8Y2FudmFzIHJlZj17dGhpcy5jYW52YXN9IGNsYXNzTmFtZT17c3R5bGUuY2lyY2xlfT48L2NhbnZhcz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwvPlxyXG4gICAgKSAgXHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiAgXHJcbiJdLCJuYW1lcyI6WyJzdHlsZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUm91dGVyIiwiSGVhZCIsIkluZGV4IiwiY29sb3IiLCJyYWRpdXMiLCJ2IiwiYW5nbGUiLCJ4IiwieSIsImNhbnZhcyIsImNyZWF0ZVJlZiIsImhhbmRsZUNsaWNrIiwiaXRlbSIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwiY29tcG9uZW50RGlkTW91bnQiLCJjdXJyZW50IiwiYXJyIiwiQ05UIiwiY2VudGVyWCIsImNlbnRlclkiLCJjdHgiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJpIiwiYzEiLCJNYXRoIiwicmFuZG9tIiwiZHJhdyIsImNsZWFyUmVjdCIsImNvcyIsInNpbiIsIlBJIiwic2V0VGltZW91dCIsImJlZ2luUGF0aCIsImFyYyIsImNsb3NlUGF0aCIsImZpbGxTdHlsZSIsImZpbGwiLCJyZW5kZXIiLCJsaW5rIiwiaHJlZiIsInJlbCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRlbnQxIiwib25DbGljayIsInNwYW4iLCJncm91cCIsInJlZiIsImNpcmNsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

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

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();