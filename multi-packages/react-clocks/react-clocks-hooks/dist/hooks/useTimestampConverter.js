"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

/**
  Converts a given timestamp into hours, minutes and seconds
*/
var useTimestampConverter = function useTimestampConverter(timestamp) {
  var details = (0, _react.useMemo)(function () {
    var date = new Date(timestamp);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    return {
      hours: hours,
      minutes: minutes,
      seconds: seconds,
      date: date
    };
  }, [timestamp]);
  return details;
};

var _default = useTimestampConverter;
exports["default"] = _default;