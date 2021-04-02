'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

const _react = require('react');

const _propTypes = _interopRequireDefault(require('prop-types'));

const _useTimestampConverter = _interopRequireDefault(require('react-clocks-hooks/dist/hooks/useTimestampConverter'));

require('./styles.css');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {'default': obj};
}

const DisplayedTime = function DisplayedTime(_ref) {
  const timestamp = _ref.timestamp;
  const showSeconds = _ref.showSeconds;

  const _useTimestampConverte = (0, _useTimestampConverter['default'])(timestamp);
  const hours = _useTimestampConverte.hours;
  const minutes = _useTimestampConverte.minutes;
  const seconds = _useTimestampConverte.seconds;

  const _useMemo = (0, _react.useMemo)(function() {
    return {
      hoursOpacity: ''.concat(hours / 24),
      minutesOpacity: ''.concat(minutes / 60),
      secondsOpacity: ''.concat(seconds / 60),
      secondsWaveHeightPercent: ''.concat(seconds / 60 * 100, '%'),
      minutesWaveHeightPercent: ''.concat(minutes / 60 * 100, '%'),
      hoursWaveHeightPercent: ''.concat(hours / 24 * 100, '%'),
      displayHours: hours < 10 ? '0'.concat(hours) : hours,
      displayMinutes: minutes < 10 ? '0'.concat(minutes) : minutes,
      displaySeconds: seconds < 10 ? '0'.concat(seconds) : seconds,
    };
  }, [timestamp]);
  const displayHours = _useMemo.displayHours;
  const displayMinutes = _useMemo.displayMinutes;
  const displaySeconds = _useMemo.displaySeconds;
  const hoursWaveHeightPercent = _useMemo.hoursWaveHeightPercent;
  const minutesWaveHeightPercent = _useMemo.minutesWaveHeightPercent;
  const secondsWaveHeightPercent = _useMemo.secondsWaveHeightPercent;
  const hoursOpacity = _useMemo.hoursOpacity;
  const minutesOpacity = _useMemo.minutesOpacity;
  const secondsOpacity = _useMemo.secondsOpacity;

  return /* #__PURE__*/React.createElement('div', {
    className: 'App',
  }, /* #__PURE__*/React.createElement('div', {
    className: 'Column',
  }, /* #__PURE__*/React.createElement('div', {
    className: 'Marker',
    style: {
      height: hoursWaveHeightPercent,
      opacity: hoursOpacity,
    },
  })), /* #__PURE__*/React.createElement('div', {
    className: 'Column',
  }, /* #__PURE__*/React.createElement('div', {
    className: 'Marker',
    style: {
      height: minutesWaveHeightPercent,
      opacity: minutesOpacity,
    },
  })), showSeconds && /* #__PURE__*/React.createElement('div', {
    className: 'Column',
  }, /* #__PURE__*/React.createElement('div', {
    className: 'Marker Marker--seconds',
    style: {
      height: secondsWaveHeightPercent,
      opacity: secondsOpacity,
    },
  })), /* #__PURE__*/React.createElement('div', {
    className: 'text-overlay',
  }, /* #__PURE__*/React.createElement('div', null, displayHours), /* #__PURE__*/React.createElement('div', null, displayMinutes), showSeconds && /* #__PURE__*/React.createElement('div', null, displaySeconds)));
};

DisplayedTime.propTypes = {
  showSeconds: _propTypes['default'].bool,
  timestamp: _propTypes['default'].number.isRequired,
};

const _default = /* #__PURE__*/(0, _react.memo)(DisplayedTime);

exports['default'] = _default;
