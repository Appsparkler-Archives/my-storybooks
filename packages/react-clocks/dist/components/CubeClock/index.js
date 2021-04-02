'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

const _react = require('react');

const _propTypes = _interopRequireDefault(require('prop-types'));

const _styled = _interopRequireDefault(require('./styled'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {'default': obj};
}

const CubeClock = function CubeClock(_ref) {
  const timestamp = _ref.timestamp;
  const cubeClock = (0, _react.useMemo)(function() {
    const date = new Date(timestamp);

    const hours = function() {
      const hours = date.getHours();
      return hours < 10 ? '0'.concat(hours) : hours;
    }();

    const minutes = function() {
      const minutes = date.getMinutes();
      return minutes < 10 ? '0'.concat(minutes) : minutes;
    }();

    const seconds = function() {
      const seconds = date.getSeconds();
      return seconds < 10 ? '0'.concat(seconds) : seconds;
    }();

    return {
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }, [timestamp]);
  return /* #__PURE__*/React.createElement(_styled['default'], cubeClock);
};

CubeClock.propTypes = {
  timestamp: _propTypes['default'].number,
};

const _default = /* #__PURE__*/(0, _react.memo)(CubeClock);

exports['default'] = _default;
