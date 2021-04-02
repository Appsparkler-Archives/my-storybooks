'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = exports.Ticking = exports.Default = void 0;

const _ = _interopRequireDefault(require('.'));

const _reactClocksHooks = require('react-clocks-hooks');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {'default': obj};
}

const Template = function Template(args) {
  return /* #__PURE__*/React.createElement(_['default'], args);
};

const Default = Template.bind({});
exports.Default = Default;
Default.args = {
  timestamp: 1615445823539,
  showSeconds: true,
};

const Ticking = function Ticking(_ref) {
  const timestamp = _ref.timestamp;
  const showSeconds = _ref.showSeconds;
  const tickingTimestamp = (0, _reactClocksHooks.useTickingTimestamp)({
    timestamp: timestamp,
    interval: 1000,
  });
  return /* #__PURE__*/React.createElement(_['default'], {
    timestamp: tickingTimestamp,
    showSeconds: showSeconds,
  });
};

exports.Ticking = Ticking;
Ticking.args = {
  timestamp: Date.now(),
  showSeconds: false,
};
const Story = {
  title: 'Clocks/Digital/Wave Clock',
  component: _['default'],
};
const _default = Story;
exports['default'] = _default;
