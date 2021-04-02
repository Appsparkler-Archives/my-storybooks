'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

const _react = require('react');

/**
  Converts a given timestamp into hours, minutes and seconds
*/
const useTimestampConverter = function useTimestampConverter(timestamp) {
  const details = (0, _react.useMemo)(function() {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return {
      hours: hours,
      minutes: minutes,
      seconds: seconds,
      date: date,
    };
  }, [timestamp]);
  return details;
};

const _default = useTimestampConverter;
exports['default'] = _default;
