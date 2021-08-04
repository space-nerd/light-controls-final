self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Brightness.tsx":
/*!***********************************!*\
  !*** ./components/Brightness.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Brightness": function() { return /* binding */ Brightness; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_carpe_Documents_GitHub_light_controls_final_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_govee_led_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node-govee-led/index */ "./node-govee-led/index.js");
/* harmony import */ var _node_govee_led_index__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_govee_led_index__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\carpe\\Documents\\GitHub\\light-controls-final\\components\\Brightness.tsx",
    _this = undefined;




var Lamp = new (_node_govee_led_index__WEBPACK_IMPORTED_MODULE_3___default())({
  apiKey: "8a17da1f-c1e9-4a1d-8295-6b1360595bb6",
  mac: "1d:e7:7c:a6:b0:13:b8:e9",
  model: "H6003"
});
var Desk = new (_node_govee_led_index__WEBPACK_IMPORTED_MODULE_3___default())({
  apiKey: "8a17da1f-c1e9-4a1d-8295-6b1360595bb6",
  mac: "75:b5:7c:a6:b0:13:ba:9e",
  model: "H6003"
});

function LampBrightness100() {
  Lamp.setBrightness(100);
}

_c = LampBrightness100;

function DeskBrightness100() {
  Desk.setBrightness(100);
}

_c2 = DeskBrightness100;

function LampBrightness75() {
  Lamp.setBrightness(75);
}

_c3 = LampBrightness75;

function DeskBrightness75() {
  Desk.setBrightness(75);
}

_c4 = DeskBrightness75;

function LampBrightness50() {
  Lamp.setBrightness(50);
}

_c5 = LampBrightness50;

function DeskBrightness50() {
  Desk.setBrightness(50);
}

_c6 = DeskBrightness50;

function LampBrightness25() {
  Lamp.setBrightness(25);
}

_c7 = LampBrightness25;

function DeskBrightness25() {
  Desk.setBrightness(25);
}

_c8 = DeskBrightness25;
var Brightness = function Brightness(_ref) {
  (0,C_Users_carpe_Documents_GitHub_light_controls_final_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__.default)(_ref);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "Brightness Control"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().grid),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "Brightness 100%"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: LampBrightness100,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().lightButton),
          children: "Lamp"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: DeskBrightness100,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().lightButton),
          children: "Desk"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "Brightness 75%"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: LampBrightness75,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().lightButton),
          children: "Lamp"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: DeskBrightness75,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().lightButton),
          children: "Desk"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "Brightness 50%"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: LampBrightness50,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().lightButton),
          children: "Lamp"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: DeskBrightness50,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().lightButton),
          children: "Desk"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "Brightness 25%"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: LampBrightness25,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().lightButton),
          children: "Lamp"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: DeskBrightness25,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().lightButton),
          children: "Desk"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 5
  }, _this);
};
_c9 = Brightness;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;

$RefreshReg$(_c, "LampBrightness100");
$RefreshReg$(_c2, "DeskBrightness100");
$RefreshReg$(_c3, "LampBrightness75");
$RefreshReg$(_c4, "DeskBrightness75");
$RefreshReg$(_c5, "LampBrightness50");
$RefreshReg$(_c6, "DeskBrightness50");
$RefreshReg$(_c7, "LampBrightness25");
$RefreshReg$(_c8, "DeskBrightness25");
$RefreshReg$(_c9, "Brightness");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/ColorChange.tsx":
/*!************************************!*\
  !*** ./components/ColorChange.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_carpe_Documents_GitHub_light_controls_final_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_govee_led_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node-govee-led/index */ "./node-govee-led/index.js");
/* harmony import */ var _node_govee_led_index__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_govee_led_index__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\carpe\\Documents\\GitHub\\light-controls-final\\components\\ColorChange.tsx",
    _this = undefined;




var Lamp = new (_node_govee_led_index__WEBPACK_IMPORTED_MODULE_3___default())({
  apiKey: "8a17da1f-c1e9-4a1d-8295-6b1360595bb6",
  mac: "1d:e7:7c:a6:b0:13:b8:e9",
  model: "H6003"
});
var Desk = new (_node_govee_led_index__WEBPACK_IMPORTED_MODULE_3___default())({
  apiKey: "8a17da1f-c1e9-4a1d-8295-6b1360595bb6",
  mac: "75:b5:7c:a6:b0:13:ba:9e",
  model: "H6003"
});

function LampRed() {
  Lamp.setColor("#ff0000");
}

_c = LampRed;

function DeskRed() {
  Desk.setColor("#ff0000");
}

_c2 = DeskRed;

function LampGreen() {
  Lamp.setColor("#00ff00");
}

_c3 = LampGreen;

function DeskGreen() {
  Desk.setColor("#00ff00");
}

_c4 = DeskGreen;

function LampBlue() {
  Lamp.setColor("#0000ff");
}

_c5 = LampBlue;

function DeskBlue() {
  Desk.setColor("#0000ff");
}

_c6 = DeskBlue;

function LampMagenta() {
  Lamp.setColor("#ff00ff");
}

_c7 = LampMagenta;

function DeskMagenta() {
  Desk.setColor("#ff00ff");
}

_c8 = DeskMagenta;

function LampPurple() {
  Lamp.setColor("#800080");
}

_c9 = LampPurple;

function DeskPurple() {
  Desk.setColor("#800080");
}

_c10 = DeskPurple;

function LampAqua() {
  Lamp.setColor("#00ffff");
}

_c11 = LampAqua;

function DeskAqua() {
  Desk.setColor("#00ffff");
}

_c12 = DeskAqua;

function LampLightBlue() {
  Lamp.setColor("#0070f3");
}

_c13 = LampLightBlue;

function DeskLightBlue() {
  Desk.setColor("#0070f3");
}

_c14 = DeskLightBlue;

function LampWhite() {
  Lamp.setColor("#ffffff");
}

_c15 = LampWhite;

function DeskWhite() {
  Desk.setColor("#ffffff");
}

_c16 = DeskWhite;

var ColorChange = function ColorChange(_ref) {
  (0,C_Users_carpe_Documents_GitHub_light_controls_final_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__.default)(_ref);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "Color Control"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().grid),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "White"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: LampWhite,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().lightButton),
          children: "Lamp"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: DeskWhite,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().lightButton),
          children: "Desk"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "Red"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: LampRed,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().lightButton),
          children: "Lamp"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: DeskRed,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().lightButton),
          children: "Desk"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "Green"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: LampGreen,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().lightButton),
          children: "Lamp"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: DeskWhite,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().lightButton),
          children: "Desk"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "Blue"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: LampBlue,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().lightButton),
          children: "Lamp"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: DeskBlue,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().lightButton),
          children: "Desk"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "Magenta"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: LampMagenta,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().lightButton),
          children: "Lamp"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: DeskMagenta,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().lightButton),
          children: "Desk"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "Purple"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: LampPurple,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().lightButton),
          children: "Lamp"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: DeskPurple,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().lightButton),
          children: "Desk"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "Aqua"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: LampAqua,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().lightButton),
          children: "Lamp"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: DeskAqua,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().lightButton),
          children: "Desk"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "Light Blue"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: LampLightBlue,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().lightButton),
          children: "Lamp"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: DeskLightBlue,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().lightButton),
          children: "Desk"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 84,
    columnNumber: 5
  }, _this);
};

_c17 = ColorChange;
/* harmony default export */ __webpack_exports__["default"] = (ColorChange);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17;

