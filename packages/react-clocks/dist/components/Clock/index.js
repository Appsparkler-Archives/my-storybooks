'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

const _react = _interopRequireDefault(require('react'));

const _propTypes = _interopRequireDefault(require('prop-types'));

const _styled = _interopRequireDefault(require('./styled'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {'default': obj};
}

const Clock = function Clock(_ref) {
  const timestamp = _ref.timestamp;

  const styledClock = _react['default'].useMemo(function() {
    const hoursDegree = new Date(timestamp).getHours() * (360 / 12) - 90;
    const minutesDegree = new Date(timestamp).getMinutes() * (360 / 60) - 90;
    const extraHoursDegree = minutesDegree % 30;
    const secondsDegree = new Date(timestamp).getSeconds() * (360 / 60) - 90;
    const hands = {
      hoursDegree: hoursDegree,
      minutesDegree: minutesDegree,
      secondsDegree: secondsDegree,
    };
    return hands;
  }, [timestamp]);

  return /* #__PURE__*/_react['default'].createElement(_styled['default'], styledClock);
};

Clock.propTypes = {
  timestamp: _propTypes['default'].number.isRequired,
};
const _default = Clock;
exports['default'] = _default;
