'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

require('./styles.css');

const CubeClock = function CubeClock(_ref) {
  const className = _ref.className;
  const seconds = _ref.seconds;
  const minutes = _ref.minutes;
  const hours = _ref.hours;
  return /* #__PURE__*/React.createElement('figure', {
    className: className,
  }, /* #__PURE__*/React.createElement('div', {
    className: 'face top',
  }, /* #__PURE__*/React.createElement('p', {
    id: 's',
  }, seconds)), /* #__PURE__*/React.createElement('div', {
    className: 'face front',
  }, /* #__PURE__*/React.createElement('p', {
    id: 'm',
  }, minutes)), /* #__PURE__*/React.createElement('div', {
    className: 'face left',
  }, /* #__PURE__*/React.createElement('p', {
    id: 'h',
  }, hours)));
};

const _default = CubeClock;
exports['default'] = _default;