$RefreshReg$(_c, "LampRed");
$RefreshReg$(_c2, "DeskRed");
$RefreshReg$(_c3, "LampGreen");
$RefreshReg$(_c4, "DeskGreen");
$RefreshReg$(_c5, "LampBlue");
$RefreshReg$(_c6, "DeskBlue");
$RefreshReg$(_c7, "LampMagenta");
$RefreshReg$(_c8, "DeskMagenta");
$RefreshReg$(_c9, "LampPurple");
$RefreshReg$(_c10, "DeskPurple");
$RefreshReg$(_c11, "LampAqua");
$RefreshReg$(_c12, "DeskAqua");
$RefreshReg$(_c13, "LampLightBlue");
$RefreshReg$(_c14, "DeskLightBlue");
$RefreshReg$(_c15, "LampWhite");
$RefreshReg$(_c16, "DeskWhite");
$RefreshReg$(_c17, "ColorChange");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/Temp.tsx":
/*!*****************************!*\
  !*** ./components/Temp.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Temp": function() { return /* binding */ Temp; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_carpe_Documents_GitHub_light_controls_final_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_govee_led_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node-govee-led/index */ "./node-govee-led/index.js");
/* harmony import */ var _node_govee_led_index__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_govee_led_index__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\carpe\\Documents\\GitHub\\light-controls-final\\components\\Temp.tsx",
    _this = undefined;




var Lamp = new (_node_govee_led_index__WEBPACK_IMPORTED_MODULE_3___default())({
  apiKey: "8a17da1f-c1e9-4a1d-8295-6b1360595bb6",
  mac: "1d:e7:7c:a6:b0:13:b8:e9",
  model: "H6003"
});
var Desk = new (_node_govee_led_index__WEBPACK_IMPORTED_MODULE_3___default())({
  apiKey: "8a17da1f-c1e9-4a1d-8295-6b1360595bb6",
  mac: "75:b5:7c:a6:b0:13:ba:9e",
  model: "H6003"
});

function LampTemp9000() {
  Lamp.setColorTemperature(9000);
}

_c = LampTemp9000;

function DeskTemp9000() {
  Desk.setColorTemperature(9000);
}

_c2 = DeskTemp9000;

function LampTemp8000() {
  Lamp.setColorTemperature(8000);
}

_c3 = LampTemp8000;

function DeskTemp8000() {
  Desk.setColorTemperature(8000);
}

_c4 = DeskTemp8000;

function LampTemp7000() {
  Lamp.setColorTemperature(7000);
}

_c5 = LampTemp7000;

function DeskTemp7000() {
  Desk.setColorTemperature(7000);
}

_c6 = DeskTemp7000;

function LampTemp6000() {
  Lamp.setColorTemperature(6000);
}

_c7 = LampTemp6000;

function DeskTemp6000() {
  Desk.setColorTemperature(6000);
}

_c8 = DeskTemp6000;

function LampTemp5000() {
  Lamp.setColorTemperature(5000);
}

_c9 = LampTemp5000;

function DeskTemp5000() {
  Desk.setColorTemperature(5000);
}

_c10 = DeskTemp5000;

function LampTemp4000() {
  Lamp.setColorTemperature(4000);
}

_c11 = LampTemp4000;

function DeskTemp4000() {
  Desk.setColorTemperature(4000);
}

_c12 = DeskTemp4000;

function LampTemp3000() {
  Lamp.setColorTemperature(3000);
}

_c13 = LampTemp3000;

function DeskTemp3000() {
  Desk.setColorTemperature(3000);
}

_c14 = DeskTemp3000;

function LampTemp2000() {
  Lamp.setColorTemperature(2000);
}

_c15 = LampTemp2000;

function DeskTemp2000() {
  Desk.setColorTemperature(2000);
}

_c16 = DeskTemp2000;
var Temp = function Temp(_ref) {
  (0,C_Users_carpe_Documents_GitHub_light_controls_final_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__.default)(_ref);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "Temperature Control"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().grid),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "Temp 9000"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: LampTemp9000,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().lightButton),
          children: "Lamp"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: DeskTemp9000,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().lightButton),
          children: "Desk"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "Temp 8000"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: LampTemp8000,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().lightButton),
          children: "Lamp"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: DeskTemp8000,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().lightButton),
          children: "Desk"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "Temp 7000"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: LampTemp7000,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().lightButton),
          children: "Lamp"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: DeskTemp7000,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().lightButton),
          children: "Desk"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "Temp 6000"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: LampTemp6000,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().lightButton),
          children: "Lamp"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: DeskTemp6000,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().lightButton),
          children: "Desk"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 84,
    columnNumber: 5
  }, _this);
};
_c17 = Temp;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17;

$RefreshReg$(_c, "LampTemp9000");
$RefreshReg$(_c2, "DeskTemp9000");
$RefreshReg$(_c3, "LampTemp8000");
$RefreshReg$(_c4, "DeskTemp8000");
$RefreshReg$(_c5, "LampTemp7000");
$RefreshReg$(_c6, "DeskTemp7000");
$RefreshReg$(_c7, "LampTemp6000");
$RefreshReg$(_c8, "DeskTemp6000");
$RefreshReg$(_c9, "LampTemp5000");
$RefreshReg$(_c10, "DeskTemp5000");
$RefreshReg$(_c11, "LampTemp4000");
$RefreshReg$(_c12, "DeskTemp4000");
$RefreshReg$(_c13, "LampTemp3000");
$RefreshReg$(_c14, "DeskTemp3000");
$RefreshReg$(_c15, "LampTemp2000");
$RefreshReg$(_c16, "DeskTemp2000");
$RefreshReg$(_c17, "Temp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node-govee-led/index.js":
/*!*********************************!*\
  !*** ./node-govee-led/index.js ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");

var _asyncToGenerator = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js");

var _classCallCheck = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js");

var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var GoveeLED = /*#__PURE__*/function () {
  "use strict";

  function GoveeLED(config) {
    _classCallCheck(this, GoveeLED);

    this.apiKey = config.apiKey;
    this.mac = config.mac;
    this.model = config.model;
    this.basePath = "https://developer-api.govee.com/v1/devices";
  }

  _createClass(GoveeLED, [{
    key: "request",
    value: function request(endpoint, reqData, method) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        if (_this.mac === "") return reject(new Error("No MAC Address provided."));
        if (_this.model === "") return reject(new Error("No Model provided."));
        var reqURL = _this.basePath + endpoint;
        var data = JSON.stringify(reqData);
        var config = {
          method: method,
          url: reqURL,
          headers: {
            'Govee-API-Key': _this.apiKey,
            'Content-Type': 'application/json'
          },
          data: data
        };
        axios(config).then(function (response) {
          resolve(response.data);
        })["catch"](function (error) {
          reject(error);
        });
      });
    }
  }, {
    key: "setColor",
    value: function setColor(hexCode) {
      var regex = /^#([0-9A-F]{3}){1,2}$/i;
      if (!regex.test(hexCode)) throw new Error("Invalid Hex Color Code");

      function hex2rgb(hex) {
        var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function (m, r, g, b) {
          return r + r + g + g + b + b;
        });
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        } : null;
      }

      var RGBconv = hex2rgb(hexCode);
      var reqData = {
        "device": this.mac,
        "model": this.model,
        "cmd": {
          "name": "color",
          "value": {
            "r": RGBconv.r,
            "g": RGBconv.g,
            "b": RGBconv.b
          }
        }
      };
      var endpoint = '/control';
      return this.request(endpoint, reqData, "put");
    }
  }, {
    key: "setBrightness",
    value: function setBrightness(brightnessLevel) {
      if (!Number.isInteger(brightnessLevel)) throw new Error("Brightness Level Provided is Not A Number");
      if (brightnessLevel > 100) throw new Error("Brightness Level Provided is Not From 1-100");
      if (brightnessLevel < 1) throw new Error("Brightness Level Provided is Not From 1-100");
      var reqData = {
        "device": this.mac,
        "model": this.model,
        "cmd": {
          "name": "brightness",
          "value": brightnessLevel
        }
      };
      var endpoint = '/control';
      return this.request(endpoint, reqData, "put");
    }
  }, {
    key: "setColorTemperature",
    value: function setColorTemperature(temperatureLevel) {
      if (!Number.isInteger(temperatureLevel)) throw new Error("Temperature Level Provided is Not A Number");
      if (temperatureLevel > 9000) throw new Error("Temperature Level Provided is Not From 2000-9000");
      if (temperatureLevel < 2000) throw new Error("Temperature Level Provided is Not From 2000-9000");
      var reqData = {
        "device": this.mac,
        "model": this.model,
        "cmd": {
          "name": "colorTem",
          "value": temperatureLevel
        }
      };
      var endpoint = '/control';
      return this.request(endpoint, reqData, "put");
    }
  }, {
    key: "turnOn",
    value: function turnOn() {
      var reqData = {
        "device": this.mac,
        "model": this.model,
        "cmd": {
          "name": "turn",
          "value": "on"
        }
      };
      var endpoint = '/control';
      return this.request(endpoint, reqData, "put");
    }
  }, {
    key: "turnOff",
    value: function turnOff() {
      var reqData = {
        "device": this.mac,
        "model": this.model,
        "cmd": {
          "name": "turn",
          "value": "off"
        }
      };
      var endpoint = '/control';
      return this.request(endpoint, reqData, "put");
    }
  }, {
    key: "getState",
    value: function getState() {
      var reqData = {};
      var endpoint = "/state?device=".concat(this.mac, "&model=").concat(this.model);
      return this.request(endpoint, reqData, "get");
    }
  }, {
    key: "getDevices",
    value: function () {
      var _getDevices = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
        var reqData, endpoint, reqURL, data, config, resData;
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                reqData = {};
                endpoint = "";
                reqURL = this.basePath + endpoint;
                data = JSON.stringify(reqData);
                config = {
                  method: "get",
                  url: reqURL,
                  headers: {
                    'Govee-API-Key': this.apiKey,
                    'Content-Type': 'application/json'
                  },
                  data: data
                };
                _context2.next = 7;
                return axios(config).then( /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(response) {
                    return _regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            resData = response.data.data;

                          case 1:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x) {
                    return _ref.apply(this, arguments);
                  };
                }())["catch"](function (error) {
                  throw new Error(error);
                });

              case 7:
                return _context2.abrupt("return", resData);

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getDevices() {
        return _getDevices.apply(this, arguments);
      }

      return getDevices;
    }()
  }]);

  return GoveeLED;
}();

