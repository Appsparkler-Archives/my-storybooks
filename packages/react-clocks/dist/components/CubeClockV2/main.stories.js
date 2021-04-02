'use strict';

function _typeof(obj) {
  '@babel/helpers - typeof'; if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
    };
  } return _typeof(obj);
}

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = exports.Ticking = exports.Default = void 0;

const _react = _interopRequireWildcard(require('react'));

const _reactClocksHooks = require('react-clocks-hooks');

const _ = _interopRequireDefault(require('.'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {'default': obj};
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== 'function') return null; const cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  }; return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } if (obj === null || _typeof(obj) !== 'object' && typeof obj !== 'function') {
    return {'default': obj};
  } const cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) {
    return cache.get(obj);
  } const newObj = {}; const hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  } newObj['default'] = obj; if (cache) {
    cache.set(obj, newObj);
  } return newObj;
}

const Template = function Template(args) {
  return /* #__PURE__*/_react['default'].createElement(_['default'], args);
};

const Default = Template.bind({});
exports.Default = Default;
Default.args = {
  timestamp: 1615433107000,
};

const Ticking = function Ticking(_ref) {
  const timestamp = _ref.timestamp;
  const tickingTimeStamp = (0, _reactClocksHooks.useTickingTimestamp)({
    timestamp: timestamp,
  });
  return /* #__PURE__*/_react['default'].createElement(_['default'], {
    timestamp: tickingTimeStamp,
  });
};

exports.Ticking = Ticking;
Ticking.args = Default.args;
const Story = {
  title: 'Clocks/Digital/Cube Clock V2',
  component: _['default'],
};
const _default = Story;
exports['default'] = _default;
