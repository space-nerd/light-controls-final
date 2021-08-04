(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Brightness.tsx":
/*!***********************************!*\
  !*** ./components/Brightness.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Brightness": function() { return /* binding */ Brightness; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_govee_led_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node-govee-led/index */ "./node-govee-led/index.js");
/* harmony import */ var _node_govee_led_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_govee_led_index__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\carpe\\Documents\\GitHub\\light-controls-final\\components\\Brightness.tsx";



const Lamp = new (_node_govee_led_index__WEBPACK_IMPORTED_MODULE_2___default())({
  apiKey: "8a17da1f-c1e9-4a1d-8295-6b1360595bb6",
  mac: "1d:e7:7c:a6:b0:13:b8:e9",
  model: "H6003"
});
const Desk = new (_node_govee_led_index__WEBPACK_IMPORTED_MODULE_2___default())({
  apiKey: "8a17da1f-c1e9-4a1d-8295-6b1360595bb6",
  mac: "75:b5:7c:a6:b0:13:ba:9e",
  model: "H6003"
});

function LampBrightness100() {
  Lamp.setBrightness(100);
}

function DeskBrightness100() {
  Desk.setBrightness(100);
}

function LampBrightness75() {
  Lamp.setBrightness(75);
}

function DeskBrightness75() {
  Desk.setBrightness(75);
}

function LampBrightness50() {
  Lamp.setBrightness(50);
}

function DeskBrightness50() {
  Desk.setBrightness(50);
}

function LampBrightness25() {
  Lamp.setBrightness(25);
}

function DeskBrightness25() {
  Desk.setBrightness(25);
}

const Brightness = ({}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "Brightness Control"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().grid),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "Brightness 100%"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: LampBrightness100,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().lightButton),
          children: "Lamp"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: DeskBrightness100,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().lightButton),
          children: "Desk"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "Brightness 75%"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: LampBrightness75,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().lightButton),
          children: "Lamp"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: DeskBrightness75,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().lightButton),
          children: "Desk"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "Brightness 50%"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: LampBrightness50,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().lightButton),
          children: "Lamp"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: DeskBrightness50,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().lightButton),
          children: "Desk"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "Brightness 25%"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: LampBrightness25,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().lightButton),
          children: "Lamp"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: DeskBrightness25,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().lightButton),
          children: "Desk"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./components/ColorChange.tsx":
/*!************************************!*\
  !*** ./components/ColorChange.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_govee_led_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node-govee-led/index */ "./node-govee-led/index.js");
/* harmony import */ var _node_govee_led_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_govee_led_index__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\carpe\\Documents\\GitHub\\light-controls-final\\components\\ColorChange.tsx";



const Lamp = new (_node_govee_led_index__WEBPACK_IMPORTED_MODULE_2___default())({
  apiKey: "8a17da1f-c1e9-4a1d-8295-6b1360595bb6",
  mac: "1d:e7:7c:a6:b0:13:b8:e9",
  model: "H6003"
});
const Desk = new (_node_govee_led_index__WEBPACK_IMPORTED_MODULE_2___default())({
  apiKey: "8a17da1f-c1e9-4a1d-8295-6b1360595bb6",
  mac: "75:b5:7c:a6:b0:13:ba:9e",
  model: "H6003"
});

function LampRed() {
  Lamp.setColor("#ff0000");
}

function DeskRed() {
  Desk.setColor("#ff0000");
}

function LampGreen() {
  Lamp.setColor("#00ff00");
}

function DeskGreen() {
  Desk.setColor("#00ff00");
}

function LampBlue() {
  Lamp.setColor("#0000ff");
}

function DeskBlue() {
  Desk.setColor("#0000ff");
}

function LampMagenta() {
  Lamp.setColor("#ff00ff");
}

function DeskMagenta() {
  Desk.setColor("#ff00ff");
}

function LampPurple() {
  Lamp.setColor("#800080");
}

function DeskPurple() {
  Desk.setColor("#800080");
}

function LampAqua() {
  Lamp.setColor("#00ffff");
}

function DeskAqua() {
  Desk.setColor("#00ffff");
}

function LampLightBlue() {
  Lamp.setColor("#0070f3");
}

function DeskLightBlue() {
  Desk.setColor("#0070f3");
}

function LampWhite() {
  Lamp.setColor("#ffffff");
}

function DeskWhite() {
  Desk.setColor("#ffffff");
}

const ColorChange = ({}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "Color Control"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().grid),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "White"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: LampWhite,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().lightButton),
          children: "Lamp"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: DeskWhite,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().lightButton),
          children: "Desk"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "Red"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: LampRed,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().lightButton),
          children: "Lamp"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: DeskRed,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().lightButton),
          children: "Desk"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "Green"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: LampGreen,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().lightButton),
          children: "Lamp"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: DeskWhite,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().lightButton),
          children: "Desk"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "Blue"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: LampBlue,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().lightButton),
          children: "Lamp"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: DeskBlue,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().lightButton),
          children: "Desk"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "Magenta"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: LampMagenta,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().lightButton),
          children: "Lamp"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: DeskMagenta,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().lightButton),
          children: "Desk"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "Purple"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: LampPurple,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().lightButton),
          children: "Lamp"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: DeskPurple,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().lightButton),
          children: "Desk"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "Aqua"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: LampAqua,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().lightButton),
          children: "Lamp"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: DeskAqua,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().lightButton),
          children: "Desk"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "Light Blue"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: LampLightBlue,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().lightButton),
          children: "Lamp"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: DeskLightBlue,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().lightButton),
          children: "Desk"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 84,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ColorChange);

/***/ }),

/***/ "./components/Temp.tsx":
/*!*****************************!*\
  !*** ./components/Temp.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Temp": function() { return /* binding */ Temp; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_govee_led_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node-govee-led/index */ "./node-govee-led/index.js");
/* harmony import */ var _node_govee_led_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_govee_led_index__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\carpe\\Documents\\GitHub\\light-controls-final\\components\\Temp.tsx";



const Lamp = new (_node_govee_led_index__WEBPACK_IMPORTED_MODULE_2___default())({
  apiKey: "8a17da1f-c1e9-4a1d-8295-6b1360595bb6",
  mac: "1d:e7:7c:a6:b0:13:b8:e9",
  model: "H6003"
});
const Desk = new (_node_govee_led_index__WEBPACK_IMPORTED_MODULE_2___default())({
  apiKey: "8a17da1f-c1e9-4a1d-8295-6b1360595bb6",
  mac: "75:b5:7c:a6:b0:13:ba:9e",
  model: "H6003"
});

function LampTemp9000() {
  Lamp.setColorTemperature(9000);
}

function DeskTemp9000() {
  Desk.setColorTemperature(9000);
}

function LampTemp8000() {
  Lamp.setColorTemperature(8000);
}

function DeskTemp8000() {
  Desk.setColorTemperature(8000);
}

function LampTemp7000() {
  Lamp.setColorTemperature(7000);
}

function DeskTemp7000() {
  Desk.setColorTemperature(7000);
}

function LampTemp6000() {
  Lamp.setColorTemperature(6000);
}

function DeskTemp6000() {
  Desk.setColorTemperature(6000);
}

function LampTemp5000() {
  Lamp.setColorTemperature(5000);
}

function DeskTemp5000() {
  Desk.setColorTemperature(5000);
}

function LampTemp4000() {
  Lamp.setColorTemperature(4000);
}

function DeskTemp4000() {
  Desk.setColorTemperature(4000);
}

function LampTemp3000() {
  Lamp.setColorTemperature(3000);
}

function DeskTemp3000() {
  Desk.setColorTemperature(3000);
}

function LampTemp2000() {
  Lamp.setColorTemperature(2000);
}

function DeskTemp2000() {
  Desk.setColorTemperature(2000);
}

const Temp = ({}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "Temperature Control"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().grid),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "Temp 9000"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: LampTemp9000,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().lightButton),
          children: "Lamp"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: DeskTemp9000,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().lightButton),
          children: "Desk"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "Temp 8000"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: LampTemp8000,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().lightButton),
          children: "Lamp"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: DeskTemp8000,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().lightButton),
          children: "Desk"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "Temp 7000"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: LampTemp7000,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().lightButton),
          children: "Lamp"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: DeskTemp7000,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().lightButton),
          children: "Desk"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "Temp 6000"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: LampTemp6000,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().lightButton),
          children: "Lamp"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: DeskTemp6000,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().lightButton),
          children: "Desk"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "Temp 5000"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: LampTemp5000,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().lightButton),
          children: "Lamp"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: DeskTemp5000,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().lightButton),
          children: "Desk"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "Temp 4000"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: LampTemp4000,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().lightButton),
          children: "Lamp"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: DeskTemp4000,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().lightButton),
          children: "Desk"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "Temp 3000"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: LampTemp3000,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().lightButton),
          children: "Lamp"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: DeskTemp3000,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().lightButton),
          children: "Desk"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "Temp 2000"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: LampTemp2000,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().lightButton),
          children: "Lamp"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: DeskTemp2000,
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().lightButton),
          children: "Desk"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 84,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./node-govee-led/index.js":
/*!*********************************!*\
  !*** ./node-govee-led/index.js ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const axios = __webpack_require__(/*! axios */ "axios");

class GoveeLED {
  constructor(config) {
    this.apiKey = config.apiKey;
    this.mac = config.mac;
    this.model = config.model;
    this.basePath = "https://developer-api.govee.com/v1/devices";
  }

  request(endpoint, reqData, method) {
    return new Promise((resolve, reject) => {
      if (this.mac === "") return reject(new Error("No MAC Address provided."));
      if (this.model === "") return reject(new Error("No Model provided."));
      let reqURL = this.basePath + endpoint;
      var data = JSON.stringify(reqData);
      var config = {
        method: method,
        url: reqURL,
        headers: {
          'Govee-API-Key': this.apiKey,
          'Content-Type': 'application/json'
        },
        data: data
      };
      axios(config).then(function (response) {
        resolve(response.data);
      }).catch(function (error) {
        reject(error);
      });
    });
  }

  setColor(hexCode) {
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

  setBrightness(brightnessLevel) {
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

  setColorTemperature(temperatureLevel) {
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

  turnOn() {
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

  turnOff() {
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

  getState() {
    var reqData = {};
    var endpoint = `/state?device=${this.mac}&model=${this.model}`;
    return this.request(endpoint, reqData, "get");
  }

  async getDevices() {
    var reqData = {};
    var endpoint = ``;
    let reqURL = this.basePath + endpoint;
    var data = JSON.stringify(reqData);
    var config = {
      method: "get",
      url: reqURL,
      headers: {
        'Govee-API-Key': this.apiKey,
        'Content-Type': 'application/json'
      },
      data: data
    };
    let resData;
    await axios(config).then(async function (response) {
      resData = response.data.data;
    }).catch(function (error) {
      throw new Error(error);
    });
    return resData;
  }

}

;
module.exports = GoveeLED;

/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/next/node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "../next-server/lib/head"));

var _toBase = __webpack_require__(/*! ../next-server/lib/to-base-64 */ "../next-server/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../next-server/server/image-config */ "../next-server/server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];

function isStaticRequire(src) {
  return src.default !== undefined;
}

function isStaticImageData(src) {
  return src.src !== undefined;
}

function isStaticImport(src) {
  return typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}

const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    const percentSizes = [];

    for (let match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(parseInt(match[2]));
    }

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function removePlaceholder(img, placeholder) {
  if (placeholder === 'blur' && img) {
    const handleLoad = () => {
      if (!img.src.startsWith('data:')) {
        const p = 'decode' in img ? img.decode() : Promise.resolve();
        p.catch(() => {}).then(() => {
          img.style.filter = 'none';
          img.style.backgroundSize = 'none';
          img.style.backgroundImage = 'none';
        });
      }
    };

    if (img.complete) {
      // If the real image fails to load, this will still remove the placeholder.
      // This is the desired behavior for now, and will be revisited when error
      // handling is worked on for the image component itself.
      handleLoad();
    } else {
      img.onload = handleLoad;
    }
  }
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader,
    placeholder = 'empty',
    blurDataURL
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader", "placeholder", "blurDataURL"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';

  if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  let staticSrc = '';

  if (isStaticImport(src)) {
    const staticImageData = isStaticRequire(src) ? src.default : src;

    if (!staticImageData.src) {
      throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`);
    }

    blurDataURL = blurDataURL || staticImageData.blurDataURL;
    staticSrc = staticImageData.src;

    if (!layout || layout !== 'fill') {
      height = height || staticImageData.height;
      width = width || staticImageData.width;

      if (!staticImageData.height || !staticImageData.width) {
        throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`);
      }
    }
  }

  src = typeof src === 'string' ? src : staticSrc;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (typeof widthInt !== 'undefined' && isNaN(widthInt) || typeof heightInt !== 'undefined' && isNaN(heightInt)) {
      throw new Error(`Image with src "${src}" has invalid "width" or "height" property. These should be numeric values.`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (placeholder === 'blur') {
      if (layout !== 'fill' && (widthInt || 0) * (heightInt || 0) < 1600) {
        console.warn(`Image with src "${src}" is smaller than 40x40. Consider removing the "placeholder='blur'" property to improve performance.`);
      }

      if (!blurDataURL) {
        const VALID_BLUR_EXT = ['jpeg', 'png', 'webp']; // should match next-image-loader

        throw new Error(`Image with src "${src}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
          Possible solutions:
            - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
            - Change the "src" property to a static import with one of the supported file types: ${VALID_BLUR_EXT.join(',')}
            - Remove the "placeholder" property, effectively no blur effect
          Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`);
      }
    }
  }

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = (0, _extends2.default)({
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  }, placeholder === 'blur' ? {
    filter: 'blur(20px)',
    backgroundSize: 'cover',
    backgroundImage: `url("${blurDataURL}")`
  } : undefined);

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, !isVisible && /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    decoding: "async",
    style: imgStyle,
    className: className
  }))), /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: element => {
      setRef(element);
      removePlaceholder(element, placeholder);
    },
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if (!configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Brightness__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Brightness */ "./components/Brightness.tsx");
/* harmony import */ var _components_ColorChange__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ColorChange */ "./components/ColorChange.tsx");
/* harmony import */ var _components_Temp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Temp */ "./components/Temp.tsx");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _node_govee_led_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../node-govee-led/index */ "./node-govee-led/index.js");
/* harmony import */ var _node_govee_led_index__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_node_govee_led_index__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\Users\\carpe\\Documents\\GitHub\\light-controls-final\\pages\\index.tsx";








