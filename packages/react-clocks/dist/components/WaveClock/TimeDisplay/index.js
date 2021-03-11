"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactClocksHooks = require("react-clocks-hooks");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DisplayedTime = function DisplayedTime(_ref) {
  var timestamp = _ref.timestamp,
      showSeconds = _ref.showSeconds;

  var _useMemo = (0, _react.useMemo)(function () {
    return function () {
      var _useTimestampConverte = (0, _reactClocksHooks.useTimestampConverter)(timestamp),
          hours = _useTimestampConverte.hours,
          minutes = _useTimestampConverte.minutes,
          seconds = _useTimestampConverte.seconds;

      return {
        hoursOpacity: "".concat(hours / 24),
        minutesOpacity: "".concat(minutes / 60),
        secondsOpacity: "".concat(seconds / 60),
        secondsWaveHeightPercent: "".concat(seconds / 60 * 100, "%"),
        minutesWaveHeightPercent: "".concat(minutes / 60 * 100, "%"),
        hoursWaveHeightPercent: "".concat(hours / 24 * 100, "%"),
        displayHours: hours < 10 ? "0".concat(hours) : hours,
        displayMinutes: minutes < 10 ? "0".concat(minutes) : minutes,
        displaySeconds: seconds < 10 ? "0".concat(seconds) : seconds
      };
    }();
  }, [timestamp]),
      displayHours = _useMemo.displayHours,
      displayMinutes = _useMemo.displayMinutes,
      displaySeconds = _useMemo.displaySeconds,
      hoursWaveHeightPercent = _useMemo.hoursWaveHeightPercent,
      minutesWaveHeightPercent = _useMemo.minutesWaveHeightPercent,
      secondsWaveHeightPercent = _useMemo.secondsWaveHeightPercent,
      hoursOpacity = _useMemo.hoursOpacity,
      minutesOpacity = _useMemo.minutesOpacity,
      secondsOpacity = _useMemo.secondsOpacity;

  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement("div", {
    className: "Column"
  }, /*#__PURE__*/React.createElement("div", {
    className: "Marker",
    style: {
      height: hoursWaveHeightPercent,
      opacity: hoursOpacity
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "Column"
  }, /*#__PURE__*/React.createElement("div", {
    className: "Marker",
    style: {
      height: minutesWaveHeightPercent,
      opacity: minutesOpacity
    }
  })), showSeconds && /*#__PURE__*/React.createElement("div", {
    className: "Column"
  }, /*#__PURE__*/React.createElement("div", {
    className: "Marker Marker--seconds",
    style: {
      height: secondsWaveHeightPercent,
      opacity: secondsOpacity
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "text-overlay"
  }, /*#__PURE__*/React.createElement("div", null, displayHours), /*#__PURE__*/React.createElement("div", null, displayMinutes), showSeconds && /*#__PURE__*/React.createElement("div", null, displaySeconds)));
};

DisplayedTime.propTypes = {
  showSeconds: _propTypes["default"].bool,
  timestamp: _propTypes["default"].number.isRequired
};

var _default = /*#__PURE__*/(0, _react.memo)(DisplayedTime);

exports["default"] = _default;