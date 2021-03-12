"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styled = _interopRequireDefault(require("./styled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CubeClock = function CubeClock(_ref) {
  var timestamp = _ref.timestamp;
  var cubeClock = (0, _react.useMemo)(function () {
    var date = new Date(timestamp);

    var hours = function () {
      var hours = date.getHours();
      return hours < 10 ? "0".concat(hours) : hours;
    }();

    var minutes = function () {
      var minutes = date.getMinutes();
      return minutes < 10 ? "0".concat(minutes) : minutes;
    }();

    var seconds = function () {
      var seconds = date.getSeconds();
      return seconds < 10 ? "0".concat(seconds) : seconds;
    }();

    return {
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }, [timestamp]);
  return /*#__PURE__*/React.createElement(_styled["default"], cubeClock);
};

CubeClock.propTypes = {
  timestamp: _propTypes["default"].number
};

var _default = /*#__PURE__*/(0, _react.memo)(CubeClock);

exports["default"] = _default;