const Lamp = new (_node_govee_led_index__WEBPACK_IMPORTED_MODULE_7___default())({
  apiKey: "8a17da1f-c1e9-4a1d-8295-6b1360595bb6",
  mac: "1d:e7:7c:a6:b0:13:b8:e9",
  model: "H6003"
});
const Desk = new (_node_govee_led_index__WEBPACK_IMPORTED_MODULE_7___default())({
  apiKey: "8a17da1f-c1e9-4a1d-8295-6b1360595bb6",
  mac: "75:b5:7c:a6:b0:13:ba:9e",
  model: "H6003"
});

function LampTurnOn() {
  Lamp.turnOn();
}

function LampTurnOff() {
  Lamp.turnOff();
}

function DeskTurnOn() {
  Desk.turnOn();
}

function DeskTurnOff() {
  Desk.turnOff();
}

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

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Home_container__1EcsU",
	"main": "Home_main__1x8gC",
	"footer": "Home_footer__1WdhD",
	"name": "Home_name__3fbfx",
	"grid": "Home_grid__2Ei2F",
	"card": "Home_card__2SdtB",
	"lightButton": "Home_lightButton__bUZNC",
	"logo": "Home_logo__1YbrH",
	"icon": "Home_icon__3QFgh",
	"header": "Home_header__3vlZW"
};


/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/extends.js":
/*!**************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/extends.js ***!
  \**************************************************************************/
