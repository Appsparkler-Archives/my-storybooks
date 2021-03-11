"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Default = void 0;

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Template = function Template(args) {
  return /*#__PURE__*/React.createElement(_["default"], args);
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  hours: 10,
  minutes: 10,
  seconds: 10,
  timestamp: 0
};
var Story = {
  title: "Clocks/Digital/Wave Clock/Displayed Time",
  component: _["default"]
};
var _default = Story;
exports["default"] = _default;