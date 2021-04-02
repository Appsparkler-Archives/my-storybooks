'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

const _react = _interopRequireDefault(require('react'));

const _propTypes = _interopRequireDefault(require('prop-types'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {'default': obj};
}

const Clock = function Clock(props) {
  return /* #__PURE__*/_react['default'].createElement('div', {
    className: props.className,
  }, /* #__PURE__*/_react['default'].createElement('section', null, /* #__PURE__*/_react['default'].createElement('div', {
    className: 'label',
  }, 'SEIKO'), /* #__PURE__*/_react['default'].createElement('div', {
    className: 'hourhand',
  }), /* #__PURE__*/_react['default'].createElement('div', {
    className: 'secondhand',
  }), /* #__PURE__*/_react['default'].createElement('div', {
    className: 'minutehand',
  }), /* #__PURE__*/_react['default'].createElement('div', {
    className: 'hour12',
  }), /* #__PURE__*/_react['default'].createElement('div', {
    className: 'hour1',
  }), /* #__PURE__*/_react['default'].createElement('div', {
    className: 'hour2',
  }), /* #__PURE__*/_react['default'].createElement('div', {
    className: 'hour3',
  }), /* #__PURE__*/_react['default'].createElement('div', {
    className: 'hour4',
  }), /* #__PURE__*/_react['default'].createElement('div', {
    className: 'hour5',
  })));
};

Clock.propTypes = {
  className: _propTypes['default'].string,
};

const _default = /* #__PURE__*/_react['default'].memo(Clock);

exports['default'] = _default;
