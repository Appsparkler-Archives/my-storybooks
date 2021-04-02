"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SuccessAndOutline = exports.Success = exports.InfoAndOutline = exports.Info = exports.SecondaryAndOutline = exports.Secondary = exports.PrimaryAndOutline = exports.Primary = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Template = function Template(args) {
  return /*#__PURE__*/_react["default"].createElement("table", {
    className: "table"
  }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", null, "Small (sm)"), /*#__PURE__*/_react["default"].createElement("th", null, "Medium (md"), /*#__PURE__*/_react["default"].createElement("th", null, "Large (lg)"))), /*#__PURE__*/_react["default"].createElement("tbody", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement(_index["default"], _extends({}, args, {
    size: "sm",
    className: "mx-1"
  }), "Bootstrap Button")), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement(_index["default"], _extends({}, args, {
    size: "md",
    className: "mx-1"
  }), "Bootstrap Button")), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement(_index["default"], _extends({}, args, {
    size: "lg",
    className: "mx-1"
  }), "Bootstrap Button")))));
};

Template.args = {};
var Primary = Template.bind({});
exports.Primary = Primary;
Primary.args = {
  type: "primary"
};
var PrimaryAndOutline = Template.bind({});
exports.PrimaryAndOutline = PrimaryAndOutline;
PrimaryAndOutline.args = _objectSpread(_objectSpread({}, Primary.args), {}, {
  outline: true
});
var Secondary = Template.bind({});
exports.Secondary = Secondary;
Secondary.args = {
  type: "secondary"
};
var SecondaryAndOutline = Template.bind({});
exports.SecondaryAndOutline = SecondaryAndOutline;
SecondaryAndOutline.args = _objectSpread(_objectSpread({}, Secondary.args), {}, {
  outline: true
});
var Info = Template.bind({});
exports.Info = Info;
Info.args = {
  type: "info"
};
var InfoAndOutline = Template.bind({});
exports.InfoAndOutline = InfoAndOutline;
InfoAndOutline.args = _objectSpread(_objectSpread({}, Info.args), {}, {
  outline: true
});
var Success = Template.bind({});
exports.Success = Success;
Success.args = {
  type: "success"
};
var SuccessAndOutline = Template.bind({});
exports.SuccessAndOutline = SuccessAndOutline;
SuccessAndOutline.args = _objectSpread(_objectSpread({}, Success.args), {}, {
  outline: true
});
var Story = {
  title: "Components/Button",
  component: _index["default"]
};
var _default = Story;
exports["default"] = _default;