/***/ (function(module) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \***********************************************************************************************/
/***/ (function(module) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teWFwcC8uL2NvbXBvbmVudHMvQnJpZ2h0bmVzcy50c3giLCJ3ZWJwYWNrOi8vbXlhcHAvLi9jb21wb25lbnRzL0NvbG9yQ2hhbmdlLnRzeCIsIndlYnBhY2s6Ly9teWFwcC8uL2NvbXBvbmVudHMvVGVtcC50c3giLCJ3ZWJwYWNrOi8vbXlhcHAvLi9ub2RlLWdvdmVlLWxlZC9pbmRleC5qcyIsIndlYnBhY2s6Ly9teWFwcC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2ltYWdlLmpzIiwid2VicGFjazovL215YXBwLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovL215YXBwLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvdXNlLWludGVyc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9teWFwcC8uL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9teWFwcC8uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vbXlhcHAvLi9ub2RlX21vZHVsZXMvbmV4dC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9teWFwcC8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vbXlhcHAvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vbXlhcHAvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovL215YXBwL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9teWFwcC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiIiwid2VicGFjazovL215YXBwL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vbXlhcHAvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiIiwid2VicGFjazovL215YXBwL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vbXlhcHAvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL215YXBwL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiTGFtcCIsIkdvdmVlIiwiYXBpS2V5IiwibWFjIiwibW9kZWwiLCJEZXNrIiwiTGFtcEJyaWdodG5lc3MxMDAiLCJzZXRCcmlnaHRuZXNzIiwiRGVza0JyaWdodG5lc3MxMDAiLCJMYW1wQnJpZ2h0bmVzczc1IiwiRGVza0JyaWdodG5lc3M3NSIsIkxhbXBCcmlnaHRuZXNzNTAiLCJEZXNrQnJpZ2h0bmVzczUwIiwiTGFtcEJyaWdodG5lc3MyNSIsIkRlc2tCcmlnaHRuZXNzMjUiLCJCcmlnaHRuZXNzIiwic3R5bGVzIiwiTGFtcFJlZCIsInNldENvbG9yIiwiRGVza1JlZCIsIkxhbXBHcmVlbiIsIkRlc2tHcmVlbiIsIkxhbXBCbHVlIiwiRGVza0JsdWUiLCJMYW1wTWFnZW50YSIsIkRlc2tNYWdlbnRhIiwiTGFtcFB1cnBsZSIsIkRlc2tQdXJwbGUiLCJMYW1wQXF1YSIsIkRlc2tBcXVhIiwiTGFtcExpZ2h0Qmx1ZSIsIkRlc2tMaWdodEJsdWUiLCJMYW1wV2hpdGUiLCJEZXNrV2hpdGUiLCJDb2xvckNoYW5nZSIsIkxhbXBUZW1wOTAwMCIsInNldENvbG9yVGVtcGVyYXR1cmUiLCJEZXNrVGVtcDkwMDAiLCJMYW1wVGVtcDgwMDAiLCJEZXNrVGVtcDgwMDAiLCJMYW1wVGVtcDcwMDAiLCJEZXNrVGVtcDcwMDAiLCJMYW1wVGVtcDYwMDAiLCJEZXNrVGVtcDYwMDAiLCJMYW1wVGVtcDUwMDAiLCJEZXNrVGVtcDUwMDAiLCJMYW1wVGVtcDQwMDAiLCJEZXNrVGVtcDQwMDAiLCJMYW1wVGVtcDMwMDAiLCJEZXNrVGVtcDMwMDAiLCJMYW1wVGVtcDIwMDAiLCJEZXNrVGVtcDIwMDAiLCJUZW1wIiwiYXhpb3MiLCJyZXF1aXJlIiwiR292ZWVMRUQiLCJjb25zdHJ1Y3RvciIsImNvbmZpZyIsImJhc2VQYXRoIiwicmVxdWVzdCIsImVuZHBvaW50IiwicmVxRGF0YSIsIm1ldGhvZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiRXJyb3IiLCJyZXFVUkwiLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsInVybCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzcG9uc2UiLCJjYXRjaCIsImVycm9yIiwiaGV4Q29kZSIsInJlZ2V4IiwidGVzdCIsImhleDJyZ2IiLCJoZXgiLCJzaG9ydGhhbmRSZWdleCIsInJlcGxhY2UiLCJtIiwiciIsImciLCJiIiwicmVzdWx0IiwiZXhlYyIsInBhcnNlSW50IiwiUkdCY29udiIsImJyaWdodG5lc3NMZXZlbCIsIk51bWJlciIsImlzSW50ZWdlciIsInRlbXBlcmF0dXJlTGV2ZWwiLCJ0dXJuT24iLCJ0dXJuT2ZmIiwiZ2V0U3RhdGUiLCJnZXREZXZpY2VzIiwicmVzRGF0YSIsIm1vZHVsZSIsImV4cG9ydHMiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiSW1hZ2UiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIiLCJfZXh0ZW5kczIiLCJfcmVhY3QiLCJfaGVhZCIsIl90b0Jhc2UiLCJfaW1hZ2VDb25maWciLCJfdXNlSW50ZXJzZWN0aW9uIiwiZ2xvYmFsIiwiX19ORVhUX0lNQUdFX0lNUE9SVEVEIiwiVkFMSURfTE9BRElOR19WQUxVRVMiLCJ1bmRlZmluZWQiLCJsb2FkZXJzIiwiTWFwIiwiaW1naXhMb2FkZXIiLCJjbG91ZGluYXJ5TG9hZGVyIiwiYWthbWFpTG9hZGVyIiwiZGVmYXVsdExvYWRlciIsIlZBTElEX0xBWU9VVF9WQUxVRVMiLCJpc1N0YXRpY1JlcXVpcmUiLCJzcmMiLCJkZWZhdWx0IiwiaXNTdGF0aWNJbWFnZURhdGEiLCJpc1N0YXRpY0ltcG9ydCIsImRldmljZVNpemVzIiwiY29uZmlnRGV2aWNlU2l6ZXMiLCJpbWFnZVNpemVzIiwiY29uZmlnSW1hZ2VTaXplcyIsImxvYWRlciIsImNvbmZpZ0xvYWRlciIsInBhdGgiLCJjb25maWdQYXRoIiwiZG9tYWlucyIsImNvbmZpZ0RvbWFpbnMiLCJwcm9jZXNzIiwiaW1hZ2VDb25maWdEZWZhdWx0IiwiYWxsU2l6ZXMiLCJzb3J0IiwiYSIsImdldFdpZHRocyIsIndpZHRoIiwibGF5b3V0Iiwic2l6ZXMiLCJ2aWV3cG9ydFdpZHRoUmUiLCJwZXJjZW50U2l6ZXMiLCJtYXRjaCIsInB1c2giLCJsZW5ndGgiLCJzbWFsbGVzdFJhdGlvIiwiTWF0aCIsIm1pbiIsIndpZHRocyIsImZpbHRlciIsInMiLCJraW5kIiwiU2V0IiwibWFwIiwidyIsImZpbmQiLCJwIiwiZ2VuZXJhdGVJbWdBdHRycyIsInVub3B0aW1pemVkIiwicXVhbGl0eSIsInNyY1NldCIsImxhc3QiLCJpIiwiam9pbiIsImdldEludCIsIngiLCJkZWZhdWx0SW1hZ2VMb2FkZXIiLCJsb2FkZXJQcm9wcyIsImxvYWQiLCJnZXQiLCJyb290IiwiVkFMSURfTE9BREVSUyIsInJlbW92ZVBsYWNlaG9sZGVyIiwiaW1nIiwicGxhY2Vob2xkZXIiLCJoYW5kbGVMb2FkIiwic3RhcnRzV2l0aCIsImRlY29kZSIsInN0eWxlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJjb21wbGV0ZSIsIm9ubG9hZCIsIl9yZWYiLCJwcmlvcml0eSIsImxvYWRpbmciLCJjbGFzc05hbWUiLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJvYmplY3RQb3NpdGlvbiIsImJsdXJEYXRhVVJMIiwiYWxsIiwicmVzdCIsInN0YXRpY1NyYyIsInN0YXRpY0ltYWdlRGF0YSIsIndpZHRoSW50IiwiaGVpZ2h0SW50IiwicXVhbGl0eUludCIsImluY2x1ZGVzIiwiU3RyaW5nIiwiaXNOYU4iLCJjb25zb2xlIiwid2FybiIsIlZBTElEX0JMVVJfRVhUIiwiaXNMYXp5Iiwic2V0UmVmIiwiaXNJbnRlcnNlY3RlZCIsInVzZUludGVyc2VjdGlvbiIsInJvb3RNYXJnaW4iLCJkaXNhYmxlZCIsImlzVmlzaWJsZSIsIndyYXBwZXJTdHlsZSIsInNpemVyU3R5bGUiLCJzaXplclN2ZyIsImltZ1N0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJib3hTaXppbmciLCJwYWRkaW5nIiwiYm9yZGVyIiwibWFyZ2luIiwiZGlzcGxheSIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJxdW90aWVudCIsInBhZGRpbmdUb3AiLCJvdmVyZmxvdyIsImltZ0F0dHJpYnV0ZXMiLCJjcmVhdGVFbGVtZW50IiwiYWx0Iiwicm9sZSIsInRvQmFzZTY0IiwiT2JqZWN0IiwiYXNzaWduIiwiZGVjb2RpbmciLCJyZWYiLCJlbGVtZW50Iiwia2V5IiwicmVsIiwiYXMiLCJocmVmIiwiaW1hZ2VzcmNzZXQiLCJpbWFnZXNpemVzIiwibm9ybWFsaXplU3JjIiwic2xpY2UiLCJwYXJhbXMiLCJwYXJhbXNTdHJpbmciLCJtaXNzaW5nVmFsdWVzIiwicGFyc2VkU3JjIiwiVVJMIiwiZXJyIiwiaG9zdG5hbWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsImNiIiwic3RhcnQiLCJEYXRlIiwibm93Iiwic2V0VGltZW91dCIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwibWF4IiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiaWQiLCJjbGVhclRpbWVvdXQiLCJfcmVxdWVzdElkbGVDYWxsYmFjayIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwidXNlUmVmIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ1c2VTdGF0ZSIsInVzZUNhbGxiYWNrIiwiZWwiLCJjdXJyZW50IiwidGFnTmFtZSIsIm9ic2VydmUiLCJ1c2VFZmZlY3QiLCJpZGxlQ2FsbGJhY2siLCJjYWxsYmFjayIsIm9wdGlvbnMiLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJzZXQiLCJkZWxldGUiLCJzaXplIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsImluc3RhbmNlIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsInRhcmdldCIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJMYW1wVHVybk9uIiwiTGFtcFR1cm5PZmYiLCJEZXNrVHVybk9uIiwiRGVza1R1cm5PZmYiLCJIb21lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQSxNQUFNQSxJQUFJLEdBQUcsSUFBSUMsOERBQUosQ0FBVTtBQUNyQkMsUUFBTSxFQUFFLHNDQURhO0FBRXJCQyxLQUFHLEVBQUUseUJBRmdCO0FBR3JCQyxPQUFLLEVBQUU7QUFIYyxDQUFWLENBQWI7QUFNQSxNQUFNQyxJQUFJLEdBQUcsSUFBSUosOERBQUosQ0FBVTtBQUNyQkMsUUFBTSxFQUFFLHNDQURhO0FBRXJCQyxLQUFHLEVBQUUseUJBRmdCO0FBR3JCQyxPQUFLLEVBQUU7QUFIYyxDQUFWLENBQWI7O0FBTUEsU0FBU0UsaUJBQVQsR0FBNkI7QUFDM0JOLE1BQUksQ0FBQ08sYUFBTCxDQUFtQixHQUFuQjtBQUNEOztBQUVELFNBQVNDLGlCQUFULEdBQTZCO0FBQzNCSCxNQUFJLENBQUNFLGFBQUwsQ0FBbUIsR0FBbkI7QUFDRDs7QUFFRCxTQUFTRSxnQkFBVCxHQUE0QjtBQUMxQlQsTUFBSSxDQUFDTyxhQUFMLENBQW1CLEVBQW5CO0FBQ0Q7O0FBRUQsU0FBU0csZ0JBQVQsR0FBNEI7QUFDMUJMLE1BQUks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Q3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsK0M7Ozs7Ozs7Ozs7O0FDZkEsbUM7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEscUU7Ozs7Ozs7Ozs7O0FDQUEsMEU7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcclxuXHJcbmltcG9ydCBHb3ZlZSBmcm9tIFwiLi4vbm9kZS1nb3ZlZS1sZWQvaW5kZXhcIjtcclxuXHJcbmNvbnN0IExhbXAgPSBuZXcgR292ZWUoe1xyXG4gIGFwaUtleTogXCI4YTE3ZGExZi1jMWU5LTRhMWQtODI5NS02YjEzNjA1OTViYjZcIixcclxuICBtYWM6IFwiMWQ6ZTc6N2M6YTY6YjA6MTM6Yjg6ZTlcIixcclxuICBtb2RlbDogXCJINjAwM1wiLFxyXG59KTtcclxuXHJcbmNvbnN0IERlc2sgPSBuZXcgR292ZWUoe1xyXG4gIGFwaUtleTogXCI4YTE3ZGExZi1jMWU5LTRhMWQtODI5NS02YjEzNjA1OTViYjZcIixcclxuICBtYWM6IFwiNzU6YjU6N2M6YTY6YjA6MTM6YmE6OWVcIixcclxuICBtb2RlbDogXCJINjAwM1wiLFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIExhbXBCcmlnaHRuZXNzMTAwKCkge1xyXG4gIExhbXAuc2V0QnJpZ2h0bmVzcygxMDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBEZXNrQnJpZ2h0bmVzczEwMCgpIHtcclxuICBEZXNrLnNldEJyaWdodG5lc3MoMTAwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gTGFtcEJyaWdodG5lc3M3NSgpIHtcclxuICBMYW1wLnNldEJyaWdodG5lc3MoNzUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBEZXNrQnJpZ2h0bmVzczc1KCkge1xyXG4gIERlc2suc2V0QnJpZ2h0bmVzcyg3NSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIExhbXBCcmlnaHRuZXNzNTAoKSB7XHJcbiAgTGFtcC5zZXRCcmlnaHRuZXNzKDUwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gRGVza0JyaWdodG5lc3M1MCgpIHtcclxuICBEZXNrLnNldEJyaWdodG5lc3MoNTApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBMYW1wQnJpZ2h0bmVzczI1KCkge1xyXG4gIExhbXAuc2V0QnJpZ2h0bmVzcygyNSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIERlc2tCcmlnaHRuZXNzMjUoKSB7XHJcbiAgRGVzay5zZXRCcmlnaHRuZXNzKDI1KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEJyaWdodG5lc3M6IFJlYWN0LkZDPHt9PiA9ICh7fSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxoMT5CcmlnaHRuZXNzIENvbnRyb2w8L2gxPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgPGgzPkJyaWdodG5lc3MgMTAwJTwvaDM+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e0xhbXBCcmlnaHRuZXNzMTAwfSBjbGFzc05hbWU9e3N0eWxlcy5saWdodEJ1dHRvbn0+XHJcbiAgICAgICAgICAgIExhbXBcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtEZXNrQnJpZ2h0bmVzczEwMH0gY2xhc3NOYW1lPXtzdHlsZXMubGlnaHRCdXR0b259PlxyXG4gICAgICAgICAgICBEZXNrXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cclxuICAgICAgICAgIDxoMz5CcmlnaHRuZXNzIDc1JTwvaDM+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e0xhbXBCcmlnaHRuZXNzNzV9IGNsYXNzTmFtZT17c3R5bGVzLmxpZ2h0QnV0dG9ufT5cclxuICAgICAgICAgICAgTGFtcFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e0Rlc2tCcmlnaHRuZXNzNzV9IGNsYXNzTmFtZT17c3R5bGVzLmxpZ2h0QnV0dG9ufT5cclxuICAgICAgICAgICAgRGVza1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XHJcbiAgICAgICAgICA8aDM+QnJpZ2h0bmVzcyA1MCU8L2gzPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtMYW1wQnJpZ2h0bmVzczUwfSBjbGFzc05hbWU9e3N0eWxlcy5saWdodEJ1dHRvbn0+XHJcbiAgICAgICAgICAgIExhbXBcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtEZXNrQnJpZ2h0bmVzczUwfSBjbGFzc05hbWU9e3N0eWxlcy5saWdodEJ1dHRvbn0+XHJcbiAgICAgICAgICAgIERlc2tcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgPGgzPkJyaWdodG5lc3MgMjUlPC9oMz5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17TGFtcEJyaWdodG5lc3MyNX0gY2xhc3NOYW1lPXtzdHlsZXMubGlnaHRCdXR0b259PlxyXG4gICAgICAgICAgICBMYW1wXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17RGVza0JyaWdodG5lc3MyNX0gY2xhc3NOYW1lPXtzdHlsZXMubGlnaHRCdXR0b259PlxyXG4gICAgICAgICAgICBEZXNrXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcclxuXHJcbmltcG9ydCBHb3ZlZSBmcm9tIFwiLi4vbm9kZS1nb3ZlZS1sZWQvaW5kZXhcIjtcclxuXHJcbmNvbnN0IExhbXAgPSBuZXcgR292ZWUoe1xyXG4gIGFwaUtleTogXCI4YTE3ZGExZi1jMWU5LTRhMWQtODI5NS02YjEzNjA1OTViYjZcIixcclxuICBtYWM6IFwiMWQ6ZTc6N2M6YTY6YjA6MTM6Yjg6ZTlcIixcclxuICBtb2RlbDogXCJINjAwM1wiLFxyXG59KTtcclxuXHJcbmNvbnN0IERlc2sgPSBuZXcgR292ZWUoe1xyXG4gIGFwaUtleTogXCI4YTE3ZGExZi1jMWU5LTRhMWQtODI5NS02YjEzNjA1OTViYjZcIixcclxuICBtYWM6IFwiNzU6YjU6N2M6YTY6YjA6MTM6YmE6OWVcIixcclxuICBtb2RlbDogXCJINjAwM1wiLFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIExhbXBSZWQoKSB7XHJcbiAgTGFtcC5zZXRDb2xvcihcIiNmZjAwMDBcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIERlc2tSZWQoKSB7XHJcbiAgRGVzay5zZXRDb2xvcihcIiNmZjAwMDBcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIExhbXBHcmVlbigpIHtcclxuICBMYW1wLnNldENvbG9yKFwiIzAwZmYwMFwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gRGVza0dyZWVuKCkge1xyXG4gIERlc2suc2V0Q29sb3IoXCIjMDBmZjAwXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBMYW1wQmx1ZSgpIHtcclxuICBMYW1wLnNldENvbG9yKFwiIzAwMDBmZlwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gRGVza0JsdWUoKSB7XHJcbiAgRGVzay5zZXRDb2xvcihcIiMwMDAwZmZcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIExhbXBNYWdlbnRhKCkge1xyXG4gIExhbXAuc2V0Q29sb3IoXCIjZmYwMGZmXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBEZXNrTWFnZW50YSgpIHtcclxuICBEZXNrLnNldENvbG9yKFwiI2ZmMDBmZlwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gTGFtcFB1cnBsZSgpIHtcclxuICBMYW1wLnNldENvbG9yKFwiIzgwMDA4MFwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gRGVza1B1cnBsZSgpIHtcclxuICBEZXNrLnNldENvbG9yKFwiIzgwMDA4MFwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gTGFtcEFxdWEoKSB7XHJcbiAgTGFtcC5zZXRDb2xvcihcIiMwMGZmZmZcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIERlc2tBcXVhKCkge1xyXG4gIERlc2suc2V0Q29sb3IoXCIjMDBmZmZmXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBMYW1wTGlnaHRCbHVlKCkge1xyXG4gIExhbXAuc2V0Q29sb3IoXCIjMDA3MGYzXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBEZXNrTGlnaHRCbHVlKCkge1xyXG4gIERlc2suc2V0Q29sb3IoXCIjMDA3MGYzXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBMYW1wV2hpdGUoKSB7XHJcbiAgTGFtcC5zZXRDb2xvcihcIiNmZmZmZmZcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIERlc2tXaGl0ZSgpIHtcclxuICBEZXNrLnNldENvbG9yKFwiI2ZmZmZmZlwiKTtcclxufVxyXG5cclxuY29uc3QgQ29sb3JDaGFuZ2U6IFJlYWN0LkZDPHt9PiA9ICh7fSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxoMT5Db2xvciBDb250cm9sPC9oMT5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cclxuICAgICAgICAgIDxoMz5XaGl0ZTwvaDM+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e0xhbXBXaGl0ZX0gY2xhc3NOYW1lPXtzdHlsZXMubGlnaHRCdXR0b259PlxyXG4gICAgICAgICAgICBMYW1wXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17RGVza1doaXRlfSBjbGFzc05hbWU9e3N0eWxlcy5saWdodEJ1dHRvbn0+XHJcbiAgICAgICAgICAgIERlc2tcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgPGgzPlJlZDwvaDM+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e0xhbXBSZWR9IGNsYXNzTmFtZT17c3R5bGVzLmxpZ2h0QnV0dG9ufT5cclxuICAgICAgICAgICAgTGFtcFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e0Rlc2tSZWR9IGNsYXNzTmFtZT17c3R5bGVzLmxpZ2h0QnV0dG9ufT5cclxuICAgICAgICAgICAgRGVza1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XHJcbiAgICAgICAgICA8aDM+R3JlZW48L2gzPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtMYW1wR3JlZW59IGNsYXNzTmFtZT17c3R5bGVzLmxpZ2h0QnV0dG9ufT5cclxuICAgICAgICAgICAgTGFtcFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e0Rlc2tXaGl0ZX0gY2xhc3NOYW1lPXtzdHlsZXMubGlnaHRCdXR0b259PlxyXG4gICAgICAgICAgICBEZXNrXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cclxuICAgICAgICAgIDxoMz5CbHVlPC9oMz5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17TGFtcEJsdWV9IGNsYXNzTmFtZT17c3R5bGVzLmxpZ2h0QnV0dG9ufT5cclxuICAgICAgICAgICAgTGFtcFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e0Rlc2tCbHVlfSBjbGFzc05hbWU9e3N0eWxlcy5saWdodEJ1dHRvbn0+XHJcbiAgICAgICAgICAgIERlc2tcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgPGgzPk1hZ2VudGE8L2gzPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtMYW1wTWFnZW50YX0gY2xhc3NOYW1lPXtzdHlsZXMubGlnaHRCdXR0b259PlxyXG4gICAgICAgICAgICBMYW1wXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17RGVza01hZ2VudGF9IGNsYXNzTmFtZT17c3R5bGVzLmxpZ2h0QnV0dG9ufT5cclxuICAgICAgICAgICAgRGVza1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XHJcbiAgICAgICAgICA8aDM+UHVycGxlPC9oMz5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17TGFtcFB1cnBsZX0gY2xhc3NOYW1lPXtzdHlsZXMubGlnaHRCdXR0b259PlxyXG4gICAgICAgICAgICBMYW1wXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17RGVza1B1cnBsZX0gY2xhc3NOYW1lPXtzdHlsZXMubGlnaHRCdXR0b259PlxyXG4gICAgICAgICAgICBEZXNrXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cclxuICAgICAgICAgIDxoMz5BcXVhPC9oMz5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17TGFtcEFxdWF9IGNsYXNzTmFtZT17c3R5bGVzLmxpZ2h0QnV0dG9ufT5cclxuICAgICAgICAgICAgTGFtcFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e0Rlc2tBcXVhfSBjbGFzc05hbWU9e3N0eWxlcy5saWdodEJ1dHRvbn0+XHJcbiAgICAgICAgICAgIERlc2tcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgPGgzPkxpZ2h0IEJsdWU8L2gzPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtMYW1wTGlnaHRCbHVlfSBjbGFzc05hbWU9e3N0eWxlcy5saWdodEJ1dHRvbn0+XHJcbiAgICAgICAgICAgIExhbXBcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtEZXNrTGlnaHRCbHVlfSBjbGFzc05hbWU9e3N0eWxlcy5saWdodEJ1dHRvbn0+XHJcbiAgICAgICAgICAgIERlc2tcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb2xvckNoYW5nZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XHJcblxyXG5pbXBvcnQgR292ZWUgZnJvbSBcIi4uL25vZGUtZ292ZWUtbGVkL2luZGV4XCI7XHJcblxyXG5jb25zdCBMYW1wID0gbmV3IEdvdmVlKHtcclxuICBhcGlLZXk6IFwiOGExN2RhMWYtYzFlOS00YTFkLTgyOTUtNmIxMzYwNTk1YmI2XCIsXHJcbiAgbWFjOiBcIjFkOmU3OjdjOmE2OmIwOjEzOmI4OmU5XCIsXHJcbiAgbW9kZWw6IFwiSDYwMDNcIixcclxufSk7XHJcblxyXG5jb25zdCBEZXNrID0gbmV3IEdvdmVlKHtcclxuICBhcGlLZXk6IFwiOGExN2RhMWYtYzFlOS00YTFkLTgyOTUtNmIxMzYwNTk1YmI2XCIsXHJcbiAgbWFjOiBcIjc1OmI1OjdjOmE2OmIwOjEzOmJhOjllXCIsXHJcbiAgbW9kZWw6IFwiSDYwMDNcIixcclxufSk7XHJcblxyXG5mdW5jdGlvbiBMYW1wVGVtcDkwMDAoKSB7XHJcbiAgTGFtcC5zZXRDb2xvclRlbXBlcmF0dXJlKDkwMDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBEZXNrVGVtcDkwMDAoKSB7XHJcbiAgRGVzay5zZXRDb2xvclRlbXBlcmF0dXJlKDkwMDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBMYW1wVGVtcDgwMDAoKSB7XHJcbiAgTGFtcC5zZXRDb2xvclRlbXBlcmF0dXJlKDgwMDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBEZXNrVGVtcDgwMDAoKSB7XHJcbiAgRGVzay5zZXRDb2xvclRlbXBlcmF0dXJlKDgwMDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBMYW1wVGVtcDcwMDAoKSB7XHJcbiAgTGFtcC5zZXRDb2xvclRlbXBlcmF0dXJlKDcwMDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBEZXNrVGVtcDcwMDAoKSB7XHJcbiAgRGVzay5zZXRDb2xvclRlbXBlcmF0dXJlKDcwMDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBMYW1wVGVtcDYwMDAoKSB7XHJcbiAgTGFtcC5zZXRDb2xvclRlbXBlcmF0dXJlKDYwMDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBEZXNrVGVtcDYwMDAoKSB7XHJcbiAgRGVzay5zZXRDb2xvclRlbXBlcmF0dXJlKDYwMDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBMYW1wVGVtcDUwMDAoKSB7XHJcbiAgTGFtcC5zZXRDb2xvclRlbXBlcmF0dXJlKDUwMDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBEZXNrVGVtcDUwMDAoKSB7XHJcbiAgRGVzay5zZXRDb2xvclRlbXBlcmF0dXJlKDUwMDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBMYW1wVGVtcDQwMDAoKSB7XHJcbiAgTGFtcC5zZXRDb2xvclRlbXBlcmF0dXJlKDQwMDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBEZXNrVGVtcDQwMDAoKSB7XHJcbiAgRGVzay5zZXRDb2xvclRlbXBlcmF0dXJlKDQwMDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBMYW1wVGVtcDMwMDAoKSB7XHJcbiAgTGFtcC5zZXRDb2xvclRlbXBlcmF0dXJlKDMwMDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBEZXNrVGVtcDMwMDAoKSB7XHJcbiAgRGVzay5zZXRDb2xvclRlbXBlcmF0dXJlKDMwMDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBMYW1wVGVtcDIwMDAoKSB7XHJcbiAgTGFtcC5zZXRDb2xvclRlbXBlcmF0dXJlKDIwMDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBEZXNrVGVtcDIwMDAoKSB7XHJcbiAgRGVzay5zZXRDb2xvclRlbXBlcmF0dXJlKDIwMDApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVGVtcDogUmVhY3QuRkM8e30+ID0gKHt9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGgxPlRlbXBlcmF0dXJlIENvbnRyb2w8L2gxPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgPGgzPlRlbXAgOTAwMDwvaDM+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e0xhbXBUZW1wOTAwMH0gY2xhc3NOYW1lPXtzdHlsZXMubGlnaHRCdXR0b259PlxyXG4gICAgICAgICAgICBMYW1wXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17RGVza1RlbXA5MDAwfSBjbGFzc05hbWU9e3N0eWxlcy5saWdodEJ1dHRvbn0+XHJcbiAgICAgICAgICAgIERlc2tcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgPGgzPlRlbXAgODAwMDwvaDM+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e0xhbXBUZW1wODAwMH0gY2xhc3NOYW1lPXtzdHlsZXMubGlnaHRCdXR0b259PlxyXG4gICAgICAgICAgICBMYW1wXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17RGVza1RlbXA4MDAwfSBjbGFzc05hbWU9e3N0eWxlcy5saWdodEJ1dHRvbn0+XHJcbiAgICAgICAgICAgIERlc2tcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgPGgzPlRlbXAgNzAwMDwvaDM+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e0xhbXBUZW1wNzAwMH0gY2xhc3NOYW1lPXtzdHlsZXMubGlnaHRCdXR0b259PlxyXG4gICAgICAgICAgICBMYW1wXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17RGVza1RlbXA3MDAwfSBjbGFzc05hbWU9e3N0eWxlcy5saWdodEJ1dHRvbn0+XHJcbiAgICAgICAgICAgIERlc2tcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgPGgzPlRlbXAgNjAwMDwvaDM+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e0xhbXBUZW1wNjAwMH0gY2xhc3NOYW1lPXtzdHlsZXMubGlnaHRCdXR0b259PlxyXG4gICAgICAgICAgICBMYW1wXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17RGVza1RlbXA2MDAwfSBjbGFzc05hbWU9e3N0eWxlcy5saWdodEJ1dHRvbn0+XHJcbiAgICAgICAgICAgIERlc2tcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgPGgzPlRlbXAgNTAwMDwvaDM+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e0xhbXBUZW1wNTAwMH0gY2xhc3NOYW1lPXtzdHlsZXMubGlnaHRCdXR0b259PlxyXG4gICAgICAgICAgICBMYW1wXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17RGVza1RlbXA1MDAwfSBjbGFzc05hbWU9e3N0eWxlcy5saWdodEJ1dHRvbn0+XHJcbiAgICAgICAgICAgIERlc2tcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgPGgzPlRlbXAgNDAwMDwvaDM+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e0xhbXBUZW1wNDAwMH0gY2xhc3NOYW1lPXtzdHlsZXMubGlnaHRCdXR0b259PlxyXG4gICAgICAgICAgICBMYW1wXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17RGVza1RlbXA0MDAwfSBjbGFzc05hbWU9e3N0eWxlcy5saWdodEJ1dHRvbn0+XHJcbiAgICAgICAgICAgIERlc2tcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgPGgzPlRlbXAgMzAwMDwvaDM+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e0xhbXBUZW1wMzAwMH0gY2xhc3NOYW1lPXtzdHlsZXMubGlnaHRCdXR0b259PlxyXG4gICAgICAgICAgICBMYW1wXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17RGVza1RlbXAzMDAwfSBjbGFzc05hbWU9e3N0eWxlcy5saWdodEJ1dHRvbn0+XHJcbiAgICAgICAgICAgIERlc2tcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgPGgzPlRlbXAgMjAwMDwvaDM+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e0xhbXBUZW1wMjAwMH0gY2xhc3NOYW1lPXtzdHlsZXMubGlnaHRCdXR0b259PlxyXG4gICAgICAgICAgICBMYW1wXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17RGVza1RlbXAyMDAwfSBjbGFzc05hbWU9e3N0eWxlcy5saWdodEJ1dHRvbn0+XHJcbiAgICAgICAgICAgIERlc2tcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiIsImNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcclxuXHJcbmNsYXNzIEdvdmVlTEVEIHtcclxuXHRjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuXHRcdHRoaXMuYXBpS2V5ID0gY29uZmlnLmFwaUtleVxyXG5cdFx0dGhpcy5tYWMgPSBjb25maWcubWFjXHJcblx0XHR0aGlzLm1vZGVsID0gY29uZmlnLm1vZGVsXHJcblx0XHR0aGlzLmJhc2VQYXRoID0gXCJodHRwczovL2RldmVsb3Blci1hcGkuZ292ZWUuY29tL3YxL2RldmljZXNcIlxyXG5cdH1cclxuXHJcblx0cmVxdWVzdChlbmRwb2ludCwgcmVxRGF0YSwgbWV0aG9kKSB7XHJcblxyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKCAoIHJlc29sdmUsIHJlamVjdCApID0+IHtcclxuXHJcblx0XHRcdGlmICh0aGlzLm1hYyA9PT0gXCJcIikgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoXCJObyBNQUMgQWRkcmVzcyBwcm92aWRlZC5cIikpO1xyXG5cdFx0XHRpZiAodGhpcy5tb2RlbCA9PT0gXCJcIikgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoXCJObyBNb2RlbCBwcm92aWRlZC5cIikpO1xyXG5cclxuXHRcdFx0bGV0IHJlcVVSTCA9IHRoaXMuYmFzZVBhdGggKyBlbmRwb2ludDtcclxuXHJcblx0XHRcdHZhciBkYXRhID0gSlNPTi5zdHJpbmdpZnkocmVxRGF0YSk7XHJcblxyXG5cdFx0XHR2YXIgY29uZmlnID0ge1xyXG5cdFx0XHRcdG1ldGhvZDogbWV0aG9kLFxyXG5cdFx0XHRcdHVybDogcmVxVVJMLFxyXG5cdFx0XHRcdGhlYWRlcnM6IHsgXHJcblx0XHRcdFx0XHQnR292ZWUtQVBJLUtleSc6IHRoaXMuYXBpS2V5LCBcclxuXHRcdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGRhdGE6IGRhdGFcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdGF4aW9zKGNvbmZpZylcclxuXHRcdFx0LnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblx0XHRcdFx0cmVzb2x2ZShyZXNwb25zZS5kYXRhKTtcclxuXHRcdFx0fSlcclxuXHRcdFx0LmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG5cdFx0XHRcdHJlamVjdChlcnJvcik7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRzZXRDb2xvcihoZXhDb2RlKSB7XHJcblx0XHR2YXIgcmVnZXggPSAvXiMoWzAtOUEtRl17M30pezEsMn0kL2k7XHJcblx0XHRpZiAoIXJlZ2V4LnRlc3QoaGV4Q29kZSkpIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgSGV4IENvbG9yIENvZGVcIik7XHJcblx0XHRcclxuXHRcdGZ1bmN0aW9uIGhleDJyZ2IoaGV4KSB7XHJcblx0XHRcdHZhciBzaG9ydGhhbmRSZWdleCA9IC9eIz8oW2EtZlxcZF0pKFthLWZcXGRdKShbYS1mXFxkXSkkL2k7XHJcblx0XHRcdGhleCA9IGhleC5yZXBsYWNlKHNob3J0aGFuZFJlZ2V4LCBmdW5jdGlvbihtLCByLCBnLCBiKSB7XHJcblx0XHRcdFx0cmV0dXJuIHIgKyByICsgZyArIGcgKyBiICsgYjtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHR2YXIgcmVzdWx0ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleCk7XHJcblx0XHRcdHJldHVybiByZXN1bHQgPyB7XHJcblx0XHRcdFx0cjogcGFyc2VJbnQocmVzdWx0WzFdLCAxNiksXHJcblx0XHRcdFx0ZzogcGFyc2VJbnQocmVzdWx0WzJdLCAxNiksXHJcblx0XHRcdFx0YjogcGFyc2VJbnQocmVzdWx0WzNdLCAxNilcclxuXHRcdFx0fSA6IG51bGw7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHZhciBSR0Jjb252ID0gaGV4MnJnYihoZXhDb2RlKTtcclxuXHRcdHZhciByZXFEYXRhID0ge1xyXG5cdFx0ICAgIFwiZGV2aWNlXCI6IHRoaXMubWFjLFxyXG5cdFx0ICAgIFwibW9kZWxcIjogdGhpcy5tb2RlbCxcclxuXHRcdCAgICBcImNtZFwiOiB7XHJcblx0XHQgICAgICAgIFwibmFtZVwiOiBcImNvbG9yXCIsXHJcblx0XHQgICAgICAgIFwidmFsdWVcIjoge1xyXG5cdFx0ICAgICAgICAgICAgXCJyXCI6IFJHQmNvbnYucixcclxuXHRcdCAgICAgICAgICAgIFwiZ1wiOiBSR0Jjb252LmcsXHJcblx0XHQgICAgICAgICAgICBcImJcIjogUkdCY29udi5iXHJcblx0XHQgICAgICAgIH1cclxuXHRcdCAgICB9XHJcblx0XHR9O1xyXG5cdFx0dmFyIGVuZHBvaW50ID0gJy9jb250cm9sJztcclxuXHRcdHJldHVybiB0aGlzLnJlcXVlc3QoZW5kcG9pbnQsIHJlcURhdGEsIFwicHV0XCIpO1xyXG5cdH1cclxuXHJcblx0c2V0QnJpZ2h0bmVzcyhicmlnaHRuZXNzTGV2ZWwpIHtcclxuXHRcdGlmICghTnVtYmVyLmlzSW50ZWdlcihicmlnaHRuZXNzTGV2ZWwpKSB0aHJvdyBuZXcgRXJyb3IoXCJCcmlnaHRuZXNzIExldmVsIFByb3ZpZGVkIGlzIE5vdCBBIE51bWJlclwiKTtcclxuXHRcdGlmIChicmlnaHRuZXNzTGV2ZWwgPiAxMDApIHRocm93IG5ldyBFcnJvcihcIkJyaWdodG5lc3MgTGV2ZWwgUHJvdmlkZWQgaXMgTm90IEZyb20gMS0xMDBcIik7XHJcblx0XHRpZiAoYnJpZ2h0bmVzc0xldmVsIDwgMSkgdGhyb3cgbmV3IEVycm9yKFwiQnJpZ2h0bmVzcyBMZXZlbCBQcm92aWRlZCBpcyBOb3QgRnJvbSAxLTEwMFwiKTtcclxuXHRcdHZhciByZXFEYXRhID0ge1xyXG5cdFx0ICAgIFwiZGV2aWNlXCI6IHRoaXMubWFjLFxyXG5cdFx0ICAgIFwibW9kZWxcIjogdGhpcy5tb2RlbCxcclxuXHRcdCAgICBcImNtZFwiOiB7XHJcblx0XHQgICAgICAgIFwibmFtZVwiOiBcImJyaWdodG5lc3NcIixcclxuXHRcdCAgICAgICAgXCJ2YWx1ZVwiOiBicmlnaHRuZXNzTGV2ZWxcclxuXHRcdCAgICB9XHJcblx0XHR9O1xyXG5cdFx0dmFyIGVuZHBvaW50ID0gJy9jb250cm9sJztcclxuXHRcdHJldHVybiB0aGlzLnJlcXVlc3QoZW5kcG9pbnQsIHJlcURhdGEsIFwicHV0XCIpO1xyXG5cdH1cclxuXHJcblx0c2V0Q29sb3JUZW1wZXJhdHVyZSh0ZW1wZXJhdHVyZUxldmVsKSB7XHJcblx0XHRpZiAoIU51bWJlci5pc0ludGVnZXIodGVtcGVyYXR1cmVMZXZlbCkpIHRocm93IG5ldyBFcnJvcihcIlRlbXBlcmF0dXJlIExldmVsIFByb3ZpZGVkIGlzIE5vdCBBIE51bWJlclwiKTtcclxuXHRcdGlmICh0ZW1wZXJhdHVyZUxldmVsID4gOTAwMCkgdGhyb3cgbmV3IEVycm9yKFwiVGVtcGVyYXR1cmUgTGV2ZWwgUHJvdmlkZWQgaXMgTm90IEZyb20gMjAwMC05MDAwXCIpO1xyXG5cdFx0aWYgKHRlbXBlcmF0dXJlTGV2ZWwgPCAyMDAwKSB0aHJvdyBuZXcgRXJyb3IoXCJUZW1wZXJhdHVyZSBMZXZlbCBQcm92aWRlZCBpcyBOb3QgRnJvbSAyMDAwLTkwMDBcIik7XHJcblx0XHR2YXIgcmVxRGF0YSA9IHtcclxuXHRcdCAgICBcImRldmljZVwiOiB0aGlzLm1hYyxcclxuXHRcdCAgICBcIm1vZGVsXCI6IHRoaXMubW9kZWwsXHJcblx0XHQgICAgXCJjbWRcIjoge1xyXG5cdFx0XHRcdFwibmFtZVwiOiBcImNvbG9yVGVtXCIsXHJcblx0XHRcdFx0XCJ2YWx1ZVwiOiB0ZW1wZXJhdHVyZUxldmVsXHJcblx0XHQgICAgfVxyXG5cdFx0fTtcclxuXHRcdHZhciBlbmRwb2ludCA9ICcvY29udHJvbCc7XHJcblx0XHRyZXR1cm4gdGhpcy5yZXF1ZXN0KGVuZHBvaW50LCByZXFEYXRhLCBcInB1dFwiKTtcclxuXHR9XHJcblxyXG5cdHR1cm5PbigpIHtcclxuXHRcdHZhciByZXFEYXRhID0ge1xyXG5cdFx0ICAgIFwiZGV2aWNlXCI6IHRoaXMubWFjLFxyXG5cdFx0ICAgIFwibW9kZWxcIjogdGhpcy5tb2RlbCxcclxuXHRcdCAgICBcImNtZFwiOiB7XHJcblx0XHQgICAgICAgIFwibmFtZVwiOiBcInR1cm5cIixcclxuXHRcdCAgICAgICAgXCJ2YWx1ZVwiOiBcIm9uXCJcclxuXHRcdCAgICB9XHJcblx0XHR9O1xyXG5cdFx0dmFyIGVuZHBvaW50ID0gJy9jb250cm9sJztcclxuXHRcdHJldHVybiB0aGlzLnJlcXVlc3QoZW5kcG9pbnQsIHJlcURhdGEsIFwicHV0XCIpO1xyXG5cdH1cclxuXHJcblx0dHVybk9mZigpIHtcclxuXHRcdHZhciByZXFEYXRhID0ge1xyXG5cdFx0ICAgIFwiZGV2aWNlXCI6IHRoaXMubWFjLFxyXG5cdFx0ICAgIFwibW9kZWxcIjogdGhpcy5tb2RlbCxcclxuXHRcdCAgICBcImNtZFwiOiB7XHJcblx0XHQgICAgICAgIFwibmFtZVwiOiBcInR1cm5cIixcclxuXHRcdCAgICAgICAgXCJ2YWx1ZVwiOiBcIm9mZlwiXHJcblx0XHQgICAgfVxyXG5cdFx0fTtcclxuXHRcdHZhciBlbmRwb2ludCA9ICcvY29udHJvbCc7XHJcblx0XHRyZXR1cm4gdGhpcy5yZXF1ZXN0KGVuZHBvaW50LCByZXFEYXRhLCBcInB1dFwiKTtcclxuXHR9XHJcblxyXG5cdGdldFN0YXRlKCkge1xyXG5cdFx0dmFyIHJlcURhdGEgPSB7fTtcclxuXHRcdHZhciBlbmRwb2ludCA9IGAvc3RhdGU/ZGV2aWNlPSR7dGhpcy5tYWN9Jm1vZGVsPSR7dGhpcy5tb2RlbH1gO1xyXG5cdFx0cmV0dXJuIHRoaXMucmVxdWVzdChlbmRwb2ludCwgcmVxRGF0YSwgXCJnZXRcIik7XHJcblx0fVxyXG5cclxuXHRhc3luYyBnZXREZXZpY2VzKCkge1xyXG5cdFx0dmFyIHJlcURhdGEgPSB7fTtcclxuXHRcdHZhciBlbmRwb2ludCA9IGBgO1xyXG5cdFx0bGV0IHJlcVVSTCA9IHRoaXMuYmFzZVBhdGggKyBlbmRwb2ludDtcclxuXHJcblx0XHR2YXIgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHJlcURhdGEpO1xyXG5cclxuXHRcdHZhciBjb25maWcgPSB7XHJcblx0XHRcdG1ldGhvZDogXCJnZXRcIixcclxuXHRcdFx0dXJsOiByZXFVUkwsXHJcblx0XHRcdGhlYWRlcnM6IHsgXHJcblx0XHRcdFx0J0dvdmVlLUFQSS1LZXknOiB0aGlzLmFwaUtleSwgXHJcblx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRkYXRhOiBkYXRhXHJcblx0XHR9O1xyXG5cclxuXHRcdGxldCByZXNEYXRhO1xyXG5cclxuXHRcdGF3YWl0IGF4aW9zKGNvbmZpZylcclxuXHRcdC50aGVuKGFzeW5jIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cdFx0XHRyZXNEYXRhID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGVycm9yKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHJldHVybiByZXNEYXRhO1xyXG5cdH1cclxuXHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEdvdmVlTEVEOyIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9SW1hZ2U7dmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIikpO3ZhciBfZXh0ZW5kczI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX2hlYWQ9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL2hlYWRcIikpO3ZhciBfdG9CYXNlPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NFwiKTt2YXIgX2ltYWdlQ29uZmlnPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnXCIpO3ZhciBfdXNlSW50ZXJzZWN0aW9uPXJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7aWYodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnKXs7Z2xvYmFsLl9fTkVYVF9JTUFHRV9JTVBPUlRFRD10cnVlO31jb25zdCBWQUxJRF9MT0FESU5HX1ZBTFVFUz1bJ2xhenknLCdlYWdlcicsdW5kZWZpbmVkXTtjb25zdCBsb2FkZXJzPW5ldyBNYXAoW1snaW1naXgnLGltZ2l4TG9hZGVyXSxbJ2Nsb3VkaW5hcnknLGNsb3VkaW5hcnlMb2FkZXJdLFsnYWthbWFpJyxha2FtYWlMb2FkZXJdLFsnZGVmYXVsdCcsZGVmYXVsdExvYWRlcl1dKTtjb25zdCBWQUxJRF9MQVlPVVRfVkFMVUVTPVsnZmlsbCcsJ2ZpeGVkJywnaW50cmluc2ljJywncmVzcG9uc2l2ZScsdW5kZWZpbmVkXTtmdW5jdGlvbiBpc1N0YXRpY1JlcXVpcmUoc3JjKXtyZXR1cm4gc3JjLmRlZmF1bHQhPT11bmRlZmluZWQ7fWZ1bmN0aW9uIGlzU3RhdGljSW1hZ2VEYXRhKHNyYyl7cmV0dXJuIHNyYy5zcmMhPT11bmRlZmluZWQ7fWZ1bmN0aW9uIGlzU3RhdGljSW1wb3J0KHNyYyl7cmV0dXJuIHR5cGVvZiBzcmM9PT0nb2JqZWN0JyYmKGlzU3RhdGljUmVxdWlyZShzcmMpfHxpc1N0YXRpY0ltYWdlRGF0YShzcmMpKTt9Y29uc3R7ZGV2aWNlU2l6ZXM6Y29uZmlnRGV2aWNlU2l6ZXMsaW1hZ2VTaXplczpjb25maWdJbWFnZVNpemVzLGxvYWRlcjpjb25maWdMb2FkZXIscGF0aDpjb25maWdQYXRoLGRvbWFpbnM6Y29uZmlnRG9tYWluc309cHJvY2Vzcy5lbnYuX19ORVhUX0lNQUdFX09QVFN8fF9pbWFnZUNvbmZpZy5pbWFnZUNvbmZpZ0RlZmF1bHQ7Ly8gc29ydCBzbWFsbGVzdCB0byBsYXJnZXN0XG5jb25zdCBhbGxTaXplcz1bLi4uY29uZmlnRGV2aWNlU2l6ZXMsLi4uY29uZmlnSW1hZ2VTaXplc107Y29uZmlnRGV2aWNlU2l6ZXMuc29ydCgoYSxiKT0+YS1iKTthbGxTaXplcy5zb3J0KChhLGIpPT5hLWIpO2Z1bmN0aW9uIGdldFdpZHRocyh3aWR0aCxsYXlvdXQsc2l6ZXMpe2lmKHNpemVzJiYobGF5b3V0PT09J2ZpbGwnfHxsYXlvdXQ9PT0ncmVzcG9uc2l2ZScpKXsvLyBGaW5kIGFsbCB0aGUgXCJ2d1wiIHBlcmNlbnQgc2l6ZXMgdXNlZCBpbiB0aGUgc2l6ZXMgcHJvcFxuY29uc3Qgdmlld3BvcnRXaWR0aFJlPS8oXnxcXHMpKDE/XFxkP1xcZCl2dy9nO2NvbnN0IHBlcmNlbnRTaXplcz1bXTtmb3IobGV0IG1hdGNoO21hdGNoPXZpZXdwb3J0V2lkdGhSZS5leGVjKHNpemVzKTttYXRjaCl7cGVyY2VudFNpemVzLnB1c2gocGFyc2VJbnQobWF0Y2hbMl0pKTt9aWYocGVyY2VudFNpemVzLmxlbmd0aCl7Y29uc3Qgc21hbGxlc3RSYXRpbz1NYXRoLm1pbiguLi5wZXJjZW50U2l6ZXMpKjAuMDE7cmV0dXJue3dpZHRoczphbGxTaXplcy5maWx0ZXIocz0+cz49Y29uZmlnRGV2aWNlU2l6ZXNbMF0qc21hbGxlc3RSYXRpbyksa2luZDondyd9O31yZXR1cm57d2lkdGhzOmFsbFNpemVzLGtpbmQ6J3cnfTt9aWYodHlwZW9mIHdpZHRoIT09J251bWJlcid8fGxheW91dD09PSdmaWxsJ3x8bGF5b3V0PT09J3Jlc3BvbnNpdmUnKXtyZXR1cm57d2lkdGhzOmNvbmZpZ0RldmljZVNpemVzLGtpbmQ6J3cnfTt9Y29uc3Qgd2lkdGhzPVsuLi5uZXcgU2V0KC8vID4gVGhpcyBtZWFucyB0aGF0IG1vc3QgT0xFRCBzY3JlZW5zIHRoYXQgc2F5IHRoZXkgYXJlIDN4IHJlc29sdXRpb24sXG4vLyA+IGFyZSBhY3R1YWxseSAzeCBpbiB0aGUgZ3JlZW4gY29sb3IsIGJ1dCBvbmx5IDEuNXggaW4gdGhlIHJlZCBhbmRcbi8vID4gYmx1ZSBjb2xvcnMuIFNob3dpbmcgYSAzeCByZXNvbHV0aW9uIGltYWdlIGluIHRoZSBhcHAgdnMgYSAyeFxuLy8gPiByZXNvbHV0aW9uIGltYWdlIHdpbGwgYmUgdmlzdWFsbHkgdGhlIHNhbWUsIHRob3VnaCB0aGUgM3ggaW1hZ2Vcbi8vID4gdGFrZXMgc2lnbmlmaWNhbnRseSBtb3JlIGRhdGEuIEV2ZW4gdHJ1ZSAzeCByZXNvbHV0aW9uIHNjcmVlbnMgYXJlXG4vLyA+IHdhc3RlZnVsIGFzIHRoZSBodW1hbiBleWUgY2Fubm90IHNlZSB0aGF0IGxldmVsIG9mIGRldGFpbCB3aXRob3V0XG4vLyA+IHNvbWV0aGluZyBsaWtlIGEgbWFnbmlmeWluZyBnbGFzcy5cbi8vIGh0dHBzOi8vYmxvZy50d2l0dGVyLmNvbS9lbmdpbmVlcmluZy9lbl91cy90b3BpY3MvaW5mcmFzdHJ1Y3R1cmUvMjAxOS9jYXBwaW5nLWltYWdlLWZpZGVsaXR5LW9uLXVsdHJhLWhpZ2gtcmVzb2x1dGlvbi1kZXZpY2VzLmh0bWxcblt3aWR0aCx3aWR0aCoyLyosIHdpZHRoICogMyovXS5tYXAodz0+YWxsU2l6ZXMuZmluZChwPT5wPj13KXx8YWxsU2l6ZXNbYWxsU2l6ZXMubGVuZ3RoLTFdKSldO3JldHVybnt3aWR0aHMsa2luZDoneCd9O31mdW5jdGlvbiBnZW5lcmF0ZUltZ0F0dHJzKHtzcmMsdW5vcHRpbWl6ZWQsbGF5b3V0LHdpZHRoLHF1YWxpdHksc2l6ZXMsbG9hZGVyfSl7aWYodW5vcHRpbWl6ZWQpe3JldHVybntzcmMsc3JjU2V0OnVuZGVmaW5lZCxzaXplczp1bmRlZmluZWR9O31jb25zdHt3aWR0aHMsa2luZH09Z2V0V2lkdGhzKHdpZHRoLGxheW91dCxzaXplcyk7Y29uc3QgbGFzdD13aWR0aHMubGVuZ3RoLTE7cmV0dXJue3NpemVzOiFzaXplcyYma2luZD09PSd3Jz8nMTAwdncnOnNpemVzLHNyY1NldDp3aWR0aHMubWFwKCh3LGkpPT5gJHtsb2FkZXIoe3NyYyxxdWFsaXR5LHdpZHRoOnd9KX0gJHtraW5kPT09J3cnP3c6aSsxfSR7a2luZH1gKS5qb2luKCcsICcpLC8vIEl0J3MgaW50ZW5kZWQgdG8ga2VlcCBgc3JjYCB0aGUgbGFzdCBhdHRyaWJ1dGUgYmVjYXVzZSBSZWFjdCB1cGRhdGVzXG4vLyBhdHRyaWJ1dGVzIGluIG9yZGVyLiBJZiB3ZSBrZWVwIGBzcmNgIHRoZSBmaXJzdCBvbmUsIFNhZmFyaSB3aWxsXG4vLyBpbW1lZGlhdGVseSBzdGFydCB0byBmZXRjaCBgc3JjYCwgYmVmb3JlIGBzaXplc2AgYW5kIGBzcmNTZXRgIGFyZSBldmVuXG4vLyB1cGRhdGVkIGJ5IFJlYWN0LiBUaGF0IGNhdXNlcyBtdWx0aXBsZSB1bm5lY2Vzc2FyeSByZXF1ZXN0cyBpZiBgc3JjU2V0YFxuLy8gYW5kIGBzaXplc2AgYXJlIGRlZmluZWQuXG4vLyBUaGlzIGJ1ZyBjYW5ub3QgYmUgcmVwcm9kdWNlZCBpbiBDaHJvbWUgb3IgRmlyZWZveC5cbnNyYzpsb2FkZXIoe3NyYyxxdWFsaXR5LHdpZHRoOndpZHRoc1tsYXN0XX0pfTt9ZnVuY3Rpb24gZ2V0SW50KHgpe2lmKHR5cGVvZiB4PT09J251bWJlcicpe3JldHVybiB4O31pZih0eXBlb2YgeD09PSdzdHJpbmcnKXtyZXR1cm4gcGFyc2VJbnQoeCwxMCk7fXJldHVybiB1bmRlZmluZWQ7fWZ1bmN0aW9uIGRlZmF1bHRJbWFnZUxvYWRlcihsb2FkZXJQcm9wcyl7Y29uc3QgbG9hZD1sb2FkZXJzLmdldChjb25maWdMb2FkZXIpO2lmKGxvYWQpe3JldHVybiBsb2FkKCgwLF9leHRlbmRzMi5kZWZhdWx0KSh7cm9vdDpjb25maWdQYXRofSxsb2FkZXJQcm9wcykpO310aHJvdyBuZXcgRXJyb3IoYFVua25vd24gXCJsb2FkZXJcIiBmb3VuZCBpbiBcIm5leHQuY29uZmlnLmpzXCIuIEV4cGVjdGVkOiAke19pbWFnZUNvbmZpZy5WQUxJRF9MT0FERVJTLmpvaW4oJywgJyl9LiBSZWNlaXZlZDogJHtjb25maWdMb2FkZXJ9YCk7fS8vIFNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3EvMzk3Nzc4MzMvMjY2NTM1IGZvciB3aHkgd2UgdXNlIHRoaXMgcmVmXG4vLyBoYW5kbGVyIGluc3RlYWQgb2YgdGhlIGltZydzIG9uTG9hZCBhdHRyaWJ1dGUuXG5mdW5jdGlvbiByZW1vdmVQbGFjZWhvbGRlcihpbWcscGxhY2Vob2xkZXIpe2lmKHBsYWNlaG9sZGVyPT09J2JsdXInJiZpbWcpe2NvbnN0IGhhbmRsZUxvYWQ9KCk9PntpZighaW1nLnNyYy5zdGFydHNXaXRoKCdkYXRhOicpKXtjb25zdCBwPSdkZWNvZGUnaW4gaW1nP2ltZy5kZWNvZGUoKTpQcm9taXNlLnJlc29sdmUoKTtwLmNhdGNoKCgpPT57fSkudGhlbigoKT0+e2ltZy5zdHlsZS5maWx0ZXI9J25vbmUnO2ltZy5zdHlsZS5iYWNrZ3JvdW5kU2l6ZT0nbm9uZSc7aW1nLnN0eWxlLmJhY2tncm91bmRJbWFnZT0nbm9uZSc7fSk7fX07aWYoaW1nLmNvbXBsZXRlKXsvLyBJZiB0aGUgcmVhbCBpbWFnZSBmYWlscyB0byBsb2FkLCB0aGlzIHdpbGwgc3RpbGwgcmVtb3ZlIHRoZSBwbGFjZWhvbGRlci5cbi8vIFRoaXMgaXMgdGhlIGRlc2lyZWQgYmVoYXZpb3IgZm9yIG5vdywgYW5kIHdpbGwgYmUgcmV2aXNpdGVkIHdoZW4gZXJyb3Jcbi8vIGhhbmRsaW5nIGlzIHdvcmtlZCBvbiBmb3IgdGhlIGltYWdlIGNvbXBvbmVudCBpdHNlbGYuXG5oYW5kbGVMb2FkKCk7fWVsc2V7aW1nLm9ubG9hZD1oYW5kbGVMb2FkO319fWZ1bmN0aW9uIEltYWdlKF9yZWYpe2xldHtzcmMsc2l6ZXMsdW5vcHRpbWl6ZWQ9ZmFsc2UscHJpb3JpdHk9ZmFsc2UsbG9hZGluZyxjbGFzc05hbWUscXVhbGl0eSx3aWR0aCxoZWlnaHQsb2JqZWN0Rml0LG9iamVjdFBvc2l0aW9uLGxvYWRlcj1kZWZhdWx0SW1hZ2VMb2FkZXIscGxhY2Vob2xkZXI9J2VtcHR5JyxibHVyRGF0YVVSTH09X3JlZixhbGw9KDAsX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyLmRlZmF1bHQpKF9yZWYsW1wic3JjXCIsXCJzaXplc1wiLFwidW5vcHRpbWl6ZWRcIixcInByaW9yaXR5XCIsXCJsb2FkaW5nXCIsXCJjbGFzc05hbWVcIixcInF1YWxpdHlcIixcIndpZHRoXCIsXCJoZWlnaHRcIixcIm9iamVjdEZpdFwiLFwib2JqZWN0UG9zaXRpb25cIixcImxvYWRlclwiLFwicGxhY2Vob2xkZXJcIixcImJsdXJEYXRhVVJMXCJdKTtsZXQgcmVzdD1hbGw7bGV0IGxheW91dD1zaXplcz8ncmVzcG9uc2l2ZSc6J2ludHJpbnNpYyc7aWYoJ2xheW91dCdpbiByZXN0KXsvLyBPdmVycmlkZSBkZWZhdWx0IGxheW91dCBpZiB0aGUgdXNlciBzcGVjaWZpZWQgb25lOlxuaWYocmVzdC5sYXlvdXQpbGF5b3V0PXJlc3QubGF5b3V0Oy8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbmRlbGV0ZSByZXN0WydsYXlvdXQnXTt9bGV0IHN0YXRpY1NyYz0nJztpZihpc1N0YXRpY0ltcG9ydChzcmMpKXtjb25zdCBzdGF0aWNJbWFnZURhdGE9aXNTdGF0aWNSZXF1aXJlKHNyYyk/c3JjLmRlZmF1bHQ6c3JjO2lmKCFzdGF0aWNJbWFnZURhdGEuc3JjKXt0aHJvdyBuZXcgRXJyb3IoYEFuIG9iamVjdCBzaG91bGQgb25seSBiZSBwYXNzZWQgdG8gdGhlIGltYWdlIGNvbXBvbmVudCBzcmMgcGFyYW1ldGVyIGlmIGl0IGNvbWVzIGZyb20gYSBzdGF0aWMgaW1hZ2UgaW1wb3J0LiBJdCBtdXN0IGluY2x1ZGUgc3JjLiBSZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KHN0YXRpY0ltYWdlRGF0YSl9YCk7fWJsdXJEYXRhVVJMPWJsdXJEYXRhVVJMfHxzdGF0aWNJbWFnZURhdGEuYmx1ckRhdGFVUkw7c3RhdGljU3JjPXN0YXRpY0ltYWdlRGF0YS5zcmM7aWYoIWxheW91dHx8bGF5b3V0IT09J2ZpbGwnKXtoZWlnaHQ9aGVpZ2h0fHxzdGF0aWNJbWFnZURhdGEuaGVpZ2h0O3dpZHRoPXdpZHRofHxzdGF0aWNJbWFnZURhdGEud2lkdGg7aWYoIXN0YXRpY0ltYWdlRGF0YS5oZWlnaHR8fCFzdGF0aWNJbWFnZURhdGEud2lkdGgpe3Rocm93IG5ldyBFcnJvcihgQW4gb2JqZWN0IHNob3VsZCBvbmx5IGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgY29tcG9uZW50IHNyYyBwYXJhbWV0ZXIgaWYgaXQgY29tZXMgZnJvbSBhIHN0YXRpYyBpbWFnZSBpbXBvcnQuIEl0IG11c3QgaW5jbHVkZSBoZWlnaHQgYW5kIHdpZHRoLiBSZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KHN0YXRpY0ltYWdlRGF0YSl9YCk7fX19c3JjPXR5cGVvZiBzcmM9PT0nc3RyaW5nJz9zcmM6c3RhdGljU3JjO2NvbnN0IHdpZHRoSW50PWdldEludCh3aWR0aCk7Y29uc3QgaGVpZ2h0SW50PWdldEludChoZWlnaHQpO2NvbnN0IHF1YWxpdHlJbnQ9Z2V0SW50KHF1YWxpdHkpO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZighc3JjKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIGlzIG1pc3NpbmcgcmVxdWlyZWQgXCJzcmNcIiBwcm9wZXJ0eS4gTWFrZSBzdXJlIHlvdSBwYXNzIFwic3JjXCIgaW4gcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeSh7d2lkdGgsaGVpZ2h0LHF1YWxpdHl9KX1gKTt9aWYoIVZBTElEX0xBWU9VVF9WQUxVRVMuaW5jbHVkZXMobGF5b3V0KSl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibGF5b3V0XCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsYXlvdXR9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xBWU9VVF9WQUxVRVMubWFwKFN0cmluZykuam9pbignLCcpfS5gKTt9aWYodHlwZW9mIHdpZHRoSW50IT09J3VuZGVmaW5lZCcmJmlzTmFOKHdpZHRoSW50KXx8dHlwZW9mIGhlaWdodEludCE9PSd1bmRlZmluZWQnJiZpc05hTihoZWlnaHRJbnQpKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJ3aWR0aFwiIG9yIFwiaGVpZ2h0XCIgcHJvcGVydHkuIFRoZXNlIHNob3VsZCBiZSBudW1lcmljIHZhbHVlcy5gKTt9aWYoIVZBTElEX0xPQURJTkdfVkFMVUVTLmluY2x1ZGVzKGxvYWRpbmcpKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsb2FkaW5nXCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsb2FkaW5nfVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MT0FESU5HX1ZBTFVFUy5tYXAoU3RyaW5nKS5qb2luKCcsJyl9LmApO31pZihwcmlvcml0eSYmbG9hZGluZz09PSdsYXp5Jyl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBib3RoIFwicHJpb3JpdHlcIiBhbmQgXCJsb2FkaW5nPSdsYXp5J1wiIHByb3BlcnRpZXMuIE9ubHkgb25lIHNob3VsZCBiZSB1c2VkLmApO31pZihwbGFjZWhvbGRlcj09PSdibHVyJyl7aWYobGF5b3V0IT09J2ZpbGwnJiYod2lkdGhJbnR8fDApKihoZWlnaHRJbnR8fDApPDE2MDApe2NvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyBzbWFsbGVyIHRoYW4gNDB4NDAuIENvbnNpZGVyIHJlbW92aW5nIHRoZSBcInBsYWNlaG9sZGVyPSdibHVyJ1wiIHByb3BlcnR5IHRvIGltcHJvdmUgcGVyZm9ybWFuY2UuYCk7fWlmKCFibHVyRGF0YVVSTCl7Y29uc3QgVkFMSURfQkxVUl9FWFQ9WydqcGVnJywncG5nJywnd2VicCddOy8vIHNob3VsZCBtYXRjaCBuZXh0LWltYWdlLWxvYWRlclxudGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBcInBsYWNlaG9sZGVyPSdibHVyJ1wiIHByb3BlcnR5IGJ1dCBpcyBtaXNzaW5nIHRoZSBcImJsdXJEYXRhVVJMXCIgcHJvcGVydHkuXG4gICAgICAgICAgUG9zc2libGUgc29sdXRpb25zOlxuICAgICAgICAgICAgLSBBZGQgYSBcImJsdXJEYXRhVVJMXCIgcHJvcGVydHksIHRoZSBjb250ZW50cyBzaG91bGQgYmUgYSBzbWFsbCBEYXRhIFVSTCB0byByZXByZXNlbnQgdGhlIGltYWdlXG4gICAgICAgICAgICAtIENoYW5nZSB0aGUgXCJzcmNcIiBwcm9wZXJ0eSB0byBhIHN0YXRpYyBpbXBvcnQgd2l0aCBvbmUgb2YgdGhlIHN1cHBvcnRlZCBmaWxlIHR5cGVzOiAke1ZBTElEX0JMVVJfRVhULmpvaW4oJywnKX1cbiAgICAgICAgICAgIC0gUmVtb3ZlIHRoZSBcInBsYWNlaG9sZGVyXCIgcHJvcGVydHksIGVmZmVjdGl2ZWx5IG5vIGJsdXIgZWZmZWN0XG4gICAgICAgICAgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wbGFjZWhvbGRlci1ibHVyLWRhdGEtdXJsYCk7fX19bGV0IGlzTGF6eT0hcHJpb3JpdHkmJihsb2FkaW5nPT09J2xhenknfHx0eXBlb2YgbG9hZGluZz09PSd1bmRlZmluZWQnKTtpZihzcmMmJnNyYy5zdGFydHNXaXRoKCdkYXRhOicpKXsvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL0Jhc2ljc19vZl9IVFRQL0RhdGFfVVJJc1xudW5vcHRpbWl6ZWQ9dHJ1ZTtpc0xhenk9ZmFsc2U7fWNvbnN0W3NldFJlZixpc0ludGVyc2VjdGVkXT0oMCxfdXNlSW50ZXJzZWN0aW9uLnVzZUludGVyc2VjdGlvbikoe3Jvb3RNYXJnaW46JzIwMHB4JyxkaXNhYmxlZDohaXNMYXp5fSk7Y29uc3QgaXNWaXNpYmxlPSFpc0xhenl8fGlzSW50ZXJzZWN0ZWQ7bGV0IHdyYXBwZXJTdHlsZTtsZXQgc2l6ZXJTdHlsZTtsZXQgc2l6ZXJTdmc7bGV0IGltZ1N0eWxlPSgwLF9leHRlbmRzMi5kZWZhdWx0KSh7cG9zaXRpb246J2Fic29sdXRlJyx0b3A6MCxsZWZ0OjAsYm90dG9tOjAscmlnaHQ6MCxib3hTaXppbmc6J2JvcmRlci1ib3gnLHBhZGRpbmc6MCxib3JkZXI6J25vbmUnLG1hcmdpbjonYXV0bycsZGlzcGxheTonYmxvY2snLHdpZHRoOjAsaGVpZ2h0OjAsbWluV2lkdGg6JzEwMCUnLG1heFdpZHRoOicxMDAlJyxtaW5IZWlnaHQ6JzEwMCUnLG1heEhlaWdodDonMTAwJScsb2JqZWN0Rml0LG9iamVjdFBvc2l0aW9ufSxwbGFjZWhvbGRlcj09PSdibHVyJz97ZmlsdGVyOidibHVyKDIwcHgpJyxiYWNrZ3JvdW5kU2l6ZTonY292ZXInLGJhY2tncm91bmRJbWFnZTpgdXJsKFwiJHtibHVyRGF0YVVSTH1cIilgfTp1bmRlZmluZWQpO2lmKHR5cGVvZiB3aWR0aEludCE9PSd1bmRlZmluZWQnJiZ0eXBlb2YgaGVpZ2h0SW50IT09J3VuZGVmaW5lZCcmJmxheW91dCE9PSdmaWxsJyl7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiAvPlxuY29uc3QgcXVvdGllbnQ9aGVpZ2h0SW50L3dpZHRoSW50O2NvbnN0IHBhZGRpbmdUb3A9aXNOYU4ocXVvdGllbnQpPycxMDAlJzpgJHtxdW90aWVudCoxMDB9JWA7aWYobGF5b3V0PT09J3Jlc3BvbnNpdmUnKXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cInJlc3BvbnNpdmVcIiAvPlxud3JhcHBlclN0eWxlPXtkaXNwbGF5OidibG9jaycsb3ZlcmZsb3c6J2hpZGRlbicscG9zaXRpb246J3JlbGF0aXZlJyxib3hTaXppbmc6J2JvcmRlci1ib3gnLG1hcmdpbjowfTtzaXplclN0eWxlPXtkaXNwbGF5OidibG9jaycsYm94U2l6aW5nOidib3JkZXItYm94JyxwYWRkaW5nVG9wfTt9ZWxzZSBpZihsYXlvdXQ9PT0naW50cmluc2ljJyl7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJpbnRyaW5zaWNcIiAvPlxud3JhcHBlclN0eWxlPXtkaXNwbGF5OidpbmxpbmUtYmxvY2snLG1heFdpZHRoOicxMDAlJyxvdmVyZmxvdzonaGlkZGVuJyxwb3NpdGlvbjoncmVsYXRpdmUnLGJveFNpemluZzonYm9yZGVyLWJveCcsbWFyZ2luOjB9O3NpemVyU3R5bGU9e2JveFNpemluZzonYm9yZGVyLWJveCcsZGlzcGxheTonYmxvY2snLG1heFdpZHRoOicxMDAlJ307c2l6ZXJTdmc9YDxzdmcgd2lkdGg9XCIke3dpZHRoSW50fVwiIGhlaWdodD1cIiR7aGVpZ2h0SW50fVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCIvPmA7fWVsc2UgaWYobGF5b3V0PT09J2ZpeGVkJyl7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJmaXhlZFwiIC8+XG53cmFwcGVyU3R5bGU9e292ZXJmbG93OidoaWRkZW4nLGJveFNpemluZzonYm9yZGVyLWJveCcsZGlzcGxheTonaW5saW5lLWJsb2NrJyxwb3NpdGlvbjoncmVsYXRpdmUnLHdpZHRoOndpZHRoSW50LGhlaWdodDpoZWlnaHRJbnR9O319ZWxzZSBpZih0eXBlb2Ygd2lkdGhJbnQ9PT0ndW5kZWZpbmVkJyYmdHlwZW9mIGhlaWdodEludD09PSd1bmRlZmluZWQnJiZsYXlvdXQ9PT0nZmlsbCcpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIGxheW91dD1cImZpbGxcIiAvPlxud3JhcHBlclN0eWxlPXtkaXNwbGF5OidibG9jaycsb3ZlcmZsb3c6J2hpZGRlbicscG9zaXRpb246J2Fic29sdXRlJyx0b3A6MCxsZWZ0OjAsYm90dG9tOjAscmlnaHQ6MCxib3hTaXppbmc6J2JvcmRlci1ib3gnLG1hcmdpbjowfTt9ZWxzZXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiAvPlxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtdXN0IHVzZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIgcHJvcGVydGllcyBvciBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eS5gKTt9fWxldCBpbWdBdHRyaWJ1dGVzPXtzcmM6J2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQUFBQUFQLy8veUg1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlCUkFBNycsc3JjU2V0OnVuZGVmaW5lZCxzaXplczp1bmRlZmluZWR9O2lmKGlzVmlzaWJsZSl7aW1nQXR0cmlidXRlcz1nZW5lcmF0ZUltZ0F0dHJzKHtzcmMsdW5vcHRpbWl6ZWQsbGF5b3V0LHdpZHRoOndpZHRoSW50LHF1YWxpdHk6cXVhbGl0eUludCxzaXplcyxsb2FkZXJ9KTt9cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7c3R5bGU6d3JhcHBlclN0eWxlfSxzaXplclN0eWxlPy8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse3N0eWxlOnNpemVyU3R5bGV9LHNpemVyU3ZnPy8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIse3N0eWxlOnttYXhXaWR0aDonMTAwJScsZGlzcGxheTonYmxvY2snLG1hcmdpbjowLGJvcmRlcjonbm9uZScscGFkZGluZzowfSxhbHQ6XCJcIixcImFyaWEtaGlkZGVuXCI6dHJ1ZSxyb2xlOlwicHJlc2VudGF0aW9uXCIsc3JjOmBkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCR7KDAsX3RvQmFzZS50b0Jhc2U2NCkoc2l6ZXJTdmcpfWB9KTpudWxsKTpudWxsLCFpc1Zpc2libGUmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibm9zY3JpcHRcIixudWxsLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsT2JqZWN0LmFzc2lnbih7fSxyZXN0LGdlbmVyYXRlSW1nQXR0cnMoe3NyYyx1bm9wdGltaXplZCxsYXlvdXQsd2lkdGg6d2lkdGhJbnQscXVhbGl0eTpxdWFsaXR5SW50LHNpemVzLGxvYWRlcn0pLHtkZWNvZGluZzpcImFzeW5jXCIsc3R5bGU6aW1nU3R5bGUsY2xhc3NOYW1lOmNsYXNzTmFtZX0pKSksLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIixPYmplY3QuYXNzaWduKHt9LHJlc3QsaW1nQXR0cmlidXRlcyx7ZGVjb2Rpbmc6XCJhc3luY1wiLGNsYXNzTmFtZTpjbGFzc05hbWUscmVmOmVsZW1lbnQ9PntzZXRSZWYoZWxlbWVudCk7cmVtb3ZlUGxhY2Vob2xkZXIoZWxlbWVudCxwbGFjZWhvbGRlcik7fSxzdHlsZTppbWdTdHlsZX0pKSxwcmlvcml0eT8vKiNfX1BVUkVfXyovIC8vIE5vdGUgaG93IHdlIG9taXQgdGhlIGBocmVmYCBhdHRyaWJ1dGUsIGFzIGl0IHdvdWxkIG9ubHkgYmUgcmVsZXZhbnRcbi8vIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGBpbWFnZXNyY3NldGAsIGFuZCBpbiB0aG9zZSBjYXNlc1xuLy8gaXQgd291bGQgbGlrZWx5IGNhdXNlIHRoZSBpbmNvcnJlY3QgaW1hZ2UgdG8gYmUgcHJlbG9hZGVkLlxuLy9cbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NlbWFudGljcy5odG1sI2F0dHItbGluay1pbWFnZXNyY3NldFxuX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfaGVhZC5kZWZhdWx0LG51bGwsLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIse2tleTonX19uaW1nLScraW1nQXR0cmlidXRlcy5zcmMraW1nQXR0cmlidXRlcy5zcmNTZXQraW1nQXR0cmlidXRlcy5zaXplcyxyZWw6XCJwcmVsb2FkXCIsYXM6XCJpbWFnZVwiLGhyZWY6aW1nQXR0cmlidXRlcy5zcmNTZXQ/dW5kZWZpbmVkOmltZ0F0dHJpYnV0ZXMuc3JjLy8gQHRzLWlnbm9yZTogaW1hZ2VzcmNzZXQgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGVcbixpbWFnZXNyY3NldDppbWdBdHRyaWJ1dGVzLnNyY1NldC8vIEB0cy1pZ25vcmU6IGltYWdlc2l6ZXMgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGVcbixpbWFnZXNpemVzOmltZ0F0dHJpYnV0ZXMuc2l6ZXN9KSk6bnVsbCk7fS8vQlVJTFQgSU4gTE9BREVSU1xuZnVuY3Rpb24gbm9ybWFsaXplU3JjKHNyYyl7cmV0dXJuIHNyY1swXT09PScvJz9zcmMuc2xpY2UoMSk6c3JjO31mdW5jdGlvbiBpbWdpeExvYWRlcih7cm9vdCxzcmMsd2lkdGgscXVhbGl0eX0pey8vIERlbW86IGh0dHBzOi8vc3RhdGljLmltZ2l4Lm5ldC9kYWlzeS5wbmc/Zm9ybWF0PWF1dG8mZml0PW1heCZ3PTMwMFxuY29uc3QgcGFyYW1zPVsnYXV0bz1mb3JtYXQnLCdmaXQ9bWF4Jywndz0nK3dpZHRoXTtsZXQgcGFyYW1zU3RyaW5nPScnO2lmKHF1YWxpdHkpe3BhcmFtcy5wdXNoKCdxPScrcXVhbGl0eSk7fWlmKHBhcmFtcy5sZW5ndGgpe3BhcmFtc1N0cmluZz0nPycrcGFyYW1zLmpvaW4oJyYnKTt9cmV0dXJuYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfSR7cGFyYW1zU3RyaW5nfWA7fWZ1bmN0aW9uIGFrYW1haUxvYWRlcih7cm9vdCxzcmMsd2lkdGh9KXtyZXR1cm5gJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9P2ltd2lkdGg9JHt3aWR0aH1gO31mdW5jdGlvbiBjbG91ZGluYXJ5TG9hZGVyKHtyb290LHNyYyx3aWR0aCxxdWFsaXR5fSl7Ly8gRGVtbzogaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGVtby9pbWFnZS91cGxvYWQvd18zMDAsY19saW1pdCxxX2F1dG8vdHVydGxlcy5qcGdcbmNvbnN0IHBhcmFtcz1bJ2ZfYXV0bycsJ2NfbGltaXQnLCd3Xycrd2lkdGgsJ3FfJysocXVhbGl0eXx8J2F1dG8nKV07bGV0IHBhcmFtc1N0cmluZz1wYXJhbXMuam9pbignLCcpKycvJztyZXR1cm5gJHtyb290fSR7cGFyYW1zU3RyaW5nfSR7bm9ybWFsaXplU3JjKHNyYyl9YDt9ZnVuY3Rpb24gZGVmYXVsdExvYWRlcih7cm9vdCxzcmMsd2lkdGgscXVhbGl0eX0pe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdCBtaXNzaW5nVmFsdWVzPVtdOy8vIHRoZXNlIHNob3VsZCBhbHdheXMgYmUgcHJvdmlkZWQgYnV0IG1ha2Ugc3VyZSB0aGV5IGFyZVxuaWYoIXNyYyltaXNzaW5nVmFsdWVzLnB1c2goJ3NyYycpO2lmKCF3aWR0aCltaXNzaW5nVmFsdWVzLnB1c2goJ3dpZHRoJyk7aWYobWlzc2luZ1ZhbHVlcy5sZW5ndGg+MCl7dGhyb3cgbmV3IEVycm9yKGBOZXh0IEltYWdlIE9wdGltaXphdGlvbiByZXF1aXJlcyAke21pc3NpbmdWYWx1ZXMuam9pbignLCAnKX0gdG8gYmUgcHJvdmlkZWQuIE1ha2Ugc3VyZSB5b3UgcGFzcyB0aGVtIGFzIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoe3NyYyx3aWR0aCxxdWFsaXR5fSl9YCk7fWlmKHNyYy5zdGFydHNXaXRoKCcvLycpKXt0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBwcm90b2NvbC1yZWxhdGl2ZSBVUkwgKC8vKSBtdXN0IGJlIGNoYW5nZWQgdG8gYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWApO31pZighc3JjLnN0YXJ0c1dpdGgoJy8nKSYmY29uZmlnRG9tYWlucyl7bGV0IHBhcnNlZFNyYzt0cnl7cGFyc2VkU3JjPW5ldyBVUkwoc3JjKTt9Y2F0Y2goZXJyKXtjb25zb2xlLmVycm9yKGVycik7dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgaWYgdXNpbmcgcmVsYXRpdmUgaW1hZ2UgaXQgbXVzdCBzdGFydCB3aXRoIGEgbGVhZGluZyBzbGFzaCBcIi9cIiBvciBiZSBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYCk7fWlmKCFjb25maWdEb21haW5zLmluY2x1ZGVzKHBhcnNlZFNyYy5ob3N0bmFtZSkpe3Rocm93IG5ldyBFcnJvcihgSW52YWxpZCBzcmMgcHJvcCAoJHtzcmN9KSBvbiBcXGBuZXh0L2ltYWdlXFxgLCBob3N0bmFtZSBcIiR7cGFyc2VkU3JjLmhvc3RuYW1lfVwiIGlzIG5vdCBjb25maWd1cmVkIHVuZGVyIGltYWdlcyBpbiB5b3VyIFxcYG5leHQuY29uZmlnLmpzXFxgXFxuYCtgU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS11bmNvbmZpZ3VyZWQtaG9zdGApO319fXJldHVybmAke3Jvb3R9P3VybD0ke2VuY29kZVVSSUNvbXBvbmVudChzcmMpfSZ3PSR7d2lkdGh9JnE9JHtxdWFsaXR5fHw3NX1gO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWltYWdlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjaz12b2lkIDA7Y29uc3QgcmVxdWVzdElkbGVDYWxsYmFjaz10eXBlb2Ygc2VsZiE9PSd1bmRlZmluZWQnJiZzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGNiKXtsZXQgc3RhcnQ9RGF0ZS5ub3coKTtyZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpe2NiKHtkaWRUaW1lb3V0OmZhbHNlLHRpbWVSZW1haW5pbmc6ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5tYXgoMCw1MC0oRGF0ZS5ub3coKS1zdGFydCkpO319KTt9LDEpO307ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVlc3RJZGxlQ2FsbGJhY2s7Y29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrfHxmdW5jdGlvbihpZCl7cmV0dXJuIGNsZWFyVGltZW91dChpZCk7fTtleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjaz1jYW5jZWxJZGxlQ2FsbGJhY2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VJbnRlcnNlY3Rpb249dXNlSW50ZXJzZWN0aW9uO3ZhciBfcmVhY3Q9cmVxdWlyZShcInJlYWN0XCIpO3ZhciBfcmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7Y29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI9dHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyIT09J3VuZGVmaW5lZCc7ZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uKHtyb290TWFyZ2luLGRpc2FibGVkfSl7Y29uc3QgaXNEaXNhYmxlZD1kaXNhYmxlZHx8IWhhc0ludGVyc2VjdGlvbk9ic2VydmVyO2NvbnN0IHVub2JzZXJ2ZT0oMCxfcmVhY3QudXNlUmVmKSgpO2NvbnN0W3Zpc2libGUsc2V0VmlzaWJsZV09KDAsX3JlYWN0LnVzZVN0YXRlKShmYWxzZSk7Y29uc3Qgc2V0UmVmPSgwLF9yZWFjdC51c2VDYWxsYmFjaykoZWw9PntpZih1bm9ic2VydmUuY3VycmVudCl7dW5vYnNlcnZlLmN1cnJlbnQoKTt1bm9ic2VydmUuY3VycmVudD11bmRlZmluZWQ7fWlmKGlzRGlzYWJsZWR8fHZpc2libGUpcmV0dXJuO2lmKGVsJiZlbC50YWdOYW1lKXt1bm9ic2VydmUuY3VycmVudD1vYnNlcnZlKGVsLGlzVmlzaWJsZT0+aXNWaXNpYmxlJiZzZXRWaXNpYmxlKGlzVmlzaWJsZSkse3Jvb3RNYXJnaW59KTt9fSxbaXNEaXNhYmxlZCxyb290TWFyZ2luLHZpc2libGVdKTsoMCxfcmVhY3QudXNlRWZmZWN0KSgoKT0+e2lmKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcil7aWYoIXZpc2libGUpe2NvbnN0IGlkbGVDYWxsYmFjaz0oMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+c2V0VmlzaWJsZSh0cnVlKSk7cmV0dXJuKCk9PigwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLmNhbmNlbElkbGVDYWxsYmFjaykoaWRsZUNhbGxiYWNrKTt9fX0sW3Zpc2libGVdKTtyZXR1cm5bc2V0UmVmLHZpc2libGVdO31mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsY2FsbGJhY2ssb3B0aW9ucyl7Y29uc3R7aWQsb2JzZXJ2ZXIsZWxlbWVudHN9PWNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO2VsZW1lbnRzLnNldChlbGVtZW50LGNhbGxiYWNrKTtvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO3JldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKXtlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7b2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpOy8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbmlmKGVsZW1lbnRzLnNpemU9PT0wKXtvYnNlcnZlci5kaXNjb25uZWN0KCk7b2JzZXJ2ZXJzLmRlbGV0ZShpZCk7fX07fWNvbnN0IG9ic2VydmVycz1uZXcgTWFwKCk7ZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyl7Y29uc3QgaWQ9b3B0aW9ucy5yb290TWFyZ2lufHwnJztsZXQgaW5zdGFuY2U9b2JzZXJ2ZXJzLmdldChpZCk7aWYoaW5zdGFuY2Upe3JldHVybiBpbnN0YW5jZTt9Y29uc3QgZWxlbWVudHM9bmV3IE1hcCgpO2NvbnN0IG9ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzPT57ZW50cmllcy5mb3JFYWNoKGVudHJ5PT57Y29uc3QgY2FsbGJhY2s9ZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCk7Y29uc3QgaXNWaXNpYmxlPWVudHJ5LmlzSW50ZXJzZWN0aW5nfHxlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbz4wO2lmKGNhbGxiYWNrJiZpc1Zpc2libGUpe2NhbGxiYWNrKGlzVmlzaWJsZSk7fX0pO30sb3B0aW9ucyk7b2JzZXJ2ZXJzLnNldChpZCxpbnN0YW5jZT17aWQsb2JzZXJ2ZXIsZWxlbWVudHN9KTtyZXR1cm4gaW5zdGFuY2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXAiLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJyaWdodG5lc3MgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9CcmlnaHRuZXNzXCI7XG5pbXBvcnQgQ29sb3JDaGFuZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29sb3JDaGFuZ2VcIjtcbmltcG9ydCB7IFRlbXAgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9UZW1wXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5cbmltcG9ydCBHb3ZlZSBmcm9tIFwiLi4vbm9kZS1nb3ZlZS1sZWQvaW5kZXhcIjtcblxuY29uc3QgTGFtcCA9IG5ldyBHb3ZlZSh7XG4gIGFwaUtleTogXCI4YTE3ZGExZi1jMWU5LTRhMWQtODI5NS02YjEzNjA1OTViYjZcIixcbiAgbWFjOiBcIjFkOmU3OjdjOmE2OmIwOjEzOmI4OmU5XCIsXG4gIG1vZGVsOiBcIkg2MDAzXCIsXG59KTtcblxuY29uc3QgRGVzayA9IG5ldyBHb3ZlZSh7XG4gIGFwaUtleTogXCI4YTE3ZGExZi1jMWU5LTRhMWQtODI5NS02YjEzNjA1OTViYjZcIixcbiAgbWFjOiBcIjc1OmI1OjdjOmE2OmIwOjEzOmJhOjllXCIsXG4gIG1vZGVsOiBcIkg2MDAzXCIsXG59KTtcblxuZnVuY3Rpb24gTGFtcFR1cm5PbigpIHtcbiAgTGFtcC50dXJuT24oKTtcbn1cblxuZnVuY3Rpb24gTGFtcFR1cm5PZmYoKSB7XG4gIExhbXAudHVybk9mZigpO1xufVxuXG5mdW5jdGlvbiBEZXNrVHVybk9uKCkge1xuICBEZXNrLnR1cm5PbigpO1xufVxuXG5mdW5jdGlvbiBEZXNrVHVybk9mZigpIHtcbiAgRGVzay50dXJuT2ZmKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5MaWdodCBDb250cm9sczwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJDb250cm9scyBmb3IgbXkgbGlnaHRzXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwibWFuaWZlc3RcIiBocmVmPVwiL21hbmlmZXN0Lmpzb25cIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiIzAwMDAwMFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBocmVmPVwiL2xvZ28xOTIucG5nXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+T24vT2ZmIENvbnRyb2w8L2gxPlxuICAgICAgICA8L2hlYWRlcj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XG4gICAgICAgICAgICA8aDM+VHVybiBPbjwvaDM+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e0xhbXBUdXJuT259IGNsYXNzTmFtZT17c3R5bGVzLmxpZ2h0QnV0dG9ufT5cbiAgICAgICAgICAgICAgTGFtcFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e0Rlc2tUdXJuT259IGNsYXNzTmFtZT17c3R5bGVzLmxpZ2h0QnV0dG9ufT5cbiAgICAgICAgICAgICAgRGVza1xuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgICAgICAgICAgPGgzPlR1cm4gT2ZmPC9oMz5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17TGFtcFR1cm5PZmZ9IGNsYXNzTmFtZT17c3R5bGVzLmxpZ2h0QnV0dG9ufT5cbiAgICAgICAgICAgICAgTGFtcFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e0Rlc2tUdXJuT2ZmfSBjbGFzc05hbWU9e3N0eWxlcy5saWdodEJ1dHRvbn0+XG4gICAgICAgICAgICAgIERlc2tcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEJyaWdodG5lc3MgLz5cblxuICAgICAgICA8Q29sb3JDaGFuZ2UgLz5cblxuICAgICAgICA8VGVtcCAvPlxuICAgICAgPC9tYWluPlxuXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbT91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIFBvd2VyZWQgYnl7XCIgXCJ9XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubG9nb30+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL3ZlcmNlbC5zdmdcIiBhbHQ9XCJWZXJjZWwgTG9nb1wiIHdpZHRoPXs3Mn0gaGVpZ2h0PXsxNn0gLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSG9tZV9jb250YWluZXJfXzFFY3NVXCIsXG5cdFwibWFpblwiOiBcIkhvbWVfbWFpbl9fMXg4Z0NcIixcblx0XCJmb290ZXJcIjogXCJIb21lX2Zvb3Rlcl9fMVdkaERcIixcblx0XCJuYW1lXCI6IFwiSG9tZV9uYW1lX18zZmJmeFwiLFxuXHRcImdyaWRcIjogXCJIb21lX2dyaWRfXzJFaTJGXCIsXG5cdFwiY2FyZFwiOiBcIkhvbWVfY2FyZF9fMlNkdEJcIixcblx0XCJsaWdodEJ1dHRvblwiOiBcIkhvbWVfbGlnaHRCdXR0b25fX2JVWk5DXCIsXG5cdFwibG9nb1wiOiBcIkhvbWVfbG9nb19fMVlickhcIixcblx0XCJpY29uXCI6IFwiSG9tZV9pY29uX18zUUZnaFwiLFxuXHRcImhlYWRlclwiOiBcIkhvbWVfaGVhZGVyX18zdmxaV1wiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2ltYWdlJylcbiIsImZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kczsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsImZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==