"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.WithMarkOptions = exports.WithoutOtions = void 0;

var _ = _interopRequireDefault(require("./"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Story = {
  title: "Components/Ranges Marker",
  component: _["default"]
};

var Template = function Template(_ref) {
  var children = _ref.children,
      args = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/React.createElement(_["default"], args, children);
};

Template.args = {
  mark: [{
    start: 3,
    length: 4
  }],
  children: /*#__PURE__*/React.createElement("h1", null, "0123456789")
};
var WithoutOtions = Template.bind({});
exports.WithoutOtions = WithoutOtions;
WithoutOtions.args = Template.args;
var WithMarkOptions = Template.bind({});
exports.WithMarkOptions = WithMarkOptions;
WithMarkOptions.args = _objectSpread(_objectSpread({}, Template.args), {}, {
  children: /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "0123456789"), /*#__PURE__*/React.createElement("h3", null, "0123456789")),
  options: {
    exclude: ["h1"]
  }
});
var _default = Story;
exports["default"] = _default;