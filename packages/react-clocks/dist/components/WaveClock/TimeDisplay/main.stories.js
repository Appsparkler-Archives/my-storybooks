"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Ticking = exports.Default = void 0;

var _ = _interopRequireDefault(require("."));

var _reactClocksHooks = require("react-clocks-hooks");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Template = function Template(args) {
  return /*#__PURE__*/React.createElement(_["default"], args);
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  timestamp: 1615445823539,
  showSeconds: true
};

var Ticking = function Ticking(_ref) {
  var timestamp = _ref.timestamp,
      showSeconds = _ref.showSeconds;
  var tickingTimestamp = (0, _reactClocksHooks.useTickingTimestamp)({
    timestamp: timestamp,
    interval: 1000 * 5
  });
  return /*#__PURE__*/React.createElement(_["default"], {
    timestamp: tickingTimestamp,
    showSeconds: showSeconds
  });
};

exports.Ticking = Ticking;
Ticking.args = {
  timestamp: Date.now(),
  showSeconds: false
};
var Story = {
  title: "Clocks/Digital/Wave Clock",
  component: _["default"]
};
var _default = Story;
exports["default"] = _default;