'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = exports.Default = void 0;

const _react = _interopRequireDefault(require('react'));

const _ = _interopRequireDefault(require('./'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {'default': obj};
}

const Template = function Template() {
  return /* #__PURE__*/_react['default'].createElement(_['default'], null);
};

const Default = Template.bind({});
exports.Default = Default;
Default.args = {};
const Story = {
  title: 'clocks/Digital/Wave Clock',
  componennt: _['default'],
};
const _default = Story;
exports['default'] = _default;
