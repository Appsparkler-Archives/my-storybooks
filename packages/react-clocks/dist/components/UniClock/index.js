"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styled = _interopRequireDefault(require("./styled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var UniClock = function UniClock(_ref) {
  var timestamp = _ref.timestamp;

  var styledClock = _react["default"].useMemo(function () {
    var hoursDegree = new Date(timestamp).getHours() * (360 / 12);
    var minutesDegree = new Date(timestamp).getMinutes() * (360 / 60);
    var extraHoursDegree = minutesDegree % 30;
    var secondsDegree = new Date(timestamp).getSeconds() * (360 / 60);
    var hands = {
      hoursDegree: hoursDegree,
      minutesDegree: minutesDegree,
      secondsDegree: secondsDegree
    };
    return hands;
  }, [timestamp]);

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_styled["default"], styledClock));
};

var _default = UniClock;
exports["default"] = _default;