;
module.exports = GoveeLED;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Brightness__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Brightness */ "./components/Brightness.tsx");
/* harmony import */ var _components_ColorChange__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ColorChange */ "./components/ColorChange.tsx");
/* harmony import */ var _components_Temp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Temp */ "./components/Temp.tsx");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _node_govee_led_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../node-govee-led/index */ "./node-govee-led/index.js");
/* harmony import */ var _node_govee_led_index__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_node_govee_led_index__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\carpe\\Documents\\GitHub\\light-controls-final\\pages\\index.tsx";








var Lamp = new (_node_govee_led_index__WEBPACK_IMPORTED_MODULE_7___default())({
  apiKey: "8a17da1f-c1e9-4a1d-8295-6b1360595bb6",
  mac: "1d:e7:7c:a6:b0:13:b8:e9",
  model: "H6003"
});
var Desk = new (_node_govee_led_index__WEBPACK_IMPORTED_MODULE_7___default())({
  apiKey: "8a17da1f-c1e9-4a1d-8295-6b1360595bb6",
  mac: "75:b5:7c:a6:b0:13:ba:9e",
  model: "H6003"
});

function LampTurnOn() {
  Lamp.turnOn();
}

_c = LampTurnOn;

function LampTurnOff() {
  Lamp.turnOff();
}

_c2 = LampTurnOff;

function DeskTurnOn() {
  Desk.turnOn();
}

_c3 = DeskTurnOn;

function DeskTurnOff() {
  Desk.turnOff();
}

