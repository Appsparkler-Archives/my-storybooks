"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("./styles.css");

var CubeClock = function CubeClock(_ref) {
  var className = _ref.className,
      seconds = _ref.seconds,
      minutes = _ref.minutes,
      hours = _ref.hours;
  return /*#__PURE__*/React.createElement("figure", {
    className: className
  }, /*#__PURE__*/React.createElement("div", {
    className: "face top v2"
  }, /*#__PURE__*/React.createElement("p", {
    id: "s"
  }, "WED"), /*#__PURE__*/React.createElement("p", {
    id: "s"
  }, "DEC 25"), /*#__PURE__*/React.createElement("p", {
    id: "s"
  }, "2021")), /*#__PURE__*/React.createElement("div", {
    className: "face front"
  }, /*#__PURE__*/React.createElement("p", {
    id: "m"
  }, minutes)), /*#__PURE__*/React.createElement("div", {
    className: "face left"
  }, /*#__PURE__*/React.createElement("p", {
    id: "h"
  }, hours)));
};

var _default = CubeClock;
exports["default"] = _default;