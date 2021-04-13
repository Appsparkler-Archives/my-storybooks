"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Ticking = exports.Static = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactClocksHooks = require("react-clocks-hooks");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Template = function Template(args) {
  return /*#__PURE__*/_react["default"].createElement(_index["default"], args);
};

var Static = Template.bind({});
exports.Static = Static;
Static.args = {
  timestamp: 1615384885000
};

var Ticking = function Ticking(args) {
  var tickingTimestamp = (0, _reactClocksHooks.useTickingTimestamp)({
    timestamp: args.timestamp
  });
  return /*#__PURE__*/_react["default"].createElement(_index["default"], {
    timestamp: tickingTimestamp
  });
};

exports.Ticking = Ticking;
Ticking.args = _objectSpread({}, Static.args);
var Story = {
  title: "Clocks/Analog/Sieko Analog 123 ",
  component: _index["default"]
};
var _default = Story;
exports["default"] = _default;