_c4 = DeskTurnOff;
function Home() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Light Controls"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Controls for my lights"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "manifest",
        href: "/manifest.json"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "theme-color",
        content: "#000000"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "apple-touch-icon",
        href: "/logo192.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().main),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().header),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().title),
          children: "On/Off Control"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().grid),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().card),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            children: "Turn On"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: LampTurnOn,
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().lightButton),
            children: "Lamp"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: DeskTurnOn,
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().lightButton),
            children: "Desk"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().card),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            children: "Turn Off"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: LampTurnOff,
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().lightButton),
            children: "Lamp"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: DeskTurnOff,
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().lightButton),
            children: "Desk"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Brightness__WEBPACK_IMPORTED_MODULE_4__.Brightness, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ColorChange__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Temp__WEBPACK_IMPORTED_MODULE_6__.Temp, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().footer),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
        target: "_blank",
        rel: "noopener noreferrer",
        children: ["Powered by", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().logo),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            src: "/vercel.svg",
            alt: "Vercel Logo",
            width: 72,
            height: 16
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, this);
}
_c5 = Home;

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "LampTurnOn");
$RefreshReg$(_c2, "LampTurnOff");
$RefreshReg$(_c3, "DeskTurnOn");
$RefreshReg$(_c4, "DeskTurnOff");
$RefreshReg$(_c5, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \***********************************************************************************/
/***/ (function(module) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/regenerator/index.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ (function(module) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CcmlnaHRuZXNzLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db2xvckNoYW5nZS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVGVtcC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGUtZ292ZWUtbGVkL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyJdLCJuYW1lcyI6WyJMYW1wIiwiR292ZWUiLCJhcGlLZXkiLCJtYWMiLCJtb2RlbCIsIkRlc2siLCJMYW1wQnJpZ2h0bmVzczEwMCIsInNldEJyaWdodG5lc3MiLCJEZXNrQnJpZ2h0bmVzczEwMCIsIkxhbXBCcmlnaHRuZXNzNzUiLCJEZXNrQnJpZ2h0bmVzczc1IiwiTGFtcEJyaWdodG5lc3M1MCIsIkRlc2tCcmlnaHRuZXNzNTAiLCJMYW1wQnJpZ2h0bmVzczI1IiwiRGVza0JyaWdodG5lc3MyNSIsIkJyaWdodG5lc3MiLCJzdHlsZXMiLCJMYW1wUmVkIiwic2V0Q29sb3IiLCJEZXNrUmVkIiwiTGFtcEdyZWVuIiwiRGVza0dyZWVuIiwiTGFtcEJsdWUiLCJEZXNrQmx1ZSIsIkxhbXBNYWdlbnRhIiwiRGVza01hZ2VudGEiLCJMYW1wUHVycGxlIiwiRGVza1B1cnBsZSIsIkxhbXBBcXVhIiwiRGVza0FxdWEiLCJMYW1wTGlnaHRCbHVlIiwiRGVza0xpZ2h0Qmx1ZSIsIkxhbXBXaGl0ZSIsIkRlc2tXaGl0ZSIsIkNvbG9yQ2hhbmdlIiwiTGFtcFRlbXA5MDAwIiwic2V0Q29sb3JUZW1wZXJhdHVyZSIsIkRlc2tUZW1wOTAwMCIsIkxhbXBUZW1wODAwMCIsIkRlc2tUZW1wODAwMCIsIkxhbXBUZW1wNzAwMCIsIkRlc2tUZW1wNzAwMCIsIkxhbXBUZW1wNjAwMCIsIkRlc2tUZW1wNjAwMCIsIkxhbXBUZW1wNTAwMCIsIkRlc2tUZW1wNTAwMCIsIkxhbXBUZW1wNDAwMCIsIkRlc2tUZW1wNDAwMCIsIkxhbXBUZW1wMzAwMCIsIkRlc2tUZW1wMzAwMCIsIkxhbXBUZW1wMjAwMCIsIkRlc2tUZW1wMjAwMCIsIlRlbXAiLCJheGlvcyIsInJlcXVpcmUiLCJHb3ZlZUxFRCIsImNvbmZpZyIsImJhc2VQYXRoIiwiZW5kcG9pbnQiLCJyZXFEYXRhIiwibWV0aG9kIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJFcnJvciIsInJlcVVSTCIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwidXJsIiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImVycm9yIiwiaGV4Q29kZSIsInJlZ2V4IiwidGVzdCIsImhleDJyZ2IiLCJoZXgiLCJzaG9ydGhhbmRSZWdleCIsInJlcGxhY2UiLCJtIiwiciIsImciLCJiIiwicmVzdWx0IiwiZXhlYyIsInBhcnNlSW50IiwiUkdCY29udiIsInJlcXVlc3QiLCJicmlnaHRuZXNzTGV2ZWwiLCJOdW1iZXIiLCJpc0ludGVnZXIiLCJ0ZW1wZXJhdHVyZUxldmVsIiwicmVzRGF0YSIsIm1vZHVsZSIsImV4cG9ydHMiLCJMYW1wVHVybk9uIiwidHVybk9uIiwiTGFtcFR1cm5PZmYiLCJ0dXJuT2ZmIiwiRGVza1R1cm5PbiIsIkRlc2tUdXJuT2ZmIiwiSG9tZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxJQUFJLEdBQUcsSUFBSUMsOERBQUosQ0FBVTtB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O0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxLQUEwQixvQkFBb0IsQ0FBRTtBQUNsRDs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWY2ZDg2NjUzZTg5NTUwMGJiYzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xyXG5cclxuaW1wb3J0IEdvdmVlIGZyb20gXCIuLi9ub2RlLWdvdmVlLWxlZC9pbmRleFwiO1xyXG5cclxuY29uc3QgTGFtcCA9IG5ldyBHb3ZlZSh7XHJcbiAgYXBpS2V5OiBcIjhhMTdkYTFmLWMxZTktNGExZC04Mjk1LTZiMTM2MDU5NWJiNlwiLFxyXG4gIG1hYzogXCIxZDplNzo3YzphNjpiMDoxMzpiODplOVwiLFxyXG4gIG1vZGVsOiBcIkg2MDAzXCIsXHJcbn0pO1xyXG5cclxuY29uc3QgRGVzayA9IG5ldyBHb3ZlZSh7XHJcbiAgYXBpS2V5OiBcIjhhMTdkYTFmLWMxZTktNGExZC04Mjk1LTZiMTM2MDU5NWJiNlwiLFxyXG4gIG1hYzogXCI3NTpiNTo3YzphNjpiMDoxMzpiYTo5ZVwiLFxyXG4gIG1vZGVsOiBcIkg2MDAzXCIsXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gTGFtcEJyaWdodG5lc3MxMDAoKSB7XHJcbiAgTGFtcC5zZXRCcmlnaHRuZXNzKDEwMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIERlc2tCcmlnaHRuZXNzMTAwKCkge1xyXG4gIERlc2suc2V0QnJpZ2h0bmVzcygxMDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBMYW1wQnJpZ2h0bmVzczc1KCkge1xyXG4gIExhbXAuc2V0QnJpZ2h0bmVzcyg3NSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIERlc2tCcmlnaHRuZXNzNzUoKSB7XHJcbiAgRGVzay5zZXRCcmlnaHRuZXNzKDc1KTtcclxufVxyXG5cclxuZnVuY3Rpb24gTGFtcEJyaWdodG5lc3M1MCgpIHtcclxuICBMYW1wLnNldEJyaWdodG5lc3MoNTApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBEZXNrQnJpZ2h0bmVzczUwKCkge1xyXG4gIERlc2suc2V0QnJpZ2h0bmVzcyg1MCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIExhbXBCcmlnaHRuZXNzMjUoKSB7XHJcbiAgTGFtcC5zZXRCcmlnaHRuZXNzKDI1KTtcclxufVxyXG5cclxuZnVuY3Rpb24gRGVza0JyaWdodG5lc3MyNSgpIHtcclxuICBEZXNrLnNldEJyaWdodG5lc3MoMjUpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQnJpZ2h0bmVzczogUmVhY3QuRkM8e30+ID0gKHt9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGgxPkJyaWdodG5lc3MgQ29udHJvbDwvaDE+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XHJcbiAgICAgICAgICA8aDM+QnJpZ2h0bmVzcyAxMDAlPC9oMz5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17TGFtcEJyaWdodG5lc3MxMDB9IGNsYXNzTmFtZT17c3R5bGVzLmxpZ2h0QnV0dG9ufT5cclxuICAgICAgICAgICAgTGFtcFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e0Rlc2tCcmlnaHRuZXNzMTAwfSBjbGFzc05hbWU9e3N0eWxlcy5saWdodEJ1dHRvbn0+XHJcbiAgICAgICAgICAgIERlc2tcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgPGgzPkJyaWdodG5lc3MgNzUlPC9oMz5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17TGFtcEJyaWdodG5lc3M3NX0gY2xhc3NOYW1lPXtzdHlsZXMubGlnaHRCdXR0b259PlxyXG4gICAgICAgICAgICBMYW1wXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17RGVza0JyaWdodG5lc3M3NX0gY2xhc3NOYW1lPXtzdHlsZXMubGlnaHRCdXR0b259PlxyXG4gICAgICAgICAgICBEZXNrXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cclxuICAgICAgICAgIDxoMz5CcmlnaHRuZXNzIDUwJTwvaDM+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e0xhbXBCcmlnaHRuZXNzNTB9IGNsYXNzTmFtZT17c3R5bGVzLmxpZ2h0QnV0dG9ufT5cclxuICAgICAgICAgICAgTGFtcFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e0Rlc2tCcmlnaHRuZXNzNTB9IGNsYXNzTmFtZT17c3R5bGVzLmxpZ2h0QnV0dG9ufT5cclxuICAgICAgICAgICAgRGVza1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XHJcbiAgICAgICAgICA8aDM+QnJpZ2h0bmVzcyAyNSU8L2gzPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtMYW1wQnJpZ2h0bmVzczI1fSBjbGFzc05hbWU9e3N0eWxlcy5saWdodEJ1dHRvbn0+XHJcbiAgICAgICAgICAgIExhbXBcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtEZXNrQnJpZ2h0bmVzczI1fSBjbGFzc05hbWU9e3N0eWxlcy5saWdodEJ1dHRvbn0+XHJcbiAgICAgICAgICAgIERlc2tcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xyXG5cclxuaW1wb3J0IEdvdmVlIGZyb20gXCIuLi9ub2RlLWdvdmVlLWxlZC9pbmRleFwiO1xyXG5cclxuY29uc3QgTGFtcCA9IG5ldyBHb3ZlZSh7XHJcbiAgYXBpS2V5OiBcIjhhMTdkYTFmLWMxZTktNGExZC04Mjk1LTZiMTM2MDU5NWJiNlwiLFxyXG4gIG1hYzogXCIxZDplNzo3YzphNjpiMDoxMzpiODplOVwiLFxyXG4gIG1vZGVsOiBcIkg2MDAzXCIsXHJcbn0pO1xyXG5cclxuY29uc3QgRGVzayA9IG5ldyBHb3ZlZSh7XHJcbiAgYXBpS2V5OiBcIjhhMTdkYTFmLWMxZTktNGExZC04Mjk1LTZiMTM2MDU5NWJiNlwiLFxyXG4gIG1hYzogXCI3NTpiNTo3YzphNjpiMDoxMzpiYTo5ZVwiLFxyXG4gIG1vZGVsOiBcIkg2MDAzXCIsXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gTGFtcFJlZCgpIHtcclxuICBMYW1wLnNldENvbG9yKFwiI2ZmMDAwMFwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gRGVza1JlZCgpIHtcclxuICBEZXNrLnNldENvbG9yKFwiI2ZmMDAwMFwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gTGFtcEdyZWVuKCkge1xyXG4gIExhbXAuc2V0Q29sb3IoXCIjMDBmZjAwXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBEZXNrR3JlZW4oKSB7XHJcbiAgRGVzay5zZXRDb2xvcihcIiMwMGZmMDBcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIExhbXBCbHVlKCkge1xyXG4gIExhbXAuc2V0Q29sb3IoXCIjMDAwMGZmXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBEZXNrQmx1ZSgpIHtcclxuICBEZXNrLnNldENvbG9yKFwiIzAwMDBmZlwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gTGFtcE1hZ2VudGEoKSB7XHJcbiAgTGFtcC5zZXRDb2xvcihcIiNmZjAwZmZcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIERlc2tNYWdlbnRhKCkge1xyXG4gIERlc2suc2V0Q29sb3IoXCIjZmYwMGZmXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBMYW1wUHVycGxlKCkge1xyXG4gIExhbXAuc2V0Q29sb3IoXCIjODAwMDgwXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBEZXNrUHVycGxlKCkge1xyXG4gIERlc2suc2V0Q29sb3IoXCIjODAwMDgwXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBMYW1wQXF1YSgpIHtcclxuICBMYW1wLnNldENvbG9yKFwiIzAwZmZmZlwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gRGVza0FxdWEoKSB7XHJcbiAgRGVzay5zZXRDb2xvcihcIiMwMGZmZmZcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIExhbXBMaWdodEJsdWUoKSB7XHJcbiAgTGFtcC5zZXRDb2xvcihcIiMwMDcwZjNcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIERlc2tMaWdodEJsdWUoKSB7XHJcbiAgRGVzay5zZXRDb2xvcihcIiMwMDcwZjNcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIExhbXBXaGl0ZSgpIHtcclxuICBMYW1wLnNldENvbG9yKFwiI2ZmZmZmZlwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gRGVza1doaXRlKCkge1xyXG4gIERlc2suc2V0Q29sb3IoXCIjZmZmZmZmXCIpO1xyXG59XHJcblxyXG5jb25zdCBDb2xvckNoYW5nZTogUmVhY3QuRkM8e30+ID0gKHt9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGgxPkNvbG9yIENvbnRyb2w8L2gxPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgPGgzPldoaXRlPC9oMz5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17TGFtcFdoaXRlfSBjbGFzc05hbWU9e3N0eWxlcy5saWdodEJ1dHRvbn0+XHJcbiAgICAgICAgICAgIExhbXBcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtEZXNrV2hpdGV9IGNsYXNzTmFtZT17c3R5bGVzLmxpZ2h0QnV0dG9ufT5cclxuICAgICAgICAgICAgRGVza1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XHJcbiAgICAgICAgICA8aDM+UmVkPC9oMz5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17TGFtcFJlZH0gY2xhc3NOYW1lPXtzdHlsZXMubGlnaHRCdXR0b259PlxyXG4gICAgICAgICAgICBMYW1wXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17RGVza1JlZH0gY2xhc3NOYW1lPXtzdHlsZXMubGlnaHRCdXR0b259PlxyXG4gICAgICAgICAgICBEZXNrXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cclxuICAgICAgICAgIDxoMz5HcmVlbjwvaDM+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e0xhbXBHcmVlbn0gY2xhc3NOYW1lPXtzdHlsZXMubGlnaHRCdXR0b259PlxyXG4gICAgICAgICAgICBMYW1wXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17RGVza1doaXRlfSBjbGFzc05hbWU9e3N0eWxlcy5saWdodEJ1dHRvbn0+XHJcbiAgICAgICAgICAgIERlc2tcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgPGgzPkJsdWU8L2gzPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtMYW1wQmx1ZX0gY2xhc3NOYW1lPXtzdHlsZXMubGlnaHRCdXR0b259PlxyXG4gICAgICAgICAgICBMYW1wXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17RGVza0JsdWV9IGNsYXNzTmFtZT17c3R5bGVzLmxpZ2h0QnV0dG9ufT5cclxuICAgICAgICAgICAgRGVza1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XHJcbiAgICAgICAgICA8aDM+TWFnZW50YTwvaDM+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e0xhbXBNYWdlbnRhfSBjbGFzc05hbWU9e3N0eWxlcy5saWdodEJ1dHRvbn0+XHJcbiAgICAgICAgICAgIExhbXBcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtEZXNrTWFnZW50YX0gY2xhc3NOYW1lPXtzdHlsZXMubGlnaHRCdXR0b259PlxyXG4gICAgICAgICAgICBEZXNrXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cclxuICAgICAgICAgIDxoMz5QdXJwbGU8L2gzPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtMYW1wUHVycGxlfSBjbGFzc05hbWU9e3N0eWxlcy5saWdodEJ1dHRvbn0+XHJcbiAgICAgICAgICAgIExhbXBcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtEZXNrUHVycGxlfSBjbGFzc05hbWU9e3N0eWxlcy5saWdodEJ1dHRvbn0+XHJcbiAgICAgICAgICAgIERlc2tcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgPGgzPkFxdWE8L2gzPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtMYW1wQXF1YX0gY2xhc3NOYW1lPXtzdHlsZXMubGlnaHRCdXR0b259PlxyXG4gICAgICAgICAgICBMYW1wXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17RGVza0FxdWF9IGNsYXNzTmFtZT17c3R5bGVzLmxpZ2h0QnV0dG9ufT5cclxuICAgICAgICAgICAgRGVza1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XHJcbiAgICAgICAgICA8aDM+TGlnaHQgQmx1ZTwvaDM+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e0xhbXBMaWdodEJsdWV9IGNsYXNzTmFtZT17c3R5bGVzLmxpZ2h0QnV0dG9ufT5cclxuICAgICAgICAgICAgTGFtcFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e0Rlc2tMaWdodEJsdWV9IGNsYXNzTmFtZT17c3R5bGVzLmxpZ2h0QnV0dG9ufT5cclxuICAgICAgICAgICAgRGVza1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbG9yQ2hhbmdlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcclxuXHJcbmltcG9ydCBHb3ZlZSBmcm9tIFwiLi4vbm9kZS1nb3ZlZS1sZWQvaW5kZXhcIjtcclxuXHJcbmNvbnN0IExhbXAgPSBuZXcgR292ZWUoe1xyXG4gIGFwaUtleTogXCI4YTE3ZGExZi1jMWU5LTRhMWQtODI5NS02YjEzNjA1OTViYjZcIixcclxuICBtYWM6IFwiMWQ6ZTc6N2M6YTY6YjA6MTM6Yjg6ZTlcIixcclxuICBtb2RlbDogXCJINjAwM1wiLFxyXG59KTtcclxuXHJcbmNvbnN0IERlc2sgPSBuZXcgR292ZWUoe1xyXG4gIGFwaUtleTogXCI4YTE3ZGExZi1jMWU5LTRhMWQtODI5NS02YjEzNjA1OTViYjZcIixcclxuICBtYWM6IFwiNzU6YjU6N2M6YTY6YjA6MTM6YmE6OWVcIixcclxuICBtb2RlbDogXCJINjAwM1wiLFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIExhbXBUZW1wOTAwMCgpIHtcclxuICBMYW1wLnNldENvbG9yVGVtcGVyYXR1cmUoOTAwMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIERlc2tUZW1wOTAwMCgpIHtcclxuICBEZXNrLnNldENvbG9yVGVtcGVyYXR1cmUoOTAwMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIExhbXBUZW1wODAwMCgpIHtcclxuICBMYW1wLnNldENvbG9yVGVtcGVyYXR1cmUoODAwMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIERlc2tUZW1wODAwMCgpIHtcclxuICBEZXNrLnNldENvbG9yVGVtcGVyYXR1cmUoODAwMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIExhbXBUZW1wNzAwMCgpIHtcclxuICBMYW1wLnNldENvbG9yVGVtcGVyYXR1cmUoNzAwMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIERlc2tUZW1wNzAwMCgpIHtcclxuICBEZXNrLnNldENvbG9yVGVtcGVyYXR1cmUoNzAwMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIExhbXBUZW1wNjAwMCgpIHtcclxuICBMYW1wLnNldENvbG9yVGVtcGVyYXR1cmUoNjAwMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIERlc2tUZW1wNjAwMCgpIHtcclxuICBEZXNrLnNldENvbG9yVGVtcGVyYXR1cmUoNjAwMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIExhbXBUZW1wNTAwMCgpIHtcclxuICBMYW1wLnNldENvbG9yVGVtcGVyYXR1cmUoNTAwMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIERlc2tUZW1wNTAwMCgpIHtcclxuICBEZXNrLnNldENvbG9yVGVtcGVyYXR1cmUoNTAwMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIExhbXBUZW1wNDAwMCgpIHtcclxuICBMYW1wLnNldENvbG9yVGVtcGVyYXR1cmUoNDAwMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIERlc2tUZW1wNDAwMCgpIHtcclxuICBEZXNrLnNldENvbG9yVGVtcGVyYXR1cmUoNDAwMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIExhbXBUZW1wMzAwMCgpIHtcclxuICBMYW1wLnNldENvbG9yVGVtcGVyYXR1cmUoMzAwMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIERlc2tUZW1wMzAwMCgpIHtcclxuICBEZXNrLnNldENvbG9yVGVtcGVyYXR1cmUoMzAwMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIExhbXBUZW1wMjAwMCgpIHtcclxuICBMYW1wLnNldENvbG9yVGVtcGVyYXR1cmUoMjAwMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIERlc2tUZW1wMjAwMCgpIHtcclxuICBEZXNrLnNldENvbG9yVGVtcGVyYXR1cmUoMjAwMCk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBUZW1wOiBSZWFjdC5GQzx7fT4gPSAoe30pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8aDE+VGVtcGVyYXR1cmUgQ29udHJvbDwvaDE+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XHJcbiAgICAgICAgICA8aDM+VGVtcCA5MDAwPC9oMz5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17TGFtcFRlbXA5MDAwfSBjbGFzc05hbWU9e3N0eWxlcy5saWdodEJ1dHRvbn0+XHJcbiAgICAgICAgICAgIExhbXBcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtEZXNrVGVtcDkwMDB9IGNsYXNzTmFtZT17c3R5bGVzLmxpZ2h0QnV0dG9ufT5cclxuICAgICAgICAgICAgRGVza1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XHJcbiAgICAgICAgICA8aDM+VGVtcCA4MDAwPC9oMz5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17TGFtcFRlbXA4MDAwfSBjbGFzc05hbWU9e3N0eWxlcy5saWdodEJ1dHRvbn0+XHJcbiAgICAgICAgICAgIExhbXBcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtEZXNrVGVtcDgwMDB9IGNsYXNzTmFtZT17c3R5bGVzLmxpZ2h0QnV0dG9ufT5cclxuICAgICAgICAgICAgRGVza1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XHJcbiAgICAgICAgICA8aDM+VGVtcCA3MDAwPC9oMz5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17TGFtcFRlbXA3MDAwfSBjbGFzc05hbWU9e3N0eWxlcy5saWdodEJ1dHRvbn0+XHJcbiAgICAgICAgICAgIExhbXBcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtEZXNrVGVtcDcwMDB9IGNsYXNzTmFtZT17c3R5bGVzLmxpZ2h0QnV0dG9ufT5cclxuICAgICAgICAgICAgRGVza1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XHJcbiAgICAgICAgICA8aDM+VGVtcCA2MDAwPC9oMz5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17TGFtcFRlbXA2MDAwfSBjbGFzc05hbWU9e3N0eWxlcy5saWdodEJ1dHRvbn0+XHJcbiAgICAgICAgICAgIExhbXBcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtEZXNrVGVtcDYwMDB9IGNsYXNzTmFtZT17c3R5bGVzLmxpZ2h0QnV0dG9ufT5cclxuICAgICAgICAgICAgRGVza1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIiwiY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xyXG5cclxuY2xhc3MgR292ZWVMRUQge1xyXG5cdGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG5cdFx0dGhpcy5hcGlLZXkgPSBjb25maWcuYXBpS2V5XHJcblx0XHR0aGlzLm1hYyA9IGNvbmZpZy5tYWNcclxuXHRcdHRoaXMubW9kZWwgPSBjb25maWcubW9kZWxcclxuXHRcdHRoaXMuYmFzZVBhdGggPSBcImh0dHBzOi8vZGV2ZWxvcGVyLWFwaS5nb3ZlZS5jb20vdjEvZGV2aWNlc1wiXHJcblx0fVxyXG5cclxuXHRyZXF1ZXN0KGVuZHBvaW50LCByZXFEYXRhLCBtZXRob2QpIHtcclxuXHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoICggcmVzb2x2ZSwgcmVqZWN0ICkgPT4ge1xyXG5cclxuXHRcdFx0aWYgKHRoaXMubWFjID09PSBcIlwiKSByZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihcIk5vIE1BQyBBZGRyZXNzIHByb3ZpZGVkLlwiKSk7XHJcblx0XHRcdGlmICh0aGlzLm1vZGVsID09PSBcIlwiKSByZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihcIk5vIE1vZGVsIHByb3ZpZGVkLlwiKSk7XHJcblxyXG5cdFx0XHRsZXQgcmVxVVJMID0gdGhpcy5iYXNlUGF0aCArIGVuZHBvaW50O1xyXG5cclxuXHRcdFx0dmFyIGRhdGEgPSBKU09OLnN0cmluZ2lmeShyZXFEYXRhKTtcclxuXHJcblx0XHRcdHZhciBjb25maWcgPSB7XHJcblx0XHRcdFx0bWV0aG9kOiBtZXRob2QsXHJcblx0XHRcdFx0dXJsOiByZXFVUkwsXHJcblx0XHRcdFx0aGVhZGVyczogeyBcclxuXHRcdFx0XHRcdCdHb3ZlZS1BUEktS2V5JzogdGhpcy5hcGlLZXksIFxyXG5cdFx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0ZGF0YTogZGF0YVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0YXhpb3MoY29uZmlnKVxyXG5cdFx0XHQudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHRcdFx0XHRyZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcblx0XHRcdFx0cmVqZWN0KGVycm9yKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHNldENvbG9yKGhleENvZGUpIHtcclxuXHRcdHZhciByZWdleCA9IC9eIyhbMC05QS1GXXszfSl7MSwyfSQvaTtcclxuXHRcdGlmICghcmVnZXgudGVzdChoZXhDb2RlKSkgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBIZXggQ29sb3IgQ29kZVwiKTtcclxuXHRcdFxyXG5cdFx0ZnVuY3Rpb24gaGV4MnJnYihoZXgpIHtcclxuXHRcdFx0dmFyIHNob3J0aGFuZFJlZ2V4ID0gL14jPyhbYS1mXFxkXSkoW2EtZlxcZF0pKFthLWZcXGRdKSQvaTtcclxuXHRcdFx0aGV4ID0gaGV4LnJlcGxhY2Uoc2hvcnRoYW5kUmVnZXgsIGZ1bmN0aW9uKG0sIHIsIGcsIGIpIHtcclxuXHRcdFx0XHRyZXR1cm4gciArIHIgKyBnICsgZyArIGIgKyBiO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHZhciByZXN1bHQgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KTtcclxuXHRcdFx0cmV0dXJuIHJlc3VsdCA/IHtcclxuXHRcdFx0XHRyOiBwYXJzZUludChyZXN1bHRbMV0sIDE2KSxcclxuXHRcdFx0XHRnOiBwYXJzZUludChyZXN1bHRbMl0sIDE2KSxcclxuXHRcdFx0XHRiOiBwYXJzZUludChyZXN1bHRbM10sIDE2KVxyXG5cdFx0XHR9IDogbnVsbDtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0dmFyIFJHQmNvbnYgPSBoZXgycmdiKGhleENvZGUpO1xyXG5cdFx0dmFyIHJlcURhdGEgPSB7XHJcblx0XHQgICAgXCJkZXZpY2VcIjogdGhpcy5tYWMsXHJcblx0XHQgICAgXCJtb2RlbFwiOiB0aGlzLm1vZGVsLFxyXG5cdFx0ICAgIFwiY21kXCI6IHtcclxuXHRcdCAgICAgICAgXCJuYW1lXCI6IFwiY29sb3JcIixcclxuXHRcdCAgICAgICAgXCJ2YWx1ZVwiOiB7XHJcblx0XHQgICAgICAgICAgICBcInJcIjogUkdCY29udi5yLFxyXG5cdFx0ICAgICAgICAgICAgXCJnXCI6IFJHQmNvbnYuZyxcclxuXHRcdCAgICAgICAgICAgIFwiYlwiOiBSR0Jjb252LmJcclxuXHRcdCAgICAgICAgfVxyXG5cdFx0ICAgIH1cclxuXHRcdH07XHJcblx0XHR2YXIgZW5kcG9pbnQgPSAnL2NvbnRyb2wnO1xyXG5cdFx0cmV0dXJuIHRoaXMucmVxdWVzdChlbmRwb2ludCwgcmVxRGF0YSwgXCJwdXRcIik7XHJcblx0fVxyXG5cclxuXHRzZXRCcmlnaHRuZXNzKGJyaWdodG5lc3NMZXZlbCkge1xyXG5cdFx0aWYgKCFOdW1iZXIuaXNJbnRlZ2VyKGJyaWdodG5lc3NMZXZlbCkpIHRocm93IG5ldyBFcnJvcihcIkJyaWdodG5lc3MgTGV2ZWwgUHJvdmlkZWQgaXMgTm90IEEgTnVtYmVyXCIpO1xyXG5cdFx0aWYgKGJyaWdodG5lc3NMZXZlbCA+IDEwMCkgdGhyb3cgbmV3IEVycm9yKFwiQnJpZ2h0bmVzcyBMZXZlbCBQcm92aWRlZCBpcyBOb3QgRnJvbSAxLTEwMFwiKTtcclxuXHRcdGlmIChicmlnaHRuZXNzTGV2ZWwgPCAxKSB0aHJvdyBuZXcgRXJyb3IoXCJCcmlnaHRuZXNzIExldmVsIFByb3ZpZGVkIGlzIE5vdCBGcm9tIDEtMTAwXCIpO1xyXG5cdFx0dmFyIHJlcURhdGEgPSB7XHJcblx0XHQgICAgXCJkZXZpY2VcIjogdGhpcy5tYWMsXHJcblx0XHQgICAgXCJtb2RlbFwiOiB0aGlzLm1vZGVsLFxyXG5cdFx0ICAgIFwiY21kXCI6IHtcclxuXHRcdCAgICAgICAgXCJuYW1lXCI6IFwiYnJpZ2h0bmVzc1wiLFxyXG5cdFx0ICAgICAgICBcInZhbHVlXCI6IGJyaWdodG5lc3NMZXZlbFxyXG5cdFx0ICAgIH1cclxuXHRcdH07XHJcblx0XHR2YXIgZW5kcG9pbnQgPSAnL2NvbnRyb2wnO1xyXG5cdFx0cmV0dXJuIHRoaXMucmVxdWVzdChlbmRwb2ludCwgcmVxRGF0YSwgXCJwdXRcIik7XHJcblx0fVxyXG5cclxuXHRzZXRDb2xvclRlbXBlcmF0dXJlKHRlbXBlcmF0dXJlTGV2ZWwpIHtcclxuXHRcdGlmICghTnVtYmVyLmlzSW50ZWdlcih0ZW1wZXJhdHVyZUxldmVsKSkgdGhyb3cgbmV3IEVycm9yKFwiVGVtcGVyYXR1cmUgTGV2ZWwgUHJvdmlkZWQgaXMgTm90IEEgTnVtYmVyXCIpO1xyXG5cdFx0aWYgKHRlbXBlcmF0dXJlTGV2ZWwgPiA5MDAwKSB0aHJvdyBuZXcgRXJyb3IoXCJUZW1wZXJhdHVyZSBMZXZlbCBQcm92aWRlZCBpcyBOb3QgRnJvbSAyMDAwLTkwMDBcIik7XHJcblx0XHRpZiAodGVtcGVyYXR1cmVMZXZlbCA8IDIwMDApIHRocm93IG5ldyBFcnJvcihcIlRlbXBlcmF0dXJlIExldmVsIFByb3ZpZGVkIGlzIE5vdCBGcm9tIDIwMDAtOTAwMFwiKTtcclxuXHRcdHZhciByZXFEYXRhID0ge1xyXG5cdFx0ICAgIFwiZGV2aWNlXCI6IHRoaXMubWFjLFxyXG5cdFx0ICAgIFwibW9kZWxcIjogdGhpcy5tb2RlbCxcclxuXHRcdCAgICBcImNtZFwiOiB7XHJcblx0XHRcdFx0XCJuYW1lXCI6IFwiY29sb3JUZW1cIixcclxuXHRcdFx0XHRcInZhbHVlXCI6IHRlbXBlcmF0dXJlTGV2ZWxcclxuXHRcdCAgICB9XHJcblx0XHR9O1xyXG5cdFx0dmFyIGVuZHBvaW50ID0gJy9jb250cm9sJztcclxuXHRcdHJldHVybiB0aGlzLnJlcXVlc3QoZW5kcG9pbnQsIHJlcURhdGEsIFwicHV0XCIpO1xyXG5cdH1cclxuXHJcblx0dHVybk9uKCkge1xyXG5cdFx0dmFyIHJlcURhdGEgPSB7XHJcblx0XHQgICAgXCJkZXZpY2VcIjogdGhpcy5tYWMsXHJcblx0XHQgICAgXCJtb2RlbFwiOiB0aGlzLm1vZGVsLFxyXG5cdFx0ICAgIFwiY21kXCI6IHtcclxuXHRcdCAgICAgICAgXCJuYW1lXCI6IFwidHVyblwiLFxyXG5cdFx0ICAgICAgICBcInZhbHVlXCI6IFwib25cIlxyXG5cdFx0ICAgIH1cclxuXHRcdH07XHJcblx0XHR2YXIgZW5kcG9pbnQgPSAnL2NvbnRyb2wnO1xyXG5cdFx0cmV0dXJuIHRoaXMucmVxdWVzdChlbmRwb2ludCwgcmVxRGF0YSwgXCJwdXRcIik7XHJcblx0fVxyXG5cclxuXHR0dXJuT2ZmKCkge1xyXG5cdFx0dmFyIHJlcURhdGEgPSB7XHJcblx0XHQgICAgXCJkZXZpY2VcIjogdGhpcy5tYWMsXHJcblx0XHQgICAgXCJtb2RlbFwiOiB0aGlzLm1vZGVsLFxyXG5cdFx0ICAgIFwiY21kXCI6IHtcclxuXHRcdCAgICAgICAgXCJuYW1lXCI6IFwidHVyblwiLFxyXG5cdFx0ICAgICAgICBcInZhbHVlXCI6IFwib2ZmXCJcclxuXHRcdCAgICB9XHJcblx0XHR9O1xyXG5cdFx0dmFyIGVuZHBvaW50ID0gJy9jb250cm9sJztcclxuXHRcdHJldHVybiB0aGlzLnJlcXVlc3QoZW5kcG9pbnQsIHJlcURhdGEsIFwicHV0XCIpO1xyXG5cdH1cclxuXHJcblx0Z2V0U3RhdGUoKSB7XHJcblx0XHR2YXIgcmVxRGF0YSA9IHt9O1xyXG5cdFx0dmFyIGVuZHBvaW50ID0gYC9zdGF0ZT9kZXZpY2U9JHt0aGlzLm1hY30mbW9kZWw9JHt0aGlzLm1vZGVsfWA7XHJcblx0XHRyZXR1cm4gdGhpcy5yZXF1ZXN0KGVuZHBvaW50LCByZXFEYXRhLCBcImdldFwiKTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIGdldERldmljZXMoKSB7XHJcblx0XHR2YXIgcmVxRGF0YSA9IHt9O1xyXG5cdFx0dmFyIGVuZHBvaW50ID0gYGA7XHJcblx0XHRsZXQgcmVxVVJMID0gdGhpcy5iYXNlUGF0aCArIGVuZHBvaW50O1xyXG5cclxuXHRcdHZhciBkYXRhID0gSlNPTi5zdHJpbmdpZnkocmVxRGF0YSk7XHJcblxyXG5cdFx0dmFyIGNvbmZpZyA9IHtcclxuXHRcdFx0bWV0aG9kOiBcImdldFwiLFxyXG5cdFx0XHR1cmw6IHJlcVVSTCxcclxuXHRcdFx0aGVhZGVyczogeyBcclxuXHRcdFx0XHQnR292ZWUtQVBJLUtleSc6IHRoaXMuYXBpS2V5LCBcclxuXHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcblx0XHRcdH0sXHJcblx0XHRcdGRhdGE6IGRhdGFcclxuXHRcdH07XHJcblxyXG5cdFx0bGV0IHJlc0RhdGE7XHJcblxyXG5cdFx0YXdhaXQgYXhpb3MoY29uZmlnKVxyXG5cdFx0LnRoZW4oYXN5bmMgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblx0XHRcdHJlc0RhdGEgPSByZXNwb25zZS5kYXRhLmRhdGE7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuIHJlc0RhdGE7XHJcblx0fVxyXG5cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gR292ZWVMRUQ7IiwiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCcmlnaHRuZXNzIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQnJpZ2h0bmVzc1wiO1xuaW1wb3J0IENvbG9yQ2hhbmdlIGZyb20gXCIuLi9jb21wb25lbnRzL0NvbG9yQ2hhbmdlXCI7XG5pbXBvcnQgeyBUZW1wIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvVGVtcFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuXG5pbXBvcnQgR292ZWUgZnJvbSBcIi4uL25vZGUtZ292ZWUtbGVkL2luZGV4XCI7XG5cbmNvbnN0IExhbXAgPSBuZXcgR292ZWUoe1xuICBhcGlLZXk6IFwiOGExN2RhMWYtYzFlOS00YTFkLTgyOTUtNmIxMzYwNTk1YmI2XCIsXG4gIG1hYzogXCIxZDplNzo3YzphNjpiMDoxMzpiODplOVwiLFxuICBtb2RlbDogXCJINjAwM1wiLFxufSk7XG5cbmNvbnN0IERlc2sgPSBuZXcgR292ZWUoe1xuICBhcGlLZXk6IFwiOGExN2RhMWYtYzFlOS00YTFkLTgyOTUtNmIxMzYwNTk1YmI2XCIsXG4gIG1hYzogXCI3NTpiNTo3YzphNjpiMDoxMzpiYTo5ZVwiLFxuICBtb2RlbDogXCJINjAwM1wiLFxufSk7XG5cbmZ1bmN0aW9uIExhbXBUdXJuT24oKSB7XG4gIExhbXAudHVybk9uKCk7XG59XG5cbmZ1bmN0aW9uIExhbXBUdXJuT2ZmKCkge1xuICBMYW1wLnR1cm5PZmYoKTtcbn1cblxuZnVuY3Rpb24gRGVza1R1cm5PbigpIHtcbiAgRGVzay50dXJuT24oKTtcbn1cblxuZnVuY3Rpb24gRGVza1R1cm5PZmYoKSB7XG4gIERlc2sudHVybk9mZigpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TGlnaHQgQ29udHJvbHM8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiQ29udHJvbHMgZm9yIG15IGxpZ2h0c1wiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cIm1hbmlmZXN0XCIgaHJlZj1cIi9tYW5pZmVzdC5qc29uXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiMwMDAwMDBcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgaHJlZj1cIi9sb2dvMTkyLnBuZ1wiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9Pk9uL09mZiBDb250cm9sPC9oMT5cbiAgICAgICAgPC9oZWFkZXI+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgICAgICAgICAgPGgzPlR1cm4gT248L2gzPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtMYW1wVHVybk9ufSBjbGFzc05hbWU9e3N0eWxlcy5saWdodEJ1dHRvbn0+XG4gICAgICAgICAgICAgIExhbXBcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtEZXNrVHVybk9ufSBjbGFzc05hbWU9e3N0eWxlcy5saWdodEJ1dHRvbn0+XG4gICAgICAgICAgICAgIERlc2tcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cbiAgICAgICAgICAgIDxoMz5UdXJuIE9mZjwvaDM+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e0xhbXBUdXJuT2ZmfSBjbGFzc05hbWU9e3N0eWxlcy5saWdodEJ1dHRvbn0+XG4gICAgICAgICAgICAgIExhbXBcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtEZXNrVHVybk9mZn0gY2xhc3NOYW1lPXtzdHlsZXMubGlnaHRCdXR0b259PlxuICAgICAgICAgICAgICBEZXNrXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxCcmlnaHRuZXNzIC8+XG5cbiAgICAgICAgPENvbG9yQ2hhbmdlIC8+XG5cbiAgICAgICAgPFRlbXAgLz5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1kZWZhdWx0LXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgID5cbiAgICAgICAgICBQb3dlcmVkIGJ5e1wiIFwifVxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299PlxuICAgICAgICAgICAgPEltYWdlIHNyYz1cIi92ZXJjZWwuc3ZnXCIgYWx0PVwiVmVyY2VsIExvZ29cIiB3aWR0aD17NzJ9IGhlaWdodD17MTZ9IC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2E+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3luY1RvR2VuZXJhdG9yOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gSUUgOCBoYXMgYSBicm9rZW4gT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgb25seSB3b3JrcyBvbiBET00gb2JqZWN0cy5cbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBkZWZpbmUoSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIGRlZmluZShHcCwgXCJjb25zdHJ1Y3RvclwiLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gIGRlZmluZShHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgXCJjb25zdHJ1Y3RvclwiLCBHZW5lcmF0b3JGdW5jdGlvbik7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKFxuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIHRvU3RyaW5nVGFnU3ltYm9sLFxuICAgIFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICApO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgZGVmaW5lKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlLCBhc3luY0l0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIGRlZmluZShHcCwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcblxuICBkZWZpbmUoR3AsIFwidG9TdHJpbmdcIiwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIGluIG1vZGVybiBlbmdpbmVzXG4gIC8vIHdlIGNhbiBleHBsaWNpdGx5IGFjY2VzcyBnbG9iYWxUaGlzLiBJbiBvbGRlciBlbmdpbmVzIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gXCJvYmplY3RcIikge1xuICAgIGdsb2JhbFRoaXMucmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbiAgfSBlbHNlIHtcbiAgICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9