"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.WithMarkOptions = exports.MarkingAnArrayOfStrings = exports.MarkingASingleString = exports.Example1 = exports.hookStory = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = _interopRequireDefault(require("./"));

var _useMarker2 = _interopRequireDefault(require("../useMarker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// import Mark from "mark.js";
var Story = {
  title: "Components/Marker-2",
  component: _["default"]
};

var hookStory = function hookStory() {
  var _useMarker = (0, _useMarker2["default"])(),
      markerRef = _useMarker.markerRef,
      marker = _useMarker.marker;

  var handleClick = _react["default"].useCallback(function () {
    marker.unmark();
  }, [marker]);

  var markIt = _react["default"].useCallback(function () {
    marker.mark("aute");
  }, [marker]);

  return /*#__PURE__*/_react["default"].createElement("div", {
    ref: markerRef
  }, "Laboris voluptate nostrud sunt consequat est exercitation labore occaecat incididunt velit duis. Laborum duis eiusmod dolore qui duis ad Lorem nisi velit qui. Nostrud esse proident ullamco ad elit aliqua reprehenderit ea aute. Anim aute sint occaecat sint.", /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleClick
  }, "Unmark ", typeof markJsInstance === "undefined" ? "undefined" : _typeof(markJsInstance)), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: markIt
  }, "Mark"));
};

exports.hookStory = hookStory;

var Template = function Template(args) {
  return /*#__PURE__*/_react["default"].createElement(_["default"], args);
};

Template.args = {
  mark: "eu",
  children: "Cillum proident eu eiusmod incididunt pariatur. Ullamco qui deserunt ut reprehenderit cupidatat cupidatat nisi non occaecat non commodo. Magna incididunt eu laboris laboris labore. Sit duis ullamco qui nostrud aliqua do consectetur do incididunt eiusmod nulla consectetur."
};
var Example1 = Template.bind({});
exports.Example1 = Example1;
Example1.args = Template.args;
Example1.storyName = "String";
var MarkingASingleString = Template.bind({});
exports.MarkingASingleString = MarkingASingleString;
MarkingASingleString.args = _objectSpread(_objectSpread({}, Template.args), {}, {
  mark: "Sit"
});
var MarkingAnArrayOfStrings = Template.bind({});
exports.MarkingAnArrayOfStrings = MarkingAnArrayOfStrings;
MarkingAnArrayOfStrings.args = _objectSpread(_objectSpread({}, Template.args), {}, {
  mark: ["Sit", "etur", "nostrud"]
});
var WithMarkOptions = Template.bind({});
exports.WithMarkOptions = WithMarkOptions;
WithMarkOptions.args = _objectSpread(_objectSpread({}, Template.args), {}, {
  mark: "orl",
  children: /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h3", null, "Hello World"), /*#__PURE__*/_react["default"].createElement("p", null, "Hello World")),
  options: {
    exclude: ["h3"],
    accuracy: "complementary"
  }
});
var _default = Story;
exports["default"] = _default;