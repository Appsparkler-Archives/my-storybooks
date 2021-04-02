"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CubeClock = function CubeClock(_ref) {
  var className = _ref.className,
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

CubeClock.propTypes = {
  className: _propTypes["default"].string,
  minutes: _propTypes["default"].oneOf([_propTypes["default"].string, _propTypes["default"].number]),
  hours: _propTypes["default"].oneOf([_propTypes["default"].string, _propTypes["default"].number])
};
var _default = CubeClock;
exports["default"] = _default;