"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Ticking = exports.Default = void 0;

var _reactClocksHooks = require("react-clocks-hooks");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable react/prop-types */
var Template = function Template(args) {
  return /*#__PURE__*/React.createElement(_["default"], args);
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  timestamp: 1615433107000
};

var Ticking = function Ticking(_ref) {
  var timestamp = _ref.timestamp;
  var tickingTimeStamp = (0, _reactClocksHooks.useTickingTimestamp)({
    timestamp: timestamp
  });
  return /*#__PURE__*/React.createElement(_["default"], {
    timestamp: tickingTimeStamp
  });
};

exports.Ticking = Ticking;
Ticking.args = Default.args;
var Story = {
  title: "Clocks/Digital/Cube Clock V2",
  component: _["default"]
};
var _default = Story;
exports["default"] = _default;